
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const socialLinks = [
    { name: 'Facebook', icon: 'facebook.png', url: 'https://www.facebook.com/Mathieu.Gundran' },
    { name: 'GitHub', icon: 'github.png', url: 'https://github.com/MathieuGCG' },
    { name: 'Instagram', icon: 'instagram.png', url: 'https://www.instagram.com/mathieugcg/' }
];

const socialContainer = document.querySelector('.social');

socialLinks.forEach(link => {
    const socialElement = document.createElement('div');
    socialElement.classList.add('social-link');
    socialElement.innerHTML = `
        <a href="${link.url}" target="_blank">
            <img src="${link.icon}" alt="${link.name}">
        </a>
    `;
    socialContainer.appendChild(socialElement);
});
const homeImage1 = document.getElementById('homeImage1');
const homeImage2 = document.getElementById('homeImage2');

function swapImages() {
  if (homeImage1.style.display === 'none') {
    homeImage1.style.display = 'block';
    homeImage2.style.display = 'none';
  } else {
    homeImage1.style.display = 'none';
    homeImage2.style.display = 'block';
  }
}


setInterval(swapImages, 3000);