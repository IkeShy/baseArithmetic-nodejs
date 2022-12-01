// 插入排序 
// 时间复杂度 O(n^2)
// 空间复杂度 O(n)
// 稳定性：稳定，值相同的元素，排序前和排序后相对位置不变
function insertion (arr) {
	// 从第二个元素开始依此向前遍历
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let j = i - 1;

		// 依此向前比较，如果比较的元素比前面元素小
		while (j >= 0 && arr[j] > key) {
			// 则把当前正在被比较的元素后面的元素都向后移动一个位置
			arr[j + 1] = arr[j];
			j--;
		}

		// 完成移动后，将当前比较的元素插入到当前被比较的
		// 因为j会在最后一次不满足条件前被多减1 ，所以需要插入的
		// 地方是j+1的位置
		arr[j + 1] = key;
		console.log("排序数组: ", arr);
	}
}

function main () {
	let array = [2, 1, 8, 7, 4, 10, 9, 6, 5, 3];
	console.log("随机数组: ", array);
	
	insertion(array);

	console.log("完成排序: ", array);
}

main()