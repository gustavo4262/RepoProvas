import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1627867452972 implements MigrationInterface {
    name = 'FirstMigration1627867452972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_39a6c8f16280dc3bc3ffdc41e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "discipline" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "professorId" integer, CONSTRAINT "PK_139512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "professorId" integer NOT NULL, "disciplineId" integer NOT NULL, "pdf" character varying NOT NULL, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "discipline" ADD CONSTRAINT "FK_467b8570c6b44c9e0d78d55ef34" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discipline" DROP CONSTRAINT "FK_467b8570c6b44c9e0d78d55ef34"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "discipline"`);
        await queryRunner.query(`DROP TABLE "professor"`);
    }

}
