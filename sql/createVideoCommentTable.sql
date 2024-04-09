DROP TABLE IF EXISTS [dbo].[VideoComment];
CREATE TABLE [dbo].[VideoComment] (
    [commentId]     BIGINT   IDENTITY     NOT NULL,
    [videoId]       VARCHAR(450)           NOT NULL,
    [uuid]          INT           NOT NULL,
    [comment]       VARCHAR (MAX) NULL,
    [likes]         BIGINT DEFAULT ((0)) NULL,
    [replyId]       BIGINT        DEFAULT ((0)) NULL,
    CONSTRAINT [PK_videocomment_commentId] PRIMARY KEY CLUSTERED ([commentId] ASC),
    CONSTRAINT [FK_videocomment_uuid] FOREIGN KEY ([uuid]) REFERENCES [dbo].[uuid] ([uuid]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_videocomment_videoId] FOREIGN KEY ([videoId]) REFERENCES [dbo].[video] ([videoid])
);