document.writeln("PAK FERDY SURU ISI APA JAK YANG ADA DISINI");
document.writeln("SESEDIH INI MARK HUHU");
document.writeln("BOYCOTT");
document.writeln("<PRE>");
document.writeln("<h1>Operasi Aritmatik</h1>")
var A="100";
var B="200";
var C=300;
var D=400;
var E= A + B;
document.writeln('"100" + "200" = ' + E);
// hasil akan gabung saja karena ini string
E = B + C;
document.writeln('"200" + "300" = ' + E);
// ini juga tidak bisa karena beda tipe data bukan number
E = C + D;
document.writeln('300 + 400 = ' + E);
// ini bisa karena ini number
document.writeln("</PRE>")

function jumlah()
{
    var bil1= parseFloat(document.fform.bilangan1.value);
    if (isNaN (bil1))
    bil1=0.0;

    var bil2= parseFloat(document.fform.bilangan2.value);
    if (isNaN (bil2))
    bil2=0.0;

    var hasil = bil1 + bil2;
    // alert ("Hasil penjumlahan = " + hasil);
    alert ('hellow world');

}

