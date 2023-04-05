
/**
* 给出一个区间的集合，请合并所有重叠的区域 Merge Interval 
  实例1：
  输入： intervals = [[1,3],[2,6],[8,10],[15,18]]
  输出:  [[1,6], [8,10], [15,18]]
  解释: 区间[1,3] 和[2,6] 重叠，将他们合并为[1,6]

  实例2：
  输入： intervals = [[1,4],[4,5]]
  输出:  [[1,5]]
  解释: 区间[1,4] 和[4,5] 可被视为重叠区间
*/

/**
   排序法
*/

function marge(intervals) {
	let list = [];
	if(intervals == null || intervals.length < 2) {
		return intervals;
	}

	// 首先对外层数组按照每个元素0号位置的大小机型排序
	intervals.sort((a, b) => {
		return a[0]-b[0];
	});

	console.log("intervals --", intervals);
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


function main () {
	let intervals = [[1,3],[8,10],[2,6],[15,18]];
	let result = marge(intervals);
	console.log("result", result);
}

main();