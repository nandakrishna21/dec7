function outer(a) {
    a = document.getElementById("num1").value;
    return function (b) {
        b = document.getElementById("num2").value;
        return function (c) {
            c = document.getElementById("num3").value;
            alert("The result is = " + a * b * c);
            
        }
    }
}
outer(a)(b)(c); 