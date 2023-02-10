
/**
  合并两个有序链表
  将两个升序链表合并为一个新的升序链表并返回，
  新链表是通过拼接给定的两个链表的所有节点组成的。
  例如： 1->2->4, 1->3->4
  输出： 1->1->2->3->4->4
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
function mergeTwoListIteration (l1, l2) {
	let result = new ListNode();
	let cur = result;
	while (l1 && l2) {
		if(l1.val <= l2.val) {
			cur.next = l1;
			l1 = l1.next;
		} else {
			cur.next = l2;
			l2 = l2.next;
		}
		cur = cur.next; 
	}

	cur.next = (l1 ? l1 : l2);
	return result;
}

// 递归法
function mergeTwoListRecursion (l1, l2) {
	// 递归终止条件，如果有一个链表为空，则将后续全部返回
	if(l1 == null || l2 == null) {
		if(l1) return l1;
		if(l2) return l2;
	}

	// 如果l1<=l2, 则将l1.next和l2作为整体
	// 继续作为参数进行递归，整体部分在逐步减少。
	// l1 : 1->2->4, l2: 1->3->4
	// 第一次递归数据变为
	// list: 1
	// l1 : 2->4, l2: 1->3->4
	// 第二次递归数据变为
	// list: 1->1
	// l1 : 2->4, l2: 3->4
	// 第三次递归数据变为
	// list: 1->1->2
	// l1 : 4, l2: 3->4
	if(l1.val <= l2.val) {
		l1.next = mergeTwoListRecursion(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoListRecursion(l1, l2.next);
		return l2;
	}
}

function main () {
	let nums1 = [1,2,4];
	let l1 = getList(nums1);
	console.log("l1-------=", l1);
	let nums2 = [1,3,4];
	let l2 = getList(nums2);
	console.log("l2-------=", l2);
	// 迭代法
	// let result1 = mergeTwoListIteration(l1, l2);
	// while(result1) {
	// 	console.log("result1----:", result1.val);
	// 	result1 = result1.next;
	// }

	// 递归法
	let result2 = mergeTwoListRecursion(l1, l2);
	while(result2) {
		console.log("result2----:", result2.val);
		result2 = result2.next;
	}
}

main()