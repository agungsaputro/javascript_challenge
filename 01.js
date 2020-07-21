const pertama = "ibu ratna antar ubi"
const kedua = "kasur ini rusak"
const ketiga = "A nut for a jar of tuna"
const keempat = "Borrow or job?"
const kelima = "Was it a car or a cat I saw?"
const keenam = "Yo, banana boy!"
const ketujuh = "UFO tofu?"

const isPolindrome = (str) =>{
    str = str.toLowerCase().replace(/[^A-Za-z0-9]+/g,"")
     return str === str.split("").reverse().join("")
}

console.log(isPolindrome(pertama))
console.log(isPolindrome(kedua))
console.log(isPolindrome(ketiga))
console.log(isPolindrome(keempat))
console.log(isPolindrome(kelima))
console.log(isPolindrome(keenam))
console.log(isPolindrome(ketujuh))
