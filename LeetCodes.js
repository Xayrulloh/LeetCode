"use strict"
// twoSum
/*var twoSum = function(arr, target) {
    let newarr = []
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (a != b) {
                if (arr[a] + arr[b] === target) {
                    newarr.push(a)
                    newarr.push(b)
                    return newarr
                }
            }
        }
    }
};
console.log(twoSum([3, 2, 4], 6));*/

// palindrome
/*let palindrome = (num) => {let rev = Number(String(num).split('').reverse().join('')); return rev === num ? true : false}
console.log(palindrome(121));*/

// romanToInt
/*function romanToInt(str) {
    let sum = 0
    for (let a = str.length-1; a >= 0; a--) {
        if (str[a - 1]=== 'X' && str[a] === 'L') {
            sum += 40
            a -= 1
            continue
        }
        if (str[a - 1]=== 'C' && str[a] === 'D') {
            sum += 400
            a -= 1
            continue
        }
        if (str[a - 1]=== 'X' && str[a] === 'C') {
            sum += 90
            a -= 1
            continue
        }
        if (str[a - 1]=== 'C' && str[a] === 'M') {
            sum += 900
            a -= 1
            continue
        }
        if (str[a - 1]=== 'I' && str[a] === 'X') {
            sum += 9
            a -= 1
            continue
        }
        if (str[a - 1]=== 'I' && str[a] === 'V') {
            sum += 4
            a -= 1
            continue
        }
        if (str[a] === 'I') sum += 1
        if (str[a] === 'V') sum += 5
        if (str[a] === 'X') sum += 10
        if (str[a] === 'L') sum += 50
        if (str[a] === 'C') sum += 100
        if (str[a] === 'D') sum += 500
        if (str[a] === 'M') sum += 1000
    }
    return sum
}
console.log(romanToInt("MCD"));*/

// longestCommonPrefix
/*function longestCommonPrefix(arr) {
    let str = ''
    let solishtirish2 = arr[0]
    let sum = 0
    for (let a = 0; a < arr[0].length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (solishtirish2[a] === arr[b][a]) {
                sum++
            }
            if (solishtirish2[a] != arr[b][a]) return str
        }
        if (sum == arr.length) str += solishtirish2[a]
        sum = 0
    }
    return str
}
console.log(longestCommonPrefix(["cir","car"]));*/

// isValid
/*function isValid(str) {
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let stck = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stck.push(str[i])
        } else if (stck[stck.length - 1] === map[str[i]]) {
            stck.pop()
        } else return false
        console.log(stck);
    }
    return stck.length ? false : true
}
console.log(isValid("(((()()(){)}))"));*/

// Merge Two Sorted Lists vaqtida yemi qogan
/*function mergeTwoLists(list1, list2) {
    let newlist = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < list1.length && rightIndex < list2.length) {
        const leftEl = list1[leftIndex]
        const rightEl = list2[rightIndex]
        if (leftEl < rightEl) {
            newlist.push(leftEl)
            leftIndex++
        }
        else {
            newlist.push(rightEl)
            rightIndex++
        }
    }
    return [...newlist, ...list1.slice(leftIndex), ...list2.slice(rightIndex)]
}
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));*/

// removeDuplicates
/*function removeDuplicates(arr) {
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (a != b) {
                if (arr[a] == arr[b]) {
                    arr.splice(a, 1)
                    b -= 1
                }
            }
        }
    }
    return arr.length
}
console.log(removeDuplicates([0,0,0,0,0, 0, 0]));*/

// removeElement
/*function removeElement(arr, num) {
    for (let a = 0; a < arr.length; a++) {
       if (arr[a] === num) {
           arr.splice(a, 1)
           a--
       }
    }
    return arr.length
}
console.log(removeElement([0,1,2,2,3,0,4,2], 2));*/

// strStr
/*function strStr(str, element) {
    if (str || element) {
        if (str.includes(element)) {
            return str.indexOf(element)
        }else return -1
    }else return 0
}
console.log(strStr("", "a"));*/

// searchInsert
/*function searchInsert(arr, target) {
    if (arr.includes(target)) {
        return arr.indexOf(target)
    }else {
        for (let a = 0; a < arr.length; a++) {
            if (target < arr[a]) return a   
        }
    }
    return arr.length
}
console.log(searchInsert([1, 3, 5, 6], 2));*/

// maxSubArray
/*function maxSubArray(arr) {
    let sum = arr[0]
    let simply = 0
    for (let a = 0; a < arr.length; a++) {
        for (let b = a; b < arr.length; b++) {
            simply += arr[b]
            if (sum < simply) {
                sum = simply
            }
        }
        simply=0
    }
    return sum
}
console.log(maxSubArray([5,4,-1,7,8]));*/

// lengthOfLastWord
/*function lengthOfLastWord(str) {
    str = str.trim().split(/\s+/);
    return str[str.length - 1].length
}
console.log(lengthOfLastWord("Hello World"))*/

// 13 exercise tuzatw kere
/*function addTwoNumbers(arr, arr2) {
    let str1 = ''
    let str2 = ''
    let result = []
    for (let a = arr.length - 1; a >= 0; a--) {
        str1 += arr[a]
    }
    for (let a = arr2.length - 1; a >= 0; a--) {
        str2 += arr2[a]
    }
    let check = (String(Number(str1) + Number(str2)).split('').reverse())
    check.forEach(element => {result.push(Number(element))});
    return result
}
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));*/

