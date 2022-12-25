// 归并排序排序 
// 时间复杂度 O(N*logN)
// 1: 每一层归并的时间复杂度是O(N)
// 2: 归并层数最大为O(logN+1)
// 空间复杂度 O(N) 
// 稳定性：if(arr[lPos] < arr[rPos]) 则是稳定的， if(arr[lPos] <= arr[rPos]) 则是不稳定的 
function mergeSort (arr) {
	// 创建一个临时的数组
	// 用来保存最后的结果
	let result = [];
	// 从第一个元素 index = 0， 到最后一个元素 index = arr.length - 1，进行排序
	mSort(arr, result, 0, arr.length - 1);
}
function mSort(arr, result, left, right) {
	// 如果left<right 则说明数组中的元素大于1个
	if(left < right) {
		// 获取划分数组用的中间位置
		let middle = Math.floor((right + left) / 2);
		// 以递归的形式、继续划分左半区
		mSort(arr, result, left, middle);
		// 以递归的形式、继续划分右半区
		mSort(arr, result, middle + 1, right);
		// 合并已经排序的部分
		merge(arr, result, left, middle, right);
	}
}
// 合并
function merge (arr, result, left, middle, right) {
	// 标记左半区第一个未排序的元素
	let lPos = left;
	// 标记右半区第一个未排序的元素
	let rPos = middle + 1;
	// 临时变量数组的下标索引值
	let tempPos = left;
	// 合并：
	// 如果左边数组和右边数组都没结束遍历、
	// 则对两边数组进行合并、
	// 每次最小的值放入临时数组，并使临时数组的索引值
	// 和参与比较一边的标记++
	while (lPos <= middle && rPos <= right) {
		if(arr[lPos] < arr[rPos]) {
			result[tempPos++] = arr[lPos++];
		} else {
			result[tempPos++] = arr[rPos++];
		}
	}
	// 在上面完成后，左右两边可能有没遍历完的元素
	// 合并左半区剩余未排序的元素
	while (lPos <= middle) {
		result[tempPos++] = arr[lPos++];
	}
	// 合并左半区剩余未排序的元素
	while (rPos <= right) {
		result[tempPos++] = arr[rPos++];
	}
	console.log("合并中：", result);
	// 将临时数组赋值给原始数组
	while (left <= right) {
		arr[left] = result[left];
		left++
	}

}
function main () {
	let array = [2, 1, 8, 7, 4, 10, 9, 6, 5, 3];
	console.log("随机数组: ", array);
	mergeSort(array);
	console.log("完成排序: ", array);
}

main()