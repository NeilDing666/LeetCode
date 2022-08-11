/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
// function removeElement(nums: number[], val: number): number {
//     let ans = 0;
//     for (let i = 0; i < nums.length; i++) {
//         // console.log('nums[i]: ', nums[i]);
//         if (nums[i] === val) {
//             for (let t = nums.length - 1; t > i; t--) {
//                 // console.log('nums[t]: ', nums[t]);
//                 if (nums[t] !== val) {
//                     let temp = nums[t];
//                     nums[t] = nums[i];
//                     nums[i] = temp;
//                     // console.log('nums: ', nums);
//                     break;
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             ans += 1;
//         }
//     }
//     return ans;
// };

function removeElement(nums: number[], val: number): number {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};
// @lc code=end

