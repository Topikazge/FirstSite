function GoToArticle(article,nameDoc){
    document.location.href = article +".html";
    if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", jjjj(nameDoc));
    }
}

function jjjj(nameDoc) {
    if(document)
    var xhr = new XMLHttpRequest();
    alert('1 - ')
    xhr.open('GET', nameDoc+'.html', true);
    alert('2 - ')
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        document.getElementById('content').innerHTML = this.responseText;
    };
    alert('3 - ')
    xhr.send();
    alert('4- ')
}
