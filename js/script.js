const contents = document.querySelectorAll('.program-line__content')
const allDescriptions = document.querySelectorAll('.program-line__descr')

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')

    title.addEventListener('click', () => {
        const hasActive = Array.from(allDescriptions).some(descr => descr.classList.contains('active'))

        allDescriptions.forEach((descr) => {
            if (hasActive) {
                descr.classList.remove('active')
            } else {
                descr.classList.add('active')
            }
        })
    })
})