using System;
using System.Collections.Generic;

namespace api.Domain.Trainer
{
    public class GuessAttempt : BaseEntity
    {
        public DateTime GuessTime { get; set; }

        public TrainingSession TrainingSession { get; set; }
        public Guid TrainingSessionGuid { get; set; }

        public TranslationRow GuessFrom { get; set; }
        public Guid GuessFromGuid { get; set; }

        public ICollection<TranslationRow> GuessTo { get; set; }

        public GuessAttempt()
        {
            GuessTo = new List<TranslationRow>();
        }
    }
}
