/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    let ans: number[][] = [];
    let res: number[] = [];
    const len = nums.length;

    if (len === 0) {
        return [];
    }

    function pick(nums) {
        if (ans.length === res.length) {
            ans.push([...res]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (res.indexOf(nums[i]) !== -1) {
                break;
            }
            res.push(nums[i]);
            pick(nums);
            res.pop();
        }

    }
    pick(nums);
    return ans;
};
// @lc code=end

