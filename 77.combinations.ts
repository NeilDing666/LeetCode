/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
    let ans: number[][] = [];
    let path: number[] = [];

    function pick(n: number, k: number, startIndex: number) {
        if (path.length === k) {
            ans.push([...path]);
            return;
        }

        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            pick(n, k, i + 1);
            path.pop();
        }
    }

    pick(n, k, 1);

    return ans;
};
// @lc code=end

