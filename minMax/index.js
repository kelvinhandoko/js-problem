/* 
    fungsi ini akan digunakan untuk mencari nilai terkecil dan terbesar dari sebuah inputan berupa array.


    input -> [1,2,3,4,5]
    output -> {min:1,max:5}
*/

function minMax(arr) {
    // lanjutakan code dibawah
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return { min, max }
}

module.exports = minMax
