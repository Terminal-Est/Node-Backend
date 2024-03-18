DROP TABLE [dbo].[user];
CREATE TABLE [dbo].[user] (
    [uuid] INT IDENTITY(1,1) NOT NULL,
    [email] VARCHAR(250) NOT NULL,
    [admin] TINYINT DEFAULT 0,
    [auth] TINYINT DEFAULT 0,
    [username] VARCHAR(30) NOT NULL,
    [dob] DATE NOT NULL,
    [address] VARCHAR(max) NOT NULL,
    [city] VARCHAR(100) NOT NULL,
    [state] VARCHAR(3) NOT NULL,
    [postcode] VARCHAR(4) NOT NULL,
    CONSTRAINT PK_user_uuid PRIMARY KEY (uuid),
);
CREATE INDEX IX_user_userId ON [dbo].[user] (uuid);