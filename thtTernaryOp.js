console.log ("Tugas Ternary ")

let angka=0
batas = 1500
for (let i =0;i<=batas;i++){
    angka =angka+1
    if (angka%3==0&&angka%5==0){
        console.log ("fizz buzz "+angka)
    }else if (angka%5==0){
            console.log ("buzz "+angka)
    }
    else if (angka%3==0){
                console.log ("fizz "+angka)
    }
        
    
    else {
        console.log ("angka beda "+angka)
    }
}