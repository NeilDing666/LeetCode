/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    // Timeout
    // for(let i = 0; i<=prices.length-1;i++){
    //     for(let t = i+1;t<=prices.length-1;t++){
    //         if(prices[t]>prices[i]){
    //             ans = Math.max(ans, prices[t]-prices[i]);
    //         }
    //     }
    // }

    if (prices.length < 2) {
        return 0;
    }

    let max = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min);
        min = Math.min(min, prices[i]);
    }

    return max;
};
// @lc code=end

