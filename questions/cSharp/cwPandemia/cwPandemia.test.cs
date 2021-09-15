using Xunit;

public class cwPandemia_TestClass
{
	[Fact]
	public void testCase1()
	{
		Assert.Equal(73.33333333333333, cwPandemia.infected("01000000X000X011X0X"));
	}

	[Fact]
	public void testCase2()
	{
		Assert.Equal(72.72727272727273, cwPandemia.infected("01X000X010X011XX"));
	}

	[Fact]
	public void testCase3()
	{
		Assert.Equal(0, cwPandemia.infected("XXXXX"));
	}

	[Fact]
	public void testCase4()
	{
		Assert.Equal(100, cwPandemia.infected("0000000010"));
	}

	[Fact]
	public void testCase5()
	{
		Assert.Equal(42.857142857142854, cwPandemia.infected("X00X000000X10X0100"));
	}
}