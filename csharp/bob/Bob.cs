using System;
using System.Linq;

namespace Bob
{
    public static class Bob
    {
        public static string Hey(string statement)
        {
            statement = statement.Trim();

            if (string.IsNullOrWhiteSpace(statement))
            {
                return "Fine. Be that way!";
            }

            if (statement.Where(char.IsLetter).DefaultIfEmpty().All(char.IsUpper))
            {
                return "Whoa, chill out!";
            }

            if (statement.EndsWith("?"))
            {
                return "Sure.";
            }

            return "Whatever.";
        }
    }
}