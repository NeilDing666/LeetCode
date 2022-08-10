/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    const windowLen = s1.length;
    const letters = stringToSortedString(s1);
    for (let i = 0; i < s2.length; i++) {
        const temp = stringToSortedString(s2.slice(i, i + windowLen));
        if (temp === letters) {
            return true;
        }
    }
    return false;
};

function stringToSortedString(s: string): string {
    const res = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        res[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    return res.toString();
}
// @lc code=end

