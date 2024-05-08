function scrollToContact() {
    // Find the contact section element
    const contactSection = document.getElementById('contact-section');
    
    // Check if the contact section exists
    if (contactSection) {
        // Scroll to the contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Contact section not found.');
    }
}