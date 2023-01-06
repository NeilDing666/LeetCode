/*
 * @lc app=leetcode id=1311 lang=typescript
 *
 * [1311] Get Watched Videos by Your Friends
 */

// @lc code=start
function watchedVideosByFriends(
  watchedVideos: string[][],
  friends: number[][],
  id: number,
  level: number
): string[] {
  const visited = new Array(friends.length).fill(0);
  let queue = [id];
  visited[id] = 1;

  while (level--) {
    const next: number[] = [];
    for (const id of queue) {
      for (const newId of friends[id]) {
        if (visited[newId] === 0) {
          next.push(newId);
          visited[newId] = 1;
        }
      }
    }
    queue = next;
  }
  const freq = new Map();
  for (const id of queue) {
    for (const video of watchedVideos[id]) {
      freq.set(video, freq.has(video) ? freq.get(video) + 1 : 1);
    }
  }
  return Array.from(
    [...freq]
      .sort((a, b) => (a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : a[1] - b[1]))
      .map((ele) => ele[0])
  );
}
// @lc code=end
