
/**
* 组合 给定两个整数n和k，返回1....n中所有可能的k个数的组合。
例如：输入 n=4，k=2
输出：
[
	[2,4],
	[3,4],
	[2,3],
	[1,2],
	[1,3],
	[1,4]
]
*/


function main () {
	let intervals = [[1,3],[6,9]], newInterval = [2,5];
	// let result = marge_sort(intervals, newInterval);
	// console.log("result ", result);
	let result = marge_greed(intervals, newInterval);
	console.log("result ", result);
}

main();