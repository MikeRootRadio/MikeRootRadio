﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace MikeRootRadio.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Mike Root Radio";
            return View();
        }
    }
}
