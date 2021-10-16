function visibility() {
    var moreText = document.getElementById("moreMem");
    var btnText = document.getElementById("but-tex");

    if (moreText.style.display == "none") {
      btnText.innerHTML = "Less";
      moreText.style.display = "flex";
    }else {
      btnText.innerHTML = "More";
      moreText.style.display = "none";
    }

    
}