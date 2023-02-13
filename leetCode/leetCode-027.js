
/**
* 移除元素
   给你一个数组nums喝一个值val，你需要原地移除所有数值
   等于val的元素，并返回移除后数组的新长度。
   不要使用额外的数组空间，你必须仅使用O(1)额外空间并
   原地修改输入数组。元素的顺序可以改变。你不需要考虑数组后再难过超出新
   长度后面的元素

   例如：nums = [3,2,2,3], val = 3;
   函数返回新长度为2， 并nums中的前两个元素均为2.

   例如：nums = [0,1,2,2,3,0,4,2], val = 2;
   函数应该返回新的长度5，并且nums中的前五个元素为0.1.3,0,4
   注意着五个元素为任意顺序。
   你不需要考虑数组中超出长度后面的元素
*/



function main () {
	let array = [1,2,3,4,5];
	let list = getList(array);
	// let result1 = swapNodes_iteration(list);
	// while (result1) {
	// 	console.log("result1:-------", result1.val);
	// 	result1 = result1.next;
	// }
	
	let result2 = swapNodes_iteration(list);
	while (result2) {
		console.log("result2:-------", result2.val);
		result2 = result2.next;
	}
}

main()