using api.Domain.Interfaces;

namespace api.Infrastructure.Repositories
{
    public class GuessAttemptRepository : IGuessAttemptRepository
    {
        private readonly MainDbContext _context;

        public GuessAttemptRepository(MainDbContext context)
        {
            _context = context;
        }
    }
}
