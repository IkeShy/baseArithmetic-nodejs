// 选择排序 
// 时间复杂度 O(n^2) , 与数组元素顺序无关
// 空间复杂度 O(1)
// 稳定性：如果 arr[min] > arr[j] 则稳定，如果 arr[min] >= arr[j]  则不稳定

// 交换两个元素
function swap (arr, indexA, indexB) {
	let temp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
}

// 每次选取最小（最大）的已排序集合的后面
function selection (arr) {
	// 从待排序数组中的第一个元素开始，一次对后面的元素进行比较
	for (let i = 0; i < arr.length; i++) {
		let min = i;

		// 如果在遍历的过程中找到比当前最小元素更小的元素
		// 则更新最小元素
		for (let j = i; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		// 遍历完毕后，将最小的元素添加到已排序集合的后面
		swap(arr, min, i);
		console.log("排序中 : ", arr);
	}
}


function main () {
	let array = [2, 1, 8, 7, 4, 10, 9, 6, 5, 3];
	console.log("随机数组: ", array);
	
	selection(array);

	console.log("完成排序: ", array);
}

main()