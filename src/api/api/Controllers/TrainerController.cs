using System;
using System.Collections.Generic;
using api.Domain.Interfaces;
using api.Resources;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class TrainerController : BaseController
    {
        private readonly IGuessAttemptRepository _guessAttemptRepository;
        private readonly ITrainingSessionRepository _trainingSessionRepository;
        private readonly ITranslationRowRepository _translationRowRepository;

        public TrainerController(IGuessAttemptRepository guessAttemptRepository,
            ITrainingSessionRepository trainingSessionRepository,
            ITranslationRowRepository translationRowRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper)
            : base(mapper, unitOfWork)
        {
            _guessAttemptRepository = guessAttemptRepository;
            _trainingSessionRepository = trainingSessionRepository;
            _translationRowRepository = translationRowRepository;
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
