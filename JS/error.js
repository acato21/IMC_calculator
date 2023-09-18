export const error = {

    error_wrapper: document.querySelector('.error_wrapper'),

    open() {

        if(cont){

            error.error_wrapper.classList.add('open')

            setTimeout(() => {
                
                    error.close()

            }, 5000);

        };
    },

    close(){

        error.error_wrapper.classList.remove('open')
        error.error_wrapper.classList.add('close')
        setTimeout(() => {

            error.error_wrapper.classList.remove('close')
            cont = true

        }, 500);
    },

    verification() {
        const verification = isNumber(heigth.value) || isNumber(weigth.value)

        if(verification){

            error.open()
    
            if(isNumber(heigth.value)){                 
                heigth.classList.add('incorret')                                                                          
            }
        
            if(isNumber(weigth.value)){
                weigth.classList.add('incorret')
            }
        }

        return verification
    },

}

function isNumber(value){
    return value === "" || isNaN(value)
}

let cont = Boolean
