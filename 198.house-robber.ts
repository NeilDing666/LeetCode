/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
// Method1 recursive, will time out when dealing with more data;
/*
function rob(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    function dp(nums: number[], startIndex: number) {
        if (nums.length - 2 === startIndex) {
            return Math.max(nums[nums.length - 2], nums[nums.length - 1]);
        }
        if (nums.length - 1 === startIndex) {
            return nums[nums.length - 1];
        }

        let res = Math.max(dp(nums, startIndex + 2) + nums[startIndex], dp(nums, startIndex + 1));
        return res;
    }
    return dp(nums, 0);
};
*/
// Method 2 based on method 1, use array to store calcuated res;
function rob(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    let dp: number[] = [nums[nums.length - 1]];
    dp.push(Math.max(nums[nums.length - 1], nums[nums.length - 2]));
    // dp[2]
    dp.push(dp[0] + nums[nums.length - 3]);

    for (let i = 3; i <= nums.length - 1; i++) {
        dp[i] = Math.max(dp[i - 3], dp[i - 2]) + nums[nums.length - 1 - i];
    }

    dp.sort((a, b) => b - a);
    return dp[0];
};
// @lc code=end

