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

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Software Developer","Data Engineer","DevOps Engineer",],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true    

})

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})

    /* -- PROJECT BOX -- */
    sr.reveal('.project-box',{interval: 200})
    /* -- HEADINGS -- */
    sr.reveal('.top-header',{})

    /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.academic-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  document.addEventListener('DOMContentLoaded', () => {
    const projectBoxes = document.querySelectorAll('.project-box');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showProject(index, direction = 'next') {
        if (index < 0 || index >= projectBoxes.length) return;

        if (currentIndex !== index) {
            projectBoxes[currentIndex].classList.remove('active');
            projectBoxes[currentIndex].style.transform = 
                direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
            projectBoxes[currentIndex].style.opacity = '0';
        }

        projectBoxes[index].style.left = '0';
        projectBoxes[index].style.transform = 
            direction === 'next' ? 'translateX(0)' : 'translateX(0)';
        projectBoxes[index].classList.add('active');
        projectBoxes[index].style.opacity = '1';

        projectBoxes.forEach((box, i) => {
            if (i !== index) {
                box.style.left = direction === 'next' ? '100%' : '-100%';
                box.style.transform = 'translateX(0)';
            }
        });

        currentIndex = index;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < projectBoxes.length - 1) {
            showProject(currentIndex + 1, 'next');
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            showProject(currentIndex - 1, 'prev');
        }
    });

    showProject(0);
});