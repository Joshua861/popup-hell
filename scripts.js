// Function to close the popup
function closeNews() {
    document.getElementById('newsletterPopup').style.display = 'none';
}

// Event listener for the page load event
window.addEventListener('load', function () {
    document.getElementById('newsletterPopup').style.display = 'flex';
});

var email_submit = document.getElementById('email-submit');

// Add event listener to the button
email_submit.addEventListener('click', submit_email);

function submit_email() {
    closeNews();
    openCookies();
}

function closeCookies() {
    cookies.style.display = 'none';
}

var cookies = document.getElementById('cookies');

function openCookies() {
    cookies.style.display = 'flex';
}

var more_cookies = document.getElementById('more-cookies');

var c_yes = document.getElementById('yes-cookies');

function moreCookies() {
    more_cookies.style.display = 'flex';
}

// Add event listener to the button
c_yes.addEventListener('click', acceptCookies);

var c_no = document.getElementById('no-cookies');

// Add event listener to the button
c_no.addEventListener('click', declineCookies);

function declineCookies() {
    // Perform actions for declining cookies
    console.log("Cookies declined");
    closeCookies();
    moreCookies();
}

function acceptCookies() {
    // Perform actions for accepting cookies
    console.log("Cookies accepted");
    closeCookies();
    moreCookies();
}

var cookies_submit = document.getElementById('cookies-submit');

closeMoreCookies.addEventListener('click', closeMoreCookiesMenu);

function closeMoreCookiesMenu() {
    more_cookies.style.display = 'none';
}
