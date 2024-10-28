// Expand news item function
function expandNewsItem(newsElement) {
    var modal = document.getElementById("expandedNewsModal");
    var newsDetails = document.getElementById("expandedNewsDetails");
    
    // Get the content of the clicked news item
    var newsTitle = newsElement.querySelector('h3').innerHTML;
    var newsText = newsElement.querySelectorAll('p'); // Select all <p> elements
    var newsImage = newsElement.querySelector('img').src;

    // Combine all the paragraph content for display in the modal
    var fullText = "";
    newsText.forEach(function(paragraph) {
        fullText += `<p>${paragraph.innerHTML}</p>`;
    });

    // Display the content in the modal
    newsDetails.innerHTML = `
        <img src="${newsImage}" class="img-fluid news-image" alt="Expanded News Image">
        <h3>${newsTitle}</h3>
        ${fullText} <!-- Show all the paragraphs in the modal -->
    `;

    // Show the modal with the content
    modal.style.display = "flex";

    // Ensure clicking outside or pressing 'X' closes the modal
    closeModalOnOutsideClick(modal);
}



// Close the expanded news modal
function closeExpandedNews() {
    var modal = document.getElementById("expandedNewsModal");
    
    // Add a collapse animation before hiding
    modal.style.animation = "collapseModal 0.4s ease";
    setTimeout(function() {
        modal.style.display = "none";
        modal.style.animation = "";  // Remove animation for next time
    }, 400);
}

// Close modal when clicking outside of the popup
function closeModalOnOutsideClick(modal) {
    window.onclick = function(event) {
        if (event.target == modal) {
            closeExpandedNews();
        }
    };
}

// Submit email function
function submitEmail(event) {
    // Preventing the the default form submission behavior over here
    event.preventDefault();

    var emailInput = document.getElementById("email-input").value;
    var emailMessage = document.getElementById("emailMessage");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email pattern

    // Check if the email input is valid
    if (emailPattern.test(emailInput)) {
        // Show confirmation message
        emailMessage.innerHTML = "Subscription successful! Please check your inbox.";
        emailMessage.style.display = "block";

        event.target.reset(); // Clear the field

        // Hide message after 4 seconds
        setTimeout(function() {
            emailMessage.style.display = "none";
        }, 4000);
    } else {
        // Show error message
        emailMessage.innerHTML = "Please enter a valid email address.";
        emailMessage.style.color = "red"; // Error message color
        emailMessage.style.display = "block";
    }
}


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    // Set the full GTA release date in MM/DD/YYYY format
    //------------------------------
    let gtaReleaseDate = "10/28/2024"; 
    //------------------------------

    // Developer override settings (for testing purposes)
    const developerOverride = true; // Set this to true to enable testing override
    const devDayOffset = 0; // Adjust days for testing (e.g +1, -1)
    const devHourOffset = 0; // Adjust hours for testing (e.g +1 hour from now)
    const devMinuteOffset = 0; // Adjust minutes for testing (e.g +10 minutes from now)
    const devSecondOffset = 30; // Adjust seconds for testing (e.g +10 seconds from now)
  
    // Get today's date
    let today = new Date();
  
    // Developer override logic to manually change hours, days, and minutes for testing
    if (developerOverride) {
      const customDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + devDayOffset, // Modify days
        today.getHours() + devHourOffset, // Modify hours
        today.getMinutes() + devMinuteOffset, // Modify minutes
        today.getSeconds() + devSecondOffset  // Modify seconds
      );
      gtaReleaseDate = customDate; // Override the GTA release date with the dev test date
    } else {
      // Main functionality: create a date object with the GTA release date (use the specified full date)
      gtaReleaseDate = new Date(gtaReleaseDate);
    }
  
    // Set the countdown target time
    const countDown = new Date(gtaReleaseDate).getTime(),
          x = setInterval(function() {
  
      const now = new Date().getTime(),
            distance = countDown - now;
  
      // Update the countdown display
      document.getElementById("gta-days").innerText = Math.floor(distance / (day));
      document.getElementById("gta-hours").innerText = Math.floor((distance % (day)) / (hour));
      document.getElementById("gta-minutes").innerText = Math.floor((distance % (hour)) / (minute));
      document.getElementById("gta-seconds").innerText = Math.floor((distance % (minute)) / second);
  
      // When the countdown ends
      if (distance < 0) {
        document.getElementById("gta-headline").innerText = "GTA 6 is here!";
        document.getElementById("gta-countdown").style.display = "none";
        document.getElementById("gta-content").style.display = "block";
        clearInterval(x);
        startFireworks(); // Trigger fireworks
      }
    }, 1000);
  })();

  // Function to start fireworks using canvas-confetti
function startFireworks() {
    const duration = 20 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

  
  
  


