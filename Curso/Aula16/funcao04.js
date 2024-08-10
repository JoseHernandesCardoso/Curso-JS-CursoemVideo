function fatorial(n){
    for (let cont = n-1; cont > 0; cont--){
        n *= cont
    }
    return n
}

console.log(fatorial(5))