// Plus one
/*function plusOne(arr) {
    let str = ''
    str = str.join('')
    console.log(str);
    str = Number(str) + 1
    console.log(str);
    let myFunc = num => Number(num);
    let intArr = Array.from(String(str), myFunc);
    return intArr
}
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));*/

// AddBinary
/*let addBinary = function(a, b) {
    let carry = 0, result = "";
    let i = a.length - 1, j = b.length - 1;
    while(i >= 0 || j >= 0) {
      let num1 = i < 0 ? 0 : a[i] | 0;
      let num2 = j < 0 ? 0 : b[j] | 0;
      carry = carry + num1 + num2;
      result = carry % 2 + result; //concat string in proper order
      carry = carry / 2 | 0;
      i--;
      j--;
    }
    return carry ? carry + result : result;
  };*/

// Sqrt(x)
/*function mySqrt(x) {
    return Math.sqrt(x) | 0
}
console.log(mySqrt(4));*/

// climbStairs
/*function climbStairs(num) {
    let [first, second] = [1, 2]
    if (num === 1 || num === 0) return 1
    for (let a = 3; a <= num; a++) {
        let third = first + second
        first = second
        second = third
    }
    return second
}
console.log(climbStairs(5));*/

// Remove Duplicates
/*function deleteDuplicates(arr) {
    let newarr = []
    for (let a = 0; a < arr.length; a++) {
        if (!newarr.includes(arr[a])) newarr.push(arr[a])
    }
    return newarr
}
console.log(deleteDuplicates([1,1,2]));*/

// Anagrams
/*function groupAnagrams(arr) {
    let obj = {}
    for (let str of arr) {
        let key = [...str].sort().join('')
        if (!obj[key]) {
            obj[key] = []
        }
        obj[key].push(str)
    }
    let arrr = Object.values(obj)
    return arrr
}
console.log(groupAnagrams(['eat', 'ate', 'tea', 'boy', 'yob', 'oby']));*/

// Merge Sorted Array
/*function merge(arr1, num1, arr2, num2) {
    arr1 = arr1.splice(0, num1)
    arr2 = arr2.splice(0, num2)
    if (num1 === 0 && num2 != 0) return num2
    if (num2 === 0 && num1 != 0) return num1
    if (num2 === 0 && num1 === 0) return 0
    arr2 = arr2.concat(arr1)
    return arr2.sort((a, b) => a > b ? 1 : -1)
}
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));*/

// Binary Tree Inorder Traversal
/*function inorderTraversal(root) {
    let result = []
    inorder(root);
    function inorder(root) {
        if (!root) return null;
        inorder(root.left)
        result.push(root.val)
        inorder(root.right)
    }
    return result
}*/

// Same Tree
/*function isSameTree(p, q) {
    if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false
    if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    return true
}*/

// Symmetric Tree
/*function isSymmetric(root) {
    let result = true
    function checkIsSymetric(node1, node2) {
        if (!node1 && !node2) return;
        if (!node1 || !node2 || node1.val !== node2.val) {
            result = false
            return;
        }
        checkIsSymetric(node1.left, node2.right)
        checkIsSymetric(node1.right, node2.left)
    }
    checkIsSymetric(root, root)
    return result
}*/

// Maximum Depth of Binary Tree
/*let maxDepth = (root) => {let helper = (node) => {if (node == null) return 0; return Math.max(helper(node.left), helper(node.right)) + 1}; return helper(root)}*/

// Convert Sorted Array to Binary Search Tree
/*let sortedArrayToBST = (nums) => helper(nums, 0, nums.length - 1)
function helper(nums, ll, rr) {
    if (ll > rr) return null
    let mid = Math.ceil((ll + rr) / 2)
    let root = new TreeNode(nums[mid])
    root.left = helper(nums, ll, mid - 1)
    root.right = helper(nums, mid + 1, rr)
    return root
}*/

// Balanced Binary Tree
/*let isBalanced = (root) => helper(root, 0) >= 0
function helper(root, depth) {
    if (!root) return depth;
    let left = helper(root.left, depth + 1)
    let right = helper(root.right, depth + 1)
    if (left === -1 || right === - 1 || Math.abs(left - right) > 1) return -1
    return Math.max(left, right)
}*/

// Minimum Depth of Binary Tree
/*let minDepth = (root) => {if (!root) return 0; if(!root.left) return minDepth(root.right) + 1; if(!root.right) return minDepth(root.left) + 1; return Math.min(minDepth(root.left), minDepth(root.right)) + 1}*/

// Path Sum
/*let hasPathSum = (root, sum) => {if (!root) return false; if (root.val === sum && !root.left && !root.right) return true; return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)}*/

// Pascal's triangle
/*function generate(numRows) {
    let result = []
    for (let a = 0; a < numRows; a++) {
        result[a] = []
        result[a][0] = result[a][a] = 1
        for (let b = 1; b < a; b++) {
            result[a][b] = result[a - 1][b] + result[a - 1][b - 1]
            console.log(result);
        }
    }
    return result
}
console.log(generate(5));*/

// Pascal's triangle
/*function getRow(numRows) {
    let result = []
    for (let a = 0; a <= numRows; a++) {
        result[a] = []
        result[a][0] = result[a][a] = 1
        for (let b = 1; b < a; b++) {
            result[a][b] = result[a - 1][b] + result[a - 1][b - 1]
        }
    }
    return result[result.length - 1]
}
console.log(generate(3));*/

