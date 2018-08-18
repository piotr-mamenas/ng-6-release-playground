using api.Domain.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class BaseController : Controller
    {
        protected IUnitOfWork UnitOfWork { get; }
        protected IMapper Mapper { get; }

        public BaseController(IMapper mapper,
            IUnitOfWork unitOfWork)
        {
            UnitOfWork = unitOfWork;
            Mapper = mapper;
        }
    }
}
