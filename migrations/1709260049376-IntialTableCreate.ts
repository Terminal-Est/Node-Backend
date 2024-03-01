import { MigrationInterface, QueryRunner } from "typeorm";

export class IntialTableCreate1709260049376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            'CREATE TABLE [dbo].[User] \( [userId] VARCHAR (100) NOT NULL\,' +
            '[admin] TINYINT CONSTRAINT [DEFAULT_User_admin] DEFAULT 0 NOT NULL\,' +
            '[auth] TINYINT CONSTRAINT [DEFAULT_User_auth] DEFAULT 0 NOT NULL\,' +
            '[username] VARCHAR (50)  NULL\,' +
            'CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([userId] ASC));'
        );

        await queryRunner.query(
            'CREATE TABLE [dbo].[Password] \( [userId] VARCHAR (100) NOT NULL\,' +
            '[passHash] VARCHAR (200) NOT NULL\,' +
            'CONSTRAINT [FK_User_Password] FOREIGN KEY REFERENCES [dbo].[User],' +
            'CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([userId] ASC));'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            'DROP TABLE [dbo].[Password];'
        );

        await queryRunner.query(
            'DROP TABLE [dbo].[User];'
        );
    }

}
