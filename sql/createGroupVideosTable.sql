DROP TABLE IF EXISTS [dbo].[GroupVideos];
CREATE TABLE [dbo].[GroupVideos] (
    [videoId]       VARCHAR(450)  NOT NULL,
    [groupId]       INT           NOT NULL,
    CONSTRAINT [PK_groupvideos_videogroup] PRIMARY KEY CLUSTERED ([videoId],[groupId] ASC),
    CONSTRAINT [FK_groupvideos_videoid] FOREIGN KEY ([videoId]) REFERENCES [dbo].[video] ([videoId]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_groupvideos_groupid] FOREIGN KEY ([groupId]) REFERENCES [dbo].[group] ([ID])
);