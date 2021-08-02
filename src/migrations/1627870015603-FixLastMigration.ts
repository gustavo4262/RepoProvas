import {MigrationInterface, QueryRunner} from "typeorm";

export class FixLastMigration1627870015603 implements MigrationInterface {
    name = 'FixLastMigration1627870015603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "discipline_professor_professor" ("disciplineId" integer NOT NULL, "professorId" integer NOT NULL, CONSTRAINT "PK_0e8eb7c59c53b4d6e752941a0ea" PRIMARY KEY ("disciplineId", "professorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_98f5c6b364762f49784e19c403" ON "discipline_professor_professor" ("disciplineId") `);
        await queryRunner.query(`CREATE INDEX "IDX_00a876a83c1db4c801bfe97707" ON "discipline_professor_professor" ("professorId") `);
        await queryRunner.query(`ALTER TABLE "discipline_professor_professor" ADD CONSTRAINT "FK_98f5c6b364762f49784e19c403f" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "discipline_professor_professor" ADD CONSTRAINT "FK_00a876a83c1db4c801bfe97707d" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discipline_professor_professor" DROP CONSTRAINT "FK_00a876a83c1db4c801bfe97707d"`);
        await queryRunner.query(`ALTER TABLE "discipline_professor_professor" DROP CONSTRAINT "FK_98f5c6b364762f49784e19c403f"`);
        await queryRunner.query(`DROP INDEX "IDX_00a876a83c1db4c801bfe97707"`);
        await queryRunner.query(`DROP INDEX "IDX_98f5c6b364762f49784e19c403"`);
        await queryRunner.query(`DROP TABLE "discipline_professor_professor"`);
    }

}
