/*
 * Script to enable Google Analytics for this website.
 */
const GA_MEASUREMENT_ID = "G-4TNGT8TGMK";
const EU_COUNTRIES = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"];

$(document).ready(function() {
    $.get("https://ipapi.co/json/", function(data) {
        let userCountry = data.country_code;
        let consent = localStorage.getItem("ga_consent");

        if (EU_COUNTRIES.includes(userCountry)) {
            // If user is from the EU, show consent banner if not already granted
            if (consent === "granted") {
                loadGoogleAnalytics();
            } else if (consent === null) {
                $("#cookiebanner").addClass("show");
            }
        } else {
            // If user is NOT from the EU, load GA without consent
            loadGoogleAnalytics();
        }
    });

    // Accept Cookies
    $("#acceptcookies").click(function() {
        localStorage.setItem("ga_consent", "granted");
        $("#cookiebanner").removeClass("show");
        loadGoogleAnalytics();
    });

    // Reject Cookies
    $("#rejectcookies").click(function() {
        localStorage.setItem("ga_consent", "denied");
        $("#cookiebanner").removeClass("show");
    });
});

// Load Google Analytics Only if Consent Given or User is Outside the EU
function loadGoogleAnalytics() {
    let consent = localStorage.getItem("ga_consent");
    if (consent === "granted" || !EU_COUNTRIES.includes(userCountry)) {
        let script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag("js", new Date());
            gtag("config", GA_MEASUREMENT_ID);
        };
    }
}