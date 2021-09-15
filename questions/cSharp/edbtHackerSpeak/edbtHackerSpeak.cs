// Edabit H4ck3r Sp34k
// tests in "./edbtHackerSpeak.test.cs"

/* QUESTION:

Create a function that takes a string as an argument and returns
a coded (h4ck3r 5p34k) version of the string.

In order to work properly, the function should replace all "a"s 
with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

*/

///////////////////////
// SOLUTION #1
///////////////////////

using System;
using System.Collections.Generic;

public class edbtHackerSpeak
{
	public static string HackerSpeak(string str)
	{
		Dictionary<char, char> lookUp = new Dictionary<char, char>();

		lookUp.Add('a', '4');
		lookUp.Add('e', '3');
		lookUp.Add('i', '1');
		lookUp.Add('o', '0');
		lookUp.Add('s', '5');

		string res = "";

		for (int i = 0; i < str.Length; i++)
		{
			res += (lookUp.ContainsKey(str[i]) ? lookUp[str[i]] : str[i]);
		}

		return res;
	}
}