// 冒泡排序 
// 时间复杂度 O(n^2)
// 空间复杂度 O(1)
// 稳定性：稳定
// 交换两个元素
function swap (arr, indexA, indexB) {
	let temp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
}
// 冒泡排序
function bubble (arr) {
	// 外层循环：逐趟扫描 只需要对长度大于2的数组进行处理，
	// 如果长度为1，则自然有序
	for (let i = arr.length; i > 1; i--) {
		// 是否发生了交换
		let isSwap = false;

		// 进行一趟扫描，如果前一个值比后一个大，则交换
		// 每趟将换都会把最大的元素交换到最后面
		for (let j = 1; j < i; j++) {
			if(arr[j - 1] > arr[j]) {
				swap(arr, j - 1, j);
				isSwap = true;
			}
		}

		console.log("排序数组: ", arr);
		// 如果没有交换发生，则排序结束
		if(!isSwap) {
			break;
		}
	}
}

function main () {
	let array = [2, 1, 8, 7, 4, 10, 9, 6, 5, 3];
	console.log("随机数组: ", array);
	
	bubble(array);

	console.log("完成排序: ", array);
}

main()