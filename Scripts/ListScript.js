function flipflop(id, idImg) {
    closeFolder = "/Image/CloseFolder.svg";
    openFolder = "/Image/OpenFolder.svg";
    element = document.getElementById(id);
    if (element.style.display == "none") {
        element.style.display = "";
        document.getElementById(idImg).src = openFolder;
    }
    else{
        element.style.display = "none"
        document.getElementById(idImg).src = closeFolder;
    }

}