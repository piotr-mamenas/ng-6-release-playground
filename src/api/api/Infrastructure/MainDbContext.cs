using Microsoft.EntityFrameworkCore;

namespace api.Infrastructure
{
    public class MainDbContext : DbContext
    {
        public MainDbContext(DbContextOptions<MainDbContext> options)
            : base(options) { }

    
    }
}
