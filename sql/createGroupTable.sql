CREATE TABLE [dbo].[Group] (
    [ID]          INT           IDENTITY (1, 1) NOT NULL,
    [Name]        VARCHAR (100) NOT NULL,
    [Description] VARCHAR (100) NULL,
    [System]      INT           NULL,
    CONSTRAINT [PK_Group] PRIMARY KEY CLUSTERED ([ID] ASC)
);