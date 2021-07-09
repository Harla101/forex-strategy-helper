// DO NOT DO THIS 
let final_result = ""

function reverse(str) {
    if (str.length <= 1) {
        final_result += str.slice(0)
    }
    if (str.length >= 2) {
        final_result += str.slice(-1)
        reverse(str.slice(0,-1))
    }
    return(final_result)
}

// console.log(reverse("apple"))

// DO THIS
function reverseRecurse(str) {
    if (typeof str != "string") {
        return
    }
    if (str.length <= 1) {
        return str
    }

    return str.slice(-1) + reverseRecurse(str.slice(0, -1))
}

console.log(reverseRecurse("go"))
console.log(reverseRecurse("apple"))