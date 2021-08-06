import {MigrationInterface, QueryRunner} from "typeorm";

export class FixBugs1628238631458 implements MigrationInterface {
    name = 'FixBugs1628238631458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" DROP CONSTRAINT "FK_716dc93014b1ffc2a7ef23d5d36"`);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" ADD CONSTRAINT "FK_716dc93014b1ffc2a7ef23d5d36" FOREIGN KEY ("disciplinesId") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" DROP CONSTRAINT "FK_716dc93014b1ffc2a7ef23d5d36"`);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" ADD CONSTRAINT "FK_716dc93014b1ffc2a7ef23d5d36" FOREIGN KEY ("disciplinesId") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