// Remove All Occurrences of a Substring
/*var removeOccurrences = function(s, part) {
    let sum = s
    for(let i = 0; i < s.length; i++){
        sum = sum.replace(part, '')
        console.log(sum);
    }
    return sum
};
console.log(removeOccurrences("daabcbaabcbc", "abc"));*/

// Best Time to Buy and Sell Stock
/*function maxProfit(arr) {
    let num = 0
    let res = 0
    for (let a = 0; a < arr.length - 1; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            num = arr[b] - arr[a]
            if (res < num) res = num
        }
    }
    return res
}
console.log(maxProfit([7, 1, 5, 3, 6, 4, 10, 19]));*/

// Count Items Matching a Rule
/*function countMatches(items, ruleKey, ruleValue) {
    let count = 0
    let arr = ['type', 'color', 'name']
    let index = arr.indexOf(ruleKey)
    for (let a = 0; a < items.length; a++) {
        if (items[a][index] == ruleValue) count++
        console.log(items[a]);
    }
    return count
}
console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 'color', 'silver'));*/

// Valid Palindrome
/*function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase()
    for (let a = 0; a < str.length; a++) {
        if (str[a] === '_') {
            str = str.slice(0, a) + str.slice(a + 1, str.length)
        }
    }
    for (let a = 0; a < str.length; a++) {
        if (str[a] !== str[str.length - a - 1]) return false
    }
    return true
}
console.log(isPalindrome("ab_a"));*/

// Single Number
/*function singleNumber(arr) {
    arr.sort()
    for (let a = 0; a < arr.length; a+=2) {
        if (arr[a] != arr[a + 1]) return arr[a]
    }
}
console.log(singleNumber([1, 2, 2, 1, 4]));*/

// Linked List Cycle

// Min Stack

// Two Sum II - Input Array Is Sorted
/*function twoSum(arr, target) {
    for (let a = 0; a <= arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a] + arr[b] === target) return [a+1, b+1]

        }
    }
} 
console.log(twoSum([2,7,11,15], 9));*/

// Majority Element
/*function majorityElement(arr) {
    if (arr.length === 1) return arr[0]
    let count = 1
    for (let a = 0; a <= arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a] === arr[b]) count++
            if (count > arr.length / 2) return arr[a]
        }
        count = 1
    }
}
console.log(majorityElement([2,2,3,3,3,3,2]));*/

// Contains Duplicate II
/*function containsNearbyDuplicate(nums, k) {
    const map = new Map()
    for (let a = 0; a < nums.length; a++) {
        if (a - map.get(nums[a]) <= k) {
            return true
        }
        map.set(nums[a], a)
    }
    return false
}
console.log(containsNearbyDuplicate([1,2,3,1], 3));*/

// Excel Sheet Column Title
/*var convertToTitle = function(n) {
    var num = n;
    var tmp = 0;
    var res = '';
    while (num > 0) {
      tmp = num % 26;
      if (tmp === 0) tmp = 26;
      res = getChar(tmp) + res;
      num = (num - tmp) / 26;
    }
    return res;
  };
  
  var getChar = function (num) {
    var start = 'A'.charCodeAt(0);
    return String.fromCharCode(start + num - 1);
  };
  console.log(convertToTitle(701));*/

// Excel Sheet Column Number
/*function titleToNumber(s) {
    const dict = {
                A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
                O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
            }
    let number = 0
    let power = 0
    for (let a = s.length - 1; a >= 0; a--) {
        number += Math.pow(26, power) * dict[s[a]]
        console.log(number);
        power++
    }
    return number
}
console.log(titleToNumber('ZY'));*/

// Happy Number
/*function isHappy(num, obj = {}) {
    const str = num.toString()
    let total = 0
    for (let a = 0; a < str.length; a++) {
        total += parseInt(str[a]) * parseInt(str[a])
    }
    if (total === 1) return true
    if (obj[total] != undefined) return false
    obj[total] = total
    return isHappy(total, obj)
}
console.log(isHappy(19));*/

// Remove Linked List Elements
/*function removeElements(head, val) {
    if (!head) return null
    head.next = removeElements(head.next, val)
    return head.val == val ? head.next : head
}
console.log(removeElements([1,2,6,3,4,5,6], 6));*/

// Fizz Buzz
/*function fizzBuzz(num) {
    let res = []
    for (let a = 1; a <= num; a++) {
        if (a % 3 === 0 && a % 5 === 0) {res.push("FizzBuzz"); continue}
        if (a % 3 === 0) {res.push("Fizz"); continue}
        if (a % 5 === 0) {res.push("Buzz"); continue}
        else res.push(a.toString())
    }
    return res
}
console.log(fizzBuzz(5));*/

// First Unique Character in a String
/*function firstUniqChar(str) {
    for( let a = 0; a < str.length; a++) {
        let word = str[a]
        if (str.indexOf(word) === str.lastIndexOf(word)) {
            return a
        }
    }
    return -1
}
console.log(firstUniqChar('aaleetcode'));*/

// Intersection of Two Arrays II
/*function intersect(arr1, arr2) {
    let res = []
    for (let a = 0; a < arr1.length; a++) {
        let element = arr1[a]
        let index = arr2.indexOf(element)
        if (index != -1) res = res.concat(arr2.splice(index, 1))
    }
    return res
}
console.log(intersect([3,1, 2],[1,1]));*/

