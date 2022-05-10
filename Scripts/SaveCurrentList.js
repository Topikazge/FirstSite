function Save() {
    var element = document.getElementById('content');
    sessionStorage.setItem('saveInfo', element.innerHTML);
    evt = window.event;
    evt.returnValue = 'gdfgdfgfdgfdgdfg';
}
