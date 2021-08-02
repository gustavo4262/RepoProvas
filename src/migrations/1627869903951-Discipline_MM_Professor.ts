import {MigrationInterface, QueryRunner} from "typeorm";

export class DisciplineMMProfessor1627869903951 implements MigrationInterface {
    name = 'DisciplineMMProfessor1627869903951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discipline" DROP CONSTRAINT "FK_467b8570c6b44c9e0d78d55ef34"`);
        await queryRunner.query(`ALTER TABLE "discipline" DROP COLUMN "professorId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "discipline" ADD "professorId" integer`);
        await queryRunner.query(`ALTER TABLE "discipline" ADD CONSTRAINT "FK_467b8570c6b44c9e0d78d55ef34" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
