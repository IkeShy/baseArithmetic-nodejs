
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


function createList (n, k) {
	let result = [];
	backtracking(n,k,result,1,[]);
	return result;
}

function backtracking (n, k, result, begin, list) {
	if(list.length == k) {
		let copy = list.slice(0);
		result.push(copy);
		return;
	}

	for (let i = begin; i <=n; i++) {
		list.push(i);
		backtracking(n, k, result, i + 1, list);
		list.pop();
	}
}

function main () {
	let result = createList(4, 2);
	console.log("result ", result);
}

main();