function sendMail(){
    let parm = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_rafppfn","template_1c3ci0h",parm).then(alert("Email Sent!!"))
}