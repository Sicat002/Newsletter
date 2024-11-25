const moonContainer = document.getElementById('moonContainer');
const maxMoons = 7; // Maximum number of stars on screen
let currentMoons = 0; // Count of current stars

// Function to create a star element
function createMoon() {
    // Check if the maximum number of stars is reached
    if (currentMoons >= maxMoons) {
        return; // Exit if the max number of stars is already reached
    }

    const moon = document.createElement('div');
    moon.className = 'moon';
    moon.style.position = 'absolute'; // Position absolute for floating effect

    // Randomly position the star within the viewport
    moon.style.top = Math.random() * 100 + 'vh'; // Random starting vertical position
    moon.style.left = Math.random() * 100 + 'vw'; // Random starting horizontal position

    // Define initial movement properties
    let speedX = (Math.random() - 0.5) * 3; // Random horizontal speed
    let speedY = (Math.random() - 0.5) * 3; // Random vertical speed
    const minSpeed = 0.5; // Minimum speed threshold for hearts

    // Animation to make the star float
    const floatAnimation = () => {
        // Update star's position
        let currentX = parseFloat(moon.style.left);
        let currentY = parseFloat(moon.style.top);
        moon.style.left = currentX + speedX + 'px';
        moon.style.top = currentY + speedY + 'px';

        // Check if the star is off-screen
        const rect = moon.getBoundingClientRect();

        // Bounce off the edges
        if (rect.top < 2 || rect.bottom >= window.innerHeight - moon.offsetHeight) {
            speedY = -Math.sign(speedY) * 2; // Reset to fixed speed and reverse direction
        }
        if (rect.left < 2 || rect.right >= window.innerWidth - moon.offsetWidth) {
            speedX = -Math.sign(speedX) * 2; // Reset to fixed speed and reverse direction
        }

       // Keep the heart within bounds
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            moon.remove(); // Remove heart if it goes off screen
            currentMoons--; // Decrease heart count
        } else {
            requestAnimationFrame(floatAnimation); // Continue the animation
        }
    };

    // Start floating animation
    requestAnimationFrame(floatAnimation);
    moonContainer.appendChild(moon);
    currentMoons++; // Increment count of stars

    // Delay before creating the next star, allowing for the maximum cap
    setTimeout(createMoon, 5000); // Create a new star every second
}

// Start the star creation process
createMoon();

// JavaScript function to toggle audio figures visibility
function showSongs() {
  // Check the display style of the first audio figure to determine visibility
  const isHidden = document.getElementById("song1").style.display === "none" || document.getElementById("song1").style.display === "";

  if (isHidden) {
    // Show audio figures
    document.getElementById("song1").style.display = "block";
    document.getElementById("song2").style.display = "block";
    document.getElementById("song3").style.display = "block";

    // Apply fade-in effect
    setTimeout(function() {
      document.getElementById("song1").style.opacity = 1;
      document.getElementById("song2").style.opacity = 1;
      document.getElementById("song3").style.opacity = 1;
    }, 10);
  } else {
    // Hide audio figures
    document.getElementById("song1").style.opacity = 0;
    document.getElementById("song2").style.opacity = 0;
    document.getElementById("song3").style.opacity = 0;


    // Delay hiding to allow fade-out effect
    setTimeout(function() {
      document.getElementById("song1").style.display = "none";
      document.getElementById("song2").style.display = "none";
      document.getElementById("song3").style.display = "none";
    }, 500); // Matches the fade-in transition duration
  }
}