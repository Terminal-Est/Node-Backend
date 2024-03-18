DROP TABLE [dbo].[password];
CREATE TABLE [dbo].[password] (
    [uuid] INT NOT NULL,
    [passHash] VARCHAR(max) NOT NULL,
    CONSTRAINT PK_password_userId PRIMARY KEY (uuid),
    CONSTRAINT FK_user_password_userId FOREIGN KEY (uuid) REFERENCES [dbo].[user] (uuid) ON DELETE CASCADE
);
CREATE INDEX IX_password_userId ON [dbo].[password] (uuid);