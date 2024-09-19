using System.Collections.Generic;
using System;

namespace CheesecakeFactory.Data
{
    public class Order
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Base { get; set; }
        public string Toppings { get; set; }
        public string SpecialRequest { get; set; }
        public int Qty { get; set; }
        public DateTime Date { get; set; }
        public int Total { get; set; }
    }
}