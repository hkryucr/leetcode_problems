/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // DFS        
    if (root == null) return false
    // go down from the root to leaf and sum up all values
    sum = sum-root.val;
    
    if (root.left == null && root.right == null && sum == 0){
        return true;
    }

    if (root.left != null){
        if (hasPathSum(root.left, sum) == true){
            return true;
        }
    }
    
    if (root.right != null){
        if(hasPathSum(root.right, sum) == true){
            return true;
        }  
    }
    return false    
};
