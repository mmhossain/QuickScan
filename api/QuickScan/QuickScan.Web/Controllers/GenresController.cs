using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using QuickScan.Domain;
using QuickScan.Data;

namespace QuickScan.Web.Controllers
{
    public class GenresController : ApiController
    {
        private IContext _context = null;

        public GenresController()
        {
            _context = new Context();
        }

        public GenresController(IContext context)
        {
            _context = context;
        }

        public HttpResponseMessage Get(string id)
        {
            var genre = _context.Genres.FirstOrDefault(g => g.GenreId == id);
            if (genre == null)
            {
                var response = Request.CreateResponse(HttpStatusCode.NotFound, "Genre not found");
                throw new HttpResponseException(response);
            }
            return Request.CreateResponse<Genre>(HttpStatusCode.OK, genre);
        }

        protected override void Dispose(bool disposing)
        {
            if (_context != null && _context is IDisposable)
                ((IDisposable)_context).Dispose();

            base.Dispose(disposing);
        }
    }
}
