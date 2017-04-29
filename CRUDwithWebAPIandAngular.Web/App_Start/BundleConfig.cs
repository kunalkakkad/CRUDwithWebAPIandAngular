using System.Web;
using System.Web.Optimization;

namespace CRUDwithWebAPIandAngular.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/lib/jquery/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/lib/modernizr/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/lib/bootstrap/bootstrap.min.js",
                      "~/Scripts/lib/respond/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/css/bootstrap.min.css",
                      "~/Content/css/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                     "~/Scripts/lib/angular/angular.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/appStart").Include(
                      "~/Scripts/app/appStart/appModule.js"));

            bundles.Add(new ScriptBundle("~/bundles/appLogics").Include(
                      "~/Scripts/app/logic/appDirectives.js",
                      "~/Scripts/app/logic/serviceManager.js"));

            bundles.Add(new ScriptBundle("~/bundles/controllers").Include(
                      "~/Scripts/app/controllers/appCtrl.js"));

            bundles.Add(new ScriptBundle("~/bundles/dataservices").Include(
                      "~/Scripts/app/dataservice/appDs.js"));


        }
    }
}
