
/**
* 给定一个字符串数组，将字母异位词组合在一起，字母异位词指
  字母相同，但排列不同的祖父穿
   例如：
   输入["eat", "tea", "tan", "ate". "nat", "bat"]
   输出[
		["ate", "eat", "tea"],
		["nat", "tan"],
		["bat"]
   ]
*/

// 排序法
function groupAnagram_sort (list) {
	if(list.length < 2) {
		return [list]
	}

	let result = new Map();
	for (let i = 0; i < list.length; i++) {
		let one = list[i];
		// 将数组中的字符串都变成数组形式
		let arr = [];
		for(let index = 0; index < one.length; index++){
			arr[index] = one.charAt(index);
		}
		// 对改变后的数组进行排序 
		// 都变成从a到z按顺序排列
		arr = arr.sort();
		// 将他转换成key
		let key = arr.toString();
		console.log("key", key);

		if(!result.get(key)) {
			result.set(key, []);
		}

		result.get(key).push(one);
	}

	return result.values();
}

// 哈希法
function groupAnagram_hash (list) {
	if(list.length < 2) {
		return [list]
	}
	let result = new Map();
	for (let i = 0; i < list.length; i++) {
		let one = list[i];
		// 利用长度为26的数组存放每个字符串中字符出现的数量
		let count_table = new Array(26).fill(0);
		for (let c = 0; c < one.length; c++) {
			// 获取到一个字符后-97（a的code值）
			let b = one.charCodeAt(c) - 97; 
			count_table[b]++;
		}
		// 将数组中每个元素插入#生成key 
		// 以防止出现有字符上双数的问题，
		// 保证每一位的唯一性
		count_table.forEach((item, tableIndex) => {
			count_table[tableIndex] = "#" + item;
		}) 
		let key = count_table.toString();
		console.log("key", key);
		if(!result.get(key)) {
			result.set(key, []);
		}
		result.get(key).push(one);
	}

	return result.values();
}

function main () {
	let list = ["eat", "tea", "tan", "ate", "nat", "bat"];
	let result = groupAnagram_sort(list);
	console.log("result", result);
	let result1 = groupAnagram_hash(list);
	console.log("result1", result1);
}

main()