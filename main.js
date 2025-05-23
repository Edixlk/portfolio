let MenuBtn = document.getElementById("Hamburg-menu") 


function Open(){

    let NavigLinks = document.getElementById("navlinks");

    if (NavigLinks.style.display == "flex") {
        NavigLinks.style.display = "none";
    }

    else {
        NavigLinks.style.display = "flex";
    }
}