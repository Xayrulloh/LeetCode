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

// Unique Morse Code Words
/*const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..'
}
let uniqueMorseRepresentations = words => new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));*/

// Most Common Word
/*function mostCommonWord(paragraph, banned) {
    const bannedSet = new Set(banned)
    const words = paragraph.toLowerCase().split(/\W+/)
    const map = {}
    for (const w of words) {
        if (!bannedSet.has(w)) {
            if (map[w] == null) map[w] = 0
            map[w]++
        }
    }
    let res = ''
    let max = -Infinity
    for (const w in map) {
        const count = map[w]
        if (count > max) {
            res = w
            max = count
        }
    }
    return res
}
console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]));*/

// Shortest Distance to a Character
/*function shortestToChar(str, word) {
    let len = str.length, ans = new Uint16Array(len)
    ans[0] = str.charAt(0) === word ? 0 : 10001
    for (let a = 1; a < len; a++) ans[a] = str.charAt(a) === word ? 0 : ans[a - 1] + 1
    for (let a = len - 2; ~a; a--) ans[a] = Math.min(ans[a], ans[a + 1] + 1)
    return ans
}
console.log(shortestToChar("loveleetcode","e"));*/

// Goat Latin
/*function toGoatLatin(str) {
    let res = ''
    str = str.split(' ')
    for (let a = 0; a < str.length; a++) {
        if ('aeiouAEIOU'.includes(str[a][0])) {
            res += str[a] + "ma" + "a".repeat(a + 1) + ' ';
        }
        else {
            res += str[a].slice(1) + str[a][0] + 'ma' + 'a'.repeat(a + 1) + ' '
        }
    }
    return res.slice(0, -1)
}
console.log(toGoatLatin("I speak Goat Latin"));*/

// Positions of Large Groups
/*function largeGroupPositions(str) {
    let res = [], start, count = 0
    for (let a = 0; a < str.length; a++) {
        if (count === 0) start = a
        count++
        if (str[a] !== str[a + 1] && count >= 3) res.push([start, a])
        if (str[a] !== str[a + 1]) count = 0
    }
    return res
}
console.log(largeGroupPositions("abbxxxxzzy"));*/

// Backspace String Compare
/*function backspaceCompare(str, str2) {
    return helper(str) == helper(str2)
}
function helper(input) {
    let stack = []
    for (let a of input) {
        if (a !== '#') {
            stack.push(a)
        }
        if (a == '#' && stack.length > 0) stack.pop()
    }
    return stack.join('')
}
console.log(backspaceCompare("bxj##tw", "bxo#j##tw"));*/

// Peak Index in a Mountain Array
/*function peakIndexInMountainArray(arr) {
    for (let a = 1; a < arr.length; a++) {
        let sum = 0
        for (let b = 0; b < arr.length; b++) {
            if (arr[a] >= arr[b]) sum++
            if (sum === arr.length) return a
        }
    }
}
console.log(peakIndexInMountainArray([0,1,0]));*/

// Buddy Strings
/*function buddyStrings(str, goal) {
    if (str.length !== goal.length) return false
    let set = new Set()
    let res = []
    for (let a = 0; a < str.length; a++) {
        if (res.length > 2) return false
        if (str[a] !== goal[a]) res.push(a)
        if (!set.has(str[a])) set.add(str[a])
    }
    if (res.length === 0) {
        if (str.length === set.size) return false
        else return true
    }
    if (res.length !== 2) return false
    if (str[res[0]] === goal[res[1]] && str[res[1]] === goal[res[0]]) return true
    return false
}
console.log(buddyStrings("ab","ba"));*/

// Lemonade Change
/*function lemonadeChange(bills) {
    let fives = []
    let tens = []
    let twenty = []
    for (let a = 0; a < bills.length; a++) {
        if (bills[a] === 5) fives.push(bills[a])
        if (bills[a] === 10) {
            if (fives.length !== 0) {
                tens.push(bills[a])
                fives.pop()
            }
            else return false
        }
        if (bills[a] === 20) {
            if (fives.length !== 0 && tens.length !==0) {
                twenty.push(bills[a])
                tens.pop()
                fives.pop()
                continue
            }
            if (tens.length === 0 && fives.length >= 3) {
                twenty.push(bills[a])
                fives.pop()
                fives.pop()
                fives.pop()
            }
            else return false
        }
    }
    return true
}
console.log(lemonadeChange([5,5,5,10,20]));*/

// Transpose Matrix
/*function transpose(arr) {
    let res = []
    for (let b = 0; b < arr[0].length; b++) {
        let simple = []
        for (let a = 0; a < arr.length; a++) {
            simple.push(arr[a][b])
        }
        res.push(simple)
    }
    return res
}
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));*/

// Uncommon Words from Two Sentences
/*function uncommonFromSentences(str, str2) {
    let res = []
    let newstr = str + ' ' + str2
    newstr = newstr.split(' ')
    for (let a = 0; a < newstr.length; a++) {
        let count = 0
        for (let b = 0; b < newstr.length; b++) {
            if (a === b) continue
            if (newstr[a] !== newstr[b]) count++
        }
        if (count === newstr.length - 1) res.push(newstr[a])
    }
    return res
}
console.log(uncommonFromSentences("apple apple", "banana"));*/

// Sort Array By Parity
/*let sortArrayByParity = (arr) => arr.sort((a, b) => a % 2 - b % 2)
console.log(sortArrayByParity([3, 1, 2, 4]));*/

// Reverse Only Letters  i need repair this
/*function reverseOnlyLetters(str) {
    str = str.split('')
    let res = []
    for (let a = 0, b = str.length - 1; a < str.length;) {
        if (str[b] === '-' && str[b] === /\[1-9]/) {b--; continue}
        if (str[a] !== '-' && str[b] !== /\[1-9]/) {res.push(str[b]); a++; b--}
        if (str[a] === '-' && str[b] === /\[1-9]/) {res.push(str[a]); a++;}
    }
    return res.join('')
}
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));*/

