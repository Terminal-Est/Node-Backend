DROP TABLE [dbo].[sponsor];
CREATE TABLE [dbo].[sponsor] (
    [sid]         INT           IDENTITY (1, 1) NOT NULL,
    [email]       VARCHAR (250) NOT NULL,
    [name]        VARCHAR (250) NOT NULL,
    [description] VARCHAR (450) NULL,
    [address]     VARCHAR (MAX) NOT NULL,
    [city]        VARCHAR (100) NOT NULL,
    [state]       VARCHAR (3)   NOT NULL,
    [postcode]    VARCHAR (4)   NOT NULL,
    [pnumber]     VARCHAR (50)  NULL,
    CONSTRAINT [PK_sponsor_sid] PRIMARY KEY CLUSTERED ([sid] ASC)
);


GO
CREATE NONCLUSTERED INDEX [IX_sponsor_sponsorId]
    ON [dbo].[sponsor]([sid] ASC);

