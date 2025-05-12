// Scroll animation reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll('.service-card, .about-text, .about-img').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
  
  // Contact form simulation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Simulated submission
    alert("Thank you, " + name + "! Your message has been sent. Sharon will get back to you soon.");
    this.reset();
  });
// Booking form functionality
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('client-name').value.trim();
    const phone = document.getElementById('client-phone').value.trim();
    const service = document.getElementById('service-type').value;
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
  
    if (!name || !phone || !service || !date || !time) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Simulate booking submission
    alert(`Thank you, ${name}! You've booked ${service} on ${date} at ${time}. Sharon will reach you on WhatsApp.`);
  
    // Reset form
    this.reset();
  });
    
  