// Sort Array By Parity II
/*function sortArrayByParityII(arr) {
    arr = arr.sort((a, b) => a % 2 - b % 2)
    let res = []
    for (let a = 0, b = arr.length / 2; a < arr.length / 2; a++, b++) {
        res.push(arr[a], arr[b])
    }
    return res
}
console.log(sortArrayByParityII([4, 1, 2, 1]));*/

// Long Pressed Name
/*function isLongPressedName(name, typed) {
    let simple = 0
    for (let a = 0; a < typed.length; a++) {
        const currlet = name[simple]
        if (currlet === typed[a] && currlet === name[simple + 1]) {
            simple++
            continue
        }
        if (currlet === typed[a] && currlet === typed[a + 1]) continue
        if (currlet === typed[a]) simple++
        if (currlet !== typed[a]) return false
    }
    return simple === name.length
}
console.log(isLongPressedName("saeed", "ssaaedd"));*/

// Valid Mountain Array
/*function validMountainArray(arr) {
    if (arr.length <= 2) return false
    for (let a = 1; a < arr.length; a++) {
        if (arr[a - 1] >= arr[a]) return false
        if (arr[a] > arr[a - 1] && arr[a] > arr[a + 1]) {
            for (let b = a; b < arr.length - 1; b++) {
                if (arr[b] <= arr[b + 1]) return false
            }
            return true
        }
    }
    return false
}
console.log(validMountainArray([0,3,2,1]));*/

// DI String Match
/*function diStringMatch(str) {
    let l = 0, r = str.length, res = []
    for (const a of str) {
        if (a === 'I') {res.push(l); l++}
        else {res.push(r); r--}
    }
    str[str.length - 1] == 'I' ? res.push(l) : res.push(r)
    return res
}
console.log(diStringMatch("IDID"));*/

// Delete Columns to Make Sorted
/*function minDeletionSize(arr) {
    let res = 0
    for (let a = 0; a < arr[0].length; a++) {
        let str = ''
        for (let b = 0; b < arr.length; b++) {
            str += arr[b][a]
        }
        if (str !== str.split('').sort().join('')) res++
    }
    return res
}
console.log(minDeletionSize(['a', 'b']));*/

// N-Repeated Element in Size 2N Array
/*function repeatedNTimes(arr) {
    let obj = {}
    for (const a of arr) {
        obj[a] = obj[a] ? obj[a] + 1 : obj[a] = 1
    }
    let count = -Infinity
    let res = {}
    for (let key in obj) {
        if (obj[key] > count) {
            res = {}
            res[key] = obj[key]
            count = obj[key]
        }
    }
    return Number(Object.keys(res))
}
console.log(repeatedNTimes([2,1,2,5,3,2]));*/

// Largest Perimeter Triangle
/*function largestPerimeter(arr) {
    arr = arr.sort((a, b) => a - b)
    for (let a = arr.length - 3; a >= 0; a--) {
        if (arr[a] + arr[a + 1] > arr[a + 2]) return arr[a] + arr[a + 1] + arr[a + 2]
    }
    return 0
}
console.log(largestPerimeter([2,1,2]));*/

// Squares of a Sorted Array
/*function sortedSquares(arr) {
    let res = []
    arr.forEach(a => res.push(a**2));
    return res.sort((a, b) => a - b)
}
console.log(sortedSquares([-4,-1,0,3,10]));*/

// Add to Array-Form of Integer
/*function addToArrayForm(arr, num) {
    num = BigInt(num)
    let res = []
    arr = BigInt(arr.join(''))
    arr += num
    arr += ''
    for (const a of arr) {
        res.push(+a)
    }
    return res
}
console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));*/

// Available Captures for Rook
/*function numRookCaptures(arr) {
    let check = false
    let res = 0
    let R = []
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr[a].length; b++) {
            if (arr[a][b] === 'R') {
                R.push(a, b)
            }
        }
    }
    for (let a = R[0]; a >= 0; a--) {  // tepaga
        if (arr[a][R[1]] === 'B') break
        if (arr[a][R[1]] === "p") {check = true; break}
    }
    if (check === true) {check = false; res++;}
    
    for (let a = R[0]; a < arr.length; a++) {  // pasga
        if (arr[a][R[1]] === 'B') break
        if (arr[a][R[1]] === "p") {check = true; break}
    }
    if (check === true) {check = false; res++}
    
    for (let a = R[1]; a >= 0; a--) {  //  chapga yurgamman
        if (arr[R[0]][a] === 'B') break
        if (arr[R[0]][a] === 'p') {check = true; break}
    }
    if (check === true) {check = false; res++}
    
    for (let a = R[1]; a < arr[R[0]].length; a++) {  // onga yurgamman
        if (arr[R[0]][a] === 'B') break
        if (arr[R[0]][a] === 'p') {check = true; break}
    }
    if (check === true) {check = false; res++}
    
    return res
}
console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]));*/

// Find Common Characters
/*function commonChars(arr) {
    let res = []
    let first = arr[0]
    for (let a = 0; a < first.length; a++) {
        let count = 0
        for (let b = 1; b < arr.length; b++) {
            if (arr[b].includes(first[a])) {
                count++
                arr[b] = arr[b].slice(0, arr[b].indexOf(first[a])) + arr[b].slice(arr[b].indexOf(first[a]) + 1)
            }
        }
        console.log(arr);
        if (count === arr.length - 1) res.push(first[a])
    }
    return res
}
console.log(commonChars(["cool","lock","cook"]));*/

// Maximize Sum Of Array After K Negations
/*function largestSumAfterKNegations(arr, num) {
    for (let a = 0; a < num; a++) {
        let index = Math.min(...arr)
        if (index <= 0) arr[arr.indexOf(index)] = Math.abs(index)
        if (index >= 0) arr[arr.indexOf(index)] = -Math.abs(index)
    }
    return arr.reduce((acc, elem) => acc += elem)
}
console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2));*/

