/*
 * @lc app=leetcode.cn id=881 lang=typescript
 *
 * [881] Boats to Save People
 */

// @lc code=start
// function numRescueBoats(people: number[], limit: number): number {
//     let ans = 0;

//     people.sort((a, b) => a - b);

//     for (let i = people.length - 1; i >= 0; i--) {
//         if (people[i] && i === 0) {
//             ans++;
//         } else if (!people[i]) {
//             continue;
//         }
//         if (people[i] === limit) {
//             ans++;
//         } else {
//             for (let t = i - 1; t >= 0; t--) {
//                 if (people[t] && people[t] <= limit - people[i]) {
//                     ans++;
//                     people[t] = NaN;
//                     break;
//                 } else if (t === 0) {
//                     ans++;
//                     break;
//                 }
//             }
//         }
//     }

//     return ans;
// };

// Optimization
function numRescueBoats(people: number[], limit: number): number {
    let ans = 0;

    people.sort((a, b) => a - b);

    let h = people.length - 1;
    let l = 0;
    for (let i = people.length - 1; i >= 0; i--) {

        if (h === l) {
            ans++;
            break;
        }

        if (people[h] + people[l] <= limit) {
            ans++;
            l++;
            i--;
        } else {
            ans++;
        }
        h--;
    }

    return ans;
};

// @lc code=end

