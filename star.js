const starContainer = document.getElementById('starContainer');
const maxStars = 7; // Maximum number of stars on screen
let currentStars = 0; // Count of current stars

// Function to create a star element
function createStar() {
    // Check if the maximum number of stars is reached
    if (currentStars >= maxStars) {
        return; // Exit if the max number of stars is already reached
    }

    const star = document.createElement('div');
    star.className = 'star';
    star.style.position = 'absolute'; // Position absolute for floating effect

    // Randomly position the star within the viewport
    star.style.top = Math.random() * 100 + 'vh'; // Random starting vertical position
    star.style.left = Math.random() * 100 + 'vw'; // Random starting horizontal position

    // Define initial movement properties
    let speedX = (Math.random() - 0.5) * 3; // Random horizontal speed
    let speedY = (Math.random() - 0.5) * 3; // Random vertical speed
    const minSpeed = 0.5; // Minimum speed threshold for hearts

    // Animation to make the star float
    const floatAnimation = () => {
        // Update star's position
        let currentX = parseFloat(star.style.left);
        let currentY = parseFloat(star.style.top);
        star.style.left = currentX + speedX + 'px';
        star.style.top = currentY + speedY + 'px';

        // Check if the star is off-screen
        const rect = star.getBoundingClientRect();

        // Bounce off the edges
        if (rect.top < 2 || rect.bottom >= window.innerHeight - star.offsetHeight) {
            speedY = -Math.sign(speedY) * 2; // Reset to fixed speed and reverse direction
        }
        if (rect.left < 2 || rect.right >= window.innerWidth - star.offsetWidth) {
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
    starContainer.appendChild(star);
    currentStars++; // Increment count of stars

    // Delay before creating the next star, allowing for the maximum cap
    setTimeout(createStar, 5000); // Create a new star every second
}

// Start the star creation process
createStar();

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