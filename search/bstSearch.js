
// 二叉搜索树 BinarySearchTree
function createTreeNode (info) {
	return {
		left: null,
		right: null,
		data: info
	};
}
// 创建二叉搜索树
function createBstTree(arr) {
	let length = arr.length;
	if(length == 0) {
		return null;
	}
	let root = createTreeNode(arr[0]);
	for (let i = 1; i < length; i++) {
		insterNode(root, arr[i]);
	}
	return root;
}
// 插入
function insterNode (root, key) {
	// 如果当前没跟节点说明需要创建一棵树
    if(!root) {
    	return createTreeNode(key);
    }
    // 如果当前插入的值小于根节点，继续向左数中比较
	if(key < root.data) {
		root.left = insterNode(root.left, key);
	} 
	// 如果当前插入的值大于根节点，继续向右数中比较
	else if (key > root.data){
		root.right = insterNode(root.right, key);
	}
	return root;
}
// 查找
function search (root, key) {
	// 根节点是空或者根节点的值就是要查找的值就返回 根节点
	// 由于递归的原因，插入会向左子树或右子树做比较，会一直
	// 调用这个方法，所以如果最终没有找到需要搜索的数值，
	// root 会变为 null
	if(root == null || root.data == key) {
		return root;
	}
    
    // 如果要查找的值比root的值小
    // 则继续查找左子树
	if(key < root.data) {
		return search(root.left, key);
	} 
	// 否则查找右子树
	return search(root.right, key);
}

// 删除 -- 分为三种情况，
// 1: 要删除的节点中没有子节点
// 2: 要删除的节点中有一个子节点
// 3: 要删除的节点中有两个子节点
function deleteNode (root, key) {
	// 如果到子节点还没找到，则返回空
	if(root == null)  {
		return root;
	}
	// 如果要删除的值比节点值小，继续向左树搜索
	if(key < root.data) {
		root.left = deleteNode(root.left, key);
	}
	// 如果要删除的值比节点值大，继续向右树搜索
	else if (key > root.data) {
		root.right = deleteNode(root.right, key);
	} 
	// 否则就是找到了要删除的节点了
	else {
		// 如果要删除的节点有一个子节点或没有节点
		if(root.left == null) {
			let temp = root.right;
			root = null;
			return temp;
		} else if (root.right == null) {
			let temp = root.left;
			root = null;
			return temp;
		} 
		// 节点有两个子的情况
		// 找到当前节点的后继节点（右子树中最小值）
		// 将找到的后继节点赋值给当前节点
		// 并删除后继节点
		else  {
			// 找到当前节点右子树的最小值
			let minValue = findMinValueNode(root.right);
			root.data = minValue;
			// 删除右子树中的找到的最小值，因为他已经被赋值到当前节点。
			root.right = deleteNode(root.right, minValue);
		}

	}
	return root;
}

// 找到当前节点的后继节点、利用中序遍历 找到最小值
function findMinValueNode (root) {
	// 中序遍历-非递归
	if (root == null) return;

	let nodeStack = [];
	let currNode = root;
	let min = currNode.data;
	while (currNode || nodeStack.length) {
		while (currNode) {
			nodeStack.push(currNode);
			currNode = currNode.left;
		}
		currNode = nodeStack.pop();
		if(currNode.data < min){
			min = currNode.data;
		}
		console.log("findMinValueNode", currNode.data);
		currNode = currNode.right;
	}

	return min;
}

function main () {
	let array = [5,2,4,0,9,6,7];
	let bstTreeRoot = createBstTree(array);
	console.log('bstTree', bstTreeRoot);

	// let searchResult = search(bstTreeRoot, 6);
	// console.log("searchResult", searchResult);

	// let insertResult = insterNode(bstTreeRoot, 3);
	// console.log("insertResult", insertResult);

	// let deleteResult = deleteNode(bstTreeRoot, 5);
	// console.log("deleteResult", deleteResult);
}

main()