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

// Merge Two Sorted Lists
// function mergeTwoLists(list1, list2) {
//     let newlist = []
//     let leftIndex = 0
//     let rightIndex = 0
//     while (leftIndex < list1.length && rightIndex < list2.length) {
//         const leftEl = list1[leftIndex]
//         const rightEl = list2[rightIndex]
//         if (leftEl < rightEl) {
//             newlist.push(leftEl)
//             leftIndex++
//         }
//         else {
//             newlist.push(rightEl)
//             rightIndex++
//         }
//     }
//     return [...newlist, ...list1.slice(leftIndex), ...list2.slice(rightIndex)]
// }
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

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




























