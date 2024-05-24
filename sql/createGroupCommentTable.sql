DROP TABLE IF EXISTS [dbo].[GroupComment];
CREATE TABLE [dbo].[GroupComment] (
    [commentId] BIGINT        IDENTITY (1, 1) NOT NULL,
    [groupId]   INT           NOT NULL,
    [uuid]      INT           NOT NULL,
    [comment]   VARCHAR (MAX) NULL,
    [likes]     BIGINT        DEFAULT ((0)) NULL,
    [replyId]   BIGINT        DEFAULT ((0)) NULL,
    [timestamp] BIGINT        NOT NULL,
    [flagged]   TINYINT       CONSTRAINT [DEFAULT_GroupComment_flagged] DEFAULT ((0)) NULL,
    CONSTRAINT [PK_groupcomment_commentId] PRIMARY KEY CLUSTERED ([commentId] ASC),
    CONSTRAINT [FK_groupcomment_groupId] FOREIGN KEY ([groupId]) REFERENCES [dbo].[Group] ([ID]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_groupcomment_uuid] FOREIGN KEY ([uuid]) REFERENCES [dbo].[uuid] ([uuid]) ON DELETE CASCADE ON UPDATE CASCADE
);

