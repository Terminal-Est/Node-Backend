CREATE TABLE [dbo].[password] (
    [userId] VARCHAR(250) NOT NULL,
    [passHash] VARCHAR(max) NOT NULL,
    CONSTRAINT PK_password_userId PRIMARY KEY (userId),
    CONSTRAINT FK_user_password_userId FOREIGN KEY (userId) REFERENCES [dbo].[user] (userId) ON DELETE CASCADE
);
CREATE INDEX IX_password_userId ON [dbo].[password] (userId);