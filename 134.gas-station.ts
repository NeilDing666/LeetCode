/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] Gas Station
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let cur = 0;
    for (let i = 0; i <= gas.length - 1; i++) {
        // Start
        cur = gas[i];

        if (cur < cost[i]) {
            continue;
        } else {
            for (let t = i; t <= 2 * gas.length; t++) {

                let index = t > gas.length - 1 ? t - gas.length : t;
                let indexGas = index + 1 > gas.length - 1 ? index - gas.length + 1 : index + 1;
                cur = cur - cost[index] + gas[indexGas];

                if (cur < gas[indexGas]) {
                    break;
                }

                if (index >= i && t > gas.length - 1) {
                    return i;
                }
            }
        }
    }
    return -1;
};
// @lc code=end

