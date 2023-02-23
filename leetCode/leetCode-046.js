
/**
* 全排序 permutation
   给定一个没有重复数字的排序，并返回其所有可能的全排序
   例如：
   输入：[1,2,3]

   输出：
   [ 
     [1,2,3],
     [1,3,2],
     [2,1,3],
     [2,3,1],
     [3,1,2],
     [3,2,1],
    ]
*/

// 回朔法
function allPermutation (nums) {
	let result = [];
	let visited = {}; // 创建一个对象记录已经遍历过的值

	nums.forEach ((item) => {
		visited[item] = false;
	});

	backtracking(nums, result, visited, []);

	return result;
}

function backtracking (nums, result, visited, list) {
	// 如果满足条件 则将创建出的数组放入结果中，
	// 创建的结果需要拷贝，否则会出现错误。
	if(nums.length == list.length) {
		let copy = list.slice(0);
		result.push(copy);
		return;
	}

	// 遍历每一个数字，判断他是否已经用于创建需要的数组
	// 如果没有创建则将他放入缓存队列中list，并将对象中的值
	// 设置成否，遍历过的对象设置为true，然后再次调用自己递归遍历
	for(let i = 0; i < nums.length; i++) {
		let key = nums[i];
		if(!visited[key]) {
			list.push(key);
			visited[key] = true;
			backtracking(nums, result, visited, list);

			list.pop();
			visited[key] = false;
		}
	}
}

function main () {
	let nums = [1,2,3];
	let result = allPermutation(nums);
	console.log("result" , result);
}

main()