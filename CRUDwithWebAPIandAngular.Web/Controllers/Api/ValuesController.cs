//using PdfSharp.Pdf;
using CRUDwithWebAPIandAngular.Web.Models;
using OpenHtmlToPdf;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;
//using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace CRUDwithWebAPIandAngular.Web.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        [HttpGet]
        public IHttpActionResult Get()
        {
            //string htmlContent = Convert.ToString(ReadHtmlFile(HttpContext.Current.Server.MapPath("~\\html01.html")));
            //string pathToStorePdf = HttpContext.Current.Server.MapPath(@"~/Content/");

            //// PDFSharp

            ////PdfDocument pdf = PdfGenerator.GeneratePdf(htmlContent, PdfSharp.PageSize.A4);           
            ////pdf.Save(pathToStorePdf + "\\document.pdf");


            ////OpenHtmlToPdf

            //var result = Pdf.From(htmlContent).OfSize(PaperSize.A4).Content();
            ////PdfReader.
            //File.WriteAllBytes(pathToStorePdf + "\\document.pdf", result);

            var a = RequestContext.Principal;
            return Ok(new string[] { "value1", "value2" });
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            return Ok("value" + id.ToString());
        }

        // POST api/values
        [HttpPost]
        public IHttpActionResult Post(ExternalLoginViewModel externalLoginViewModel)
        {
            return Ok();
        }

        // PUT api/values/5
        [HttpPut]
        public IHttpActionResult Put(ExternalLoginViewModel externalLoginViewModel)
        {
            return Ok();
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id)
        {
            return Ok();
        }

        public static StringBuilder ReadHtmlFile(string htmlFileNameWithPath)
        {
            StringBuilder htmlContent = new StringBuilder();
            string line;
            try
            {
                using (StreamReader htmlReader = new StreamReader(htmlFileNameWithPath))
                {
                    while ((line = htmlReader.ReadLine()) != null)
                    {
                        htmlContent.Append(line);
                    }
                }
            }
            catch (Exception objError)
            {
                throw objError;
            }

            return htmlContent;
        }
    }
}
