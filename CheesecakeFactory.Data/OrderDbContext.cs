using Microsoft.EntityFrameworkCore;

namespace CheesecakeFactory.Data
{
    public class OrderDbContext : DbContext
    {
        private string _connectionString;
        public OrderDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<Order> Orders { get; set; }
    }
}