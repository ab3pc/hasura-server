import { GraphQLClient } from "graphql-request";
import { getSdk } from "../common/sdk";
import { config } from "../core/config";

export const api = getSdk(new GraphQLClient(config.hasuraEndpoint));