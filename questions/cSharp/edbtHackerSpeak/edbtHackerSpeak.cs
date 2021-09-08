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