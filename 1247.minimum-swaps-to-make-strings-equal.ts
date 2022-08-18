/*
 * @lc app=leetcode.cn id=1247 lang=typescript
 *
 * [1247] Minimum Swaps to Make Strings Equal
 */

// @lc code=start
function minimumSwap(s1: string, s2: string): number {
    let res = removeSame(s1.split(''), s2.split(''));
    if (res.s1.length % 2 !== 0) {
        return -1;
    }
    let ans = 0;
    let nums = {
        x: 0,
        y: 0,
    }
    for (let i = 0; i < res.s1.length; i++) {
        if (res.s1[i] === 'x') {
            nums.x++;
        }
    }
    nums.y = res.s1.length - nums.x;
    ans = Math.floor((nums.x + nums.y) / 2);
    if (nums.x % 2 !== 0 || nums.y % 2 !== 0) {
        ans++;
    }
    return ans;
};


function removeSame(s1: string[], s2: string[]): { s1: string[], s2: string[] } {
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
            s1.splice(i, 1);
            s2.splice(i, 1);
            i--;
        }
    }
    return {
        s1: s1,
        s2: s2,
    }
}
// @lc code=end

