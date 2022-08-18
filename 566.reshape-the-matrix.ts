/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {

    if (mat.length * mat[0].length !== r * c) {
        return mat;
    }

    let temp: number[] = [];

    for (let i = 0; i < mat.length; i++) {
        for (let t = 0; t < mat[0].length; t++) {
            temp.push(mat[i][t]);
        }
    }

    let ans: number[][] = [];
    for (let i = 0; i < r; i++) {
        let row: number[] = [];
        for (let t = 0; t < c; t++) {
            row.push(temp[c * i + t]);
        }
        ans.push(row);
    }

    return ans;
};
// @lc code=end

