let num = 0

const value = document.querySelector(".value")
const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList
    if(styles.contains("decrease")){
      num --
    }else if(styles.contains("increase")){
      num ++
    }else{
      num = 0
    }
    // styling the color on values 
    value.textContent = num
    // if(num > 0){
    //   value.style.color = "#ffc400"
    // }else if(num < 0){
    //   value.style.color = "#ffc400"
    // }else{
    //   value.style.color = "#ffc400"
    // }
  })
})