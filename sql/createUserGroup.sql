CREATE TABLE [dbo].[UserGroup] (
    [userid]  INT     NOT NULL,
    [groupid] INT     NOT NULL,
    [banned]  TINYINT CONSTRAINT [DEFAULT_UserGroup_banned] DEFAULT ((0)) NULL,
    CONSTRAINT [PK_UserGroup] PRIMARY KEY CLUSTERED ([userid] ASC, [groupid] ASC),
    FOREIGN KEY ([groupid]) REFERENCES [dbo].[Group] ([ID]) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ([userid]) REFERENCES [dbo].[uuid] ([uuid]) ON DELETE CASCADE ON UPDATE CASCADE
);

