export const config = {
  hasuraEndpoint: process.env.HASURA_ENDPOINT as string,
  hasuraAdminSecret: process.env.HASURA_ADMIN_SECRET as string,
  hasuraPizzaSecret: process.env.HASURA_PIZZA_SECRET as string,
  jwtSecret: process.env.JWT_SECRET as string,
  passwordSalt: process.env.PASSWORD_SALT as string,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
}