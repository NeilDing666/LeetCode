/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] Merge Two Binary Trees
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }
    let ans = new TreeNode(root1.val + root2.val);
    ans.left = mergeTrees(root1.left, root2.left);
    ans.right = mergeTrees(root1.right, root2.right);
    return ans;
};
// @lc code=end

