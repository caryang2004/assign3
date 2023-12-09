// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Add an event listener to the submit button
document.getElementById('submit-button').addEventListener('click', function() {
    // Replace the content of the .contact page with a new <p> element
    var contactPage = document.querySelector('.contact');
    contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
});