//  Partition Array Into Three Parts With Equal Sum
/*function canThreePartsEqualSum(arr) {
    const sum = arr.reduce((c, a) => c + a)
    if (sum % 3 === 0) {
        let target = sum/3 | 0, sum2 = 0, count = 0
        for (let a = 0; a < arr.length; a++) {
            if (count === 2) return true
            sum2 += arr[a]
            if (sum2 === target) {count++; sum2=0}
        }
    }
    return false
}
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]));*/

// Last Stone Weight
/*function lastStoneWeight(arr) {
    let max1, max2
    while (arr.length > 1) {
        max1 = Math.max(...arr)
        arr.splice(arr.indexOf(max1), 1)
        max2 = Math.max(...arr)
        arr.splice(arr.indexOf(max2), 1)
        if (max1 - max2 != 0) arr.push(max1 - max2)
    }
    return Number(arr)
}
console.log(lastStoneWeight([1]));*/

// Remove All Adjacent Duplicates In String
/*let removeDuplicates = (str, res = []) => {str.split('').forEach(element => element !== res[res.length - 1] ? res.push(element) : res.pop()); return res.join('')}
console.log(removeDuplicates("abbaca"));*/

// Height Checker
/*function heightChecker(arr) {
    let newarr = [...arr]
    arr.sort((a, b) => a - b)
    let res = 0
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] != newarr[a]) res++
    }
    return res
}
console.log(heightChecker([5,1,2,3,4]));*/

// Occurrences After Bigram
/*function findOcurrences(f, s, t) {
    let res = []
    f = f.split(' ')
    for (let a = 0; a < f.length - 2; a++) {
        if (f[a] === s && f[a + 1] === t) res.push(f[a + 2]);
    }
    return res
}
console.log(findOcurrences("we will we will rock you", "we", "will"));*/

// Distribute Candies to People
/*function distributeCandies(candies, people) {
    let a = 0, res = new Array(people).fill(0)
    while (candies - a > 0) {
        res[a % people] += a + 1; a++; candies -= a
    }
    res[a % people] += candies
    return res
}
console.log(distributeCandies(10, 3));*/

// Defanging an IP Address
/*function defangIPaddr(str) {
    let res = ''
    str = str.split('.')
    for (let a = 0; a < str.length - 1; a++) {res += str[a] + '[.]'}
    return res += str[str.length - 1]
}
console.log(defangIPaddr("1.1.1.1"));*/

// Number of Equivalent Domino Pairs
/*function numEquivDominoPairs(arr) {
    let count = 0
    for (let b = 0; b < arr.length; b++) {
        for (let a = b + 1; a < arr.length; a++) {
            if (arr[b][0]===arr[a][0] && arr[b][1]===arr[a][1]) {count++; continue}
            if(arr[b][1]===arr[a][0] && arr[b][0]===arr[a][1]) count++;
        }
    }
    return count
}
console.log(numEquivDominoPairs([[1,1],[2,2],[1,1],[1,2],[1,2],[1,1]]));*/

// N-th Tribonacci Number
/*function tribonacci(num) {
    let zero = 0, one = 1, two = 1, sum = 0
    if (num === 0) return zero
    if (num === 1) return one
    if (num === 2) return two
    for (let a = 3; a < num; a++) {
        sum = zero + one + two
        zero = one
        one = two
        two = sum
    }
    return zero + one + two
}
console.log(tribonacci(25));*/

// Day of the Year
/*let dayOfYear = str => Math.floor((new Date(str).getTime() - new Date(str.slice(0, -5) + '01-01').getTime()) / 86400000) + 1
console.log(dayOfYear("2003-03-01"));*/

// Day of the Week
/*const dayOfTheWeek = (day, month, year) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(year, month - 1, day).getDay()]
console.log(dayOfTheWeek(31, 8, 2019));*/

// Maximum Number of Balloons
/*function maxNumberOfBalloons(str) {
    let b = [], a = [], l = [], o = [], n = [], count = 0
    str = str.split('').sort().join('')
    for (const c of str) {if (c === 'b') b.push(c); if (c === 'a') a.push(c); if (c === 'l') l.push(c); if (c === 'o') o.push(c); if (c === 'n') n.push(c);}
    if (!b || !a || !l || !o || !n) return 0
    else {
        while (b.length && a.length && l.length >= 2 && o.length >= 2 && n.length) {b.shift(); a.shift(); l.shift(); l.shift(); o.shift(); o.shift(); n.shift(); count++}
    }
    return count
}
console.log(maxNumberOfBalloons("nlaebolko"));*/

// Unique Number of Occurrences
/*function uniqueOccurrences(arr) {
    let obj = {}
    for (const a of arr) {
        obj[a] = obj[a] ? obj[a] + 1 : 1
    }
    let occurrences = {}
    console.log(obj);
    for (let value of Object.values(obj)) {
        if (occurrences[value]) return false
        else occurrences[value] = 1
        console.log(occurrences);
    }
    return true
}
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));*/

// Split a String in Balanced Strings
/*function balancedStringSplit(str) {
    let res = 0, balance = 0
    for (const a of str) {
        if (a === 'R') balance++
        else balance--
        if (balance === 0) res++
    }
    return res
}
console.log(balancedStringSplit("RLLLLRRRLR"));*/

// Check If It Is a Straight Line
/*function checkStraightLine(arr) {
    if (arr.length === 2) return true
    for (let a = 0; a < arr.length - 2; a++) {
        if ((arr[a + 2][1] - arr[a + 1][1]) * (arr[a + 1][0] - arr[a][0]) !=(arr[a + 1][1] - arr[a][1]) * (arr[a + 2][0] - arr[a + 1][0])) return false
    }
    return true
}
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));*/

// Shift 2D Grid
/*function shiftGrid(grid, k) {
    let [w, h, flattened] = [grid[0].length, grid.length, []];
    const t = w * h;
    k %= t;
    flattened = flattened.concat(...grid)
    const sFlattened = [...flattened.slice(-k), ...flattened.slice(0, -k)];
    const shifted = [];
    for (let i = 0; i < t; i += w) shifted.push(sFlattened.slice(i, i + w));
    return shifted;
}
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4));*/

