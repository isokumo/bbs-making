document.addEventListener("DOMContentLoaded", function(){
    const selectBox = document.querySelector(".select-box");
    const selected = document.querySelector(".selected");
    const options = document.querySelector(".options");
    const optionsItems = document.querySelector(".options li");
    const arrows = document.querySelector(".selected i")

    //클릭하면 보이기 or 숨기기
    selected.addEventListener("click", ()=>{
        selectBox.classList.toggle("active");
        if(selectBox.classList.contains("active")){
            arrows.classList.replace("ri-arrow-down-s-line","ri-arrow-up-s-line")
        }else{
            arrows.classList.replace("ri-arrow-up-s-line","ri-arrow-down-s-line")
        }
    });

});