USE [master]
GO
/****** Object:  Database [School]    Script Date: 4/20/2021 12:23:30 PM ******/
CREATE DATABASE [School]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'School', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\School.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'School_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\School_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [School] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [School].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [School] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [School] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [School] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [School] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [School] SET ARITHABORT OFF 
GO
ALTER DATABASE [School] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [School] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [School] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [School] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [School] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [School] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [School] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [School] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [School] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [School] SET  DISABLE_BROKER 
GO
ALTER DATABASE [School] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [School] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [School] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [School] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [School] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [School] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [School] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [School] SET RECOVERY FULL 
GO
ALTER DATABASE [School] SET  MULTI_USER 
GO
ALTER DATABASE [School] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [School] SET DB_CHAINING OFF 
GO
ALTER DATABASE [School] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [School] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [School] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [School] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'School', N'ON'
GO
ALTER DATABASE [School] SET QUERY_STORE = OFF
GO
USE [School]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 4/20/2021 12:23:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NOT NULL,
	[Subject] [varchar](255) NOT NULL,
	[id_teacher] [int] NOT NULL,
 CONSTRAINT [PK_COURSE] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Student]    Script Date: 4/20/2021 12:23:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](255) NOT NULL,
	[LastName] [varchar](255) NOT NULL,
	[Address] [varchar](255) NOT NULL,
 CONSTRAINT [PK_STUDENT] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentCourses]    Script Date: 4/20/2021 12:23:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentCourses](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_student] [int] NOT NULL,
	[id_course] [int] NOT NULL,
 CONSTRAINT [PK_STUDENTCOURSES] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Teacher]    Script Date: 4/20/2021 12:23:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Teacher](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](255) NOT NULL,
	[LastName] [varchar](255) NOT NULL,
	[Email] [varchar](255) NOT NULL,
 CONSTRAINT [PK_TEACHER] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([id], [Name], [Subject], [id_teacher]) VALUES (11, N'Matematika 1', N'MA101', 10)
INSERT [dbo].[Course] ([id], [Name], [Subject], [id_teacher]) VALUES (12, N'Matematika 2', N'MA102', 9)
INSERT [dbo].[Course] ([id], [Name], [Subject], [id_teacher]) VALUES (13, N'Srpski 1', N'SR101', 8)
INSERT [dbo].[Course] ([id], [Name], [Subject], [id_teacher]) VALUES (14, N'Biologija 2', N'BO102', 7)
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
SET IDENTITY_INSERT [dbo].[Student] ON 

INSERT [dbo].[Student] ([id], [FirstName], [LastName], [Address]) VALUES (19, N'Marko', N'Markovic', N'Beograd')
INSERT [dbo].[Student] ([id], [FirstName], [LastName], [Address]) VALUES (20, N'Milorad', N'Bajagic', N'Cacak')
INSERT [dbo].[Student] ([id], [FirstName], [LastName], [Address]) VALUES (21, N'Svetozar', N'Markovic', N'Bugojno')
INSERT [dbo].[Student] ([id], [FirstName], [LastName], [Address]) VALUES (22, N'Selima', N'Ahmedov', N'Rusija')
INSERT [dbo].[Student] ([id], [FirstName], [LastName], [Address]) VALUES (23, N'Guan', N'Gong', N'Japan')
INSERT [dbo].[Student] ([id], [FirstName], [LastName], [Address]) VALUES (24, N'Bergmedov', N'Vladimirovski', N'Kazastan')
SET IDENTITY_INSERT [dbo].[Student] OFF
GO
SET IDENTITY_INSERT [dbo].[StudentCourses] ON 

INSERT [dbo].[StudentCourses] ([id], [id_student], [id_course]) VALUES (17, 21, 13)
INSERT [dbo].[StudentCourses] ([id], [id_student], [id_course]) VALUES (18, 19, 12)
INSERT [dbo].[StudentCourses] ([id], [id_student], [id_course]) VALUES (19, 23, 14)
INSERT [dbo].[StudentCourses] ([id], [id_student], [id_course]) VALUES (20, 21, 13)
SET IDENTITY_INSERT [dbo].[StudentCourses] OFF
GO
SET IDENTITY_INSERT [dbo].[Teacher] ON 

INSERT [dbo].[Teacher] ([id], [FirstName], [LastName], [Email]) VALUES (7, N'Stefan', N'Jakovic', N'stefan.jakovic68@gmail.com')
INSERT [dbo].[Teacher] ([id], [FirstName], [LastName], [Email]) VALUES (8, N'Borislav', N'Pekic', N'borislav.love92@gmail.com')
INSERT [dbo].[Teacher] ([id], [FirstName], [LastName], [Email]) VALUES (9, N'Maksim', N'Gorki', N'maxxilove@gmail.com')
INSERT [dbo].[Teacher] ([id], [FirstName], [LastName], [Email]) VALUES (10, N'Aleksandar', N'Veliki', N'conquertheworld@gmail.com')
SET IDENTITY_INSERT [dbo].[Teacher] OFF
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD  CONSTRAINT [Course_fk0] FOREIGN KEY([id_teacher])
REFERENCES [dbo].[Teacher] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Course] CHECK CONSTRAINT [Course_fk0]
GO
ALTER TABLE [dbo].[StudentCourses]  WITH CHECK ADD  CONSTRAINT [StudentCourses_fk0] FOREIGN KEY([id_student])
REFERENCES [dbo].[Student] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[StudentCourses] CHECK CONSTRAINT [StudentCourses_fk0]
GO
ALTER TABLE [dbo].[StudentCourses]  WITH CHECK ADD  CONSTRAINT [StudentCourses_fk1] FOREIGN KEY([id_course])
REFERENCES [dbo].[Course] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[StudentCourses] CHECK CONSTRAINT [StudentCourses_fk1]
GO
USE [master]
GO
ALTER DATABASE [School] SET  READ_WRITE 
GO
