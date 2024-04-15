DROP TABLE IF EXISTS [dbo].[GroupComment];
CREATE TABLE [dbo].[GroupComment] (
    [commentId]     BIGINT   IDENTITY     NOT NULL,
    [groupId]       INT         NOT NULL,
    [uuid]          INT           NOT NULL,
    [comment]       VARCHAR (MAX) NULL,
    [likes]         BIGINT DEFAULT ((0)) NULL,
    [replyId]       BIGINT        DEFAULT ((0)) NULL,
    CONSTRAINT [PK_groupcomment_commentId] PRIMARY KEY CLUSTERED ([commentId] ASC),
    CONSTRAINT [FK_groupcomment_uuid] FOREIGN KEY ([uuid]) REFERENCES [dbo].[uuid] ([uuid]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_groupcomment_groupId] FOREIGN KEY ([groupId]) REFERENCES [dbo].[Group] ([ID])
);