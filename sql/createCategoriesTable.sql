CREATE TABLE [dbo].[Categories] (
    [ID]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] VARCHAR (100) NOT NULL,
    CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED ([ID] ASC)
);