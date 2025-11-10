const modalBtns = document.querySelectorAll('.modal__button, .course__button')
const modal = document.querySelector('.modal')
const modalInner = document.querySelector('.modal__inner')

function openModal() {
    modal.style.display = 'flex'
}

function closeModal() {
    modal.style.display = ''
}

modalBtns.forEach(element => {
    element.addEventListener('click', openModal)
});

const closeBtn = document.createElement('button')
closeBtn.textContent = 'x'
closeBtn.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
`

closeBtn.addEventListener('click', closeModal)


modalInner.style.position = 'relative'
modalInner.appendChild(closeBtn)

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')
    console.log(modalContent)
    if (!modalContent) {
        modal.style.display = ''
    }
})