import { Handler } from "@netlify/functions";
import { api } from "../common/api";
import { getAdminFromHeaders } from "../common/get-admin-from-headers";
import { getTokenData, HASURA_CLAIMS, HASURA_USER_UD } from "../common/jwt";
import { GetAdminByIdQuery } from "../common/sdk";

const handler: Handler = async (event, context) => {
  const { headers } = event;

  let admin: GetAdminByIdQuery;
  try {
    admin =  await getAdminFromHeaders(headers)
  } catch (error) {
      return JSON.parse(error.message)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      username: admin.admin_by_pk?.username,
      id: admin.admin_by_pk?.id
    }),
  };
  
};

export { handler };
