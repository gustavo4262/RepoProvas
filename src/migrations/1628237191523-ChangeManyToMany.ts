import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeManyToMany1628237191523 implements MigrationInterface {
    name = 'ChangeManyToMany1628237191523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professors_disciplines_disciplines" ("professorsId" integer NOT NULL, "disciplinesId" integer NOT NULL, CONSTRAINT "PK_9500b1eb4d2f6233a17c1fa2765" PRIMARY KEY ("professorsId", "disciplinesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_50741382558c664bc173f4aec4" ON "professors_disciplines_disciplines" ("professorsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_716dc93014b1ffc2a7ef23d5d3" ON "professors_disciplines_disciplines" ("disciplinesId") `);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" ADD CONSTRAINT "FK_50741382558c664bc173f4aec44" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" ADD CONSTRAINT "FK_716dc93014b1ffc2a7ef23d5d36" FOREIGN KEY ("disciplinesId") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" DROP CONSTRAINT "FK_716dc93014b1ffc2a7ef23d5d36"`);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" DROP CONSTRAINT "FK_50741382558c664bc173f4aec44"`);
        await queryRunner.query(`DROP INDEX "IDX_716dc93014b1ffc2a7ef23d5d3"`);
        await queryRunner.query(`DROP INDEX "IDX_50741382558c664bc173f4aec4"`);
        await queryRunner.query(`DROP TABLE "professors_disciplines_disciplines"`);
    }

}
