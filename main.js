/* bar function */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- NAVIGATION BAR ----- */
window.onscroll = function() {headerShadow()};
function headerShadow() {
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}


document.getElementById("downloadBtn").addEventListener("click", function() {
  const cvLink = "https://drive.google.com/uc?export=download&id=1hAOco72TInfQxLIpB1jR7LTH3TDzrWoT";  
  const link = document.createElement("a");
  link.href = cvLink;
  link.click();  
});

document.getElementById("downloadBtn1").addEventListener("click", function() {
  const cvLink = "https://drive.google.com/uc?export=download&id=1hAOco72TInfQxLIpB1jR7LTH3TDzrWoT";  
  const link = document.createElement("a");
  link.href = cvLink;
  link.click();  
});

document.getElementById("downloadBtn2").addEventListener("click", function() {
  const cvLink = "https://drive.google.com/uc?export=download&id=1hAOco72TInfQxLIpB1jR7LTH3TDzrWoT";  
  const link = document.createElement("a");
  link.href = cvLink;
  link.click();  
});

document.addEventListener('DOMContentLoaded', function() {
  (function(){
      emailjs.init("uas-KBxUIhZrQ_Drg"); 
  })();

  function showMessage(message, type) {
      const messageDiv = document.querySelector('.form-message');
      messageDiv.textContent = message;
      messageDiv.className = `form-message ${type} show`; 

      setTimeout(() => {
          messageDiv.className = 'form-message'; 
          messageDiv.textContent = '';
      }, 3000);
  }

  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); 

      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
      };

      emailjs.send('service_aze95au', 'template_v9z6spt', formData)
          .then(function(response) {
              showMessage('Your message has been sent successfully!', 'success');
              document.getElementById('contact-form').reset(); 
          }, function(error) {
              showMessage('Failed to send email. Please try again later.', 'error');
          });
  });
});