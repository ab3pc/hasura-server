import { Handler } from "@netlify/functions";
import { api } from "../common/api";
import { signToken } from "../common/jwt";
import { hashPassword } from "../common/password";
import { AdminLoginInput } from "../common/sdk";
import { config } from "../core/config";

const invalidUserOrPassword = {
  statusCode: 404,
  body: JSON.stringify({ message: "User not found or password invalid" }),
};

const handler: Handler = async (event, context) => {
  const { body } = event;
  console.log(body);
  
  const input: AdminLoginInput = JSON.parse(body!).input.args;
  const data = await api.GetAdminByUsername(
    { username: input.username },
    {
      "x-hasura-admin-secret": config.hasuraAdminSecret,
    }
  );
    if(data.admin.length === 0) {
      return invalidUserOrPassword
    }

    const hashedPassword = hashPassword(input.password);
    if(hashedPassword !== data.admin[0].password) {
      return invalidUserOrPassword
    }
 
    const accessToken = signToken(data.admin[0].id)

  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken: accessToken }),
  };
  
};

export { handler };
