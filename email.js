
function sendEmail() {
    Email.send({
        SecureToken: "10f72421-ec6a-4339-9bdc-262d33da63c0",
        To: document.getElementById("email").value,
        From: "purishivendra82@gmail.com",
        Subject: "New Message",
        Body: "Name: " + document.getElementById("name").value +
            "<br>Email: " + document.getElementById("email").value +
            "<br>Phone no: " + document.getElementById("number").value +
            "<br>Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully")
    );
}
