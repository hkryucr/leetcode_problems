/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = function(nums, k) {
    let counterObj = {};
    for(let i = 0; i < nums.length; i++){
        if(counterObj[nums[i]] == undefined){
            counterObj[nums[i]] = 1;
        } else {
            counterObj[nums[i]]++ ;
        }
    }
    return Object.keys(counterObj).sort((a,b) => counterObj[b] - counterObj[a]).slice(0, k)
}

// Time complexity is O(2n) and Space Complexity is O(n);