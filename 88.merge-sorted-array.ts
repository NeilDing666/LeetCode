/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Double pointer
    let i2 = nums2.length - 1;
    let i1 = nums1.length - 1;
    let i = nums1.length - 1;

    while (i2 >= 0 && i1 >= 0) {
        // console.log('nums1[i1]: ', nums1[i]);
        // console.log('nums2[i2]: ', nums2[i2]);
        // console.log('nums1[i1 - nums2.length]: ', nums1[i1 - nums2.length]);

        if (nums2[i2] > nums1[i1 - nums2.length]) {
            nums1[i] = nums2[i2];
            i2--;
        } else {
            nums1[i] = nums1[i1 - nums2.length];
            nums1[i1 - nums2.length] = 0;
            i1--;
        }
        i--;
        // console.log(nums1);
    }
};
// @lc code=end

