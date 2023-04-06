
/**
* 插入区间
  给出一个无重叠的，按照区间起始断电排序的区间列表
  在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且
  不重叠（如果有必要的话，可以合并区间
  
  例1：输入intervals = [[1,3],[6,9]], newInterval = [2,5]
  输出 [[1,5],[6.9]]

  例2：输入intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
  输出[[1,2],[3,10],[12,16]]
  解释 因为新的区间[4,8]和 [3,5],[6,7],[8,10]有重叠
*/

/**
* 排序法 时间复杂度 O(nlogn)
	    空间复杂度 O(n)
*/
function marge_sort(intervals, newinterval) {
	let list = [];
	if(intervals == null || intervals.length < 2) {
		return intervals;
	}

	intervals.push(newinterval);
	// 首先对外层数组按照每个元素0号位置的大小机型排序
	intervals.sort((a, b) => {
		return a[0]-b[0];
	});
	for (let i = 0; i < intervals.length; i++) {
		let oneInterval = intervals[i];
		// 排序后如果后一个数据中的0号位大于前一个数据中的1号位数据，则说明需要新插入一个数据
		// [1,3],[4,6] 中4大于3则需要插入一个数据 
		if(list.length == 0 || oneInterval[0] > list[list.length - 1][1]) {
			list.push(oneInterval);
		} else {
			// 否则需要对数据进行整合，利用后一个数据中1号位替换前一个数据中的1号位
			// [ 1, 3 ], [ 2, 6 ] - 整合为[1,6]
			list[list.length - 1][1] = Math.max(list[list.length - 1][1], oneInterval[1]);
		}
	}

	return list;
}

/**
* 贪心法 时间复杂度 O(n)
	    空间复杂度 O(n)
*/
function marge_greed(intervals, newinterval) {
	let list = [];
	let index = 0;
	// 1 将intervals中开始时间小于 newinterval 的元素都加入到list中
	for (let i = 0; i < intervals.length; i++) {
		if(intervals[i][0] < newinterval[0]) {
			list.push(intervals[i]);
			index ++;
		} else {
			break;
		}
	}

	// 将newinterval 加入到list中
	if(list.length == 0 || list[list.length - 1][1] < newinterval[0]) {
		list.push(newinterval);
	} else {
		list[list.length - 1][1] = Math.max(list[list.length - 1][1], newinterval[1]);
	}

	// 将intervals中剩余的元素加入到list中
	for (let i = index; i< intervals.length;i++) {
		if(list[list.length - 1][1] < intervals[i][0]) {
				list.push(intervals[i]);
		} else {
			list[list.length - 1][1] = Math.max(list[list.length - 1][1], intervals[i][1]);
		}
	}

	return list;
}

function main () {
	let intervals = [[1,3],[6,9]], newInterval = [2,5];
	// let result = marge_sort(intervals, newInterval);
	// console.log("result ", result);
	let result = marge_greed(intervals, newInterval);
	console.log("result ", result);
}

main();