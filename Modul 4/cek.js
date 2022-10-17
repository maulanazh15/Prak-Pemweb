var hasil;
var n = 100// document.p.nilai.value;
function cekNilai() {
    hasil = (n <= 20) ? "E" : (n <= 40) ? "D" : (n <= 60) ? "C" : (n <= 80) ? "B" : (n <= 100) ? "A" : "tidak sesuai";
    console.log(hasil);
    // document.p.hasil.value = hasil;
}
cekNilai();
