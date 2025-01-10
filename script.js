function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum=0;
	arr.forEach((elem , i) => {
		sum+=elem;
	})
  return sum;
}

module.exports=mincost;
