/*
 * @lc app=leetcode.cn id=1763 lang=typescript
 *
 * [1763] Longest Nice Substring
 */

// @lc code=start
function longestNiceSubstring(s: string): string {
    let ans = '';
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        for (let t = i + 1; t <= s.length; t++) {
            let sub = s.slice(i, t);
            if (isNiceString(sub.split(''))) {
                if (len < sub.length) {
                    len = sub.length;
                    ans = sub;
                }
            }
        }
    }
    return ans;
};

function isNiceString(arr: string[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(String.fromCharCode(arr[i].charCodeAt(0) + 32)) === -1 && arr.indexOf(String.fromCharCode(arr[i].charCodeAt(0) - 32)) === -1) {
            return false;
        } else if (i === arr.length - 1) {
            return true;
        }
    }

    return false;
}
// @lc code=end

