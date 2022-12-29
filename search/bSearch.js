
// 二分查找
function bSearch (target, array) {
	let left = 0;
	let right = array.length - 1;
	let middle  = null;
	while (left <= right) {
		// 一般我们都是定义左边界（left）和右边界（right）都使用 int 类型，
		// 如果 left 和 right 足够大，mid = (left + right)/2，可能会由于 left+right 导致 int 数据类型越界。
		// 所以安全的写法是 mid = left + ((right - left) >> 1) 或者 mid = left + (right - left) / 2，
		// 推荐使用右移操作，因为右移比除法快。
		middle = Math.floor(left + (right - left) / 2);
		let mValue = array[middle];
		// 如果中间值小于目标则说明目标值在右边
		if(mValue < target) {
			left = middle + 1;		
		} 
		// 如果中间值大于目标则说明目标值在左边
		else if (mValue > target) {
			right = middle - 1;
		} else {
			return middle;
		}
	}

	// 如果没查找到则返回-1
	return -1;

	// 如果是插入，则left返回的位置就是元素可插入的位置
	// return left;
}


function main () {
	let array = [1,3,5,6,10,12,15,19];
	let index = bSearch(10, array);
	console.log("index", index);
}

main()