
/**
  括号生成 Generate Parentheses 
  数字n代表生成括号的对数，
  请你设计一个函数，用于能够生成所有可能的
  并且有效的括号组合。 
*/

function generateParentheses (count) {
	let result = [];
	backtracking (count, result, 0, 0, "");
	return result;
}

/**
*
  count: 生成括号数量
  result: 结果
  left：左边括号数
  right：右边括号数
  curStr：当前的括号
*/
function backtracking (count, result, left, right, curStr) {
	// 如果左括号大于等于右括号的数量
	if(right > left) {
		return;
	}
	// 如果左括号等于右括号的数量 并且等于生成数量时
	// 则满足需求了
	if(left == right && left == count) {
		result.push(curStr);
		return;
	}
	// 如果左括号小于需要构建数量，则说明还有左括号需要构建
	if(left < count) {
		backtracking(count, result, left+1, right, curStr+"(");
	}
	// 如果左括号小于右括号的数量，则说明还有右括号需要构建
	if(right < left) {
		backtracking(count, result, left, right+1, curStr+")");
	}
}

function main () {
	let result = generateParentheses(3);
	console.log("result:---------", result);
}

main()