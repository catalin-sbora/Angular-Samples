using AngularHttpClient.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularHttpClient.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private List<AppTask> tasks = new List<AppTask> {
        new AppTask{Id = Guid.Parse("F3E9032B-E083-4CDC-9940-7388DE782E96"),Priority = 0, Details = "This is task 0"},
        new AppTask{Id = Guid.Parse("DB66E2BD-F291-48C8-A03F-89148C635268"), Priority = 1, Details = "This is another task"},
        new AppTask{Id = Guid.Parse("4060C6C8-5AC5-4C66-A463-0AF22FDD530E"), Priority = 2, Details = "This is just a task" }
        };
        
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(tasks);
        }

        
        [HttpGet("{id}")]
        public IActionResult Get([FromRoute]Guid id)
        {
            var task = tasks.FirstOrDefault(t=>t.Id.Equals(id));
            if (task != default(AppTask))
                return Ok(task);
            return NotFound();
        }

        // POST api/<ValuesController>
        [HttpPost]
        public IActionResult Post([FromBody] AppTask newValue)
        {
            if (newValue == null)
                return BadRequest();

            var task = tasks.FirstOrDefault(t => t.Id.Equals(newValue.Id));
            if (task != default(AppTask))
            {
                return BadRequest(newValue);
            }
            tasks.Add(newValue);
            return Ok(newValue);
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody] AppTask updatedValue)
        {
            if (updatedValue == null)
                return BadRequest(id);

            var task = tasks.FirstOrDefault(t => t.Id.Equals(id));
            if (task != default(AppTask))
            {
                task.Details = updatedValue.Details;
                task.Priority = updatedValue.Priority;
                return Ok(task);
            }
            return NotFound(updatedValue);
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var removed = tasks.RemoveAll(t => t.Id.Equals(id));
            if (removed == 0)
                return NotFound(id);

            return Ok();
        }
    }
}
