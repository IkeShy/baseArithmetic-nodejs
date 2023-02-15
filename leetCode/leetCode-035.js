
/**
* 搜索插入位置
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
如果目标值不存在与数组中，返回他将会被按排序插入的位置
例如： [1,3,5,6] 5
输出： 2

例如： [1,3,5,6] 2
输出： 1
*/

// 常规法
// 时间复杂度 O(N)
// 空间复杂度 O(1)
function searchInsertPosition_conventional (list, target) {
	if(list == null || list.length == 0) {
		return 0;
	}

	for (let i = 0; i < list.length; i++) {
		if(list[i] >= target) {
			return i;
		}
	}

	return list.length
}

// 二分法
// 时间复杂度 O(logN)
// 空间复杂度 O(1)
function searchInsertPosition_dichotomy (list, target) {
	if(list == null || list.length == 0) {
		return 0;
	}

	let left = 0, right = list.length - 1;
	while (left < right) {
		// 防止数字溢出
		let middle = left + Math.floor((right - left) / 2);
		if(list[middle] == target) {
			return middle;
		} 
		// 如果当前middle所在的值比target大
		// 则将right向左移动的值移动到middle后面
		// 保证right后面比middle大的值都被舍弃
		else if (list[middle] > target) {
			right = middle;
		} 
		// 否则包含middle所在的值的左边都小于target
		// left =  middle + 1; 让left从middle的下一个开始
		else {
			left = middle + 1;
		}
	}

	// 因为right的值都比target大
	// 所以直接比较left所在的位置的值
	// 和target比较如果这个值小于target 则说明
	// target需要插入在left+1的位置，否则插入到left的位置上
	return list[left] < target ? left + 1 : left;
}

function main () {
	let list = [1,3,5,6,8,11,12];
	let target = 5;
	// let result1 = searchInsertPosition_conventional(list, target);
	// console.log("result1", result1);
	let result2 = searchInsertPosition_dichotomy(list, target);
	console.log("result2", result2);
}

main()