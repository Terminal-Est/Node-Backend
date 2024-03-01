import { MigrationInterface, QueryRunner } from "typeorm";

export class IntialTableCreate1709260049376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            ''
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
