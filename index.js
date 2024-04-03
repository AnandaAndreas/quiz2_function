const checkJumlahHuruf = (text) =>{
    return text.length
}
console.log(checkJumlahHuruf("ananda") , "==> huruf")

const checkJumlahKata = (text) => {
    return text.split(" ").length
}
console.log(checkJumlahKata("ananda andreas dharma"), " ==> jumlah kata")

const kalkulator = (angka1, operator, angka2) =>{
    if (operator === "+") {
        return angka1 + angka2
    }
    else if (operator === "-") {
        return angka1 - angka2
    }
    else if (operator === "*") {
        return angka1 * angka2
    }
    else{
        return angka1 / angka2
    }
}
console.log(kalkulator(2, "+", 3), " ==> hasilnya")

const palindrome = (text) => {
    const checkPalindrome = text

    const textReverse = text.split("").reverse().join("")
    return checkPalindrome == textReverse
}
console.log(palindrome("kodok"), " ==> palindrome");
console.log(palindrome("batu"), " ==> tidak palindrome");

const totalBelanja = (diskon,minimalBelanja) => {
    const hargaBelanjaan = 100_000
    if (hargaBelanjaan >= minimalBelanja) {
        return hargaBelanjaan-(hargaBelanjaan*diskon/100)
    }
    else{
        return hargaBelanjaan
    }
}

console.log(totalBelanja(20,50000) , " ==> total harga")