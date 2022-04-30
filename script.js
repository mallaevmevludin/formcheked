

let password = document.getElementById('exampleInputPassword2');
let check = document.getElementById('flexSwitchCheckDefault');
let login = document.getElementById('exampleInputEmail1');



check.onchange = function () {
    if (check.checked) {
        login.removeAttribute('required');
        password.setAttribute('disabled', 'disabled');
    } else {
        password.removeAttribute('disabled');
    }
}