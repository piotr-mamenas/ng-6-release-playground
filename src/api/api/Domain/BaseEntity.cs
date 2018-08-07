using System;
using System.ComponentModel.DataAnnotations;

namespace api.Domain
{
    public class BaseEntity
    {
        [Key]
        public Guid Guid { get; set; }
    }
}
