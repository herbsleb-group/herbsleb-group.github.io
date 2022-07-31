// Localization for analytics

function checkLocale() {

	var countryCodes = {
		AT: 'Austria',
		BE: 'Belgium',
		BG: 'Bulgaria',
		CH: 'Switzerland',
		CR: 'Croatia',
		CY: 'Cyprus',
		CZ: 'Czech Republic',
		DK: 'Denmark',
		EE: 'Estonia',
		FI: 'Finland',
		FR: 'France',
		DE: 'Germany',
		GR: 'Greece',
		EL: 'Greece',
		HU: 'Hungary',
		HR: 'Croatia',
		IE: 'Ireland',
		IS: 'Iceland',
		IT: 'Italy',
		LI: 'Liechtenstein',
		LV: 'Latvia',
		LT: 'Lithuania',
		LU: 'Luxembourg',
		MT: 'Malta',
		NL: 'Netherlands',
		NO: 'Norway',
		PL: 'Poland',
		PT: 'Portugal',
		RO: 'Romania',
		SK: 'Slovakia',
		SI: 'Slovenia',
		ES: 'Spain',
		SE: 'Sweden'
	}

	//$.getJSON('https://freegeoip.app/json/', function (data) {
	$.getJSON('http://ip-api.com/json/', function (data) {
		alert(data.countryCode.toUpperCase());
	    if (!!countryCodes[data.country_code.toUpperCase()] == true) {
	    	showCookieAlert();
	    } else {
        	enableAnalytics();
	    }
	});
};