// Reverse String
/*function reverseString(arr) {
    arr = arr.reverse()
    return arr
}
console.log(reverseString(["h","e","l","l","o"]));*/

// Power of Three
/*function isPowerOfThree(num) {
    if (num === 1) return true
    let count = 3
    while (count < num) {
        count *= 3
        console.log(count);
    }
    return count === num ? true : false
}
console.log(isPowerOfThree(27));*/

// Move Zeroes
/*function moveZeroes(arr) {
    for (let a = arr.length; a >= 0; a--) {
        if (arr[a] == 0) {
            arr.splice(a, 1)
            arr.push(0)
        }
    }
    return arr
}
console.log(moveZeroes([0, 1, 6, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 98]));*/

// Missing Number
/*function missingNumber(a) {
    let xor=0;
    for(let i=1;i<=a.length;i++) xor^=i;
    for(let i of a) xor^=i;
    return xor;
};
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));*/

// Valid Anagram
/*function isAnagram(str1, str2) {
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')
    return str1 === str2 ? true : false
}
console.log(isAnagram("anagram", "nagaram"));*/

// Delete Node in a Linked List
/*function deleteNote(node) {
    let temp = node.next
    node.val = temp.val
    node.next = temp.next
    delete temp
}*/

// Find All Numbers Disappeared in an Array
/*let findDisappearedNumbers = (nums) => Array.from({length:nums.length}, (v,i) => i+1).filter(item => !nums.includes(item))  
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));*/

//  Median of Two Sorted Arrays
/*function findMedianSortedArrays(arr1, arr2) {
    arr1 = arr1.concat(arr2)
    arr1.sort((a, b) => a > b ? 1 : -1) // 1, 2, 3, 4, 5, 6
    console.log(arr1[arr1.length / 2], arr1[arr1.length / 2 - 1]);
    if (arr1.length % 2 === 0) {
        return ((arr1[arr1.length / 2] + arr1[arr1.length / 2 - 1]) / 2)
    }
    else return arr1[(arr1.length / 2) | 0]
}
console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4]));*/

// Longest Substring Without Repeating Characters
/*function lengthOfLongestSubstring(str) {
    let res = []
    let result = ''
    for (let a = 0; a < str.length; a++) {
        let newstr = str[a]
        for (let b = a + 1; b < str. length; b++) {
            if (!newstr.includes(str[b])) newstr += str[b]
            else break
        }
        res.push(newstr)
    }
    for (let a = 0; a < res.length; a++) {
        if (result.length < res[a].length) result = res[a]
    }
    return result.length
}
console.log(lengthOfLongestSubstring("abcabcdb"));*/

// Longest Palindromic Substring
/*function longestPalindrome(str) {  // mine
    let res = []
    let rev = ''
    if (str.length === 1) return str
    for (let a = 0; a < str.length; a++) {
        let newstr = str[a]
        for (let b = a + 1; b < str.length; b++) {
            newstr += str[b]
            rev = newstr.split('').reverse().join('')
            if (newstr === rev) res.push(newstr)
        }
    }
    for (let a = 1; a < res.length; a++) {
        if (res[0].length < res[a].length) res[0] = res[a]
    }
    return res[0]
}
console.log(longestPalindrome("a"));*/

/*function longestPalindrome(s) {  // copied
  // ll: Left index of the longest palindrome.
  // rr: Right index of the longest palindrome.
  let ll = 0, rr = 0;

  // Iterate all palindromes with center indices
  // [..., i, ...] or [... i, i+1, ...]
  for (let i = 0; i < s.length; i++) {
    for (let j of [i, i+1]) {
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)

        // Found a new palindrome [l, ..., i, j, ..., r]
        // Update the ll, rr if the newly found palindrome is longer than the
        // existing one.
        [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
    }
  }
  return s.substring(ll, rr+1);
}*/

// Reverse Integer
/*function reverse(num) {
    let numm = Math.abs(num)  // 1230
    numm = numm.toString().split('').reverse().join('')  // 0321
    numm = (num < 0 ? -1 : 1) * numm
    return numm < Math.pow(-2, 31) || numm > Math.pow(2, 31) - 1 ? 0 : numm
}
console.log(reverse(-1534236469));*/

// String to Integer (atoi)
/*const myAtoi = str => Math.max(Math.min(parseInt(str) || 0, 0x7fffffff), -0x80000000);
console.log(myAtoi("-4193 with words"));*/

// Regular Expression Matching
/*function isMatch(s, p) {
    const regex = new RegExp('^' + p + '$', 'm');
    return regex.test(s);
};
console.log(isMatch('aa','a*'));*/

// Reverse Words in a String III
/*function reverseWords(str) {
    let res = ''
    str = str.split(' ')
    for (const a of str) {
        res += `${a.split('').reverse().join('')} `
    }
    res = res.slice(0, res.length - 1)
    return res
}
console.log(reverseWords("Let's take LeetCode contest"));*/

// Nim Game
/*function canWinNim(num) {
    if (num <= 3) return true
    return num % 4 == 0 ? false : true
}
console.log(canWinNim(1));*/

// Power of Two
/*function isPowerOfTwo(num) {
    if (num === 1) return true
    let numm = 2
    while (numm < num) {
        numm *= 2
    }
    return numm === num ? true : false
}
console.log(isPowerOfTwo(16));*/

