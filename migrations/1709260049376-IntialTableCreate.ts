import { MigrationInterface, QueryRunner } from "typeorm";

export class IntialTableCreate1709260049376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            'CREATE TABLE [progprojdb].[User] ([userId] VARCHAR(100) NOT NULL,' +
            '[admin] TINYINT CONSTRAINT [DEFAULT_User_admin] DEFAULT 0 NOT NULL,' +
            '[auth] TINYINT CONSTRAINT [DEFAULT_User_auth] DEFAULT 0 NOT NULL,' +
            '[username] VARCHAR(50)  NULL,' +
            'CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([userId] ASC));'
        );

        await queryRunner.query(
            'CREATE TABLE [progprojdb].[Password] (' +
            '[userId] VARCHAR(100) NOT NULL,' +
            '[passHash] VARCHAR(200) NOT NULL,' +
            'CONSTRAINT [FK_User_Password] FOREIGN KEY ([userId]) REFERENCES [dbo].[User](userId),' +
            'CONSTRAINT [PK_UserId] PRIMARY KEY CLUSTERED ([userId] ASC));'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'DROP TABLE [progprojdb].[Password];'
        );

        await queryRunner.query(
            'DROP TABLE [progprojdb].[User];'
        );
    }
}
