using api.Domain.Interfaces;

namespace api.Infrastructure.Repositories
{
    public class TranslationRowRepository : ITranslationRowRepository
    {
        private readonly MainDbContext _context;

        public TranslationRowRepository(MainDbContext context)
        {
            _context = context;
        }
    }
}
