
/**
 两数相加
 给你两个非空的链表，表示两个非负的整数。
 他们每个数字都是按照逆序的方式存储的，
 并且每个节点只能存储一位数字。
 请你将两个数相加，并以相同行书返回一个表示和的链表。
 你可以假设出了数字0之外，这两个数都不会以0开头

 输入 2->4>3
     5>6>4
 输出 7->0->8
*/

function ListNode (val) {
	this.val = val;
	this.next = null;
}

function getList (array) {
	let node = null;
	let first = null;
	for (let i = 0; i < array.length; i++) {
		let nextNode = new ListNode(array[i]);

		if(node) {
			node.next = nextNode;
		} else {
			first = nextNode;
		}

		node = nextNode;
	}

	return first;
}

// 迭代法
function addToList_Iteration (l1, l2) {
	let total = 0;
	let next1 = 0;
	let result = new ListNode();
	let cur = result;
 	// 如果l1 和l2 都有值
	while (l1 != null && l2 != null) {
		// 则先计算链表中每一位的值，next1为进位部分
		total = l1.val + l2.val + next1;
		// 链表的下一位存储个位部分
		cur.next = new ListNode(total % 10);
		// 获取到是否需要进位
		next1 = Math.trunc(total / 10);
		l1 = l1.next;
		l2 = l2.next;
		cur = cur.next;
	}
	// 如果是l1 没有走完， 则继续单独处理l1
	while (l1 != null) {
		total = l1.val + next1;
		cur.next = new ListNode(total % 10);
		next1 = Math.trunc(total / 10)
		l1 = l1.next;
		cur = cur.next;
	}
	// 如果是l2 没有走完， 则继续单独处理l2
	while (l2 != null) {
		total = l2.val + next1;
		cur.next = new ListNode(total % 10);
		next1 = Math.trunc(total / 10)
		l2 = l2.next;
		cur = cur.next;
	}
	// 最后判断下next1，是否有值，如果有值则需要单独存放到一个节点
	if(next1) {
		console.log("next1", next1);
		cur.next = new ListNode(next1);
	}

	return result;
}

// 递归法
function addToList_recursive (l1, l2) {
	let total = l1.val + l2.val;
	let next1 = Math.trunc(total / 10); // 整数部分 进位点值
	let res = new ListNode(total % 10); // 小数部分

	// 两个链表和进位的值有一个不为空就需要继续创建节点
	if(l1.next != null || l2.next != null || next1 != 0) {
		if (l1.next != null ) {
			l1 = l1.next;
		} 
		// 如果l1 的next不存在，则用0进行创建
		else {
			l1 = new ListNode(0);
		}

		if (l2.next != null ) {
			l2 = l2.next;
		} 
		// 如果l2 的next不存在，则用0进行创建
		else {
			l2 = new ListNode(0);
		}
		// 将next1 整数部分直接赋值给l1的值
		l1.val = l1.val + next1;
		res.next = addToList_recursive(l1, l2);
	}

	return res;
}


function main () {
	let nums1 = [2,4,3];
	let l1 = getList(nums1);
	console.log("l1-------=", l1);
	let nums2 = [5,6,4];
	let l2 = getList(nums2);
	console.log("l2-------=", l2);

	let addToList1 = addToList_Iteration(l1, l2);
	let result1 = addToList1;
	while (result1) {
		console.log("addToList1-----=", result1.val);
		result1 = result1.next;
	}

	let addToList2 = addToList_recursive(l1, l2);
	let result2 = addToList2;
	while (result2) {
		console.log("addToList2-----=", result2.val);
		result2 = result2.next;
	}
}

main()