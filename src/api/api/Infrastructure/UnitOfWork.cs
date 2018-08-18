using System.Threading.Tasks;
using api.Domain.Interfaces;

namespace api.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MainDbContext _context;

        public UnitOfWork(MainDbContext context)
        {
            _context = context;
        }

        public async Task Complete()
        {
            await _context.SaveChangesAsync();
        }
    }
}
