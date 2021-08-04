import {MigrationInterface, QueryRunner} from "typeorm";

export class FixBugs1628119305996 implements MigrationInterface {
    name = 'FixBugs1628119305996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "UQ_65e643fff6220d1ed206a8b8c18"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "UQ_65e643fff6220d1ed206a8b8c18" UNIQUE ("name", "category")`);
    }

}
