namespace api.Domain.Trainer
{
    public class TranslationRow : BaseEntity
    {
        public string EnglishTranslation { get; set; }

        public string GermanTranslation { get; set; }

        public string FrenchTranslation { get; set; }

        public string SpanishTranslation { get; set; }

        public string ItalianTranslation { get; set; }

        public string PolishTranslation { get; set; }
    }
}
