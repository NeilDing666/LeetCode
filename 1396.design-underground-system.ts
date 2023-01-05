/*
 * @lc app=leetcode id=1396 lang=typescript
 *
 * [1396] Design Underground System
 */

// @lc code=start
type LT = {
  Location: string;
  Time: number;
};

class UndergroundSystem {
  public checkInMap: Map<number, LT>;
  public timeMap: Map<string, number[]>;

  constructor() {
    this.checkInMap = new Map();
    this.timeMap = new Map();
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.checkInMap.set(id, { Location: stationName, Time: t });
  }

  checkOut(id: number, stationName: string, t: number): void {
    let checkInPax: LT | undefined;

    if (this.checkInMap.get(id) !== undefined) {
      checkInPax = this.checkInMap.get(id);
    } else {
      return;
    }

    if (checkInPax === undefined) {
      return;
    }

    if (
      this.timeMap.get(checkInPax.Location + " " + stationName) === undefined
    ) {
      this.timeMap.set(checkInPax.Location + " " + stationName, [
        t - checkInPax.Time,
      ]);
    } else {
      let timeAvg = this.timeMap.get(checkInPax.Location + " " + stationName);

      if (timeAvg === undefined) {
        return;
      }
      timeAvg.push(t - checkInPax.Time);
    }
  }

  getAverageTime(startStation: string, endStation: string): number {
    const times = this.timeMap.get(startStation + " " + endStation);
    if (!times) {
      return 0;
    }
    return times.reduce((pre, cur) => pre + cur) / times.length;
  }
}

/**
 * Test Case
 * ["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]\n[[],[45,"a",3],[32,"aa",8],[27,"a",10],[45,"ab",15],[27,"ab",20],[32,"b",22],["aa","b"],["a","ab"],[10,"a",24],["a","ab"],[10,"ab",38],["a","ab"]]
 */

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end
