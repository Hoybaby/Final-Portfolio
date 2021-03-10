
// Typing Text
let typed = new Typed ('.typing-text', {
    strings: [ "Developer", "Volleyball Player", "Hiker", "Chess Enthusiast"],
    typeSpeed:60,
    backSpeed: 50,
    loop: true
})


function sendMail(params) {
    let tempParams = {
        from_name: document.getElementById('name').value,
        to_name: document.getElementById('email').value,
        message: document.getElementById('message').value,

    }; 
    emailjs.send('contact_service', 'personal_form', tempParams )
        .then(function(res) {
            console.log("success", res.status)
        }, function(error) {
            console.log('Failed...', error);
        });
};

