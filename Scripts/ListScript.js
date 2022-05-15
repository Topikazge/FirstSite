function flipflop(id) {
    closeFolder = "/Image/CloseFolder.svg"
    closeFolder = "/Image/OpenFolder.svg"
    // id -- идентификатор элемента, который надо скрыть или показать
    // получаем этот элемент
    element = document.getElementById(id);
    document.getElementById("pyc").setAttribute('src',openFolder);
    // если таковой в документе существует
    if (element)
        element.style.display = element.style.display == "none" ? "" : "none";

}