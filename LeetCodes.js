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

// 













