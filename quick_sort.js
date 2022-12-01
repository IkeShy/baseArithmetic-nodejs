// 快速排序 
// 时间复杂度 O(logn)
// 空间复杂度 O(n)
// 稳定性：不稳定
// 交换两个元素
function swap (arr, indexA, indexB) {
	let temp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
}
function quick (arr) {
	qSort(arr, 0, arr.length - 1);
}
// 如果数组中元素数量大于一个 start < end，则每次用数组中最后一个元素作为基准元素 i和j两个迭代器每次都start开始
// j先向后迭代，如果第j个元素小于基准元素，则将i和j位置的元素互换，并使i++, 每轮迭代后小于基准元素的数都已经将交换到i的前面, 最后让i和基准元素互换
function qSort (arr, start, end) {
	// 如果元素大于一个则进行排序处理 
	if(start < end) {
		// 用数组的最后一个元素作为基准元素
		let base = 	arr[end];
		// 将i和j 迭代器都赋值为初始位置
		// j < end 因为最后一个数是基准元素 所以不参与相关排序比较
		let i = start; // 
		for (let j = start; j < end; j++) {
			// 如果迭代器j 获得的元素比基准元素小，则将i和j的元素进行互换，并使i++
			if(arr [j] < base) {
				swap(arr, i, j);
				i++
			}
		}
		// 循环结束后所有小于基准元素的元素都到了i的前面，这时候将基准元素与i进行互换
		swap(arr, i, end);
		console.log("排序中 :", arr);
		// 每次循环交换后，都能确定基准元素的位置，小于基准元素的值都在i的左边，大于基准元素的值都在i的右边
		// 以基准元素为中心在对两端的数组再次进行快速排序，直到元素个数为一个时停止
		// 利用递归对基准元素左边再次调用去排序算法
		qSort(arr, start, i - 1);
		// 利用递归对基准元素右边再次调用去排序算法
		qSort(arr, i + 1, end);
	}
}	
function main () {
	let array = [2, 1, 8, 7, 4, 10, 9, 6, 5, 3];
	console.log("随机数组: ", array);
	quick(array);
	console.log("完成排序: ", array);
}
main()
