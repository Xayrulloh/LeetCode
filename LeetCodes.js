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

// 6 exercise
function mergeTwoLists(list1, list2) {
    let newlist = []
    newlist = newlist.concat(list2)
    newlist = newlist.concat(list1)
    return newlist.sort((a, b) => a > b ? 1 : -1)
}
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));









