using Xunit;

public class edbtHackerSpeak_TestClass
{
	[Fact]
	public void JavascriptIsCool()
	{
		Assert.Equal("j4v45cr1pt 15 c00l", edbtHackerSpeak.HackerSpeak("javascript is cool"));
	}

	[Fact]
	public void BecomeACoder()
	{
		Assert.Equal("b3c0m3 4 c0d3r", edbtHackerSpeak.HackerSpeak("become a coder"));
	}
}