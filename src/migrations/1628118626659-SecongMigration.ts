import {MigrationInterface, QueryRunner} from "typeorm";

export class SecongMigration1628118626659 implements MigrationInterface {
    name = 'SecongMigration1628118626659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "professors" ADD CONSTRAINT "UQ_9dc9c692acaea581e35574a654d" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "disciplines" ADD CONSTRAINT "UQ_5eb0446e62ad65ba41f93d522e0" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "UQ_65e643fff6220d1ed206a8b8c18" UNIQUE ("name", "category")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "UQ_65e643fff6220d1ed206a8b8c18"`);
        await queryRunner.query(`ALTER TABLE "disciplines" DROP CONSTRAINT "UQ_5eb0446e62ad65ba41f93d522e0"`);
        await queryRunner.query(`ALTER TABLE "professors" DROP CONSTRAINT "UQ_9dc9c692acaea581e35574a654d"`);
        await queryRunner.query(`ALTER TABLE "professors" DROP COLUMN "image"`);
    }

}
