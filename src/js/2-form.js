const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

function readForm(form) {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email,
        message
    }
}


form.addEventListener('input', (event) => {
    event.preventDefault();
    const data = readForm(event.currentTarget);
    const stringData = JSON.stringify(data);
    localStorage.setItem(localStorageKey, stringData);
})

const formData = localStorage.getItem(localStorageKey);
if (formData) {
    const data = JSON.parse(formData);
    form.email.value = data.email;
    form.message.value = data.message;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newEmail = event.currentTarget.email.value.trim();
    const newMessage = event.currentTarget.message.value.trim();
    if (!newEmail || !newMessage) {
        console.log("Заповніть всі рядки");
    } else {
        const saveData = {
            email: newEmail,
            message: newMessage
        };
        console.log(saveData);
    }
localStorage.removeItem(localStorageKey);
form.reset()
})

