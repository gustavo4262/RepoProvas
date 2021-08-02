import {MigrationInterface, QueryRunner} from "typeorm";

export class SecondMigration1627868097152 implements MigrationInterface {
    name = 'SecondMigration1627868097152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "professorId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "disciplineId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_448fb069febfdb9e6a519121aab" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_448fb069febfdb9e6a519121aab"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818"`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "disciplineId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "professorId" SET NOT NULL`);
    }

}
