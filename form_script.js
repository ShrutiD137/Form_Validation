function validate() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordsmatch(password, cpassword)
}
function checkusername(username) {
    if (username.length > 7) {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerHTML=''
    }
    else {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must be atleast 8 characters long'
    }
}
function checkemail(email) {
    if (email.length > 8 && email.includes('@gmail')) {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerHTML=''
    }
    else {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='Enter valid email'
    }
}
function checkpassword(password) {
    if (password.length > 8 && password.includes('.')) {
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_error').innerHTML=''
    }
    else {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='Password must be atleast 8 characters long and it should contain "."'
    }
}
function checkpasswordsmatch(password,cpassword) {
    if (cpassword.length > 8 && password!='') {
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword_error').innerHTML=''
    }
    else {
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText='Passwords did not matched'
    }
}