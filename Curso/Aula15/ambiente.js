let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
num.push(4)
pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor 4 não foi encontrado`)
} else{
    console.log(`O valor 4 está na posição ${pos}`)
}