var main = document.getElementById('main');
const sub_pnum = document.getElementById('submit-pnum');
const pnum = document.getElementById('pnum');
const verifyP = document.getElementById('verify-pnum');
const pnum_content = document.getElementById('pnum-content');

function showPnum() {
    pnum.style.display = 'flex';
}

function hidePnum() {
    pnum.style.display = 'none';
}

function sike() {
    setTimeout(function () {
        main.innerHTML = "<h1 id='sorry'>Sorry this website doesn't support your browser.</h1><br><img src='sorry.png'>";
    }, 5000);
}

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
    showVideo();
}

var cookies_submit = document.getElementById('cookies-submit');

cookies_submit.addEventListener('click', closeMoreCookiesMenu);

var video = document.getElementById('video');

function showVideo() {
    more_cookies.style.display = 'none';
    video.style.display = 'flex';
}

function closeMoreCookiesMenu() {
    document.getElementById('mcc').innerHTML = "<h1>Are you sure you don't just want to enable all of the cookies?<h/1><br><br><button id='yes'>i have no friends and hate cookies</button><button id='no'>Nah, I want all the cookies becuase I am very cool! 😎</button>";
    document.getElementById('no').addEventListener('click', showVideo);
    document.getElementById('yes').addEventListener('click', usure);
}

function usure() {
    document.getElementById('mcc').innerHTML = `
    <h1>Are you sure you want to do this?</h1>
    <h3>I wouldn't if I were you.</h3>
    <h4>(we know where you live)
    <br><br>
    <button id='emo'>Yes, I am resigned to my fate.</button>
    <button id='help-me'>Is it too late to go back?</button>
    `;
    document.getElementById('help-me').addEventListener('click', goBack);
    document.getElementById('emo').addEventListener('click', threat);
}
function goBack() {
    document.getElementById('mcc').innerHTML = `
    <h1>Good, you may return.</h1>
    <br><br>
    <button id="show-video">Thank you my lord</button>
    `;
    document.getElementById('show-video').addEventListener('click', showVideo);
}

function threat() {
    document.getElementById('mcc').innerHTML = `
    <h1>Uh oh</h1>
    <h2>Insert scary thing here</h2>
    <br><br>
    <button id="oh-no">Oh, the horror! I had better close this popup!</button>
    `
    document.getElementById('oh-no').addEventListener('click', showVideo);
}

sub_pnum.addEventListener('click', closePnum);

var close_video = document.getElementById('close-video');

close_video.addEventListener('click', hideVideo);

function hideVideo() {
    video.style.display = 'none';
    showPnum();
}

function closePnum() {
    hidePnum();
    verifyP.style.display = "flex";
}

const subCode = document.getElementById('submit-code');

subCode.addEventListener('click', submitCode);

function submitCode() {
    document.getElementById('vpc').innerHTML = "<h1>Sorry, that isn't right.</h1><br><button id='resend'>Send again?</button>";
    document.getElementById('resend').addEventListener('click', resend);
}

function resend() {
    document.getElementById('vpc').innerHTML = `
    <h1>Please verify your phone number.</h1>
    <h3>GET IT RIGHT THIS TIME!</h3>
    <br>
    <label for="pnum">YOUR FUCKING CODE: </label>
    <input id="pnum" type="text">
    <input style="display: inline;" type="submit" id="resubmit-code">
    <br><br>
    <footer>Customer support will never ask for your code.</footer>`;
    document.getElementById('resubmit-code').addEventListener('click', resubmit);
}

function resubmit() {
    document.getElementById('vpc').innerHTML = '<h1>Jeez, took you long enough.</h1>';
    setTimeout(function () {
        document.getElementById('verify-pnum').style.display = 'none';
    }, 2000);
    sike()
}