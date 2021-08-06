import {MigrationInterface, QueryRunner} from "typeorm";

export class AddImageToDisciplines1628222509428 implements MigrationInterface {
    name = 'AddImageToDisciplines1628222509428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "disciplines" ADD "image" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "disciplines" DROP COLUMN "image"`);
    }

}
