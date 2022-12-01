import { MigrationInterface, QueryRunner } from 'typeorm';

export class userCreate1662473790759 implements MigrationInterface {
  name = 'userCreate1662473790759';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            CREATE TABLE IF NOT EXISTS public."USERS" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                "deleted_at" TIMESTAMP, "username" character(40) NOT NULL, 
                "surname" character(40) NOT NULL, 
                "lastname" character(40) NOT NULL, 
                "email" character(40) NOT NULL, 
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "index_user_username" ON "USERS" ("username") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "user_pkey" ON "USERS" ("id") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS "public"."user_pkey"`);
    await queryRunner.query(
      `DROP INDEX IF EXISTS "public"."index_user_username"`,
    );
    // We cannot drop users at Story depends on it
    // await queryRunner.query(`DROP TABLE IF EXISTS public."USERS"`);
  }
}
