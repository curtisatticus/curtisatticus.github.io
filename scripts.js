// Grab all skill elements
const skills = document.querySelectorAll('.skill');

// Loop over each skill
skills.forEach(skill => {
    
    // Add an event listener for mouseover (hover)
    skill.addEventListener('mouseover', function() {
        const info = this.getAttribute('data-info');
        
        // For now, we'll use a simple alert to show the skill's information
        // In the future, you might replace this with a more elegant tooltip or modal
        alert(`You hovered over the skill: ${info}`);
    });

    // If you want the same interaction on click, you can add:
    skill.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        alert(`You clicked on the skill: ${info}`);
    });
});

