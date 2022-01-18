using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularHttpClient.Models
{
    public class AppTask
    {
        public Guid Id { get; set; }
        public int Priority { get; set; }
        public string Details { get; set; }
    }
}
