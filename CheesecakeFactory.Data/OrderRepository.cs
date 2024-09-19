namespace CheesecakeFactory.Data
{
    public class OrderRepository
    {
        private string _connectionString;
        public OrderRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddOrder(Order order)
        {
            using var context = new OrderDbContext(_connectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }

        public List<Order> GetOrders()
        {
            using var context = new OrderDbContext(_connectionString);
            return context.Orders.ToList();
        }
        public Order GetOrderById(int id)
        {
            using var context = new OrderDbContext(_connectionString);
            return context.Orders.FirstOrDefault(o=>o.Id == id);
        }
    }
}