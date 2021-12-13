// 1 exercise
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

// 2 exercise
/*let palindrome = (num) => {let rev = Number(String(num).split('').reverse().join('')); return rev === num ? true : false}
console.log(palindrome(121));*/

// 3 exercise
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

// 4 exercise
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

// 5 exercise
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

// 6 exercise need repair
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

// 7 exercise
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

// 8 exercise
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

// 9 exercise
/*function strStr(str, element) {
    if (str || element) {
        if (str.includes(element)) {
            return str.indexOf(element)
        }else return -1
    }else return 0
}
console.log(strStr("", "a"));*/

// 10 - exercise







