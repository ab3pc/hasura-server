import { Handler } from "@netlify/functions";

import { v2 as cloudinary } from "cloudinary";
import { getAdminFromHeaders } from "../common/get-admin-from-headers";
import { GetAdminByIdQuery } from "../common/sdk";
import { config } from "../core/config";

cloudinary.config({
  cloud_name:config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret,
  secure: true,
});

const handler: Handler = async (event, context) => {
  const { headers } = event;
  
  let admin: GetAdminByIdQuery;
  try {
    admin =  await getAdminFromHeaders(headers)
  } catch (error) {
      return JSON.parse(error.message)
  };

  if(!admin.admin_by_pk?.id) {
    return {
      statusCode: 403,
      body: JSON.stringify({message: 'Forbidden'})
    }
  }

  const timestamp = Math.round(new Date().getTime() / 1000);
  const publicId = `menu-${timestamp}`

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder: "menu",
      public_id: publicId,
    },
    process.env.API_SECRET!
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      cloudName: process.env.CLOUD_NAME,
      apiKey: process.env.API_KEY,
      signature,
      timestamp,
      publicId
    }),
  };
};

export { handler };
