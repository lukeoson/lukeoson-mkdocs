
document.addEventListener('DOMContentLoaded', function() {
    const badgeDiv = document.createElement('div');
    badgeDiv.className = 'badge-base LI-profile-badge';
    badgeDiv.setAttribute('data-locale', 'en_US');
    badgeDiv.setAttribute('data-size', 'large');
    badgeDiv.setAttribute('data-theme', 'light');
    badgeDiv.setAttribute('data-type', 'HORIZONTAL');
    badgeDiv.setAttribute('data-vanity', 'luke-richardson');
    badgeDiv.setAttribute('data-version', 'v1');

    const badgeLink = document.createElement('a');
    badgeLink.className = 'badge-base__link LI-simple-link';
    badgeLink.href = 'https://uk.linkedin.com/in/luke-richardson';
    badgeLink.innerHTML = 'Luke Richardson';

    badgeDiv.appendChild(badgeLink);

    document.querySelector('#your-contacts-div').appendChild(badgeDiv);
});

