import { config } from "../core/config";
import { api } from "./api";
import { getTokenData, HASURA_CLAIMS, HASURA_USER_UD } from "./jwt";
import { GetAdminByIdQuery } from "./sdk";

export const getAdminFromHeaders = async (headers): Promise<GetAdminByIdQuery>  => {
  const authHeader = headers['authorization'];

  if(!authHeader) {
      throw new Error(JSON.stringify({
        statusCode: 403,
        body: JSON.stringify({ message: "Forbidden" }),
      }))
  }

  const [_, authToken] = authHeader.split(' ');

  const adminObj = getTokenData(authToken);
  const adminId = adminObj[HASURA_CLAIMS][HASURA_USER_UD];


  const data = await api.GetAdminById({id: adminId}, {
    "x-hasura-admin-secret": config.hasuraAdminSecret,
  });

  return data
}