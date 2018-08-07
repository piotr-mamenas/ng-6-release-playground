using System;

namespace api.Resources
{
    public class TranslationRowResource
    {
        public Guid Guid { get; set; }

        public string EnglishTranslation { get; set; }

        public string GermanTranslation { get; set; }

        public string FrenchTranslation { get; set; }

        public string SpanishTranslation { get; set; }

        public string ItalianTranslation { get; set; }

        public string PolishTranslation { get; set; }
    }
}