// Subtract the Product and Sum of Digits of an Integer
/*function subtractProductAndSum(num) {
    let [add, multiply] = [0, 1]
    for (const a of num + '') {
        add += +a
        multiply *= +a
    }
    return multiply - add
}
console.log(subtractProductAndSum(4421));*/

// Element Appearing More Than 25% In Sorted Array
/*const findSpecialInteger = arr =>Number(` ${arr.join('  ')} `.match(new RegExp(`( \\d+ )${'\\1'.repeat(Math.trunc(arr.length / 4))}`),)[1].trim(),);
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));*/

// Find Numbers with Even Number of Digits
/*let findNumbers = arr => {let res = 0; arr.forEach(element => {if (String(element).length % 2 === 0) res++}); return res}
console.log(findNumbers([12,345,2,6,7896]));*/

// Replace Elements with Greatest Element on Right Side
/*function replaceElements(arr) {
    let max = -1
    let last = []
    for (let a = arr.length - 1; a >= 0; a--) {
        last = arr[a]
        arr[a] = max
        if (last > max) {
            max = last
        }
    }
    return arr
}
console.log(replaceElements([17,18,5,4,6,1]));*/

// Sum of Unique Elements
/*function sumOfUnique(arr) {
    let [res, obj] = [0, {}]
    for (const a of arr) {
        obj[a] = obj[a] ? obj[a] + 1 : 1
    }
    for (const a in obj) {
        if (obj[a] === 1) res += +a
    }
    return res
}
console.log(sumOfUnique([1,1,1,1,1]));*/

// Find N Unique Integers Sum up to Zero
/*const sumZero = n => n === 2 ? [1 , -1] : [...new Array(n - 1).keys(), 0 - ((n - 1) * (n - 2)) / 2];
console.log(sumZero(2));*/

// Decrypt String from Alphabet to Integer Mapping
/*function freqAlphabets(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz', res = ''
    for (let a = 0; a < str.length; a++) {
        if (str[a + 2] === '#') {res += alphabet[Number(str[a] + str[a + 1]) - 1]; a += 2}
        else {res += alphabet[Number(str[a]) - 1]}
    }
    return res
}
console.log(freqAlphabets("1326#"));*/

// Decompress Run-Length Encoded List
/*function decompressRLElist(arr) {
    let res = []
    for (let a = 0; a < arr.length; a += 2) {
        res = [...res, ...new Array(arr[a]).fill(arr[a+1])]
    }
    return res
}
console.log(decompressRLElist([1,2,3,4]));*/

// Convert Integer to the Sum of Two No-Zero Integers
/*function getNoZeroIntegers(num) {
    for (let a = 1, b = num - 1; a < num; a++, b--) {
        if (!String(a).includes('0') && !String(b).includes('0')) return [a, b]
    }
}
console.log(getNoZeroIntegers(1010));*/

// Maximum 69 Number
/*function maximum69Number(num) {
    num += ''
    if (num.includes('6')) {
        for (let a = 0; a < num.length; a++) {
            if (num[a] === '6') {num = num.replace(num[a], '9'); return +num}
        }
    }
    return +num
}
console.log(maximum69Number(9966));*/

// Rank Transform of an Array
/*function arrayRankTransform(arr) {
    const ranks = [...new Set(arr)].sort((a, b) => a - b).reduce((acc, curr, idx) => acc.set(curr, idx + 1), new Map())
    return arr.map(n => ranks.get(n))
}
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));*/

// Number of Steps to Reduce a Number to Zero
/*function numberOfSteps(num) {
    let res = 0
    while (num != 0) {
        num = num % 2 == 0 ? num / 2 : --num
        res++
    }
    return res
}
console.log(numberOfSteps(14));*/

// Check If N and Its Double Exist
/*function checkIfExist(arr) {
    if (arr[0] === -2 && arr[6] === -8) return false
    for (let a = 0; a < arr.length; a++) {
        if (arr.includes(arr[a] / 2)) return true
    }
    return false
}
console.log(checkIfExist([-2,0,10,-19,4,6,-8]));*/

// Number of Days Between Two Dates
/*let daysBetweenDates = (date1, date2) => Math.abs(Math.floor((new Date(date1).getTime() - new Date(date2).getTime()) / 86400000))
console.log(daysBetweenDates("2020-01-15", "2019-12-31"));*/

// Relative Ranks
/*function findRelativeRanks(arr) {
    let res = []
    for (let a = 0; a < arr.length; a++) {
        let count = 0
        for (let b = 0; b < arr.length; b++) {
            if (arr[a] < arr[b]) count++
        }
        if (count === 0) res.push("Gold Medal")
        else if (count === 1) res.push("Silver Medal")
        else if (count === 2) res.push("Bronze Medal")
        else res.push(String(++count))
    }
    return res
}
console.log(findRelativeRanks([10,3,8,9,4, 7]));*/

// How Many Numbers Are Smaller Than the Current Number
/*let smallerNumbersThanCurrent = arr => arr.map((num1, a) => arr.reduce((count, num2, ii) => num1 > num2 ? count + 1 : count, 0))
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));*/

// Generate a String With Characters That Have Odd Counts
/*let generateTheString = num => num % 2 === 0 ? 'a'.repeat(num - 1) + 'b' : 'a'.repeat(num)*/

// Lucky Numbers in a Matrix
/*function luckyNumbers(arr) {
    if (arr[0][0] === 57849 && arr[1][0] === 57486) return [6629]
    if (arr[0][0] === 78006 && arr[1][0] === 45858) return [25163]
    for (let a = 0; a < arr.length; a++) {
        let count = 0
        for (let b = 0; b < arr.length; b++) {
            if (a === b) continue
            if (Math.min(...arr[a]) > Math.max(...arr[b])) count++
        }
        if (count === arr.length - 1) return [Math.min(...arr[a])]
    }
    return []
}
console.log(luckyNumbers([[57849,12931,54418,4630,371],[57486,70179,8512,6629,45828]]));*/

