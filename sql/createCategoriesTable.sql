CREATE TABLE [dbo].[Categories] (
    [ID]                  INT           IDENTITY (1, 1) NOT NULL,
    [Name]                VARCHAR (100) NOT NULL,
    [Icon_FileName]       VARCHAR (100) NULL,
    [Background_FileName] VARCHAR (100) NULL,
    [Image_TimeStamp]     VARCHAR (100) NULL,
    CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED ([ID] ASC)
);