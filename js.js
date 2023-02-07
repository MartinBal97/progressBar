const numbers = document.querySelectorAll(".numbers")
const buttons = document.querySelectorAll(".buttons")
const spans = document.querySelectorAll(".spans")
const spansIn = document.querySelectorAll('.spanIn')

let cont = 1;

buttons.forEach((button,i) => {
    button.addEventListener('click', () => {

        if (i == 0) {
            
            cont > 1 ? cont -- : cont = 1
            
            numbers.forEach((num) => {
                if (num.id >= cont + 1) {
                    num.classList = "numbers"
                    console.log(cont)
                }
            })

            spansIn.forEach((spanIn,i) => {
                let o = i + 2
                if (o >= cont + 1 ) {
                    spanIn.style='transition: width 0.3s ease-in-out;z-index: 3; width:0%;'
                }
            })
            
        } else { 

            cont < 4 ? cont ++ : cont = 4
            
            numbers.forEach((num) => {
                if (num.id <= cont) {
                    num.classList.add("numbersJS")
                    console.log(cont)

                }
            })
            spansIn.forEach((spanIn,i) => {
                let o = i + 2
                if (o <= cont ) {
                    spanIn.style='transition: width 0.3s ease-in-out;z-index: 3; width:100%;'
                }
            })

        }
    })
})
