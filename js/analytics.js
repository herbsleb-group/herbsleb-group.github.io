/*
 * Script to enable Google Analytics for this website.
 */
function enableAnalytics(calledBy) {
    var tracking_id = 'G-4TNGT8TGMK';
    var gascript = document.createElement("script");
    gascript.async = true;
    gascript.src = "https://www.googletagmanager.com/gtag/js?id="+tracking_id;
    document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]); 
 
    // track pageview
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', tracking_id, { 'anonymize_ip': true });

    alert(calledBy);
};