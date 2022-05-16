function flipflop(id, idImg) {
    closeFolder = "/Image/CloseFolder.svg"
    openFolder = "/Image/OpenFolder.svg"
    // id -- идентификатор элемента, который надо скрыть или показать
    // получаем этот элемент

    // если таковой в документе существует
  /*  if (element)
        element.style.display = element.style.display == "none" ? "" : "none";*/

        element = document.getElementById(id);
        /*document.getElementById("pyc").setAttribute('src',openFolder);*/

    if (element.style.display == "none") {
        element.style.display = "";
        document.getElementById(idImg).src = openFolder;
    }
    else{
        element.style.display = "none"
        document.getElementById(idImg).src = closeFolder;
    }

}