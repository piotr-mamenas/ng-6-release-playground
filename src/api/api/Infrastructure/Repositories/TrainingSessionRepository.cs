using api.Domain.Interfaces;

namespace api.Infrastructure.Repositories
{
    public class TrainingSessionRepository : ITrainingSessionRepository
    {
        private readonly MainDbContext _context;

        public TrainingSessionRepository(MainDbContext context)
        {
            _context = context;
        }
    }
}
