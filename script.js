// Smooth scroll and highlight
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                section.classList.add('highlight');
                setTimeout(() => {
                    section.classList.remove('highlight');
                }, 1000);
            }
        }
    });
});

// Show/hide extra info in Web Technologies section
const moreInfoBtn = document.createElement('button');
moreInfoBtn.textContent = 'Show More Info';
moreInfoBtn.style.marginTop = '10px';
moreInfoBtn.setAttribute('aria-expanded', 'false');

const webTechSection = document.getElementById('web_technologies');

const extraInfo = document.createElement('div');
extraInfo.style.display = 'none';
extraInfo.innerHTML = `
    <p><strong>HTML5:</strong> Latest version, supports multimedia and new elements.</p>
    <p><strong>CSS3:</strong> Adds animations, transitions, and responsive layouts.</p>
    <p><strong>JavaScript ES6+:</strong> Modern features for cleaner code.</p>
`;

moreInfoBtn.addEventListener('click', () => {
    const isVisible = extraInfo.style.display === 'block';
    extraInfo.style.display = isVisible ? 'none' : 'block';
    moreInfoBtn.textContent = isVisible ? 'Show More Info' : 'Hide Info';
    moreInfoBtn.setAttribute('aria-expanded', !isVisible);
});

webTechSection.appendChild(moreInfoBtn);
webTechSection.appendChild(extraInfo);