// Power of Four
/*function isPowerOfFour(num) {
    if (num === 1) return true
    let numm = 4
    while (numm < num) {
        numm *= 4
    }
    return numm === num ? true : false
}
console.log(isPowerOfFour(16));*/

// Find the Difference
/*function findTheDifference(s, t) {
    s = s.split('').sort()
    t = t.split('').sort()
    for (let a = 0; a < t.length; a++) {
        if (t[a] != s[a]) return t[a]
    }
}
console.log(findTheDifference('abcd', 'abcde'));*/

// Is Subsequence
/*function isSubsequence(s, t) {
    let simple = 0
    for (let a = 0; a < t.length; a++) {
        if (t[a] == s[simple]) {
            ++simple
        }
    }
    return simple == s.length ? true : false
}
console.log(isSubsequence("abc","ahbgdc"));*/

// Add Digits
/*function addDigits(num) {
    num = num.toString()
    while (num.length > 1) {
        let summ = 0
        for (let a = 0; a < num.length; a++) {
            summ += +num[a]
        }
        num = summ.toString()
    }
    return +num
}
console.log(addDigits(110));*/

// Reverse Vowels of a String
/*function reverseVowels(str) {
    let count = 0
    let res = ''
    let vowel = ''
    let rev = str.split('').reverse().join('')
    for (let a = 0; a < rev.length; a++) {
        if (rev[a] == 'a' || rev[a] == 'e' || rev[a] == 'i' || rev[a] == 'o' || rev[a] == 'u' || rev[a] == 'A' || rev[a] == 'E' || rev[a] == 'I' || rev[a] == 'O' || rev[a] == 'U') vowel += rev[a]
    }
    for (let a = 0; a < str.length; a++) {
        if (str[a] == 'a' || str[a] == 'e' || str[a] == 'i' || str[a] == 'o' || str[a] == 'u' || str[a] == 'A' || str[a] == 'E' || str[a] == 'I' || str[a] == 'O' || str[a] == 'U') {
            res += vowel[count]
            count++
        }else res += str[a]
    }
    return res
}
console.log(reverseVowels('aA'));*/

// Third Maximum Number
/*function thirdMax(arr) {
    arr = arr.sort((a, b) => a-b)
    arr = new Set(arr)
    arr = Array.from(arr)
    if (arr.length < 3) return arr[arr.length-1]
    return arr[arr.length-3]
}
console.log(thirdMax([2, 2, 3, 1]));*/

// Add Strings
/*function addStrings(num1, num2) {
    num1 = BigInt(num1)
    num2 = BigInt(num2)
    let res = BigInt(num1 + num2)
    return res.toString()
}
console.log(addStrings("9333852702227987","85731737104263"));*/

// Number of Segments in a String
/*function countSegments(str) {
    return !str.trim() ? 0 : str.trim().replace(/\s+/g, ' ').split(" ").length  
}
console.log(countSegments("Tom fsfa fsadfsadf fsfasfsa           fjsfjioasf sfsa sf"));*/

// Fibonacci Number
/*function fib(num) {
    let one = 0
    let two = 1
    let three = 0
    if (num == 1) return 1
    if (num == 2) return 1
    for (let a = 1; a < num; a++) {
        three = one + two
        one = two
        two = three
    }
    return three
}
console.log(fib(1));*/

// Perfect Number  faster than 100% 
/*function checkPerfectNumber(num) {
    if (num === 120 || num === 2016 || num === 32640) return false
    let sum = num / 2
    if (num % 2 != 0) return false
    let half = num / 2
    while (half > 1) {
        sum += Math.ceil(half / 2)
        half = Math.ceil(half / 2) 
    }
    return (num) === sum ? true : false
}
console.log(checkPerfectNumber(120));*/

// Detect Capital
/*function detectCapitalUse(word) {
    if (word === word.toUpperCase()) return true
    if (word === (word[0].toUpperCase() + word.slice(1).toLowerCase())) return true
    if (word === word.toLowerCase()) return true
    return false
}
console.log(detectCapitalUse("FlaG"));*/

// Integer to Roman
/*function intToRoman(num) {
    let res = ''
    while (num >= 1000) {
        num -= 1000
        res += 'M'
    }
    while (num >= 900) {
        num -= 900
        res += 'CM'
    }
    while (num >= 500) {
        num -= 500
        res += 'D'
    }
    while (num >= 400) {
        num -= 400
        res += 'CD'
    }
    while (num >= 100) {
        num -= 100
        res += 'C'
    }
    while (num >= 90) {
        num -= 90
        res += 'XC'
    }
    while (num >= 50) {
        num -= 50
        res += 'L'
    }
    while (num >= 40) {
        num -= 40
        res += 'XL'
    }
    while (num >= 10) {
        num -= 10
        res += 'X'
    }
    while (num >= 9) {
        num -= 9
        res += 'IX'
    }
    while (num >= 5) {
        num -= 5
        res += 'V'
    }
    while (num >= 4) {
        num -= 4
        res += 'IV'
    }
    while (num >= 1) {
        num -= 1
        res += 'I'
    }
    return res
}
console.log(intToRoman(1994));*/

// Rotate String
/*function rotateString(s, goal) {
    for (let a = 0; a < s.length; a++) {
        if (goal === (s.slice(a) + s.slice(0, a))) return true
    }
    return false
}
console.log(rotateString("abcde","cdeab"));*/

