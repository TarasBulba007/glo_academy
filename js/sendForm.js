const sendForm = () => {
    const form = document.querySelector('.modal')

    const text = form.querySelector('input[type=text]')
    const phone = form.querySelector('input[type=tel]')
    const email = form.querySelector('input[type=email]')

    text.setAttribute('name', 'name')
    phone.setAttribute('name', 'phone')
    email.setAttribute('name', 'email')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const formData = new FormData(form)

        if (!formData.get('name')?.trim() || !formData.get('phone')?.trim() || !formData.get('email')?.trim()) {
            alert('Заполните, пожалуйста, все поля')
            return
        }


        const sendObj = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email')
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData,
            // headers: {
            //     'Content-type': 'application/json; charset=UTF-8',
            // },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка сервера: ${response.status}`)
                }
                return response.json()
            })
            .then((json) => {
                console.log(json)
                alert('Форма успешно отправлена!')
                form.reset()
                form.style.display = ''
            })
            .catch((error) => {
                console.error('Ошибка:', error)
                alert(`Произошла ошибка при отправке формы: ${error.message}`)
            })
            .finally('clean form')
    })
}

sendForm()