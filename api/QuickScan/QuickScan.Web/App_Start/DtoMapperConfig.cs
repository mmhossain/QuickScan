using AutoMapper;
using QuickScan.Domain;
using QuickScan.Web.DTO;

namespace QuickScan.Web
{
    public static class DtoMapperConfig
    {
        public static void CreateMaps()
        {
            Mapper.CreateMap<GenreDto, Genre>();
            Mapper.CreateMap<Genre, GenreDto>();
            Mapper.CreateMap<CategoryDto, Category>();
            Mapper.CreateMap<Category, CategoryDto>();
            Mapper.CreateMap<GenreCategory, GenreCategoryDto>();

            Mapper.CreateMap<QuestionDto, Question>();
            Mapper.CreateMap<Question, QuestionDto>();
            Mapper.CreateMap<OptionDto, Option>();
            Mapper.CreateMap<Option, OptionDto>();
        }
    }
}