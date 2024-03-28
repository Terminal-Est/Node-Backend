DROP TABLE [dbo].[video];
CREATE TABLE [dbo].[video] (
    [videoid]     VARCHAR (450) NOT NULL,
    [uuid]        INT           NOT NULL,
    [description] VARCHAR (250) NULL,
    [likes]       BIGINT        DEFAULT ((0)) NULL,
    [weight]      INT           DEFAULT ((0)) NULL,
    CONSTRAINT [PK_video_videoid] PRIMARY KEY CLUSTERED ([videoid] ASC),
    CONSTRAINT [FK_video_uuid] FOREIGN KEY ([uuid]) REFERENCES [dbo].[uuid] ([uuid]) ON DELETE CASCADE ON UPDATE CASCADE
);