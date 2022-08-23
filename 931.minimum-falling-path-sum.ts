/*
 * @lc app=leetcode.cn id=931 lang=typescript
 *
 * [931] Minimum Falling Path Sum
 */

// @lc code=start
function minFallingPathSum(matrix: number[][]): number {
    // Using DP, transfer original matrix to DP matrix

    let ans = 0;

    for (let i = 1; i < matrix.length; i++) {
        for (let t = 0; t < matrix.length; t++) {
            matrix[i][t] += Math.min(matrix[i - 1][t - 1] ?? Number.MAX_VALUE, matrix[i - 1][t], matrix[i - 1][t + 1] ?? Number.MAX_VALUE);
        }
    }

    ans = matrix[matrix.length - 1].sort((a, b) => a - b)[0];

    return ans;
};
// @lc code=end

