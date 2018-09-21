using System.Threading.Tasks;

namespace api.Domain.Interfaces
{
    public interface IUnitOfWork
    {
        Task Complete();
    }
}
