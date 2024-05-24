DROP TABLE [dbo].[password];
CREATE TABLE [dbo].[password] (
    [uuid]     INT           NOT NULL,
    [passHash] VARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_password_userId] PRIMARY KEY CLUSTERED ([uuid] ASC),
    CONSTRAINT [FK_user_password_userId] FOREIGN KEY ([uuid]) REFERENCES [dbo].[user] ([uuid]) ON DELETE CASCADE
);

GO
CREATE NONCLUSTERED INDEX [IX_password_userId]
    ON [dbo].[password]([uuid] ASC);
