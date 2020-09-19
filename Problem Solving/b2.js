
function inputString(str1, str2) {
    var arr1 = [], arr2 = [];
    for (let i = 0; i < str1.length; i++) {
        arr1.push(str1.slice(i, i + 1))
    }
    for (let i = 0; i < str2.length; i++) {
        arr2.push(str2.slice(i, i + 1))
    }
    var result = [];
    var b = Math.min(arr1.length, arr2.length);

    for (i = 0; i < b; i++) {
        result.push(arr1[i], arr2[i]);
    }
    result.push(...arr1.slice(b), ...arr2.slice(b));
    
    return result;
}

var result = inputString('abcd', '12321')
console.log(result.join(''))


