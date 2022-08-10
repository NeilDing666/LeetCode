/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] Triangle
 */

// @lc code=start
// function minimumTotal(triangle: number[][]): number {
//     let dp = [...triangle];
//     const deepth = triangle.length;
//     for (let i = deepth - 2; i >= 0; i--) {
//         for (let t = 0; t <= i; t++) {
//             console.log('i: ', i);
//             console.log('t: ', t);
//             dp[i][t] = Math.min(dp[i + 1][t], dp[i + 1][t + 1]) + triangle[i][t];
//             console.log('dp[t]: ', dp[i][t]);
//         }
//     }
//     console.log(dp);
//     return dp[0][0];
// };

function minimumTotal(triangle: number[][]): number {
    let dp = [...triangle[triangle.length - 1]];
    const deepth = triangle.length;
    for (let i = deepth - 2; i >= 0; i--) {
        for (let t = 0; t <= i; t++) {
            dp[t] = Math.min(dp[t], dp[t + 1]) + triangle[i][t];
        }
    }
    return dp[0];
};
// @lc code=end

