


var dollar = (11000.34);
var yevro = (12354.03);
var bilet = dollar * 500;
var mexmonxona = dollar * 250;
var muzey = yevro * 120;
var hammaXarajatlar = bilet + mexmonxona + muzey;


var puli = prompt ("Alisher xarajatlar uchun qancha pul ingiz bor")


if (puli >= hammaXarajatlar) {
    alert ("Oq yol Alisher");
} else if (puli < hammaXarajatlar) {
    alert ("ALisher ozgina sabr qilsh kerak bolar ekan");
}