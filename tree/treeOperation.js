
// 
function createTreeNode (info) {
	return {
		left: null,
		right: null,
		data: info
	};
}

// 数组转换到二叉树
function createTreeFromArray (arr) {
	let length = arr.length;
	if(length == 0) {
		return null;
	}
	let tree = [];
	tree[0] = createTreeNode(arr[0]);

	// 当前节点的左节点是let left = 2*i+1;
	// 当前节点的右节点是let left = 2*i+2;
	for (let i = 0; i < length; i++) {
		let left = 2*i+1;
		let right = 2*i+2;
		if (left < length && arr[left] != -1) {
			tree[left] = createTreeNode(arr[left]);
			tree[i].left = tree[left];
		}
		if (right < length && arr[right] != -1) {
			tree[right] = createTreeNode(arr[right]);
			tree[i].right = tree[right];
		}
	}
	return tree;
}

// 先序遍历-递归
// 根左右
function preOrderRecursive (root) {
	if(root == null) return;
	console.log(root.data);
	preOrderRecursive(root.left);
	preOrderRecursive(root.right);
}

// 中序遍历-递归
// 左根右
function inOrderRecursive (root) {
	if(root == null) return;
	inOrderRecursive(root.left);
	console.log(root.data);
	inOrderRecursive(root.right);
}

// 后序遍历-递归
// 左右根
function postOrderRecursive (root) {
	if(root == null) return;
	postOrderRecursive(root.left);
	postOrderRecursive(root.right);
	console.log(root.data);
}

// 先序遍历-非递归
// 使用栈操作树节点
// 根左右
function preOrderIterative (root) {
	if (root == null) return;

	let nodeStack = [];
	nodeStack.push(root);

	while (nodeStack.length) {
		let node = nodeStack.pop();
		console.log(node.data);
		if (node.right) {
			nodeStack.push(node.right);
		}
		if (node.left) {
			nodeStack.push(node.left);
		}
	}
}

// 中序遍历-非递归
// 使用栈操作树节点
// 左根右
function inOrderIterative (root) {
	if (root == null) return;

	let nodeStack = [];
	let currNode = root;
	while (currNode || nodeStack.length) {
		while (currNode) {
			nodeStack.push(currNode);
			currNode = currNode.left;
		}
		currNode = nodeStack.pop();
		console.log(currNode.data);
		currNode = currNode.right;
	}
}

// 后序遍历-非递归
// 使用栈操作树节点
// 左右跟
function postOrderIterative (root) {
	if (root == null) return;

	let nodeStack = [];
	let currNode = root;
	let visitendNode = root; // 当前被访问过的节点

	while (currNode || nodeStack.length) {
		while (currNode) {
			nodeStack.push(currNode);
			currNode = currNode.left;
		}

		currNode = nodeStack[nodeStack.length - 1];
		// 如果当前节点是右节点, 并还没被访问
		if(currNode.right && currNode.right != visitendNode) {
			currNode = currNode.right;
		} else {
			// 自树为空或被访问过
			console.log(currNode.data);
			visitendNode = currNode;
			currNode = null;
			nodeStack.pop();
		}
	}
}

// 层次遍历
function levelOrder(root) {
	if(root == null) return;

	let nodeStack = [];
	nodeStack.push(root);
	let currNode = null;

	while (nodeStack.length) {
		currNode = nodeStack.shift();
		console.log(currNode.data);

		if(currNode.left) {
			nodeStack.push(currNode.left);
		}
		if(currNode.right) {
			nodeStack.push(currNode.right);
		}
	}
}

function main () {
	let array = [6,3,4,5,1,-1,7];
	// 从数组构建树
	let tree = createTreeFromArray(array);
	console.log("-----先序 - 递归");
	preOrderRecursive(tree[0]);
	console.log("-----中序 - 递归");
 	inOrderRecursive(tree[0]);
	console.log("-----后序 - 递归");
	postOrderRecursive(tree[0]);
	console.log("-----先序 - 非递归");
	preOrderIterative(tree[0]);
	console.log("-----中序 - 非递归");
	inOrderIterative(tree[0]);
	console.log("-----后序 - 非递归");
	postOrderIterative(tree[0]);
	console.log("-----层次遍历 - 非递归");
	levelOrder(tree[0]);
}

main()