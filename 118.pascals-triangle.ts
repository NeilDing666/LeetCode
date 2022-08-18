/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
    let ans: number[][] = [[1]];

    for (let i = 1; i < numRows; i++) {
        let row: number[] = [];
        for (let t = 0; t <= i; t++) {
            row.push((ans[i - 1][t - 1] + ans[i - 1][t]) ? ans[i - 1][t - 1] + ans[i - 1][t] : 1);
        }
        ans.push(row);
    }

    return ans;
};
// @lc code=end

