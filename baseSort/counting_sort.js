// 计数排序 
// 时间复杂度 O(n)
// 空间复杂度 Ο(n+k)（其中k是整数的范围）
// 稳定性：稳定
function countingSort (arr) {
	// 完整流程 --
	// 1-先获取数组中最大的元素
	// 2-根据最大值创建一个计数数组 因为数组从0开始计算 计算出的最大值需要+1
	// 3-循环原始数组，计算每个元素出现的次数 用数组中的元素作为下标 数组中存储的值，代表元素出现的次数
	// 4-将计数数组变成累计数组，计数数组本身会导致算法不稳定 累计数组 用于记录元素的相对位置，保证算法的稳定性 累计数组从index = 1（第二个元素开始计算） 
	// 5-最后从后往前遍历带排序数组，每个待排序的值为累计数组的index值 通过他获得到的countArray中的元素为 每个元素排序后所在的位置，因为获取来的数据为包含元素自己
	// 所有在组成新的数组时候 需要将获取的index-1 才能到他正确的位置上 然后将countArray[countIndex]中保存的index--
	// 完整流程 -- 
	
	// 先获取数组中最大的元素
	let max = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	console.log("------数组中的最大值:" , max);

	// 根据最大值创建一个计数数组 因为数组从0开始计算 计算出的最大值需要+1
	max += 1;
	let countArray = new Array(max).fill(0);
	// 循环原始数组，计算每个元素出现的次数 用数组中的元素作为下标 数组中存储的值，代表元素出现的次数
	for (let i = 0; i < arr.length; i ++) {
		countArray[arr[i]]++;
	}
	console.log("------计数数组:" , countArray);
	// 将计数数组变成累计数组，计数数组本身会导致算法不稳定 累计数组 用于记录元素的相对位置，保证算法的稳定性 累计数组从index = 1（第二个元素开始计算） 
	for (let i = 1; i < countArray.length; i++) {
		countArray[i] = countArray[i] + countArray[i - 1];
	}
	console.log("------累计数组:" , countArray);
	// 最后从后往前遍历带排序数组，每个待排序的值为累计数组的index值 通过他获得到的countArray中的元素为 每个元素排序后所在的位置，因为获取来的数据为包含元素自己
	// 所有在组成新的数组时候 需要将获取的index-1 才能到他正确的位置上 然后将countArray[countIndex]中保存的index--
	let result = [];
	for (let i = arr.length - 1 ; i >= 0; i--) {
		let countIndex = arr[i];
		result[countArray[countIndex] - 1] = arr[i];
		countArray[countIndex]--;
	}
	return result;
}

function main () {
	let array = [8, 1, 2, 7, 9, 3, 9, 6, 5, 3, 0, 1, 5, 3, 8, 1, 7, 2, 4, 8, 1, 2, 7, 0];
	console.log("随机数组: ", array);
	
	let sortArray = countingSort(array);

	console.log("完成排序: ", sortArray);
}

main()