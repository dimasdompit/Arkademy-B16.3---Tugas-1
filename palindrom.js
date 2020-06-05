function palindrom(str) {
    if (str.length < 1) { // Validasi input, minimal harus mengandung 1 karakter
        return false;
    }

    const strRev = str.split('').reverse().join(''); // Membuat variabel baru 'strRev' untuk memecah string menjadi huruf dan per hurufnya ditampung dalam array, lalu elemennya dibalik dan elemennya dikonversi menjadi string lagi.

    if (str === strRev) { // Pengecekan apakah input sama dengan strRev
        return true; // true, kalau cocok
    } else {
        return false; // false, kalau tidak cocok
    }

}

console.log(palindrom('')); // Apabila input kosong, maka outputnya FALSE
console.log(palindrom('malam')); // TRUE
console.log(palindrom('kotak')); // FALSE