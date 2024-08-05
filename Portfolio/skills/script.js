// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all skill progress elements
    const skillBars = document.querySelectorAll('.skill-progress');
    // Animate each skill bar using GSAP
    skillBars.forEach(skillBar => {
        const percentage = skillBar.parentElement.getAttribute('data-percentage');
        // Use GSAP to animate the height of the skill progress bar
        gsap.to(skillBar, {
            height: `${percentage * 3}px`, // Set height based on percentage
            duration: 1.5, // Duration of animation
            ease: 'power2.out', // Easing function
            onComplete: () => {
                skillBar.textContent = `${percentage}%`; // Display percentage
                createBubbles(skillBar); // Create bubbles once animation is complete
            }
        });
    });

    // Function to create bubbles
    function createBubbles(skillBar) {
        const bubblesContainer = skillBar.nextElementSibling; // Get the bubbles container
        // Use GSAP timeline for bubble animation
        const bubbleTimeline = gsap.timeline({
            repeat: -1, // Repeat indefinitely
            delay: 0.5, // Delay before starting the animation
            paused: true // Initially paused
        });
        // Add bubble animation to timeline
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubblesContainer.appendChild(bubble);
            const bubbleSize = gsap.utils.random(5, 15); // Random size for each bubble
            bubbleTimeline.to(bubble, {
                y: -300, // Move bubble upwards
                x: `random(-10, 10)`, // Random horizontal movement
                opacity: 0, // Fade out bubble
                duration: `random(3, 5)`, // Random duration
                ease: 'power2.out', // Easing function
                onStart: () => {
                    bubble.style.width = `${bubbleSize}px`; // Set bubble size
                    bubble.style.height = `${bubbleSize}px`;
                    bubble.style.bottom = `-10px`; // Start position
                    bubble.style.left = `random(0, 100)%`; // Random horizontal start position
                },
                onRepeat: () => {
                    bubble.style.width = `${bubbleSize}px`; // Reset bubble size on repeat
                    bubble.style.height = `${bubbleSize}px`;
                    bubble.style.bottom = `-10px`; // Reset start position
                    bubble.style.left = `random(0, 100)%`; // Reset horizontal start position
                    bubble.style.opacity = 0.3; // Reset opacity
                }
            }, `random(0, 3)`); // Random start time for each bubble
        }
        bubbleTimeline.play(); // Start the bubble animation
    }
});
