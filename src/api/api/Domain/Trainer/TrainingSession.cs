using System;
using System.Collections.Generic;

namespace api.Domain.Trainer
{
    public class TrainingSession : BaseEntity
    {
        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public ICollection<GuessAttempt> GuessAttempts { get; set; }

        public TrainingSession()
        {
            GuessAttempts = new List<GuessAttempt>();
        }
    }
}
