/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// function sortColors(nums: number[]): void {
//     for (let i = 0; i < nums.length; i++) {
//         for (let t = i; t < nums.length; t++) {
//             if (nums[i] > nums[t]) {
//                 let temp = nums[t];
//                 nums[t] = nums[i];
//                 nums[i] = temp;
//             }
//         }
//     }
// };

// Method 2
function sortColors(nums: number[]): void {
    let num0 = 0, num1 = 0, num2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[num2++] = 2;
            nums[num1++] = 1;
            nums[num0++] = 0;
        } else if (nums[i] === 1) {
            nums[num2++] = 2;
            nums[num1++] = 1;
        } else {
            nums[num2++] = 2;
        }
    }
};
// @lc code=end

