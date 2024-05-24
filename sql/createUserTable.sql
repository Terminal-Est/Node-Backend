DROP TABLE [dbo].[user];
CREATE TABLE [dbo].[user] (
    [uuid]     INT           IDENTITY (1, 1) NOT NULL,
    [email]    VARCHAR (250) NOT NULL,
    [admin]    TINYINT       DEFAULT ((0)) NULL,
    [auth]     TINYINT       DEFAULT ((0)) NULL,
    [username] VARCHAR (30)  NOT NULL,
    [address]  VARCHAR (MAX) NOT NULL,
    [state]    VARCHAR (3)   NOT NULL,
    [postcode] VARCHAR (4)   NOT NULL,
    [dob]      DATE          NOT NULL,
    [city]     VARCHAR (100) NOT NULL,
    [avatar]   VARCHAR (250) NULL,
    [fname]    VARCHAR (250) NULL,
    [lname]    VARCHAR (250) NULL,
    [banned]   TINYINT       CONSTRAINT [DEFAULT_user_banned] DEFAULT ((0)) NULL,
    CONSTRAINT [PK_user_uuid] PRIMARY KEY CLUSTERED ([uuid] ASC),
    CONSTRAINT [UN_user_email] UNIQUE NONCLUSTERED ([email] ASC),
    CONSTRAINT [UN_user_username] UNIQUE NONCLUSTERED ([username] ASC)
);


GO
CREATE NONCLUSTERED INDEX [IX_user_userId]
    ON [dbo].[user]([uuid] ASC);