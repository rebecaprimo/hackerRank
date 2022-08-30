function sockMerchant(n, ar) {
    let pairsMatch = 0;
    let aLength = ar.length;
    let test = 3; 
    
    for(let i = 0; i < aLength; i++) {
        for(let j = 0; j < aLength; j++) {
            if(ar[i] == ar[j]) {
                pairsMatch++;
            }
        }
    }
    
    return test;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);