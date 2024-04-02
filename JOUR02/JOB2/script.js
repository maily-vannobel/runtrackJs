function showhide() {
    let txtVisible = true;
    let element = document.getElementById("citation");

    return function() {
        if (txtVisible) {
            element.style.display = "none";
            txtVisible = false;
        } else {
            element.style.display = "block";
            txtVisible = true;
        }
    };
}

document.getElementById("button").addEventListener("click", showhide());
