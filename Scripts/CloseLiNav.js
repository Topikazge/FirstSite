function CloseLi() {
    listMass = ['list_introduction_html','list_elements','list_work_with_forms','lidst_introduction_html','list_css']
    for (let i = 0; i < listMass.length; i++) {
        element = document.getElementById(listMass[i]);
        if (element)
            element.style.display = element.style.display == "none" ? "" : "none";
    }

}