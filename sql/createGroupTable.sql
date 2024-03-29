CREATE TABLE [dbo].[Group] (
    [ID]     INT NOT NULL,
    [Name]        VARCHAR (100)    NOT NULL,
    [Description] VARCHAR (100)    NULL,
    [System]      INT              NOT NULL,
    CONSTRAINT [PK_Group] PRIMARY KEY CLUSTERED ([ID] ASC)
);