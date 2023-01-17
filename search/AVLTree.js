
// AVL树 Adelson-Velsky and Landis Tree
// 动画例子 https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
// 平衡二叉树
function createNode (info) {
	return {
		left: null,
		right: null,
		key: info,
		height: 0,
	};
}

// 比较大小
function max (a, b) {
	return a > b ? a : b;
}

// 获取树的高度的高度
function height (root) {
	if (root == null) {
		return 0;
	}

	// 递归 每一层都比较左右两边更深的那棵树
	return 1 + max(height(root.left), height(root.right))
}

// 获取节点的平衡因子
function getBalanceFactor (node) {
	if(node == null) {
		return 0;
	}

	return height(node.left) - height(node.right);
}

// 右旋
function rightRotate (y) {
    /*
			y
		   / \
          x   O
         /\ 
        O  O
    */
    // 获得x和x的右子树
    let x = y.left;
    let xr = x.right;
    // 向右旋转 
    x.right = y;
    y.left = xr;
    // 更新节点的高度
    x.height = height(x);
	y.height = height(y);
	// 把节点x作为旋转后的新节点返回
	return x;
}

// 左旋
function leftRotate (y) {
 	/*
			y
		   / \
	      0   x   
	          /\ 
	         O  O
    */
    // 获取x和x的左子树
    let x = y.right;
    let xl = x.left;
    // 向左旋转 
    x.left = y;
    y.right = xl;
    // 更新节点的高度
    x.height = height(x);
    y.height = height(y);
    // 把节点x作为旋转后的新节点返回
    return x;
}

// 插入
function insert (node, key) {
	if(node == null) {
		return createNode(key);
	} 
	if(key < node.key) {
		node.left = insert(node.left, key);
	} else if (key > node.key) {
		node.right = insert(node.right, key);
	} else {
		return node; // 值已经存在
	}
	// 2 更新节点高度
	node.height = height(node);
	// 3 计算平衡因子，看是否平衡
	let bf = getBalanceFactor(node);
	// 判断是哪种类型时，只需要以不平衡的节点的左节点或右节点为基点的
	// 下一个节点构成了四种类型的哪种类型，
	// LL型不平衡 插入的值小于节点的左树的值
	if(bf > 1 && key < node.left.key) {
		// 节点向右单旋转
		return rightRotate(node);
	}
	// RR型不平衡 插入的值大于节点的右树的值
	if(bf < -1 && key > node.right.key) {
		// 节点向左单旋转
		return leftRotate(node);
	}
	// LR型不平衡
	/*
			6
			/\
		   2  7
		  /\
	     1  4
	         \
	          5 （插入的值是5）
	*/
	/* 第一次为左旋变成，按照4位基点左旋，传入2
			6
			/\
		   4  7
		  /\
	     2  5
	    /
	   1    
	*/
	/* 第二次右旋变成，按照4位基点右旋，传入6
			
		   4
		  /\
	     2  6
	    /   /\
	   1   5  7
	*/

	if(bf > 1 && key > node.left.key) {
		node.left = leftRotate(node.left);
		return rightRotate(node);
	}
	// RL型不平衡
	if(bf < -1 && key < node.right.key) {
		node.right = rightRotate(node.right);
		return leftRotate(node);
	}

	return node;
}

function preOrder (root) {
	if(root != null) {
		console.log("key", root.key);
		preOrder(root.left);
		preOrder(root.right);
	}
}

function main () {
	let root = null;
	root = insert(root, 10);
	root = insert(root, 20);
	root = insert(root, 30);
	root = insert(root, 40);
	root = insert(root, 50);
	root = insert(root, 60);
	preOrder(root);
}
main()