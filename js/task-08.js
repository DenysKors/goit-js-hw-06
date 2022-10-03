const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onBtnClick);

function onBtnClick(event) { 
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Пожалуйста заполните поля Email и Password')
    }

    const formData = {
        email: email.value,
        password: password.value
    }

    console.log(formData)
    
    event.currentTarget.reset();
}