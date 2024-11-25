const heartContainer = document.getElementById('heartContainer');
const maxHearts = 7; // Maximum number of hearts on screen
let currentHearts = 0; // Count of current hearts

// Function to create a heart element
function createHeart() {
    // Check if the maximum number of hearts is reached
    if (currentHearts >= maxHearts) {
        return; // Exit if the max number of hearts is already reached
    }
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.position = 'absolute'; // Position absolute for floating effect

    // Randomly position the heart within the viewport
    heart.style.top = Math.random() * 100 + 'vh'; // Random starting vertical position (100vh instead of 1000vh for viewport)
    heart.style.left = Math.random() * 100 + 'vw'; // Random starting horizontal position (100vw instead of 1000vw for viewport)

    // Define initial movement properties
    let speedX = (Math.random() - 0.5) * 3; // Random horizontal speed (adjust for more spread)
    let speedY = (Math.random() - 0.5) * 3; // Random vertical speed (adjust for more spread)

    // Animation to make the heart float
    const floatAnimation = () => {
        // Update heart's position
        let currentX = parseFloat(heart.style.left);
        let currentY = parseFloat(heart.style.top);
        heart.style.left = currentX + speedX + 'px';
        heart.style.top = currentY + speedY + 'px';

        // Check if the heart is off-screen
        const rect = heart.getBoundingClientRect();

        // Bounce off the edges
        if (rect.top < 2 || rect.bottom >= window.innerHeight - heart.offsetHeight) {
            speedY = -Math.sign(speedY) * 2; // Reset to fixed speed and reverse direction
        }
        if (rect.left < 2 || rect.right >= window.innerWidth - heart.offsetWidth) {
            speedX = -Math.sign(speedX) * 2; // Reset to fixed speed and reverse direction
        }

        // Keep the heart within bounds
        if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
            heart.remove(); // Remove heart if it goes off screen
            currentHearts--; // Decrease heart count
        } else {
            requestAnimationFrame(floatAnimation); // Continue the animation
        }
    };

    // Start floating animation
    requestAnimationFrame(floatAnimation);
    heartContainer.appendChild(heart);
    currentHearts++; // Increment count of hearts

    // Delay before creating the next heart, allowing for the maximum cap
    setTimeout(createHeart, 5000); // Create a new heart every second
}

// Start the heart creation process
createHeart();

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