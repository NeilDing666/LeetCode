/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let ans: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        for (let t = i + 1; t < nums.length; t++) {
            if (nums[t] === temp) {
                ans.push(i, t);
                return ans;
            }
        }
    }
};
// @lc code=end

