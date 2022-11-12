CREATE TABLE "public"."admin" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "useraname" text NOT NULL, "password" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("useraname"), UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
