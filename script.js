// Smooth Scroll
function scrollToSection(id) {
    const section = document.getElementById(id);
    if(section){
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Header Links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Formspree AJAX Submission
const form = document.querySelector('form');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const action = form.getAttribute('action');

    fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if(response.ok){
            formMessage.textContent = "تم إرسال الرسالة بنجاح! ✅";
            form.reset();
        } else {
            formMessage.textContent = "حدث خطأ، حاول مرة أخرى ❌";
        }
    })
    .catch(error => {
        formMessage.textContent = "حدث خطأ، حاول مرة أخرى ❌";
    });
});
