import { MigrationInterface, QueryRunner } from 'typeorm';

export class userCreate1662473790759 implements MigrationInterface {
  name = 'userCreate1662473790759';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
            CREATE TABLE IF NOT EXISTS public."USERS" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                "deleted_at" TIMESTAMP,  
                "first_name" character varying(40)  NOT NULL, 
                "last_name" character varying(40) NOT NULL, 
                "username" character varying(40) NOT NULL, 
                "email" character(40) NOT NULL, 
                CONSTRAINT "PK_USERS" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "user_pkey" ON "USERS" ("id") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX IF EXISTS "public"."user_pkey";
             DROP TABLE IF EXISTS "public"."USERS";
    `,
    );
  }
}
