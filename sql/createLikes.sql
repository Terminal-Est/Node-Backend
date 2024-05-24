CREATE TABLE [dbo].[Likes] (
    [ID]      INT           IDENTITY (1, 1) NOT NULL,
    [uuid]    INT           NOT NULL,
    [videoid] VARCHAR (450) NOT NULL,
    CONSTRAINT [PK_Likes] PRIMARY KEY CLUSTERED ([ID] ASC)
);

