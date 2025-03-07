USE [master]
GO
/****** Object:  Database [quickscan]    Script Date: 8/15/2017 10:50:34 PM ******/
CREATE DATABASE [quickscan]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'quickscan', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.SQLSERVER2016\MSSQL\DATA\quickscan.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'quickscan_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.SQLSERVER2016\MSSQL\DATA\quickscan_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [quickscan] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [quickscan].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [quickscan] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [quickscan] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [quickscan] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [quickscan] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [quickscan] SET ARITHABORT OFF 
GO
ALTER DATABASE [quickscan] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [quickscan] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [quickscan] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [quickscan] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [quickscan] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [quickscan] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [quickscan] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [quickscan] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [quickscan] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [quickscan] SET  DISABLE_BROKER 
GO
ALTER DATABASE [quickscan] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [quickscan] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [quickscan] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [quickscan] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [quickscan] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [quickscan] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [quickscan] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [quickscan] SET RECOVERY FULL 
GO
ALTER DATABASE [quickscan] SET  MULTI_USER 
GO
ALTER DATABASE [quickscan] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [quickscan] SET DB_CHAINING OFF 
GO
ALTER DATABASE [quickscan] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [quickscan] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [quickscan] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'quickscan', N'ON'
GO
ALTER DATABASE [quickscan] SET QUERY_STORE = OFF
GO
USE [quickscan]
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [quickscan]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 8/15/2017 10:50:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[category_id] [nvarchar](50) NOT NULL,
	[title] [nvarchar](50) NOT NULL,
	[priority] [int] NOT NULL,
	[genre_id] [nvarchar](50) NULL,
	[row_version] [timestamp] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[category_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Genre]    Script Date: 8/15/2017 10:50:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genre](
	[genre_id] [nvarchar](50) NOT NULL,
	[title] [nvarchar](50) NOT NULL,
	[priority] [int] NULL,
	[row_version] [timestamp] NULL,
 CONSTRAINT [PK_Genre] PRIMARY KEY CLUSTERED 
(
	[genre_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Option]    Script Date: 8/15/2017 10:50:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Option](
	[option_id] [nvarchar](50) NOT NULL,
	[text] [nvarchar](250) NOT NULL,
	[question_id] [nvarchar](50) NULL,
	[row_version] [timestamp] NULL,
 CONSTRAINT [PK_Option] PRIMARY KEY CLUSTERED 
(
	[option_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Question]    Script Date: 8/15/2017 10:50:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Question](
	[question_id] [nvarchar](50) NOT NULL,
	[title] [nvarchar](250) NOT NULL,
	[type] [int] NULL,
	[question_level] [int] NULL,
	[category_id] [nvarchar](50) NULL,
	[row_version] [timestamp] NULL,
 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
(
	[question_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'adonet', N'ADO.NET', 4, N'backend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'angularjs', N'AngularJS', 5, N'frontend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'aspnet', N'ASP.NET', 2, N'backend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'aspnetmvc', N'ASP.NET MVC', 3, N'backend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'aws', N'AWS', 4, N'webservice')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'csharp', N'C#.NET', 1, N'backend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'css', N'CSS', 2, N'frontend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'html', N'HTML', 1, N'frontend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'javascript', N'JavaScript', 3, N'frontend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'jquery', N'jQuery', 4, N'frontend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'msmq', N'MSMQ', 3, N'webservice')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'reactjs', N'ReactJS', 6, N'frontend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'silverlight', N'Silverlight', 5, N'backend')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'visualstudio', N'Visual Studio', 1, N'tools')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'wcf', N'WCF', 1, N'webservice')
INSERT [dbo].[Category] ([category_id], [title], [priority], [genre_id]) VALUES (N'webapi', N'Web API', 2, N'webservice')
INSERT [dbo].[Genre] ([genre_id], [title], [priority]) VALUES (N'backend', N'Back End', 1)
INSERT [dbo].[Genre] ([genre_id], [title], [priority]) VALUES (N'database', N'Database', 4)
INSERT [dbo].[Genre] ([genre_id], [title], [priority]) VALUES (N'frontend', N'Front End', 2)
INSERT [dbo].[Genre] ([genre_id], [title], [priority]) VALUES (N'orm', N'ORM', 5)
INSERT [dbo].[Genre] ([genre_id], [title], [priority]) VALUES (N'tools', N'Tools', 6)
INSERT [dbo].[Genre] ([genre_id], [title], [priority]) VALUES (N'webservice', N'Web Service', 3)
USE [master]
GO
ALTER DATABASE [quickscan] SET  READ_WRITE 
GO
