let mobileButtons = document.querySelectorAll(".mobile");
let sections = document.querySelectorAll(".sections")
let btns = document.querySelectorAll(".web")

for(let i = 0; i < mobileButtons.length; i++ ) {
  mobileButtons[i].addEventListener("click", () => {
   
    //ostatní tlačítka nejsou snížené
    
    mobileButtons.forEach(btn => {
      if(btn !== mobileButtons[i])
      btn.classList.remove("btn-smaller")
    })
    
    mobileButtons[i].classList.toggle("btn-smaller")
  
  
    //ostatní sekce nejsou zobrazeny
    sections.forEach(section => {
      if(section !== sections [i]){
        section.classList.remove("displayed")
      }
    })
    //zobrazí sekci
    sections[i].classList.toggle("displayed")
  })
}



for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if(i == 0 && sections[0].classList.contains("active")) {
      sections[i].classList.toggle("displayed")
    }
    sections[0].classList.remove("active")
    sections.forEach(section => {
      if(section.classList.contains("displayed") && section !== sections [i]){
        section.classList.remove("displayed")
      }
    })
    if(!sections[i].classList.contains("displayed")) {
      sections[i].classList.toggle("displayed")
    }
    

  })
}

