
/**
 两数之和 
 给定一个整数数组nums和一个整数目标值target
 请你在该数组中找出和为目标值的两个整数，
 并返回他们的数组下标，你可以假设每个输入只会对应一个答案。
 但是，数组中同一个元素不能使用两次，可以任意顺序返回答案
*/

// 1 暴力搜索法
// 从数组中第一个元素开始一次进行遍历，匹配是否满足要求
function violentSearch (nums, target) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if((nums[i] + nums[j]) == target) {
				result[0] = i;
				result[1] = j;
				return result;
			}
		}
	}
	return result
}

// 2 hash搜索法
// 最开始讲元素都放入对象中元素值，对应数组中所在index，
// 然后在一次for循环中 用target减去数组中的值，用剩余的树作为key
// 查找hash表中知否存在这个值，如果存在则返回。
function hashSearch (nums, target) {
	let result = [];
	let hashMap = {};
	nums.forEach((item, index) => {
		hashMap[item] = index;
	});
	for (let i = 0; i < nums.length; i++) {
		let key = target - nums[i];
		if(hashMap[key] >= 0) {
			result[0] = i;
			result[1] = hashMap[key];
			return result;
		}
	}
	return result;
}

function main () {
	let nums = [2,11,15,7];
	let target = 9;

	let result1 = violentSearch(nums, target);
	console.log("violentSearch result", result1);

	let result2 = hashSearch(nums, target);
	console.log("hashSearch result", result2);
	
}

main()