/*
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]] 
Explanation: The first 3 pairs are returned from the sequence: 
             [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [1,1],[1,1]
Explanation: The first 2 pairs are returned from the sequence: 
             [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
Example 3:

Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [1,3],[2,3]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

const kSmallestPairs = (nums1, nums2, k) => {
    if (nums1.length == 0 || nums2.length == 0) return []

    // method
    // [i1, i2, i3] // [j1, j2, j3];
    // Find the smallest pairs
    // i1 j1 first => add 
    
    // create sum variable.
    let sum, i, j;
    i = 0;
    j = 0;
    let resArr = [];
    if (k < nums1.length * nums2.length){
        k == nums1.length * nums2.length
    }
    // while    
    while(k > 0){  
        sum = nums1[i] + nums2[j];
        resArr.push([nums1[i], nums2[j]])            
        k--;

        // i1 j2 / i2 j1 
        if (nums1[i+1] != undefined && nums1[i+1] <= nums2[j+1]){
            i++;
        } else if (nums2[j+1] != undefined){
            j++;
        }
    }
    return resArr;    
};

console.log(kSmallestPairs([1,7,11], [2,4,6], 3));
console.log(kSmallestPairs([-1,0,1], [-3,-2,-1], 5));
console.log(kSmallestPairs([-1,0,1], [-3,-2,-1], 1));
console.log(kSmallestPairs([0,0,0], [0,0,0], 4));

// clarify space and time complexity 
// edge cases
// 