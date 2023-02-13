
/**
  两两交换链表中的节点 SwapNodesInParis
  给定一个链表，两两交换其中祥林的节点，
  并返回交换后的链表。

  你不能只是单纯的改变节点内部的值，需要实际的进行节点交换

  例如：1->2->3->4
  返回：2->1->4->3
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


/**
* 迭代法
  时间复杂度是 O(n) -- list有多长，n就是有几个节点
  空间复杂度是 O(1) -- 没有用到辅助的存储空间
*/
function swapNodes_iteration (list) {
	//1 head=list
	//2 创建一个节点res，与list相连 （res.next = head）
	//3 定义cur=res
	let head = list;
	let res = new ListNode();
	res.next = head;
	let cur = res;
	// res-> 1 -> 2 -> 3 -> 4
	// cur  head next tmp
	// 赋值
	let next, temp;
	// 如果cur.next （剩余链表的第一个节点）
	// cur.next.next，（剩余链表的第二个节点）
	// 说明当前还有两个节点可以做交换
	while(cur.next && cur.next.next) {
		next = head.next;
		temp = next.next;
		// 交换
		cur.next = next;
		next.next = head;
		head.next = temp;
		// 移动指针
		cur = head; // 赋值cur指针
		head = head.next; // 移动head
	}

	return res.next;
}


/**
* 递归法 
head -> 1

next -> 2

        3 <- swapNodes_recursion(head.next.next)

        4
 时间复杂度是 O(n) -- list有多长，n就是有几个节点
 空间复杂度是 O(n) -- 没有用到辅助的存储空间
*/
function swapNodes_recursion(head) {
	if(head == null || head.next == null) {
		return head;
	}

	// 模拟第一次的递归，先保存2所在的节点为next
	let next = head.next;
	// 1所在节点之前保存节点2，因为1和2需要调换位置
	// 所以1指向的节点 为2之前所指向的节点并进行了位置调换，
	// 所以需要将2之后的节点再次进行递归，参数为head.next.next
	head.next = swapNodes_recursion(head.next.next);
	// 处理后将2所指向的从之前的3指向1
	next.next = head;

	return next;
}


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