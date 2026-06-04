/*
 * Script to enable Google Analytics for this website.
 */
const GA_MEASUREMENT_ID = "G-ZCP73FZ2JD";
const EU_COUNTRIES = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"];

$(document).ready(function () {

    $.get("https://ipapi.co/json/", function (data) {
        let userCountry = data.country_code;
        let consent = localStorage.getItem("ga_consent");

        if (EU_COUNTRIES.includes(userCountry)) {
            if (consent === "granted") {
                loadGoogleAnalytics();
            } else if (consent === null) {
                $("#cookiebanner").addClass("show");
            }
        } else {
            loadGoogleAnalytics();
        }
    });

    $("#acceptcookies").on("click", function () {
        localStorage.setItem("ga_consent", "granted");
        $("#cookiebanner").removeClass("show");
        loadGoogleAnalytics();
    });

    $("#rejectcookies").on("click", function () {
        localStorage.setItem("ga_consent", "denied");
        $("#cookiebanner").removeClass("show");
    });

});

function loadGoogleAnalytics() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;

    let script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", GA_MEASUREMENT_ID);
    };
}