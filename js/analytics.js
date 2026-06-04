/*
 * Script to enable Google Analytics for this website.
 */
const GA_MEASUREMENT_ID = "G-4TNGT8TGMK";
const EU_COUNTRIES = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"];

// Set up dataLayer and gtag immediately — the script tag in <head> is already loading
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag("js", new Date());
gtag("config", GA_MEASUREMENT_ID);

$(document).ready(function () {

    $.get("https://ipapi.co/json/", function (data) {
        let userCountry = data.country_code;
        let consent = localStorage.getItem("ga_consent");

        if (EU_COUNTRIES.includes(userCountry)) {
            if (consent === "granted") {
                // Already consented — nothing to do, GA is already running
            } else if (consent === null) {
                // First visit — show banner
                $("#cookiebanner").addClass("show");
            }
            // consent === "denied": GA should not run — disable it
            if (consent !== "granted") {
                gtag("consent", "update", { analytics_storage: "denied" });
            }
        }
        // Non-EU: GA runs without consent, no banner

        // Accept
        $("#acceptcookies").off("click").on("click", function () {
            localStorage.setItem("ga_consent", "granted");
            $("#cookiebanner").removeClass("show");
            gtag("consent", "update", { analytics_storage: "granted" });
        });

        // Decline
        $("#rejectcookies").off("click").on("click", function () {
            localStorage.setItem("ga_consent", "denied");
            $("#cookiebanner").removeClass("show");
            gtag("consent", "update", { analytics_storage: "denied" });
        });
    });

});
