using CheesecakeFactory.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CheesecakeFactory.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheesecakeController : ControllerBase
    {
        private string _connectionString;
        public CheesecakeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("addOrder")]
        public void AddOrder(Order order)
        {
            var repo = new OrderRepository(_connectionString);
            repo.AddOrder(order);
        }
        [HttpGet]
        [Route("getOrders")]
        public List<Order> GetOrders()
        {
            var repo = new OrderRepository(_connectionString);
            return repo.GetOrders();
        }
        [HttpGet]
        [Route("getOrderById")]
        public Order GetOrderById(int id)
        {
            var repo = new OrderRepository(_connectionString);
            return repo.GetOrderById(id);
        }
    }
}
