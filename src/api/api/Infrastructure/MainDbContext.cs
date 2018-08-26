using api.Domain.Trainer;
using Microsoft.EntityFrameworkCore;

namespace api.Infrastructure
{
    public class MainDbContext : DbContext
    {
        public MainDbContext(DbContextOptions<MainDbContext> options)
            : base(options) { }

        public DbSet<GuessAttempt> GuessAttempts { get; set; }
        public DbSet<TrainingSession> TrainingSessions { get; set; }
        public DbSet<TranslationRow> TranslationRows { get; set; }
    }
}
