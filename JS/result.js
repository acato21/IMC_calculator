export const wrapper_result = {

    result_wrapper: document.querySelector('.result_wrapper'),

    result: document.querySelector('#result'),

    exit_result: document.querySelector('#exit_result'),
    
    open() {
        wrapper_result.result_wrapper.classList.remove('hide')
    },

    close() {
        wrapper_result.result_wrapper.classList.add('hide')
    }
}