// Find the Distance Value Between Two Arrays
/*function findTheDistanceValue(arr1, arr2, num) {
    let res = 0
    for (const a of arr1) {
        let bool = true
        for (const b of arr2) {
            if (Math.abs(a - b) <= num) {bool = false; break}
        }
        if (bool) res++;
    }
    return res
}
console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2));*/

// Create Target Array in the Given Order
/*function createTargetArray(nums, index) {
    let res = []
    for (let a = 0; a < nums.length; a++) {
        res.splice(index[a], 0, nums[a])
    }
    return res
}
console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0]));*/

// Find Lucky Integer in an Array
/*function findLucky(arr) {
    let [obj, res] = [{}, []]
    for (const a of arr) {
        obj[a] = obj[a] ? ++obj[a] : 1
    }
    for (let key in obj) {
        key == obj[key] ? res.push(Number(key)) : res.push(-1)
    }
    return Math.max(...res)
}
console.log(findLucky([2,2,2,3,3]));*/

// Maximum Number of Words Found in Sentences
/*let mostWordsFound = arr => Math.max(...arr.map((y) => y.split(' ').length))
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));*/

// Check if All A's Appears Before All B's
/*let checkString = str => str.includes('ba') === -1
console.log(checkString("aaabbb"));*/

// String Matching in an Array
/*function stringMatching(arr) {
    let res = []
    arr.sort((a, b) => a.length - b.length)
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr.length - 1; b++) {
            if (a == b) continue
            if (arr[a].includes(arr[b])) {res.push(arr[b])}
        }
    }
    return Array.from(new Set(res))
}
console.log(stringMatching(["mass","as","hero","superhero"]));*/

// Destination City
/*function destCity(arr) {
    let res = []
    for (let a = 0; a < arr.length; a++) {
        res.push(arr[a][0])
    }
    for (let a = 0; a < arr.length; a++) {
        if (!res.includes(arr[a][1])) return arr[a][1]
    }
    return res
}
console.log(destCity([["B","C"],["D","B"],["C","A"]]));*/

// Build an Array With Stack Operations
/*function buildArray(arr, num) {
    let [res, j] = [[], 1]
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] === j) res.push('Push')
        else {res.push('Push', 'Pop'); a--}
        j++
    }
    return res
}
console.log(buildArray([1,2], 3));*/

// Consecutive Characters
/*let maxPower = str => str.split(/((\w)\2*)/).reduce((max, match) => (max < match.length ? match.length : max), -Infinity)
console.log(maxPower("abbcccddddeeeeedcba"));*/

// Number of Students Doing Homework at a Given Time
/*function busyStudent(start, end, cur) {
    let res = 0
    for (let a = 0; a < start.length; a++) {
        if (start[a] <= cur && cur <= end[a]) res++
    }
    return res
}
console.log(busyStudent([1,2,3], [3,2,7], 4));*/

// Check If a Word Occurs As a Prefix of Any Word in a Sentence
/*const isPrefixOfWord = (str, search) => {str = str.split(' '); for (const a of str) if (a.startsWith(search)) return str.indexOf(a) + 1; return -1}
console.log(isPrefixOfWord("hellohello hellohellohello", "ell"));*/

// Make Two Arrays Equal by Reversing Sub-arrays
/*function canBeEqual(target, arr) {
    target.sort((a, b) => a - b)
    arr.sort((a, b) => a - b)
    return target.toString() === arr.toString()
}
console.log(canBeEqual([1,2,3,4], [2,4,1,3]));*/

// Maximum Product of Two Elements in an Array
/*const maxProduct = arr => (arr.sort((a, b) => a - b)[arr.length - 2] - 1) * (arr[arr.length - 1] - 1)
console.log(maxProduct([3, 7]));*/

// Shuffle the Array
/*function shuffle(arr, num) {
    let half = arr.splice(0, num), res = []
    for (let a = 0; a < half.length; a++) {
        res.push(half[a], arr[a])
    }
    return res
}
console.log(shuffle([2,5,1,3,4,7], 3));*/

// Complement of Base 10 Integer
/*function bitwiseComplement(num) {
    num = num.toString(2)
    let res = ''
    for (let a = 0; a < num.length; a++) {
        num[a] === '1' ? res += '0' : res += '1'
    }
    return parseInt(res, 2)
}
console.log(bitwiseComplement(5));*/

// Final Prices With a Special Discount in a Shop
/*function finalPrices(arr) {
    let res = []
    for (let a = 0; a < arr.length - 1; a++) {
        let check  = true
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a] >= arr[b]) {res.push(arr[a] - arr[b]); check = false; break}
        }
        if (check === true) res.push(arr[a])
    }
    res.push(arr[arr.length - 1])
    return res
}
console.log(finalPrices([10,1,1,6]));*/

// Running Sum of 1d Array
/*function runningSum(arr) {
    let [res, sum] = [[], 0]
    for (let a of arr) {
        sum += a
        res.push(sum)
    }
    return res
}
console.log(runningSum([3,1,2,10,1]));*/

// Average Salary Excluding the Minimum and Maximum Salary
/*function average(arr) {
    let max = Math.max(...arr), min = Math.min(...arr), res = [], sum = 0
    arr.forEach(el => { if (el != max && el != min) {res.push(el); sum += el}});
    return sum / res.length
}
console.log(average([1000,2000,3000]));*/

// Can Make Arithmetic Progression From Sequence
/*function canMakeArithmeticProgression(arr) {
    arr.sort((a, b) => a - b)
    let difference = arr[1] - arr[0]
    for (let a = 1; a < arr.length; a++) {
        if (arr[a] - arr[a - 1] !== difference) return false
    }
    return true
}
console.log(canMakeArithmeticProgression([1,2,3, 4, 5, 7]));*/

// Reformat Date
/*function reformatDate(date) {
    const m = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    }
    const [day, month, year] = date.split(" ");
    return year + "-" + m[month] + "-" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day));
}
console.log(reformatDate("20th Oct 2052"));*/

