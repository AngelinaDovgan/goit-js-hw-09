const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

function readForm(form) {
    const email = form.email.value;
    const message = form.message.value;
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
    const saveData = {
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value,
};
console.log(saveData);
localStorage.clear()
form.reset()
})

