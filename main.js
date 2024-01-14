function validateForm(formThis) {
    let inValidField = false;
    if (isEmptyField(formThis.firtsName.value)) {
        makeInvalidInputField(formThis.firtsName);
        inValidField = true;
    }
    if (isEmptyField(formThis.lastName.value)) {
        makeInvalidInputField(formThis.lastName);
        inValidField = true;
    }
    if (isEmptyField(formThis.password.value)) {
        makeInvalidInputField(formThis.password);
        inValidField = true;
    }
    if (!validateEmail(formThis.email.value)) {
        makeInvalidInputField(formThis.email);
        inValidField = true;
    }
    if (inValidField) {
        document.body.style.paddingTop = "80px";
        document.body.style.paddingBottom = "80px";
    }
    if (!inValidField) {
        document.body.style.paddingTop = "120px";
        document.body.style.paddingBottom = "120px";
    }
    return false;
}

function makeInvalidInputField(element) {
    let elementStyle = element.style;
    elementStyle.border = "1px solid hsl(0, 100%, 64%) ";
    elementStyle.outline = "1px solid hsl(0, 100%, 64%) ";
    elementStyle.color = "hsl(0, 100%, 74%)";
    element.classList.add("icon");
    element.placeholder = "";
    let nextInvalid = element.nextElementSibling;
    nextInvalid.style.display = "block";
}

function validateInput(element) {
    if (!isEmptyField(element.value)) {
        makeValidInputField(element);
    }
}

function validateInputIsEmail(element) {
    if (validateEmail(element.value)) {
        makeValidInputField(element);
    }
}

function removeFocus(element) {
    if (!element.classList.contains("icon")) {//is valid field
        element.style.border = "1px solid hsl(246, 25%, 77%)";
    }
}

function addFocus(element) {
    if (!element.classList.contains("icon")) {//is valid field
        let elementStyle = element.style;
        // elementStyle.outline = "none";
        elementStyle.border = "1px solid hsl(248, 32%, 49%)";
    }
}

function isEmptyField(value) {
    return value.trim() === "" || !value;
}

function makeValidInputField(element) {
    let elementStyle = element.style;
    elementStyle.border = "1px solid hsl(248, 32%, 49%)"
    elementStyle.outline = "none";
    elementStyle.color = "hsl(249, 10%, 26%)";
    element.classList.remove("icon");
    let nextInvalid = element.nextElementSibling;
    nextInvalid.style.display = "none"
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};