
/**
* 最大子序和 maximum subarray
给定一个数组nums， 找出一个具有最大和的连续子数组（子数组至少包含一个元素），
返回其最大和
例如：
 输入：[-2,1,-3,4,-1,2,1,-5,4]
 输出：6
 解释：连续子数组[4,-2,2,1]的和最大，为6
*/


// 一般方法
// 从头到尾通过两个指针进行遍历，
// 保存当前能获取到的更大的值
function commonFunc (nums) {
	let result = -Number.MAX_VALUE;
	for (let i = 0; i < nums.length; i++) {
		let sum = 0;
		for (let j = i; j < nums.length; j++) {
			sum = sum + nums[j];
			result = Math.max(result, sum);
		}
	}
	return result;
}

// 分治法
// 通过递归的方法从头到尾比较
// 左边的最大值，右边的最大值，左右两边的最大值相加之后值，哪个更大
function divideFunc (nums) {
	return getMax(nums, 0, nums.length - 1);
}

function getMax (nums, left, right) {
	if (left == right) {
		return nums[left];
	}

	let mid = Math.floor(left + (right - left) / 2);
	let leftMax = getMax(nums, left, mid);
	let rightMax = getMax(nums, mid + 1, right);
	let crossMax = getCrossMax(nums, left, right);

	console.log("-----------left", left);
	console.log("-----------right", right);
	console.log("-----------max", Math.max(crossMax, Math.max(leftMax, rightMax)));
	console.log("--------------");
	return Math.max(crossMax, Math.max(leftMax, rightMax));
}

function getCrossMax (nums, left, right) {
	let mid = Math.floor(left + (right - left) / 2);
	// 获取左边最大值
	let leftSum = nums[mid];
	let leftMax = leftSum;
	for (let i = mid - 1; i > 0; i--) {
		leftSum = leftSum + nums[i];
		leftMax = Math.max(leftSum, leftMax);
	}

	// 获取右边的最大值
	let rightSum = nums[mid+1];
	let rightMax = rightSum;
	for (let i = mid + 2; i <= right; i++) {
		rightSum = rightSum + nums[i];
		rightMax = Math.max(rightSum, rightMax);
	}

	return leftMax + rightMax;
}

// 动态规划
function dynamicFunc (nums) {
	let dp = [];
	dp[0] = nums[0];
	result = nums[0];

	for (i = 1; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
		result = Math.max(result, dp[i]);
	}

	console.log("dp", dp);

	return result;
}


function main () {
	let nums = [-2,1,-3,4,-1,2,1,-5,4];
	//let commonResult = commonFunc(nums);
	//console.log("commonResult", commonResult);

	// let devideResult = divideFunc(nums);
	// console.log("devideResult", devideResult);

	let dynamicResult = dynamicFunc(nums);
	console.log("dynamicResult", dynamicResult);
}

main()