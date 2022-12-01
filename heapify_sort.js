// 交换两个元素
function swap (arr, indexA, indexB) {
	let temp = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
}
// 创建大顶堆
// 从根基点开始，每个子节点都小于父节点。
// 如果子节点都大于跟节点，则父节点和更大的子节点进行交换
// 交换后，继续进行大顶堆的检测，直到所有节点都符合大顶堆
function heapify (arr, length, index) {
	let lastIndex = index;
	// 当前节点的左节点为 n * 2 + 1
	let lIndex = lastIndex * 2 + 1;
	// 当前节点的右节点为 n * 2 + 2
	let rIndex = lastIndex * 2 + 2;
	// 如果当前节点小于两个孩子节点，等和更大的那个交换位置
	if (lIndex < length && arr[lastIndex] < arr[lIndex]) {
		lastIndex = lIndex;
	}
	if (rIndex < length && arr[lastIndex] < arr[rIndex]) {
		lastIndex = rIndex;
	}
	// 如果有比当前节点更大的节点，增进行交换
	// 并对交换后的节点继续进行检测
	if (lastIndex != index) {
		swap (arr, lastIndex, index);
		heapify(arr, length, lastIndex);
	}
}
//  时间复杂度 O(nlogn）
function main () {
	let array = [2, 1, 5, 7, 8, 4, 6, 9, 10, 3];
	console.log("随机数组: ", array);
	// 默认数组排序为完全二叉树后，
	// 最后一个有子节点的节点为 n / 2 - 1
	// 从此节点开始对节点挨个进行大顶堆检测
	// 查看他们是否符合大顶堆的条件
	let length = Math.floor(array.length / 2) - 1;
	for (let i = length; i >= 0; i --) {
		heapify(array, array.length, i);
	}
	console.log("创建大顶堆: ",array);
	// 堆排序
	// 将已经为大顶堆的数组的跟节点和最后一个节点交换
	// 这事树种最大的节点已经到数组中最后一个位置了，然后在从根节点处
	// 进行大顶堆的构建，构建完成后，重复第一步的交换操作，直到最后一个元素
	// 为止，排序结束
	for (let i = array.length - 1; i > 0; i --) {
		swap(array, 0, i);
		heapify(array, i, 0);
	}

	console.log("对排序后: ",array);
}

main()