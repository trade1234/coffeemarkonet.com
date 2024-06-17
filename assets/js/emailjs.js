  const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

  const sendEmail = (e) =>{
      e.preventDefault()

    //serviceID - temeplet - #form - publickey

      emailjs.sendForm("service_wa0hqho","template_6rn8gka","#contact-form","_derU0PoSzs5-Tc4y")
      .then(() =>{
         // Show sent message 
          contactMessage.textContent = 'Message sent successfully ✅'

         // Remove message after five seconds
          setTimeout(()=>{
              contactMessage.textContent = ''
          }, 2500)

          //Clear input Fields
          contactForm.reset()

      }, () =>{
          // Show error message
          contactMessage.textContent= 'Message not sent (service error) ❌'
        })
    }
    contactForm.addEventListener('submit', sendEmail)