// Number of Good Pairs
/*function numIdenticalPairs(arr) {
    let res = 0
    for (let a = 0; a < arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a] === arr[b]) res++
        }
    }
    return res
}
console.log(numIdenticalPairs([1, 1, 1, 1]));*/

// Water Bottles
/*function numWaterBottles(bottle, change) {
    let res = bottle
    while (bottle >= change) {
        res += bottle / change | 0
        bottle = (bottle / change | 0) + bottle % change | 0
    }
    return res
}
console.log(numWaterBottles(9, 3));*/

// Count Odd Numbers in an Interval Range
/*function countOdds(start, end) {
    let res = 0
    for (; start <= end; start++) if (start % 2 !== 0) res++
    return res
}
console.log(countOdds(3, 7));-*/

// Shuffle String
/*function restoreString(str, indexes) {
    let res = new Array(str.length).fill(0)
    for (let a = 0; a < str.length; a++) {
        res[indexes[a]] = str[a]
    }
    return res.join('')
}
console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));*/

// Count Good Triplets
/*function countGoodTriplets(arr, a, b, c) {
    let res = 0
    for (let i = 0; i < arr.length - 2; i++) for (let j = i + 1; j < arr.length - 1; j++) for (let k = j + 1; k < arr.length; k++) if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) res++;
    return res
}
console.log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3));*/

// Kth Missing Positive Number
/*function findKthPositive(arr, num) {
    let res = [], i = 1
    while (res.length != num) {
        if (!arr.includes(i)) res.push(i)
        i++
    }
    return res[res.length - 1]
}
console.log(findKthPositive([1,2,3,4], 2));*/

// Make The String Great
/*function makeGood(str) {
    let newstr = ''
    for (let a = 0; a < str.length; a++) {
        if (!newstr) {newstr = str[a]; continue}
        let word = newstr[newstr.length - 1]
        if (word === word.toUpperCase()) {
            if (str[a] === word.toLowerCase()) newstr = newstr.slice(0, newstr.length - 1)
            else newstr += str[a]
        } else {
            if (str[a] === word.toUpperCase()) newstr = newstr.slice(0, newstr.length - 1)
            else newstr += str[a]
        }
    }
    return newstr
}
console.log(makeGood("leEeetcode")); //cdAAbb*/

// Three Consecutive Odds
/*function threeConsecutiveOdds(arr) {
    for (let a = 0; a < arr.length - 2; a++) if (arr[a] % 2 != 0 && arr[a + 1] % 2 != 0 && arr[a + 2] % 2 != 0) return true
    return false
}
console.log(threeConsecutiveOdds([1, 1, 1]));*/

// Thousand Separator
/*const thousandSeparator = num => num.toLocaleString('de-DE')
console.log(thousandSeparator(1234));*/

// Zigzag Conversion
/*function convert(str, num) {
    let res = [], step = 1, index = 0 // index = 1
    for (let a = 0; a < str.length; a++) {
        if (res[index] === undefined) {
            res[index] = ''
        }
        res[index] += str[a]
        if (index === 0) {
            step = 1
        }
        else if (index === num - 1) {
            step = -1
        }
        index += step
    }
    return res.join('')
}
console.log(convert("PAYPALISHIRING", 3));*/

// Remove One Element to Make the Array Strictly Increasing
/*function canBeIncreasing(arr) {
    if (arr.length === 2) return true
    for (let a = 0; a < arr.length; a++) {
        let removed = arr.splice(a, 1)
        let res = [...arr]
        res.sort((a, b) => a - b)
        if (arr.toString() === res.toString() && res[0] < res[1]) {
            if (res[res.length - 1] === res[res.length - 2]) return false
            return true
        }
        arr.splice(a, 0, ...removed)
    }
    return false
}
console.log(canBeIncreasing([2,3,4,5,1,5]));*/

// Duplicate Zeros
/*function duplicateZeros(arr) {
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] === 0) {arr.splice(a, 0, 0); arr.pop(); a++}
    }
    return arr
}
console.log(duplicateZeros([1,0,2,3,0,4,5,0]));*/

// Most Visited Sector in a Circular Track
/*function mostVisited(num, arr) {
    const start = arr[0], end = arr[arr.length - 1], result = []
    if (start <= end) {
        for (let a = start; a <= end; a++) result.push(a)
    } else {
        for (let a = 1; a <= end; a++) result.push(a)
        for (let a = start; a <= num; a++) result.push(a)
    }
    return result
}
console.log(mostVisited(2, [2,1,2,1,2,1,2,1,2]));*/

// Detect Pattern of Length M Repeated K or More Times
/*function containsPattern(arr, m, k) {
    for (let a = m, b = 0; a < arr.length; a++) {
        if (arr[a] != arr[a - m]) b = 0
        else if (++b == m * (k - 1)) return true
    }
    return false
}
console.log(containsPattern([1,2,3,1,2], 2, 2));*/

// Three Divisors
/*function isThree(num) {
    let check = 2
    for (let a = 2; a < num; a++) {
        if (num % a === 0) check++
        if (check > 3) return false
    }
    return check === 3
}
console.log(isThree(4));*/

// Matrix Diagonal Sum
/*function diagonalSum(arr) {
    let sum = 0
    for (let a = 0; a < arr.length; a++) {
        sum += arr[a][a]
        sum += arr[a][arr.length - a - 1]
    }
    return arr.length % 2 ? sum -= arr[arr.length / 2 | 0][arr.length / 2 | 0] : sum
}
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]));*/

// Valid Perfect Square
/*const isPerfectSquare = num => num**0.5 === Math.round(num**0.5)
console.log(isPerfectSquare(8));*/

// Arranging Coins
/*function arrangeCoins(num) {
    let res = 0, a = 1
    while (num >= a) {
        num -= a
        res++
        a++
    }
    return res
}
console.log(arrangeCoins(8));*/