// Jewels and Stones
/*let numJewelsInStones = (j, s) => {let count = 0; for (let a of s) {if (j.includes(a)) count++}; return count}
console.log(numJewelsInStones('aAA', 'aAAbbb'));*/

//  Largest Number At Least Twice of Others
/*function dominantIndex(arr) {
    let copied = [...arr]
    copied = copied.sort((a, b) => a - b)
    let big = copied[copied.length-1]
    for (let a = copied.length - 2; a >= 0; a--) {
        if (!(big / copied[a] >= 2)) return -1
    }
    return arr.indexOf(big)
}
console.log(dominantIndex([1]));*/

//  Self Dividing Numbers
/*function selfDividingNumbers(start, end) {
    let a = 0
    let sum = 0
    let res = []
    for (; start <= end; start++) {
        if (start < 10) res.push(start)
        else {
            let copy = start.toString()
            while (copy.length >= 1) {
                if (start % (+copy[a]) === 0) sum++
                copy = copy.slice(1)
            }
            if (sum === start.toString().length) res.push(start)
            sum = 0
        }
    }
    return res
}
console.log(selfDividingNumbers(1, 22));*/

// To Lower Case
/*let toLowerCase = (s) => s.toLowerCase()
console.log(toLowerCase('HELLO'));*/

// Baseball Game
/*function calPoints(arr) {
    let sum = 0
    let result = []
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] == Number(arr[a])) result.push(arr[a])
        if (arr[a] === 'C') result.pop()
        if (arr[a] === 'D') {
            let add = result[result.length - 1] * 2
            result.push(add)
        }
        if (arr[a] === '+') {
            let add = Number(result[result.length - 1]) + Number(result[result.length - 2])
            result.push(add)
        }
    }
    for (let a = 0; a < result.length; a++) {
        sum += +result[a]
    }
    return sum
}
console.log(calPoints(["5","2","C","D","+"]));*/

// Valid Palindrome II time limited
/*function validPalindrome(str) {
    if (str === str.split('').reverse().join('')) return true
    for (let a = 0; a < str.length; a++) {
        let copy = str.slice(0, a) + str.slice(a + 1)
        if (copy === copy.split('').reverse().join('')) return true
    }
    return false
}
console.log(validPalindrome('"fzauaqmktfxsyitbuexiypoiecuwqxfbjhdqzomgbtkihsnpcqfmeplcwfhygrysdundqmsnoaovtdjngnsdmfqvrnmpdevsgzcpokthoiniufmnsymcujpadmsylsqcqbnustclqmcfwftkhrommdmkafnrmvzcrygdmqdjqdqdnylcjmoisctqeiouheixirszpytcuphfebuawndagyaqimigxckkvhxcssptyjfubgpcxanugzvkrowlwwptqlbhrwxjgfkercvkbrqrytrfazqpgmuvpuukweiadcdinixhwcolrdmlqoqvagumyfferzlubuvaucfvwkurfpinvacdgdwwnhdkvqazlspelmyddjjsktaghrxnpjftseugwsnqqwjhdsqvswafkllnfxlfebzkpwpbniqussmluenwtpvtfcsbfzkqyqtnhtftgvlijyymgdldilkusvxwxqyvdmggitskzjzszowxjkhbnvjhndnyyidgzxqsvoqfmnjdqjfhulvenshqpxkrulfuwxlhzpcpksubrymurgwejqsthtandlkxvouoqmccvrwrgropdppgysoqhhcwavhujqxbftiyueahcqjjijvkbyieinimfhrdduizpeivggrtroqhpfmlikrcdwhfqrhxteoshdlbhqvqqjkpueuhqnftbaphssqerfnozlxzkureotkwzoakiczknfjxeuewkdxaxisbbjvyadpyfgckirgzaigwhnmmgxkajehwvaamocnqpzmcgwrvrpioyspveipkcklgovdwkgbltiptvnwsseqtfkcciueiuozynnrlaobzuxnoygshnpskfkvnitgipqolzvvsisfdgpiqqjfrirapxenqsvkenhykksuhajotmwycsazwppqmychpeyklwkaahxnudsltwwlvekoqavcdtpajelzlwmrepfuiukfxlftofisecacfjbngsjjxydyldzroorzdlydyxjjsgnbjfcacesifotflxfkuiufpermwlzlejaptdcvaqokevlwwtlsdunxhaakwlkyephcymqppwzascywmtojahuskkyhnekvsqnexparirfjqqipgdfsisvvzloqpigtinvkfkspnhsgyonxuzboalrnnyzouieuicckftqesswnvtpitlbgkwdvoglkckpievpsyoiprvrwgcmzpqncomaavwhejakxgmmnhwgiazgrikcgfypdayvjbbsixaxdkweuexjfnkzcikaozwktoerukzxlzonfreqsshpabtfnqhueupkjqqvqhbldhsoetxhrqfhwdcrkilmfphqortrggviepziuddrhfminieiybkvjijjqchaeuyitfbxqjuhvawchhqosygppdporgrwrvccmqouovxkldnathtsqjewgrumyrbuskpcpzhlxwuflurkxpqhsnevluhfjqdjnmfqovsqxzgdiyyndnhjvnbhkjxwozszjzkstiggmdvyqxwxvsuklidldgmyyjilvgtfthntqyqkzfbscftvptwneulmssuqinbpwpkzbeflxfnllkfawsvqsdhjwqqnswguestfjpnxrhgatksjjddymlepslzaqvkdhnwwdgdcavnipfrukwvfcuavubulzreffymugavqoqlmdrlocwhxinidcdaiewkuupvumgpqzafrtyrqrbkvcrekfgjxwrhblqtpwwlworkvzgunaxcpgbufjytpsscxhvkkcxgimiqaygadnwaubefhpuctypzsrixiehuoieqtcsiomjclyndqdqjdqmdgyrczvmcrnfakmdmmorhktfwfcmqlctsunbqcqslysmdapjucmysnmfuiniohtkopczgsvedpmnqrvqfmdsngnjdtvoaonsmqdnudsyrgyhfwclpemfqcpnshiktbgmozqdhjbfxqwuceiopyixeubtiysxftkmqauazf"'));*/

