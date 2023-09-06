document.getElementById("menuOne").addEventListener("click", setContentMenuOne);
document.getElementById("menuTwo").addEventListener("click", setContentMenuTwo);

function setContentMenuOne() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/menu1")
    xhr.onreadystatechange = function(){
        if(xhr.status  === 200){
            document.getElementById("contents").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function setContentMenuTwo() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/menu2")
    xhr.onreadystatechange = function(){
        if(xhr.status  === 200){
            document.getElementById("contents").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
