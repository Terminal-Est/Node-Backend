import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTable1710208482071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query( 'ALTER TABLE [progprojdb].[User]'+
            ' ADD [address] VARCHAR(100) NOT NULL,' + 
            '[city] VARCHAR(3) NOT NULL,' +
            '[state] VARCHAR(3) NOT NULL,' +
            '[postcode] VARCHAR(4) NOT NULL;' 
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query( 'ALTER TABLE [progprojdb].[User] ' +
            'DROP COLUMN [address], [city], [state], [postcode];'
        )
    }
}