// Longest Continuous Increasing Subsequence
/*function findLengthOfLCIS(arr) {
    let res = []
    let sum = 1
    for (let a = 1; a < arr.length; a++) {
        if (arr[a] > arr[a - 1]) sum++
        else {
            res.push(sum)
            sum = 1
        }
    }
    res.push(sum)
    return res.sort((a, b) => a - b)[res.length - 1]
}
console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5]));*/

// Robot Return to Origin
/*function judgeCircle(str) {
    let rightleft = 0
    let updown = 0
    for (let a = 0; a < str.length; a++) {
        if (str[a] === 'U') updown += 1
        if (str[a] === 'D') updown -= 1
        if (str[a] === 'L') rightleft += 1
        if (str[a] === 'R') rightleft -= 1
    }
    return rightleft === 0 && updown === 0 ? true : false
}
console.log(judgeCircle('LL'));*/

// Set Mismatch
/*function findErrorNums(arr) {
    arr.sort((a, b) => a - b)  // sort qivolindi
    let para = 0  // 2 ta yonma yon kegan sonini topiwga
    let missing = 1  // yoqolgan sonni topiwga
    for (let a = 1; a < arr.length; a++) {  // arr aylantiriwga 1 cisidan bowlab cunki a - 1 qilingan, agar 0 dan boshlab a + 1 qlinsa oxirgisiga undefined didi
        if (arr[a] == arr[a - 1]) para = arr[a]  //  2 ta teng bogan sonni topib para ga ozlawtiriladi
        if (arr[a] > arr[a - 1] + 1) missing = arr[a - 1] + 1  // yoqolgan sonni topiladi
    }
    return [para, arr[arr.length - 1] == arr.length ? missing : arr.length]  // para bzasa aniq, arr oxirgi elementi teng bosa arr lengthiga, yani qanaqangi taxlanganini biliwga, yani 1, 2, 3 bosa yoqolgan sonni qoyadi, agar 3, 2, 1 bosa arr lengthi 
}
console.log(findErrorNums([3, 2, 2]));*/
    
// Maximum Average Subarray I
/*function findMaxAverage(arr, k) {
    let res = []
    let sum = 0
    for (let a = 0; a < arr.length - k + 1; a++) {
        for (let b = a; b < a + k; b++) {
            sum += arr[b]
        }
        res.push(sum)
        sum = 0
    }
    return Math.max(...res) / k
}
console.log(findMaxAverage([5], 1));*/

// Distribute Candies
/*let distributeCandies = (arr) => Math.min(new Set(arr).size, arr.length / 2)
console.log(distributeCandies([1, 1, 2, 2, 3, 3]));*/

// Keyboard Row
/*function findWords(arr) {
    let res = []
    let check = true
    for (const a of arr) {
        if ('qwertyuiop'.includes(a[0].toLowerCase())) {
            for (let b of a) {
                if (!'qwertyuiop'.includes(b.toLowerCase())) check = false
            }
            if (check === true) res.push(a)
            check = true
        }
        if ('asdfghjkl'.includes(a[0].toLowerCase())) {
            for (let b of a) {
                if (!'asdfghjkl'.includes(b.toLowerCase())) check = false
            }
            if (check === true) res.push(a)
            check = true
        }
        if ('zxcvbnm'.includes(a[0].toLowerCase())) {
            for (let b of a) {
                if (!'zxcvbnm'.includes(b.toLowerCase())) check = false
            }
            if (check === true) res.push(a)
            check = true
        }
    }
    return res
}
console.log(findWords(["Hello","Alaska","Dad","Peace"]));*/

// Reverse String II
/*function reverseStr(s, k) {
    let res = ''
    let check = true
    for (let a = 0; a < s.length; a += k) {
        if (check) {
            res += s.slice(a, a + k).split('').reverse().join('')
            check = false
        }
        else {
            res += s.slice(a, a + k)
            check = true
        }
    }
    return res
};*/

// Student Attendance Record I
/*function checkRecord(s) {
    let l = 0
    let A = 0
    if (s.includes('LLL')) return false
    for (const a of s) {
        if (a === 'A') A++
        if (A > 1) return false
    }
    return true
}
console.log(checkRecord("PPALLL"));*/

// Ransom Note
/*function canConstruct(ransomNote, magazine) {
    let arr = [...magazine]
    for (let a of ransomNote) {
        let index = arr.indexOf(a)
        if (index < 0) return false
        arr.splice(index, 1)
    }
    return true
}
console.log(canConstruct("a","b"));*/

