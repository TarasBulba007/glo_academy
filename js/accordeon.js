const accordeon = () => {
    const contents = document.querySelectorAll('.program-line__content')
    const allDescriptions = document.querySelectorAll('.program-line__descr')
    const allTitles = document.querySelectorAll('.program-line__title')

    contents.forEach((elem) => {
        const title = elem.querySelector('.program-line__title')
        const descr = elem.querySelector('.program-line__descr')

        title.addEventListener('click', () => {
            const isActive = descr.classList.contains('active')

            allDescriptions.forEach((d) => d.classList.remove('active'))
            allTitles.forEach((t) => t.classList.remove('active'))

            if (!isActive) {
                descr.classList.add('active')
            }
        })
    })
}

accordeon()