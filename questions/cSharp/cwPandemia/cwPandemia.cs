// Codewars Pandemia
// tests in "./cwPandemia.test.cs"

/* QUESTION:

⚠️ The world is in quarantine! There is a new pandemia that struggles
mankind. Each continent is isolated from each other but infected 
people have spread before the warning. ⚠️

🗺️ You would be given a map of the world in a type of string:

string s = "01000000X000X011X0X"

'0' : uninfected

'1' : infected

'X' : ocean

⚫ The virus can't spread in the other side of the ocean.

⚫ If one person is infected every person in this continent
gets infected too.

⚫ Your task is to find the percentage of human population 
that got infected in the end.

☑️ Return the percentage % of the total population that got infected.

❗❗ The first and the last continent are not connected!

➕ For maps without oceans "X" the whole world is connected.

➕ For maps without "0" and "1" return 0 as there is no population.

*/

///////////////////////
// SOLUTION #1
///////////////////////

using System;
using System.Linq;
using System.Text.RegularExpressions;

public class cwPandemia
{
	public static double infected(string s)
	{
		double people = 0;
		string[] section = s.Split("X");
		double sick = 0;

		foreach (string i in section)
		{
			people += i.Length;
			if (i.Contains("1"))
			{
				sick += i.Length;
			}
		}

		if (sick == 0)
		{
			return 0;
		}

		return (sick * 100) / people;
	}
}