/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

*/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
    if(beginWord === endWord || !wordList.includes(endWord)) return 0;
    
    let wordSet = new Set(wordList);
    let queue = [];
    queue.push([beginWord, 1]);
    
    while(queue.length > 0){
        let curSetArr = queue.shift()
        let curWord = curSetArr[0],
            curCount = curSetArr[1];
        
        for (const word of wordSet){
            if(compareWords(curWord, word)){
                if(word === endWord) return curCount+1;                
                wordSet.delete(word)
                queue.push([word, curCount+1]);
            }
        }
    }
    
    return 0;

    function compareWords(word1, word2){
        let wordCount = 0;
        for(let i = 0; i < word1.length; i++){
            if(word1[i] !== word2[i]){
                wordCount++;
            }
            if (wordCount === 2) return false;
        }
        return true;
    }
};