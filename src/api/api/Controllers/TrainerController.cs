using System;
using System.Collections.Generic;
using api.Resources;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class TrainerController : Controller
    {
        public TrainerController()
        {
            
        }

        [HttpGet("translations")]
        public IActionResult GetTranslations()
        {
            var translationData = new List<TranslationRowResource>
            {
                new TranslationRowResource
                {
                    Guid = new Guid(),
                    EnglishTranslation = "heart attack",
                    FrenchTranslation = "attaque cardiaque",
                    GermanTranslation = "Herzanfall",
                    SpanishTranslation = "ataqua al corazon"
                },
                new TranslationRowResource
                {
                    Guid = new Guid(),
                    EnglishTranslation = "conceal",
                    FrenchTranslation = "cacher",
                    GermanTranslation = "verbergen",
                    SpanishTranslation = "encubrir"
                },
                new TranslationRowResource
                {
                    Guid = new Guid(),
                    EnglishTranslation = "pretty",
                    FrenchTranslation = "assez",
                    GermanTranslation = "hubsch",
                    SpanishTranslation = "bastante"
                }
            };
            return Ok(translationData);
        }
    }
}
