/*
 * Script to enable Google Analytics for this website.
 */
function enableAnalytics() {
    var tracking_id = 'UA-171815511-1';         
    var gascript = document.createElement("script");
    gascript.async = true;
    gascript.src = "https://www.googletagmanager.com/gtag/js?id="+tracking_id;
    document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]); 
 
    // track pageview
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', tracking_id, { 'anonymize_ip': true }); 
};