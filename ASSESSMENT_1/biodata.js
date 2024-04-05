let buku = [
    {"nama": "sherlock", "jumlah":2},
    {"nama": "lupin", "jumlah":2},
    {"nama": "aladin", "jumlah":2},
];

function pinjamBuku() {
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let pilihan = document.getElementById("pilihanBuku").value;

    if (isNaN(jumlah) || jumlah <= 0) {
        alert("Masukkan jumlah buku yang valid!");
        return;
    }

    let bukuDitemukan = false;
    let stock = 0;

    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === pilihan) {
            bukuDitemukan = true;
            stock = buku[i].jumlah;
            break;
        }
    }

    if (!bukuDitemukan) {
        alert("Buku tidak ditemukan!");
        return;
    }

    if (jumlah > stock) {
        alert("Jumlah buku tidak tersedia!");
        return;
    }

    alert("Silahkan ambil buku Anda!");
}
