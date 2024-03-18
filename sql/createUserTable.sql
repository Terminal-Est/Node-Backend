CREATE TABLE [dbo].[user] (
    [userId] VARCHAR(250) NOT NULL,
    [admin] TINYINT DEFAULT 0,
    [auth] TINYINT DEFAULT 0,
    [username] VARCHAR(30) NOT NULL,
    [address] VARCHAR(max) NOT NULL,
    [city] VARCHAR(3) NOT NULL,
    [state] VARCHAR(3) NOT NULL,
    [postcode] VARCHAR(4) NOT NULL,
    CONSTRAINT PK_user_userId PRIMARY KEY (userId),
);
CREATE INDEX IX_user_userId ON [dbo].[user] (userId);