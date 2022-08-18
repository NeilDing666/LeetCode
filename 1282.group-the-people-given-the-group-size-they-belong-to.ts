/*
 * @lc app=leetcode.cn id=1282 lang=typescript
 *
 * [1282] Group the People Given the Group Size They Belong To
 */

// @lc code=start
function groupThePeople(groupSizes: number[]): number[][] {
    let ans: number[][] = [];
    const n = groupSizes.length;

    for (let i = 1; i <= n; i++) {
        let cur = groupSizes[i - 1];
        let temp: number[] = [];
        for (let t = i - 1; t < n; t++) {
            if (groupSizes[t] && groupSizes[t] === cur) {
                temp.push(t);
                groupSizes[t] = NaN;
            }
            if (temp.length === cur) {
                break;
            }
        }
        if (temp.length !== 0) {
            ans.push(temp);
        }
    }

    return ans;
};
// @lc code=end

