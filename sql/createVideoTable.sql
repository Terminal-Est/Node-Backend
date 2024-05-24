DROP TABLE [dbo].[video];
CREATE TABLE [dbo].[video] (
    [videoid]     VARCHAR (450) NOT NULL,
    [uuid]        INT           NOT NULL,
    [description] VARCHAR (250) NULL,
    [likes]       BIGINT        DEFAULT ((0)) NULL,
    [weight]      INT           CONSTRAINT [DEFAULT_video_weight] DEFAULT ((0)) NULL,
    [title]       VARCHAR (500) NOT NULL,
    [timestamp]   BIGINT        NOT NULL,
    [sid]         INT           NULL,
    [flagged]     TINYINT       CONSTRAINT [DEFAULT_video_flagged] DEFAULT ((0)) NULL,
    CONSTRAINT [PK_video_videoid] PRIMARY KEY CLUSTERED ([videoid] ASC),
    CONSTRAINT [FK_video_sponsorId] FOREIGN KEY ([sid]) REFERENCES [dbo].[sponsor] ([sid]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_video_uuid] FOREIGN KEY ([uuid]) REFERENCES [dbo].[uuid] ([uuid]) ON DELETE CASCADE ON UPDATE CASCADE
);
