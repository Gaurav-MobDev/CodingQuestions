const binary = (n) =>
{
	if(n == 0)
		return;
	
        binary(n / 2);

	console.log(n % 2);
}
binary(7);