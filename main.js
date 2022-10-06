var a = +prompt('birnchi sonni kiriting')    
var b = +prompt('ikkinchi sonni kiriting')
var c = +prompt('uchinchi sonni kiriting')
if((a > b && c > a) || (a > c && a < b)){
    alert(a + "o'rta qiymat");
}else if ((a < b && c > b) || (b > c && a > b)) {
    alert(b + "o'rta qiymat");
}else if((a < c && c < b) || (b < c && a > c)){
    alert(c + "o'rta qiymat");
}else {
    alert('xato')
}