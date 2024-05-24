CREATE TABLE [dbo].[UserFollows] (
    [uuid]          INT NOT NULL,
    [uuidfollowing] INT NOT NULL,
    CONSTRAINT [PK_userfollows_uuid] PRIMARY KEY CLUSTERED ([uuid] ASC, [uuidfollowing] ASC),
    CONSTRAINT [FK_userfollowd_uuidfollowing] FOREIGN KEY ([uuidfollowing]) REFERENCES [dbo].[uuid] ([uuid]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_userfollows_uuid] FOREIGN KEY ([uuid]) REFERENCES [dbo].[uuid] ([uuid])
);
