/*
 * @lc app=leetcode.cn id=1502 lang=typescript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
function canMakeArithmeticProgression(arr: number[]): boolean {
    let ans = false;
    if (arr.length <= 2) {
        return true;
    }
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] - arr[i + 1] !== arr[i + 1] - arr[i + 2]) {
            return false;
        } else if (i === arr.length - 3) {
            return true;
        }
    }
    return ans;
};
// @lc code=end