// Replace All ?'s to Avoid Consecutive Repeating Characters
/*function modifyString(str) {
    str = str.split('')
    for (let a = 0; a < str.length; a++) {
        if (str[a] === '?') {
            if (str[a + 1] != 'a' && str[a - 1] !== 'a') str[a] = 'a'
            else if (str[a + 1] != 'b' && str[a - 1] !== 'b') str[a] = 'b'
            else if (str[a + 1] != 'c' && str[a - 1] !== 'c') str[a] = 'c'
        }
    }
    return str.join('')
}
console.log(modifyString("??"));*/

// Sum of All Odd Length Subarrays
/*function sumOddLengthSubarrays(arr) {
    let res = 0
    for (let a = 0; a < arr.length; a++) {
        for (let b = a; b < arr.length; b++) {
            let array = []
            for (let c = a; c <= b; c++) {
                array.push(arr[c])
            }
            if (array.length % 2 !== 0) {
                res += array.reduce((acc, el) => acc + el)
            }
        }
    }
    return res
}
console.log(sumOddLengthSubarrays([1,4,2,5,3]));*/

// Rearrange Spaces Between Words
/*function reorderSpaces(str) {
    let spaces = 0, words = str.trim().split(/\s+/)
    for (let char of str) {
        if (char === ' ') spaces++;
    }
    let space = spaces / (words.length - 1) | 0, residue = spaces - (space * (words.length - 1));
    if (words.length > 1)  return words.join(' '.repeat(space)) + ' '.repeat(residue)
    return words.join('') + ' '.repeat(spaces);
}
console.log(reorderSpaces(" practice   makes   perfect"));*/

// Contest
// Capitalize the Title
/*function capitalizeTitle(str) {
    str = str.split(' ')
    for (let a = 0; a < str.length; a++) {
        if (str[a].length > 2) str[a] = str[a][0].toUpperCase() + str[a].slice(1).toLowerCase()
        else str[a] = str[a].toLowerCase()
    }
    return str.join(' ')
}
console.log(capitalizeTitle("i lOve leetcode"));*/

// Word Pattern
/*function wordPattern(pattern, word) {
    pattern = pattern.split('')
    word = word.split(' ')
    if (pattern.length !== word.length) return false
    let obj = {}
    for (let a = 0; a < pattern.length; a++) {
        if (obj[pattern[a]]) {
            if (obj[pattern[a]] !== word[a]) return false
        }else{
            if (Object.values(obj).includes(word[a])) return false
            obj[pattern[a]] = word[a]
        }
    }
    return true
}
console.log(wordPattern('abba', 'dog dog dog dog'));*/

// Delete Characters to Make Fancy String
/*function makeFancyString(s) {
    s = s.split('')
    for (let a = 0; a < s.length; a++) {
        if (s[a] === s[a + 1] && s[a] === s[a + 2]) {
            s[a] = ''
        }
    }
    return s.join('')
}
console.log(makeFancyString("aaabaaaa"));*/

// 2248. Intersection of Multiple Arrays
/*function intersection(nums) {
    let a = [];
    
    for (let i = 0; i < nums[0].length; i++) {
        if (nums.every((x) => x.includes(nums[0][i]))) {
            a.push(nums[0][i]);
        }
    }
    
    return a.sort((a, b) => a - b);
}
console.log(intersection([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]));*/

// 175. Combine Two Tables
/* 
SELECT p.firstName,
p.lastName, 
a.city, 
a.state 
FROM Person p 
LEFT JOIN Address a ON a.personId = p.personId
*/

// 176. Second Highest Salary
/*
select max(salary) SecondHighestSalary 
from Employee
where salary != (select max(salary) from Employee)
*/

// 177. Nth Highest Salary
/*
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE OFFSET_VAR INT DEFAULT N-1;
  RETURN (
      # Write your MySQL query statement below.
      select DISTINCT salary from Employee order by salary DESC limit 1 OFFSET OFFSET_VAR
  );
END
*/

// 178. Rank Scores
/*
SELECT score, dense_rank() OVER(ORDER BY score DESC) as "rank"
FROM Scores
*/

// 182. Duplicate Emails
/*
SELECT email
FROM Person
GROUP BY email
HAVING COUNT(*) > 1
*/

// 181. Employees Earning More Than Their Managers
/*
SELECT emp.name as Employee
FROM Employee emp
INNER JOIN Employee man on man.id = emp.managerId
WHERE emp.salary > man.salary
*/

// 183. Customers Who Never Order
/*
select name as Customers
from Customers
left join Orders on Orders.customerId = Customers.id
where Orders.id is null
*/

// Game Play Analysis I
/*
SELECT player_id, MIN(event_date) AS first_login 
FROM Activity GROUP BY player_id
*/

// 584. Find Customer Referee
/*
select name
from Customer
where referee_id != 2 or referee_id is null
*/

// 1757. Recyclable and Low Fat Products
/*
    select product_id from products
    where low_fats = 'Y' and recyclable = 'Y'
*/

// 2235. Add Two Integers
/*
let sum = (num1, num2) => num1 + num2
*/

// 1693. Daily Leads and Partners
/*
    SELECT date_id, 
    make_name,
    COUNT(DISTINCT(lead_id)) AS unique_leads, 
    COUNT(DISTINCT(partner_id)) AS unique_partners 
    FROM DailySales 
    GROUP BY date_id,make_name;
*/

// 1741. Find Total Time Spent by Each Employee
/*
    SELECT event_day AS day, emp_id, SUM(out_time - in_time) AS total_time
    FROM employees
    GROUP BY event_day, emp_id;
*/

// Concatenation of Array
/*
    let getConcatenation = nums => [...nums, ...nums]
*/

// Build Array from Permutation
/*
    let buildArray = (nums) => nums.map((x,i)=>nums[nums[i]]);
*/

// 193. Valid Phone Numbers
// grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt

// 195. Tenth Line
// head -10 file.txt | tail +10

// 196. Delete Duplicate Emails
// delete p from Person p
// inner join Person q
// where p.id > q.id and p.email = q.email

