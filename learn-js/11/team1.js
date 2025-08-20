function countPaths(start, end) {
	const [x1, y1] = start;
	const [x2, y2] = end;
	
	function dfs(x, y) {

	    if (x === x2 && y === y2) return 1;
	
	    // 범위를 벗어나면 불가능
	    if (x > x2 || y > y2) return 0;
	
	    // 오른쪽으로 가거나 위로 가는 경우를 합산
	    return dfs(x + 1, y) + dfs(x, y + 1);
	}
	return dfs(x1, y1);
}

console.log(countPaths([0, 0], [2, 1]));
console.log(countPaths([1, 2], [4, 5]));
console.log(countPaths([3, 3], [3, 3]));