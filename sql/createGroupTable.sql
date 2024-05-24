CREATE TABLE [dbo].[Group] (
    [ID]                  INT           IDENTITY (1, 1) NOT NULL,
    [Name]                VARCHAR (100) NOT NULL,
    [Description]         VARCHAR (100) NULL,
    [System]              INT           NULL,
    [CategoryID]          INT           CONSTRAINT [DEFAULT_Group_CategoryID] DEFAULT ((1)) NOT NULL,
    [Location]            VARCHAR (100) NULL,
    [Background_FileName] VARCHAR (100) NULL,
    [Image_TimeStamp]     VARCHAR (100) NULL,
    CONSTRAINT [PK_Group] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_Group_Categories] FOREIGN KEY ([CategoryID]) REFERENCES [dbo].[Categories] ([ID]) ON DELETE CASCADE ON UPDATE CASCADE
);

