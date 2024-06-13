document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('active');
    });

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSectionId = button.getAttribute('data-section');
            sections.forEach(section => {
                if (section.id === targetSectionId + '-section') {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
