console.log ("Tugas Ternary Operation")

let angka1=0;
let batas1 =1500;
let hasil
for (let i =0;i<=batas1;i++){
    angka1=angka1+1
    hasil=angka1%3==0 && angka1%5 ==0
    ? "fizz buzz" : angka1%3==0 ?"fizz":angka1%5==0 ? "buzz"

    : "angka beda";
    console.log (hasil +angka1 )
}


console.log (" menggunakan if statement biasa")
let angka=0
let batas = 1500
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
