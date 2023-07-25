document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
  
      var messageInput = document.getElementById("message");
      var message = messageInput.value;
      var emailAddress = "psmccue@gmail.com";
      var subject = "Contact Form Submission";
      var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
  
      window.location.href = mailtoLink;
    });
  });
  
  