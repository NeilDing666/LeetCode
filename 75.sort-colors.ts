/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        for (let t = i; t < nums.length; t++) {
            if (nums[i] > nums[t]) {
                let temp = nums[t];
                nums[t] = nums[i];
                nums[i] = temp;
            }
        }
    }
};
// @lc code=end

