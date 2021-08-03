import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1628015641693 implements MigrationInterface {
    name = 'FirstMigration1628015641693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "pdf" character varying NOT NULL, "professorId" integer, "disciplineId" integer, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "disciplines" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9b25ea6da0741577a73c9e90aad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "disciplines_professors_professors" ("disciplinesId" integer NOT NULL, "professorsId" integer NOT NULL, CONSTRAINT "PK_023e1fa0f1ff6f1d22d3f7314dc" PRIMARY KEY ("disciplinesId", "professorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0aa508c1fb1a8efaab13ea6259" ON "disciplines_professors_professors" ("disciplinesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e65f5a816c8dbe7b35872e6a73" ON "disciplines_professors_professors" ("professorsId") `);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_448fb069febfdb9e6a519121aab" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "disciplines_professors_professors" ADD CONSTRAINT "FK_0aa508c1fb1a8efaab13ea62598" FOREIGN KEY ("disciplinesId") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "disciplines_professors_professors" ADD CONSTRAINT "FK_e65f5a816c8dbe7b35872e6a73f" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "disciplines_professors_professors" DROP CONSTRAINT "FK_e65f5a816c8dbe7b35872e6a73f"`);
        await queryRunner.query(`ALTER TABLE "disciplines_professors_professors" DROP CONSTRAINT "FK_0aa508c1fb1a8efaab13ea62598"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_448fb069febfdb9e6a519121aab"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818"`);
        await queryRunner.query(`DROP INDEX "IDX_e65f5a816c8dbe7b35872e6a73"`);
        await queryRunner.query(`DROP INDEX "IDX_0aa508c1fb1a8efaab13ea6259"`);
        await queryRunner.query(`DROP TABLE "disciplines_professors_professors"`);
        await queryRunner.query(`DROP TABLE "disciplines"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "professors"`);
    }

}