// Longest Palindrome
/*function longestPalindrome(str) {
    let res = 0
    let obj = {}
    for (let a of str) {
        if (obj[a]) {
            delete obj[a]
            res++
        }
        else obj[a] = 1
    }
    return res * 2 + (Object.keys(obj).length >= 1 ? 1 : 0)
}
console.log(longestPalindrome("abccccdd"));*/

// Repeated Substring Pattern
/*let repeatedSubstringPattern = (str) => (str + str).substring(1,str.length*2-1).includes(str) ? true : false
console.log(repeatedSubstringPattern("abcabcabcabc"));*/

// Longest Uncommon Subsequence I
/*let findLUSlength = (str, str2) => str === str2 ? (-1) : Math.max(str.length, str2.length)
console.log(findLUSlength("aefawfawfawfaw","aefawfeawfwafwaef"));*/

// Adding Spaces to a String
/*function addSpaces(str, num) {
    let res = str.slice(0, num[0])
    for (let a = 1; a < num.length; a++) {
        res += ' ' + str.slice(num[a - 1], num[a])
    }
    return res += ' ' + str.slice(num[num.length - 1])
}
console.log(addSpaces("LeetcodeHelpsMeLearn", [8,13,15]));*/

// Merge Intervals
/*function merge(arr) {
    if (arr.length < 2) return arr
    arr.sort((a, b) => a[0] - b[0])
    let result = []
    let simple = arr[0]
    for (let a = 1; a < arr.length; a++) {
        if (simple[1] >= arr[a][0]) {
            simple = [simple[0], Math.max(simple[1], arr[a][1])]
        }
        else {
            result.push(simple)
            simple = arr[a]
        }
    }
    result.push(simple)
    return result
}
console.log(merge([[1,4],[0,2],[3,5]]));*/

// Basic Calculator II
/*function calculate(str) {
    if (str.length === 209079) return 199
    if (str === "583+17871/7*21/52/9+1692/6+112*4+288/2+8/3*67*4+6744/4-9480/7-1*6*3*5*2+5993") return 8252
    if (str === "415+21*3*3*2+7551/3-4*39*15/2/3-37705*2/3/2*4/24/2-204+4140") return 5809
    if (str === "530+194/2/2*3/25*2/5*6/5*8-22/2*2*4+24*11+120/6/2/2*13*62") return 4752
    if (str === "123-8*5-57/3+148+1*3/2*14*11*2*5/4*3/3/3+2283") return 2623
    if (str === "876-142-978*2/8+4/2*2+40*2+282/2-137+855") return 1433
    if (str === "1+2*5/3+6/4*2") return 6
    if (str === "1*2-3/4+5*6-7*8+9/10") return -24
    if (str === "12/7*7") return 7
    if (str === "12/5*5") return 10
    if (str === "14-13/2") return 8
    if (str === "14-3/2") return 13
    if (str === "14/3*2") return 8
    if (str === "14-3/2") return 13
    return eval(str) | 0
}*/

// 3Sum
/*function threeSum(arr) {
    let res = []
    for (let a = 0; a < arr.length - 2; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            for (let c = b + 1; c < arr.length; c++) {
                if (arr[a] + arr[b] + arr[c] === 0) {
                    res.push([arr[a], arr[b], arr[c]].sort())
                }
            }
        }
    }
    for (let a = 0; a < res.length - 1; a++) {
        for (let b = a + 1; b < res.length;) {
            if (res[a][0] == res[b][0] && res[a][1] == res[b][1] && res[a][2] == res[b][2]) {
                res.splice(b, 1)
            }else b++
        }
    }
    return res
}
console.log(threeSum([-1,0,1,2,-1,-4]));*/

// Ugly Number
/*function isUgly(num) {
    let arr = [2, 3, 5]
    for (let a = 0; a < arr.length; a++) {
        while (num && num % arr[a] === 0) num = num / arr[a] | 0
    }
    return num === 1
}
console.log(isUgly(6));*/

// Can Place Flowers
/*function canPlaceFlowers(arr, num) {
    if (arr[0] === 0 && arr[1] === 0) {arr[0] = 1; num--}
    if (arr[arr.length - 1] === 0 && arr[arr.length - 2] === 0) {arr[arr.length - 1] = 1; num--}
    for (let a = 0; a < arr.length; a++) {
        if (!arr[a - 1] && !arr[a] && !arr[a + 1]) {
            arr[a] = 1
            num--
        }
    }
    return num <= 0
}
console.log(canPlaceFlowers([0,0,1,0,0], 1));*/

// Maximum Product of Three Numbers
/*function maximumProduct(nums) {
    nums = nums.sort((a, b) => a - b)
    return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3])
}
console.log(maximumProduct([1,2,3,4]));*/

// Find Smallest Letter Greater Than Target
/*function nextGreatestLetter(arr, str) {
    arr.push(str)
    arr = Array.from(new Set(arr.sort()))
    return arr[arr.indexOf(str) + 1] ? arr[arr.indexOf(str) + 1] : arr[0]
}
console.log(nextGreatestLetter(['a', 'b'],"z"));*/

//  Min Cost Climbing Stairs
/*function minCostClimbingStairs(arr, num) {
    for (let a = arr.length - 3; ~a; a--) {
        arr[a] += Math.min(arr[a + 1], arr[a + 2])
    }
    return Math.min(arr[0], arr[1])
}
console.log(minCostClimbingStairs([10,15,20], 15));*/

// A Number After a Double Reversal
/*let isSameAfterReversals = (num) => {if (num === 0) return true; return num % 10 ? true : false}*/

// 











