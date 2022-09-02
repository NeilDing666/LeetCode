/*
 * @lc app=leetcode.cn id=1855 lang=typescript
 *
 * [1855] Maximum Distance Between a Pair of Values
 */

// @lc code=start
function maxDistance(nums1: number[], nums2: number[]): number {
    let ans = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let t = i; t < nums2.length; t++) {
            if (nums1[i] <= nums2[t] && t >= i) {
                ans = Math.max(ans, t - i);
            }
        }
    }

    return ans;
};
// @lc code=end

