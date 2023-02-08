
/**
 有效的括号
 给定一个值包含 "(",")" "{""}", "[""]"
 的字符串，判定字符串是有效字符串。
 1: 左括号必须用相同类型的右括号闭合。
 2: 左括号必须一正确的顺序闭合

 例如 1
    输入： “（）”
    输出：true
      2
    输入：“（）[] {}”
    输出： true
      3
    输入：“()[]({}”
    输出： false
*/

function isValid (str) {
	if(str.length == 0) {
		return true;
	}
	let stack = [];
	for (let i = 0; i < str.length; i++ ) {
		// 如果遇到左括号，则将每一个括号都放入栈中
		let char = str.charAt(i);
		if(char == "(" || char == "{" || char == "[") {
			stack.push(char);
		} else {
			// 如果遇到的是右括号
			// 则判断下栈里是否还有元素，
			// 如果没有元素了则说明右括号不能匹配
			// 出现了 一个 ) || } || ] 的情况，
			// 不符合要求
			if(stack.length == 0) {
				return false;
			} else {
				// 如果不是空的则pop() 出来一个元素
				// 与当前搜索到的值进行匹配。
				let temp = stack.pop();
				if(char == ")") {
					if (temp != "(") {
						return false;
					}
				} else if(char == "]") {
					if (temp != "[") {
						return false;
					}
				} else if(char == "}") {
					if (temp != "{") {
						return false;
					}
				}
			}
		}
	}
	// 在最后都扫描一次后，判断下栈中是否还有元素
	// 如果还有元素则说明，字符串中存在单个 "( ||{ || ["的情况
	return stack.length == 0;
}

function main () {
	//let str = "()[]{}" // 返回true
	//let str = "([]){}" // 返回true
	//let str = "()[]({}" // 返回false
	//let str = "()[]({})" // 返回true
	let str = "()[](){})" // 返回false
	let flag = isValid(str);
	console.log('isValid-----:', flag);
}

main()