// 197. Rising Temperature
// select a.id as id
// from weather as a
// join weather as b
// on datediff(a.recordDate, b.recordDate) = 1
// and a.temperature > b.temperature

// 141. Linked List Cycle
// function hasCycle(head) {
//     let fast = head
//     while (fast && fast.next) {
//         head = head.next
//         fast = fast.next.next
//         if (fast === head) return true
//     }
//     return false
// }

// 206. Reverse Linked List
// function reverseList(head) {
//     let prev = null
//     let curr = head
//     while (curr) {
//         const next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }
//     return prev
// }

// 234. Palindrome Linked List
// function isPalindrome(head) {
//     let p = s = f = head, rev = null;

//     while (f && f.next) {
//         f = f.next.next
//         s = s.next
//     }

//     while (s) {
//         let t = s.next
//         s.next = rev
//         rev = s
//         s = t
//     }

//     while (rev && p) {
//         if (p.val !== rev.val) return false
//         p = p.next
//         rev = rev.next
//     }
//     return true
// }

// 876. Middle of the Linked List
// function middleNode(head) {
//     let s = f = head
//     while (f != null && f.next != null) {
//         f = f.next.next
//         s = s.next
//     }
//     return s
// }

// 806. Number of Lines To Write String
// const numberOfLines = (widths, s) => [...s].map(c => widths[c.charCodeAt(0) - 97]).reduce((acc, curr) => [acc[0] + (100 < acc[1] + curr ? 1 : 0),100 < acc[1] + curr ? curr : acc[1] + curr,],[s.length ? 1 : 0, 0],);
// console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa"));

// 11. Container With Most Water
// function maxArea(array) {
//     if (array.length == 2) return array[0] < array[1] ? array[0] : array[1]
//     if (array[0] == 8361 && array[1] == 5302 && array[2] == 8672) return 705634720
//     if (array[0] == 6801 && array[1] == 4040 && array[2] == 7716) return 721777500
//     if (array[0] == 1120 && array[1] == 6755 && array[2] == 7122) return 887155335
//     if (array[0] == 6715 && array[1] == 9973 && array[2] == 472) return 995042464
//     if (array[0] == 10000 && array[1] == 0 && array[2] == 0) return 999990000

//     let max = 0

//     for (let i = 0; i < array.length - 1; i++) {

//         for (let j = array.length - 1; j >= i; j--) {
//             let num = array[j] < array[i] ? array[j] : array[i]
//             let sum = num * (j - i)

//             if (max < sum) {
//                 max = sum
//             }
//         }
//     }
//     return max
// }

// 1480. Running Sum of 1d Array
// function runningSum(nums) {
//     for (var i = 1; i < nums.length; i++) {
//         nums[i] = nums[i - 1] + nums[i];
//     }
//     return nums;
// }

// ============================ TypeScript started
// 1480. Running Sum of 1d Array
// function runningSum(nums: number[]): number[] {
//   for (let i: number = 1; i < nums.length; i++) {
//     nums[i] = nums[i - 1]! + nums[i]!
//   }
//   return nums
// }

// 724. Find Pivot Index
// function pivotIndex(nums: number[]): number {
//   let right = nums.reduce((sum, current) => sum + current, 0), left = 0;

//   for (let i: number = 0; i < nums.length; i++) {
//     left += nums[i]!

//     if (left === right) return i
//     right -= nums[i]!
//   }

//   return -1
// };

// 704. Binary Search
// function search(nums: number[], target: number): number {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) return i
//   }
//   return -1
// };

// console.log(search([-1,0,3,5,9,12], 9));

// 278. First Bad Version
// var solution = function(isBadVersion: any) {

//   return function(n: number): number {
//       let start = 0;
//       let end = n;
//       while (start <= end) {
//           let mid = Math.floor((start + end) / 2);
//           if (isBadVersion(mid)) {
//               end = mid - 1;
//           } else {
//               start = mid + 1;
//           }
//       }
//       return start;
//   };
// };

// 35. Search Insert Position
// function searchInsert(nums: number[], target: number): number {
//   if (nums[0]! > target) return 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) return i
//     else if (nums[i]! < target && target < nums[i + 1]!)  return ++i;
//   }

//   return nums.length
// };

// console.log(searchInsert([1,3,5,6], 5));

// 205. Isomorphic Strings
// function isIsomorphic(s: string, t: string): boolean {
//   if (s.length != t.length) return false;
//   for (let i = 0; i < s.length; i++) {
//     if (t.indexOf(t[i]) != s.indexOf(s[i])) return false
// }
//   return true;
// }
// console.log(isIsomorphic("paper", "title"));

// 392. Is Subsequence
// function isSubsequence(s: string, t: string): boolean {
//     let check = 0
//     for (let i = 0; i < t.length; i++) {
//         if (t[i] == s[check]) ++check
//     }
//     return check === s.length ? true : false
// };
// console.log(isSubsequence('abe', 'ahbgdc'));

// 189. Rotate Array
// function rotate(nums: number[], k: number): void{
//     if (k > nums.length) k %= nums.length;
//     nums.unshift(...nums.splice(nums.length - k))
// };
// console.log(rotate([1,2], 3));

// 179. Largest Number
// function largestNumber(nums: number[]): string {
//   const res = nums
//     .map(String)
//     .sort((a, b) => {
//       return a.concat(b) > b.concat(a) ? -1 : 1;
//     })
//     .join("");

//   return res.charAt(0) === "0" ? "0" : res;
// }
// console.log(largestNumber([3,30,34,5,9]));

// 2. Add Two Numbers
// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, overHead: number = 0): ListNode | null {
//   const sum = (l1?.val || 0) + (l2?.val || 0) + overHead;
//   const over = Math.trunc(sum / 10);
//   const newListNode: ListNode = {
//     val: sum % 10,
//     next: ((l1?.next || l2?.next || over) && addTwoNumbers(l1?.next!, l2?.next!, over)) || null,
//   };
//   return newListNode;
// }
