// 希尔排序 
// 时间复杂度 O（nlogn）～ O(n^2)
// 空间复杂度 O(1)
// 稳定性：不稳定的

// 通过待排序数组的长度，确定多组步长，
// 按照对步长进行分组，对每组
function shellSort (arr) {
	// 定义增量序列：
	// 步长循环 按照序列讲 循环分组，分组后进行插入排序的比较，
	// 起始序列值为带排序数组长度的一半，并每次按现有步长折半
	let arrL = arr.length;
	for (let inc = Math.floor(arrL / 2); inc > 0; inc = Math.floor(inc / 2)) {
		// 从当前步长开始为起点 对当前组中的元素做插入排序
		// 比较完一次之后在进行下一组的比较
		for(let i = inc; i < arrL; i++) {
			let j;
			let key = arr[i]; // 待比较的元素

			// 最开始从数组中 j（i） 个元素开始，
			// 通过步长获取下一个元素
			// 如果待比较元素比下一个元素小 并且j>inc（说明还有待比较的元素）则交换。
			// 经过一次比较之后，j指向交换后 的元素，通过 j = j - inc 确定位置
			for (j = i; j >= inc && key < arr[j - inc]; j = j - inc) {
				// 如果待排序的元素比下一个元素小，则将元素向后移动
				arr[j] = arr[j - inc];
			}
			// 都移动完之后，则arr[j] 说明key都大于arr[j - inc];
			// arr[j]则是当前分组中最小的一个元素了，将key赋值给他
			arr[j] = key;
		}

		console.log("排序inc=%d:", inc, arr);
	}	
}

function main () {
	let array = [2, 1, 8, 7, 4, 10, 9, 6, 5, 3];
	console.log("随机数组: ", array);
	
	shellSort(array);

	console.log("完成排序: ", array);
}

main()