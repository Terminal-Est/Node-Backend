CREATE TABLE [dbo].[UserGroup] (
    [uuid]    INT NOT NULL,
    [groupid] INT NOT NULL,
    CONSTRAINT [PK_UserGroup] PRIMARY KEY CLUSTERED ([uuid] ASC, [groupid] ASC),
    FOREIGN KEY ([groupid]) REFERENCES [dbo].[Group] ([ID]),
    FOREIGN KEY ([uuid]) REFERENCES [dbo].[uuid] ([uuid])
);