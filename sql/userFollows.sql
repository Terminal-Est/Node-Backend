CREATE TABLE [dbo].[UserFollows] (
    [uuid] INT NOT NULL,
    [uuidfollowing] INT NOT NULL,
    CONSTRAINT PK_userfollows_uuid PRIMARY KEY (uuid, uuidfollowing),
    CONSTRAINT FK_userfollows_uuid FOREIGN KEY (uuid) REFERENCES [dbo].[uuid] (uuid) ON DELETE CASCADE,
    CONSTRAINT FK_userfollowd_uuidfollowing FOREIGN KEY (uuidfollowing) REFERENCES [dbo].[uuid] (uuid) ON DELETE NO ACTION,
);