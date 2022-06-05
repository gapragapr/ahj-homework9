const btn = document.querySelector('button');
const container = document.querySelector('.animate-collapse');
container.style['maxHeight'] = '65px'

btn.addEventListener('click', () => {
    if(container.style['maxHeight'] === '65px'){
        container.style['maxHeight'] = '400px'
    } else{
        container.style['maxHeight'] = '65px'
    }
})