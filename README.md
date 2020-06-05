# Arkademy B16 - Tugas 1
## Palindrom
[Source code : Palindrom](https://github.com/dimasdompit/)
#### Algoritma :
* Mulai
* Deklarasi variabel *strRev*
* Masukkan input
* Cek kondisi jika input lebih kecil dari 1, maka cetak output *false* dan selesai
* Jika tidak, maka lanjutkan proses berikutnya
* Pecah inputnya menjadi per huruf dan tampung dalam array
* Balik elemen inputnya
* Konversi elemennya menjadi string dan masukkan ke variabel *strRev*
* Cek menggunakan pengkondisian 
* Jika nilai input sama dengan nilai *strRev*, maka outputnya *true*
* Jika tidak, maka outputnya *false*
* Selesai

```
function palindrom(str) {
    if (str.length < 1) {
        return false;
    }

    const strRev = str.split('').reverse().join('');

    if (str === strRev) { 
        return true;
    } else {
        return false;
    }

}
console.log(palindrom('')); // Apabila inputnya kosong, maka outputnya FALSE
console.log(palindrom('malam')); // TRUE
console.log(palindrom('kotak')); // FALSE
```


## Screen Shot Output Tugas 1
![alt text](https://github.com/dimasdompit/Arkademy-B16.3---Tugas-1/blob/master/ss%20palindrom.png)
