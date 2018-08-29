const db = require('./lib/db');

const countryList = [
     {"hasDims": false, "c_code": "AF", "name": "Afghanistan"},
     {"hasDims": true, "c_code": "AL", "name": "Albania"},
     {"hasDims": true, "c_code": "DZ", "name": "Algeria"},
     {"hasDims": false, "c_code": "AS", "name": "American Samoa"},
     {"hasDims": false, "c_code": "AD", "name": "Andorra"},
     {"hasDims": false, "c_code": "AO", "name": "Angola"},
     {"hasDims": false, "c_code": "AI", "name": "Anguilla"},
     {"hasDims": false, "c_code": "AQ", "name": "Antarctica"},
     {"hasDims": false, "c_code": "AG", "name": "Antigua and Barbuda"},
     {"hasDims": true, "c_code": "AR", "name": "Argentina"},
     {"hasDims": true, "c_code": "AM", "name": "Armenia"},
     {"hasDims": true, "c_code": "AU", "name": "Australia"},
     {"hasDims": true, "c_code": "AT", "name": "Austria"},
     {"hasDims": true, "c_code": "AZ", "name": "Azerbaijan"},
     {"hasDims": false, "c_code": "BS", "name": "Bahamas"},
     {"hasDims": false, "c_code": "BH", "name": "Bahrain"},
     {"hasDims": true, "c_code": "BD", "name": "Bangladesh"},
     {"hasDims": false, "c_code": "BB", "name": "Barbados"},
     {"hasDims": true, "c_code": "BY", "name": "Belarus"},
     {"hasDims": true, "c_code": "BE", "name": "Belgium"},
     {"hasDims": false, "c_code": "BZ", "name": "Belize"},
     {"hasDims": false, "c_code": "BJ", "name": "Benin"},
     {"hasDims": false, "c_code": "BM", "name": "Bermuda"},
     {"hasDims": false, "c_code": "BT", "name": "Bhutan"},
     {"hasDims": false, "c_code": "BO", "name": "Bolivia, Plurinational State of"},
     {"hasDims": false, "c_code": "BQ", "name": "Bonaire, Sint Eustatius and Saba"},
     {"hasDims": true, "c_code": "BA", "name": "Bosnia and Herzegovina"},
     {"hasDims": false, "c_code": "BW", "name": "Botswana"},
     {"hasDims": false, "c_code": "BV", "name": "Bouvet Island"},
     {"hasDims": true, "c_code": "BR", "name": "Brazil"},
     {"hasDims": false, "c_code": "IO", "name": "British Indian Ocean Territory"},
     {"hasDims": false, "c_code": "BN", "name": "Brunei Darussalam"},
     {"hasDims": true, "c_code": "BG", "name": "Bulgaria"},
     {"hasDims": true, "c_code": "BF", "name": "Burkina Faso"},
     {"hasDims": false, "c_code": "BI", "name": "Burundi"},
     {"hasDims": false, "c_code": "KH", "name": "Cambodia"},
     {"hasDims": false, "c_code": "CM", "name": "Cameroon"},
     {"hasDims": true, "c_code": "CA", "name": "Canada"},
     {"hasDims": false, "c_code": "CV", "name": "Cape Verde"},
     {"hasDims": false, "c_code": "KY", "name": "Cayman Islands"},
     {"hasDims": false, "c_code": "CF", "name": "Central African Republic"},
     {"hasDims": false, "c_code": "TD", "name": "Chad"},
     {"hasDims": true, "c_code": "CL", "name": "Chile"},
     {"hasDims": true, "c_code": "CN", "name": "China"},
     {"hasDims": false, "c_code": "CX", "name": "Christmas Island"},
     {"hasDims": false, "c_code": "CC", "name": "Cocos (Keeling) Islands"},
     {"hasDims": true, "c_code": "CO", "name": "Colombia"},
     {"hasDims": false, "c_code": "KM", "name": "Comoros"},
     {"hasDims": false, "c_code": "CG", "name": "Congo"},
     {"hasDims": false, "c_code": "CD", "name": "Congo, the Democratic Republic of the"},
     {"hasDims": false, "c_code": "CK", "name": "Cook Islands"},
     {"hasDims": true, "c_code": "CR", "name": "Costa Rica"},
     {"hasDims": false, "c_code": "CI", "name": "Ivory Coast"},
     {"hasDims": true, "c_code": "HR", "name": "Croatia"},
     {"hasDims": false, "c_code": "CU", "name": "Cuba"},
     {"hasDims": false, "c_code": "CW", "name": "Curacao"},
     {"hasDims": false, "c_code": "CY", "name": "Cyprus"},
     {"hasDims": true, "c_code": "CZ", "name": "Czech Republic"},
     {"hasDims": true, "c_code": "DK", "name": "Denmark"},
     {"hasDims": false, "c_code": "DJ", "name": "Djibouti"},
     {"hasDims": false, "c_code": "DM","name": "Dominica"},
     {"hasDims": true, "c_code": "DO", "name": "Dominican Republic"},
     {"hasDims": true, "c_code": "EC", "name": "Ecuador"},
     {"hasDims": true, "c_code": "EG", "name": "Egypt"},
     {"hasDims": true, "c_code": "SV", "name": "El Salvador"},
     {"hasDims": false, "c_code": "GQ", "name": "Equatorial Guinea"},
     {"hasDims": false, "c_code": "ER", "name": "Eritrea"},
     {"hasDims": true, "c_code": "EE", "name": "Estonia"},
     {"hasDims": false, "c_code": "ET", "name": "Ethiopia"},
     {"hasDims": false, "c_code": "FK", "name": "Falkland Islands (Malvinas)"},
     {"hasDims": false, "c_code": "FO", "name": "Faroe Islands"},
     {"hasDims": false, "c_code": "FJ", "name": "Fiji"},
     {"hasDims": true, "c_code": "FI", "name": "Finland"},
     {"hasDims": true, "c_code": "FR", "name": "France"},
     {"hasDims": false, "c_code": "GF", "name": "French Guiana"},
     {"hasDims": false, "c_code": "PF", "name": "French Polynesia"},
     {"hasDims": false, "c_code": "TF", "name": "French Southern Territories"},
     {"hasDims": false, "c_code": "GA", "name": "Gabon"},
     {"hasDims": false, "c_code": "GM", "name": "Gambia"},
     {"hasDims": true, "c_code": "GE", "name": "Georgia"},
     {"hasDims": true, "c_code": "DE", "name": "Germany"},
     {"hasDims": true, "c_code": "GH", "name": "Ghana"},
     {"hasDims": false, "c_code": "GI", "name": "Gibraltar"},
     {"hasDims": true, "c_code": "GR", "name": "Greece"},
     {"hasDims": false, "c_code": "GL", "name": "Greenland"},
     {"hasDims": false, "c_code": "GD", "name": "Grenada"},
     {"hasDims": false, "c_code": "GP", "name": "Guadeloupe"},
     {"hasDims": false, "c_code": "GU", "name": "Guam"},
     {"hasDims": true, "c_code": "GT", "name": "Guatemala"},
     {"hasDims": false, "c_code": "GG", "name": "Guernsey"},
     {"hasDims": false, "c_code": "GN", "name": "Guinea"},
     {"hasDims": false, "c_code": "GW", "name": "Guinea-Bissau"},
     {"hasDims": false, "c_code": "GY", "name": "Guyana"},
     {"hasDims": false, "c_code": "HT", "name": "Haiti"},
     {"hasDims": false, "c_code": "HM", "name": "Heard Island and McDonald Islands"},
     {"hasDims": false, "c_code": "VA", "name": "Holy See (Vatican City State)"},
     {"hasDims": false, "c_code": "HN", "name": "Honduras"},
     {"hasDims": true, "c_code": "HK", "name": "Hong Kong"},
     {"hasDims": true, "c_code": "HU", "name": "Hungary"},
     {"hasDims": true, "c_code": "IS", "name": "Iceland"},
     {"hasDims": true, "c_code": "IN", "name": "India"},
     {"hasDims": true, "c_code":"ID", "name": "Indonesia"},
     {"hasDims": true, "c_code": "IR", "name": "Iran, Islamic Republic of"},
     {"hasDims": true, "c_code": "IQ", "name": "Iraq"},
     {"hasDims": true, "c_code": "IE", "name": "Ireland"},
     {"hasDims": false, "c_code": "IM", "name": "Isle of Man"},
     {"hasDims": true, "c_code": "IL", "name": "Israel"},
     {"hasDims": true, "c_code": "IT", "name": "Italy"},
     {"hasDims": true, "c_code": "JM", "name": "Jamaica"},
     {"hasDims": true, "c_code": "JP", "name": "Japan"},
     {"hasDims": false, "c_code": "JE", "name": "Jersey"},
     {"hasDims": true, "c_code": "JO", "name": "Jordan"},
     {"hasDims": false, "c_code": "KZ", "name": "Kazakhstan"},
     {"hasDims": false, "c_code": "KE", "name": "Kenya"},
     {"hasDims": false, "c_code": "KI", "name": "Kiribati"},
     {"hasDims": false, "c_code": "KP", "name": "Korea, Democratic People's Republic of"},
     {"hasDims": true, "c_code": "KR", "name": "Korea, Republic of"},
     {"hasDims": false, "c_code": "KW", "name": "Kuwait"},
     {"hasDims": true, "c_code": "KG", "name": "Kyrgyzstan"},
     {"hasDims": false, "c_code": "LA", "name": "Lao People's Democratic Republic"},
     {"hasDims": true, "c_code": "LV", "name": "Latvia"},
     {"hasDims": false, "c_code": "LB", "name": "Lebanon"},
     {"hasDims": false, "c_code": "LS", "name": "Lesotho"},
     {"hasDims": false, "c_code": "LR", "name": "Liberia"},
     {"hasDims": false, "c_code": "LY", "name": "Libya"},
     {"hasDims": false, "c_code": "LI", "name": "Liechtenstein"},
     {"hasDims": true, "c_code": "LT", "name": "Lithuania"},
     {"hasDims": true, "c_code": "LU", "name": "Luxembourg"},
     {"hasDims": false, "c_code": "MO", "name": "Macao"},
     {"hasDims": true, "c_code": "MK", "name": "Macedonia, the Former Yugoslav Republic of"},
     {"hasDims": false, "c_code": "MG", "name": "Madagascar"},
     {"hasDims": false, "c_code": "MW", "name": "Malawi"},
     {"hasDims": true, "c_code": "MY", "name": "Malaysia"},
     {"hasDims": false, "c_code": "MV", "name": "Maldives"},
     {"hasDims": true, "c_code": "ML", "name": "Mali"},
     {"hasDims": true, "c_code": "MT", "name": "Malta"},
     {"hasDims": false, "c_code": "MH", "name": "Marshall Islands"},
     {"hasDims": false, "c_code": "MQ", "name": "Martinique"},
     {"hasDims": false, "c_code": "MR", "name": "Mauritania"},
     {"hasDims": false, "c_code": "MU", "name": "Mauritius"},
     {"hasDims": false, "c_code": "YT", "name": "Mayotte"},
     {"hasDims": true, "c_code": "MX", "name": "Mexico"},
     {"hasDims": false, "c_code": "FM", "name": "Micronesia, Federated States of"},
     {"hasDims": true, "c_code": "MD", "name": "Moldova, Republic of"},
     {"hasDims": false, "c_code": "MC", "name": "Monaco"},
     {"hasDims": false, "c_code": "MN", "name": "Mongolia"},
     {"hasDims": true, "c_code": "ME", "name": "Montenegro"},
     {"hasDims": false, "c_code": "MS", "name": "Montserrat"},
     {"hasDims": true, "c_code": "MA", "name": "Morocco"},
     {"hasDims": false, "c_code": "MZ", "name": "Mozambique"},
     {"hasDims": false, "c_code": "MM", "name": "Myanmar"},
     {"hasDims": false, "c_code": "NA", "name": "Namibia"},
     {"hasDims": false, "c_code": "NR", "name": "Nauru"},
     {"hasDims": false, "c_code": "NP", "name": "Nepal"},
     {"hasDims": true, "c_code": "NL", "name": "Netherlands"},
     {"hasDims": false, "c_code": "NC", "name": "New Caledonia"},
     {"hasDims": true, "c_code": "NZ", "name": "New Zealand"},
     {"hasDims": false, "c_code": "NI", "name": "Nicaragua"},
     {"hasDims": false, "c_code": "NE", "name": "Niger"},
     {"hasDims": true, "c_code": "NG", "name": "Nigeria"},
     {"hasDims": false, "c_code": "NU", "name": "Niue"},
     {"hasDims": false, "c_code": "NF", "name": "Norfolk Island"},
     {"hasDims": false, "c_code": "MP", "name": "Northern Mariana Islands"},
     {"hasDims": true, "c_code": "NO", "name": "Norway"},
     {"hasDims": false, "c_code": "OM", "name": "Oman"},
     {"hasDims": true, "c_code": "PK", "name": "Pakistan"},
     {"hasDims": false, "c_code": "PW", "name": "Palau"},
     {"hasDims": false, "c_code": "PS", "name": "Palestine, State of"},
     {"hasDims": true, "c_code": "PA", "name": "Panama"},
     {"hasDims": false, "c_code": "PG", "name": "Papua New Guinea"},
     {"hasDims": false, "c_code": "PY", "name": "Paraguay"},
     {"hasDims": true, "c_code": "PE", "name": "Peru"},
     {"hasDims": true, "c_code": "PH", "name": "Philippines"},
     {"hasDims": false, "c_code": "PN", "name": "Pitcairn"},
     {"hasDims": true, "c_code": "PL", "name": "Poland"},
     {"hasDims": true, "c_code": "PT", "name": "Portugal"},
     {"hasDims": true, "c_code": "PR", "name": "Puerto Rico"},
     {"hasDims": false, "c_code": "QA", "name": "Qatar"},
     {"hasDims": false, "c_code": "RE", "name": "R\u00e9union"},
     {"hasDims": true, "c_code": "RO", "name": "Romania"},
     {"hasDims": true, "c_code": "RU", "name": "Russian Federation"},
     {"hasDims": true, "c_code": "RW", "name": "Rwanda"},
     {"hasDims": false, "c_code": "BL", "name": "Saint Barth\u00e9lemy"},
     {"hasDims": false, "c_code": "SH", "name": "Saint Helena, Ascension and Tristan da Cunha"},
     {"hasDims": false, "c_code": "KN", "name": "Saint Kitts and Nevis"},
     {"hasDims": false, "c_code": "LC", "name": "Saint Lucia"},
     {"hasDims": false, "c_code": "MF", "name": "Saint Martin (French part)"},
     {"hasDims": false, "c_code": "PM", "name": "Saint Pierre and Miquelon"},
     {"hasDims": false, "c_code": "VC", "name": "Saint Vincent and the Grenadines"},
     {"hasDims": false, "c_code": "WS", "name": "Samoa"},
     {"hasDims": false, "c_code": "SM", "name": "San Marino"},
     {"hasDims": false, "c_code": "ST", "name": "Sao Tome and Principe"},
     {"hasDims": true, "c_code": "SA", "name": "Saudi Arabia"},
     {"hasDims": false, "c_code": "SN", "name": "Senegal"},
     {"hasDims": true, "c_code": "RS", "name": "Serbia"},
     {"hasDims": false, "c_code": "SC", "name": "Seychelles"},
     {"hasDims": false, "c_code": "SL", "name": "Sierra Leone"},
     {"hasDims": true, "c_code": "SG", "name": "Singapore"},
     {"hasDims": false, "c_code": "SX", "name": "Sint Maarten (Dutch part)"},
     {"hasDims": true, "c_code": "SK", "name": "Slovakia"},
     {"hasDims": true, "c_code": "SI", "name": "Slovenia"},
     {"hasDims": false, "c_code": "SB", "name": "Solomon Islands"},
     {"hasDims": false, "c_code": "SO", "name": "Somalia"},
     {"hasDims": true, "c_code": "ZA", "name": "South Africa"},
     {"hasDims": false, "c_code": "GS", "name": "South Georgia and the South Sandwich Islands"},
     {"hasDims": false, "c_code": "SS", "name": "South Sudan"},
     {"hasDims": true, "c_code": "ES", "name": "Spain"},
     {"hasDims": false, "c_code": "LK", "name": "Sri Lanka"},
     {"hasDims": false, "c_code": "SD", "name": "Sudan"},
     {"hasDims": true, "c_code": "SR", "name": "Suriname"},
     {"hasDims": false, "c_code": "SJ", "name": "Svalbard and Jan Mayen"},
     {"hasDims": false, "c_code": "SZ", "name": "Swaziland"},
     {"hasDims": true, "c_code": "SE", "name": "Sweden"},
     {"hasDims": true, "c_code": "CH", "name": "Switzerland"},
     {"hasDims": false, "c_code": "SY", "name": "Syrian Arab Republic"},
     {"hasDims": true, "c_code": "TW", "name": "Taiwan, Province of China"},
     {"hasDims": false, "c_code": "TJ", "name": "Tajikistan"},
     {"hasDims": true, "c_code": "TZ", "name": "Tanzania, United Republic of"},
     {"hasDims": true, "c_code": "TH", "name": "Thailand"},
     {"hasDims": false, "c_code": "TL", "name": "Timor-Leste"},
     {"hasDims": false, "c_code": "TG", "name": "Togo"},
     {"hasDims": false, "c_code": "TK", "name": "Tokelau"},
     {"hasDims": false, "c_code": "TO", "name": "Tonga"},
     {"hasDims": true, "c_code": "TT", "name": "Trinidad and Tobago"},
     {"hasDims": false, "c_code": "TN", "name": "Tunisia"},
     {"hasDims": true, "c_code": "TR", "name": "Turkey"},
     {"hasDims": false, "c_code": "TM", "name": "Turkmenistan"},
     {"hasDims": false, "c_code": "TC", "name": "Turks and Caicos Islands"},
     {"hasDims": false, "c_code": "TV", "name": "Tuvalu"},
     {"hasDims": true, "c_code": "UG", "name": "Uganda"},
     {"hasDims": true, "c_code": "UA", "name": "Ukraine"},
     {"hasDims": false, "c_code": "AE", "name": "United Arab Emirates"},
     {"hasDims": true, "c_code": "GB", "name": "United Kingdom"},
     {"hasDims": true, "c_code": "US", "name": "United States"},
     {"hasDims": false, "c_code": "UM", "name": "United States Minor Outlying Islands"},
     {"hasDims": true, "c_code": "UY", "name": "Uruguay"},
     {"hasDims": false, "c_code": "UZ", "name": "Uzbekistan"},
     {"hasDims": false, "c_code": "VU", "name": "Vanuatu"},
     {"hasDims": true, "c_code": "VE", "name": "Venezuela, Bolivarian Republic of"},
     {"hasDims": true, "c_code": "VN", "name": "Viet Nam"},
     {"hasDims": false, "c_code": "VG", "name": "Virgin Islands, British"},
     {"hasDims": false, "c_code": "VI", "name": "Virgin Islands, U.S."},
     {"hasDims": false, "c_code": "WF", "name": "Wallis and Futuna"},
     {"hasDims": false, "c_code": "EH", "name": "Western Sahara"},
     {"hasDims": false, "c_code": "YE", "name": "Yemen"},
     {"hasDims": true, "c_code": "ZM", "name": "Zambia"},
     {"hasDims": true, "c_code": "ZW", "name": "Zimbabwe"}
    ];
    
const dims = [
    {d_code: "pdi", "name": "Power Distance"}, {d_code: "uai", "name": "Uncertainty Avoidance"}, {d_code: "mas", "name": "Masculinity vs. Femininity"}, {d_code: "lto", "name": "Long-Term Orientation"}, {d_code: "idv", "name": "Individualism"}
    ];
    
const scoreList = [
    {
        c_code: "AL",
        d_code: "lto",
        score: 61,
    },
    {
        c_code: "DZ",
        d_code: "lto",
        score: 26
    },
    {
        c_code: "AR",
        d_code: "pdi",
        score: 49
    },
    {
        c_code: "AR",
        d_code: "idv",
        score: 46
    },
    {
        c_code: "AR",
        d_code: "mas",
        score: 56
    },
    {
        c_code: "AR",
        d_code: "uai",
        score: 86
    },
    {
        c_code: "AR",
        d_code: "lto",
        score: 20
    },
    {
        c_code: "AM",
        d_code: "lto",
        score: 61
    },
    {
        c_code: "AU",
        d_code: "pdi",
        score: 38
    },
    {
        c_code: "AU",
        d_code: "idv",
        score: 90
    },
    {
        c_code: "AU",
        d_code: "mas",
        score: 61
    },
    {
        c_code: "AU",
        d_code: "uai",
        score: 51
    },
    {
        c_code: "AU",
        d_code: "lto",
        score: 21
    },
    {
        c_code: "AT",
        d_code: "pdi",
        score: 11
    },
    {
        c_code: "AT",
        d_code: "idv",
        score: 55
    },
    {
        c_code: "AT",
        d_code: "mas",
        score: 79
    },
    {
        c_code: "AT",
        d_code: "uai",
        score: 70
    },
    {
        c_code: "AT",
        d_code: "lto",
        score: 60
    },
    {
        c_code: "AZ",
        d_code: "lto",
        score: 61
    },
    {
        c_code: "BD",
        d_code: "pdi",
        score: 80
    },
    {
        c_code: "BD",
        d_code: "idv",
        score: 20
    },
    {
        c_code: "BD",
        d_code: "mas",
        score: 55
    },
    {
        c_code: "BD",
        d_code: "uai",
        score: 60
    },
    {
        c_code: "BD",
        d_code: "lto",
        score: 47
    },
    {
        c_code: "BE",
        d_code: "pdi",
        score: 65
    },
    {
        c_code: "BE",
        d_code: "idv",
        score: 75
    },
    {
        c_code: "BE",
        d_code: "mas",
        score: 54
    },
    {
        c_code: "BE",
        d_code: "uai",
        score: 94
    },
    {
        c_code: "BE",
        d_code: "lto",
        score: 82
    },
    {
        c_code: "BY",
        d_code: "lto",
        score: 81
    },
    {
        c_code: "BA",
        d_code: "lto",
        score: 70
    },
    {
        c_code: "BR",
        d_code: "pdi",
        score: 69
    },
    {
        c_code: "BR",
        d_code: "idv",
        score: 38
    },
    {
        c_code: "BR",
        d_code: "mas",
        score: 49
    },
    {
        c_code: "BR",
        d_code: "uai",
        score: 76
    },
    {
        c_code: "BR",
        d_code: "lto",
        score: 44
    },
    {
        c_code: "BF",
        d_code: "lto",
        score: 27
    },
    {
        c_code: "BG",
        d_code: "pdi",
        score: 70
    },
    {
        c_code: "BG",
        d_code: "idv",
        score: 30
    },
    {
        c_code: "BG",
        d_code: "mas",
        score: 40
    },
    {
        c_code: "BG",
        d_code: "uai",
        score: 85
    },
    {
        c_code: "BG",
        d_code: "lto",
        score: 69
    },
    {
        c_code: "CA",
        d_code: "pdi",
        score: 39
    },
    {
        c_code: "CA",
        d_code: "idv",
        score: 80
    },
    {
        c_code: "CA",
        d_code: "mas",
        score: 52
    },
    {
        c_code: "CA",
        d_code: "uai",
        score: 48
    },
    {
        c_code: "CA",
        d_code: "lto",
        score: 36
    },
    {
        c_code: "CN",
        d_code: "pdi",
        score: 80
    },
    {
        c_code: "CN",
        d_code: "idv",
        score: 20
    },
    {
        c_code: "CN",
        d_code: "mas",
        score: 66
    },
    {
        c_code: "CN",
        d_code: "uai",
        score: 30
    },
    {
        c_code: "CN",
        d_code: "lto",
        score: 87
    },
    {
        c_code: "CL",
        d_code: "pdi",
        score: 63
    },
    {
        c_code: "CL",
        d_code: "idv",
        score: 23
    },
    {
        c_code: "CL",
        d_code: "mas",
        score: 28
    },
    {
        c_code: "CL",
        d_code: "uai",
        score: 86
    },
    {
        c_code: "CL",
        d_code: "lto",
        score: 31
    },
    {
        c_code: "CO",
        d_code: "pdi",
        score: 67
    },
    {
        c_code: "CO",
        d_code: "idv",
        score: 13
    },
    {
        c_code: "CO",
        d_code: "mas",
        score: 64
    },
    {
        c_code: "CO",
        d_code: "uai",
        score: 80
    },
    {
        c_code: "CO",
        d_code: "lto",
        score: 13
    },
    {
        c_code: "CR",
        d_code: "pdi",
        score: 35
    },
    {
        c_code: "CR",
        d_code: "idv",
        score: 15
    },
    {
        c_code: "CR",
        d_code: "mas",
        score: 21
    },
    {
        c_code: "CR",
        d_code: "uai",
        score: 86
    },
    {
        c_code: "HR",
        d_code: "pdi",
        score: 73
    },
    {
        c_code: "HR",
        d_code: "idv",
        score: 33
    },
    {
        c_code: "HR",
        d_code: "mas",
        score: 40
    },
    {
        c_code: "HR",
        d_code: "uai",
        score: 80
    },
    {
        c_code: "HR",
        d_code: "lto",
        score: 58
    },
    {
        c_code: "CZ",
        d_code: "pdi",
        score: 57
    },
    {
        c_code: "CZ",
        d_code: "idv",
        score: 58
    },
    {
        c_code: "CZ",
        d_code: "mas",
        score: 57
    },
    {
        c_code: "CZ",
        d_code: "uai",
        score: 74
    },
    {
        c_code: "CZ",
        d_code: "lto",
        score: 70
    },
    {
        c_code: "DK",
        d_code: "pdi",
        score: 18
    },
    {
        c_code: "DK",
        d_code: "idv",
        score: 74
    },
    {
        c_code: "DK",
        d_code: "mas",
        score: 16
    },
    {
        c_code: "DK",
        d_code: "uai",
        score: 23
    },
    {
        c_code: "DK",
        d_code: "lto",
        score: 35
    },
    {
        c_code: "DO",
        d_code: "lto",
        score: 13
    },
    {
        c_code: "EC",
        d_code: "pdi",
        score: 78
    },
    {
        c_code: "EC",
        d_code: "idv",
        score: 8
    },
    {
        c_code: "EC",
        d_code: "mas",
        score: 63
    },
    {
        c_code: "EC",
        d_code: "uai",
        score: 67
    },
    {
        c_code: "EG",
        d_code: "lto",
        score: 7
    },
    {
        c_code: "EE",
        d_code: "pdi",
        score: 40
    },
    {
        c_code: "EE",
        d_code: "idv",
        score: 60
    },
    {
        c_code: "EE",
        d_code: "mas",
        score: 30
    },
    {
        c_code: "EE",
        d_code: "uai",
        score: 60
    },
    {
        c_code: "EE",
        d_code: "lto",
        score: 82
    },
    {
        c_code: "FI",
        d_code: "pdi",
        score: 33
    },
    {
        c_code: "FI",
        d_code: "idv",
        score: 63
    },
    {
        c_code: "FI",
        d_code: "mas",
        score: 26
    },
    {
        c_code: "FI",
        d_code: "uai",
        score: 59
    },
    {
        c_code: "FI",
        d_code: "lto",
        score: 38
    },
    {
        c_code: "FR",
        d_code: "pdi",
        score: 68
    },
    {
        c_code: "FR",
        d_code: "idv",
        score: 71
    },
    {
        c_code: "FR",
        d_code: "mas",
        score: 43
    },
    {
        c_code: "FR",
        d_code: "uai",
        score: 86
    },
    {
        c_code: "FR",
        d_code: "lto",
        score: 63
    },
    {
        c_code: "GB",
        d_code: "pdi",
        score: 35
    },
    {
        c_code: "GB",
        d_code: "idv",
        score: 89
    },
    {
        c_code: "GB",
        d_code: "mas",
        score: 66
    },
    {
        c_code: "GB",
        d_code: "uai",
        score: 35
    },
    {
        c_code: "GB",
        d_code: "lto",
        score: 51
    },
    {
        c_code: "GE",
        d_code: "lto",
        score: 38
    },
    {
        c_code: "DE",
        d_code: "pdi",
        score: 35
    },
    {
        c_code: "DE",
        d_code: "idv",
        score: 67
    },
    {
        c_code: "DE",
        d_code: "mas",
        score: 66
    },
    {
        c_code: "DE",
        d_code: "uai",
        score: 65
    },
    {
        c_code: "DE",
        d_code: "lto",
        score: 83
    },
    {
        c_code: "GH",
        d_code: "lto",
        score: 4
    },
    {
        c_code: "GR",
        d_code: "pdi",
        score: 60
    },
    {
        c_code: "GR",
        d_code: "idv",
        score: 35
    },
    {
        c_code: "GR",
        d_code: "mas",
        score: 57
    },
    {
        c_code: "GR",
        d_code: "uai",
        score: 112
    },
    {
        c_code: "GR",
        d_code: "lto",
        score: 45
    },
    {
        c_code: "GT",
        d_code: "pdi",
        score: 95
    },
    {
        c_code: "GT",
        d_code: "idv",
        score: 6
    },
    {
        c_code: "GT",
        d_code: "mas",
        score: 37
    },
    {
        c_code: "GT",
        d_code: "uai",
        score: 101
    },
    {
        c_code: "HK",
        d_code: "pdi",
        score: 68
    },
    {
        c_code: "HK",
        d_code: "idv",
        score: 26
    },
    {
        c_code: "HK",
        d_code: "mas",
        score: 57
    },
    {
        c_code: "HK",
        d_code: "uai",
        score: 29
    },
    {
        c_code: "HK",
        d_code: "lto",
        score: 61
    },
    {
        c_code: "HU",
        d_code: "pdi",
        score: 46
    },
    {
        c_code: "HU",
        d_code: "idv",
        score: 80
    },
    {
        c_code: "HU",
        d_code: "mas",
        score: 88
    },
    {
        c_code: "HU",
        d_code: "uai",
        score: 82
    },
    {
        c_code: "HU",
        d_code: "lto",
        score: 58
    },
    {
        c_code: "IS",
        d_code: "lto",
        score: 28
    },
    {
        c_code: "ID",
        d_code: "pdi",
        score: 78
    },
    {
        c_code: "ID",
        d_code: "idv",
        score: 14
    },
    {
        c_code: "ID",
        d_code: "mas",
        score: 46
    },
    {
        c_code: "ID",
        d_code: "uai",
        score: 48
    },
    {
        c_code: "ID",
        d_code: "lto",
        score: 62
    },
    {
        c_code: "IN",
        d_code: "pdi",
        score: 77
    },
    {
        c_code: "IN",
        d_code: "idv",
        score: 48
    },
    {
        c_code: "IN",
        d_code: "mas",
        score: 56
    },
    {
        c_code: "IN",
        d_code: "uai",
        score: 40
    },
    {
        c_code: "IN",
        d_code: "lto",
        score: 51
    },
    {
        c_code: "IR",
        d_code: "pdi",
        score: 58
    },
    {
        c_code: "IR",
        d_code: "idv",
        score: 41
    },
    {
        c_code: "IR",
        d_code: "mas",
        score: 43
    },
    {
        c_code: "IR",
        d_code: "uai",
        score: 59
    },
    {
        c_code: "IR",
        d_code: "lto",
        score: 14
    },
    {
        c_code: "IE",
        d_code: "pdi",
        score: 28
    },
    {
        c_code: "IE",
        d_code: "idv",
        score: 70
    },{
        c_code: "IE",
        d_code: "mas",
        score: 68
    },
    {
        c_code: "IE",
        d_code: "uai",
        score: 35
    },
    {
        c_code: "IE",
        d_code: "lto",
        score: 24
    },
    {
        c_code: "IQ",
        d_code: "lto",
        score: 25
    },
    {
        c_code: "IL",
        d_code: "pdi",
        score: 13
    },
    {
        c_code: "IL",
        d_code: "idv",
        score: 54
    },
    {
        c_code: "IL",
        d_code: "mas",
        score: 47
    },
    {
        c_code: "IL",
        d_code: "uai",
        score: 81
    },
    {
        c_code: "IL",
        d_code: "lto",
        score: 38
    },
    {
        c_code: "IT",
        d_code: "pdi",
        score: 50
    },
    {
        c_code: "IT",
        d_code: "idv",
        score: 76
    },
    {
        c_code: "IT",
        d_code: "mas",
        score: 70
    },
    {
        c_code: "IT",
        d_code: "uai",
        score: 75
    },
    {
        c_code: "IT",
        d_code: "lto",
        score: 61
    },
    {
        c_code: "JM",
        d_code: "pdi",
        score: 45
    },
    {
        c_code: "JM",
        d_code: "idv",
        score: 39
    },
    {
        c_code: "JM",
        d_code: "mas",
        score: 68
    },
    {
        c_code: "JM",
        d_code: "uai",
        score: 13
    },
    {
        c_code: "JO",
        d_code: "lto",
        score: 16
    },
    {
        c_code: "JP",
        d_code: "pdi",
        score: 54
    },
    {
        c_code: "JP",
        d_code: "idv",
        score: 46
    },
    {
        c_code: "JP",
        d_code: "mas",
        score: 95
    },
    {
        c_code: "JP",
        d_code: "uai",
        score: 92
    },
    {
        c_code: "JP",
        d_code: "lto",
        score: 88
    },
    {
        c_code: "KR",
        d_code: "pdi",
        score: 60
    },
    {
        c_code: "KR",
        d_code: "idv",
        score: 18
    },
    {
        c_code: "KR",
        d_code: "mas",
        score: 39
    },
    {
        c_code: "KR",
        d_code: "uai",
        score: 85
    },
    {
        c_code: "KR",
        d_code: "lto",
        score: 100
    },
    {
        c_code: "KG",
        d_code: "lto",
        score: 66
    },
    {
        c_code: "LV",
        d_code: "pdi",
        score: 44
    },
    {
        c_code: "LV",
        d_code: "idv",
        score: 70
    },
    {
        c_code: "LV",
        d_code: "mas",
        score: 9
    },
    {
        c_code: "LV",
        d_code: "uai",
        score: 63
    },
    {
        c_code: "LV",
        d_code: "lto",
        score: 69
    },
    {
        c_code: "LT",
        d_code: "pdi",
        score: 42
    },
    {
        c_code: "LT",
        d_code: "idv",
        score: 60
    },
    {
        c_code: "LT",
        d_code: "mas",
        score: 19
    },
    {
        c_code: "LT",
        d_code: "uai",
        score: 65
    },
    {
        c_code: "LT",
        d_code: "lto",
        score: 82
    },
    {
        c_code: "LU",
        d_code: "pdi",
        score: 40
    },
    {
        c_code: "LU",
        d_code: "idv",
        score: 60
    },
    {
        c_code: "LU",
        d_code: "mas",
        score: 50
    },
    {
        c_code: "LU",
        d_code: "uai",
        score: 70
    },
    {
        c_code: "LU",
        d_code: "lto",
        score: 64
    },
    {
        c_code: "MK",
        d_code: "lto",
        score: 62
    },
    {
        c_code: "MY",
        d_code: "pdi",
        score: 104
    },
    {
        c_code: "MY",
        d_code: "idv",
        score: 26
    },
    {
        c_code: "MY",
        d_code: "mas",
        score: 50
    },
    {
        c_code: "MY",
        d_code: "uai",
        score: 36
    },
    {
        c_code: "MY",
        d_code: "lto",
        score: 41
    },
    {
        c_code: "MX",
        d_code: "pdi",
        score: 81
    },
    {
        c_code: "MX",
        d_code: "idv",
        score: 30
    },
    {
        c_code: "MX",
        d_code: "mas",
        score: 69
    },
    {
        c_code: "MX",
        d_code: "uai",
        score: 82
    },
    {
        c_code: "MX",
        d_code: "lto",
        score: 24
    },
    {
        c_code: "ML",
        d_code: "lto",
        score: 20
    },
    {
        c_code: "MT",
        d_code: "pdi",
        score: 56
    },
    {
        c_code: "MT",
        d_code: "idv",
        score: 59
    },
    {
        c_code: "MT",
        d_code: "mas",
        score: 69
    },
    {
        c_code: "MT",
        d_code: "uai",
        score: 82
    },
    {
        c_code: "MT",
        d_code: "lto",
        score: 24
    },
    {
        c_code: "ME",
        d_code: "lto",
        score: 75
    },
    {
        c_code: "MD",
        d_code: "lto",
        score: 71
    },
    {
        c_code: "MA",
        d_code: "pdi",
        score: 70
    },
    {
        c_code: "MA",
        d_code: "idv",
        score: 46
    },
    {
        c_code: "MA",
        d_code: "mas",
        score: 53
    },
    {
        c_code: "MA",
        d_code: "uai",
        score: 68
    },
    {
        c_code: "MA",
        d_code: "lto",
        score: 14
    },
    {
        c_code: "NL",
        d_code: "pdi",
        score: 38
    },
    {
        c_code: "NL",
        d_code: "idv",
        score: 80
    },
    {
        c_code: "NL",
        d_code: "mas",
        score: 14
    },
    {
        c_code: "NL",
        d_code: "uai",
        score: 53
    },
    {
        c_code: "NL",
        d_code: "lto",
        score: 67
    },
    {
        c_code: "NG",
        d_code: "lto",
        score: 13
    },
    {
        c_code: "NO",
        d_code: "pdi",
        score: 31
    },
    {
        c_code: "NO",
        d_code: "idv",
        score: 69
    },
    {
        c_code: "NO",
        d_code: "mas",
        score: 8
    },
    {
        c_code: "NO",
        d_code: "uai",
        score: 50
    },
    {
        c_code: "NO",
        d_code: "lto",
        score: 35
    },
    {
        c_code: "NZ",
        d_code: "pdi",
        score: 22
    },
    {
        c_code: "NZ",
        d_code: "idv",
        score: 79
    },
    {
        c_code: "NZ",
        d_code: "mas",
        score: 58
    },
    {
        c_code: "NZ",
        d_code: "uai",
        score: 49
    },
    {
        c_code: "NZ",
        d_code: "lto",
        score: 33
    },
    {
        c_code: "PK",
        d_code: "pdi",
        score: 55
    },
    {
        c_code: "PK",
        d_code: "idv",
        score: 14
    },
    {
        c_code: "PK",
        d_code: "mas",
        score: 50
    },
    {
        c_code: "PK",
        d_code: "uai",
        score: 70
    },
    {
        c_code: "PK",
        d_code: "lto",
        score: 50
    },
    {
        c_code: "PA",
        d_code: "pdi",
        score: 95
    },
    {
        c_code: "PA",
        d_code: "idv",
        score: 11
    },
    {
        c_code: "PA",
        d_code: "mas",
        score: 44
    },
    {
        c_code: "PA",
        d_code: "lto",
        score: 86
    },
    {
        c_code: "PE",
        d_code: "pdi",
        score: 64
    },
    {
        c_code: "PE",
        d_code: "idv",
        score: 16
    },
    {
        c_code: "PE",
        d_code: "mas",
        score: 42
    },
    {
        c_code: "PE",
        d_code: "uai",
        score: 87
    },
    {
        c_code: "PE",
        d_code: "lto",
        score: 25
    },
    {
        c_code: "PH",
        d_code: "pdi",
        score: 94
    },
    {
        c_code: "PH",
        d_code: "idv",
        score: 32
    },
    {
        c_code: "PH",
        d_code: "mas",
        score: 64
    },
    {
        c_code: "PH",
        d_code: "uai",
        score: 44
    },
    {
        c_code: "PH",
        d_code: "lto",
        score: 27
    },
    {
        c_code: "PL",
        d_code: "pdi",
        score: 68
    },
    {
        c_code: "PL",
        d_code: "idv",
        score: 60
    },
    {
        c_code: "PL",
        d_code: "mas",
        score: 64
    },
    {
        c_code: "PL",
        d_code: "uai",
        score: 93
    },
    
    {
        c_code: "PL",
        d_code: "lto",
        score: 38
    },
    {
        c_code: "PT",
        d_code: "pdi",
        score: 63
    },
    {
        c_code: "PT",
        d_code: "idv",
        score: 27
    },
    {
        c_code: "PT",
        d_code: "mas",
        score: 31
    },{
        c_code: "PT",
        d_code: "uai",
        score: 104
    },
    {
        c_code: "PT",
        d_code: "lto",
        score: 28
    },
    {
        c_code: "PR",
        d_code: "lto",
        score: 0
    },
    {
        c_code: "RO",
        d_code: "pdi",
        score: 90
    },
    {
        c_code: "RO",
        d_code: "idv",
        score: 30
    },
    {
        c_code: "RO",
        d_code: "mas",
        score: 42
    },{
        c_code: "RO",
        d_code: "uai",
        score: 90
    },
    {
        c_code: "RO",
        d_code: "lto",
        score: 52
    },
    {
        c_code: "RU",
        d_code: "pdi",
        score: 93
    },
    {
        c_code: "RU",
        d_code: "idv",
        score: 39
    },
    {
        c_code: "RU",
        d_code: "mas",
        score: 36
    },
    {
        c_code: "RU",
        d_code: "uai",
        score: 95
    },
    {
        c_code: "RU",
        d_code: "lto",
        score: 81
    },
    {
        c_code: "RW",
        d_code: "lto",
        score: 18
    },
    {
        c_code: "ZA",
        d_code: "lto",
        score: 34
    },
    {
        c_code: "SV",
        d_code: "pdi",
        score: 66
    },
    {
        c_code: "SV",
        d_code: "idv",
        score: 19
    },
    {
        c_code: "SV",
        d_code: "mas",
        score: 40
    },
    {
        c_code: "SV",
        d_code: "uai",
        score: 94
    },
    {
        c_code: "SV",
        d_code: "lto",
        score: 20
    },
    {
        c_code: "SA",
        d_code: "lto",
        score: 36
    },
    {
        c_code: "RS",
        d_code: "pdi",
        score: 86
    },
    {
        c_code: "RS",
        d_code: "idv",
        score: 25
    },
    {
        c_code: "RS",
        d_code: "mas",
        score: 43
    },
    {
        c_code: "RS",
        d_code: "uai",
        score: 92
    },
    {
        c_code: "RS",
        d_code: "lto",
        score: 52
    },
    {
        c_code: "SG",
        d_code: "pdi",
        score: 74
    },
    {
        c_code: "SG",
        d_code: "idv",
        score: 20
    },
    {
        c_code: "SG",
        d_code: "mas",
        score: 48
    },{
        c_code: "SG",
        d_code: "uai",
        score: 8
    },
    {
        c_code: "SG",
        d_code: "lto",
        score: 72
    },
    {
        c_code: "SK",
        d_code: "pdi",
        score: 104
    },
    {
        c_code: "SK",
        d_code: "idv",
        score: 52
    },
    {
        c_code: "SK",
        d_code: "mas",
        score: 110
    },
    {
        c_code: "SK",
        d_code: "uai",
        score: 51
    },
    {
        c_code: "SK",
        d_code: "lto",
        score: 77
    },
    {
        c_code: "SI",
        d_code: "pdi",
        score: 71
    },
    {
        c_code: "SI",
        d_code: "idv",
        score: 27
    },
    {
        c_code: "SI",
        d_code: "mas",
        score: 19
    },
    {
        c_code: "SI",
        d_code: "uai",
        score: 88
    },
    {
        c_code: "SI",
        d_code: "lto",
        score: 49
    },
    {
        c_code: "ES",
        d_code: "pdi",
        score: 57
    },
    {
        c_code: "ES",
        d_code: "idv",
        score: 51
    },
    {
        c_code: "ES",
        d_code: "mas",
        score: 42
    },
    {
        c_code: "ES",
        d_code: "uai",
        score: 86
    },
    {
        c_code: "ES",
        d_code: "lto",
        score: 48
    },
    {
        c_code: "SR",
        d_code: "pdi",
        score: 85
    },
    {
        c_code: "SR",
        d_code: "idv",
        score: 47
    },{
        c_code: "SR",
        d_code: "mas",
        score: 37
    },
    {
        c_code: "SR",
        d_code: "uai",
        score: 92
    },
    {
        c_code: "SE",
        d_code: "pdi",
        score: 31
    },
    {
        c_code: "SE",
        d_code: "idv",
        score: 71
    },
    {
        c_code: "SE",
        d_code: "mas",
        score: 5
    },
    {
        c_code: "SE",
        d_code: "uai",
        score: 29
    },
    {
        c_code: "SE",
        d_code: "lto",
        score: 53
    },
    {
        c_code: "CH",
        d_code: "pdi",
        score: 34
    },
    {
        c_code: "CH",
        d_code: "idv",
        score: 68
    },
    {
        c_code: "CH",
        d_code: "mas",
        score: 70
    },
    {
        c_code: "CH",
        d_code: "uai",
        score: 58
    },
    {
        c_code: "CH",
        d_code: "lto",
        score: 74
    },
    {
        c_code: "TW",
        d_code: "pdi",
        score: 58
    },
    {
        c_code: "TW",
        d_code: "idv",
        score: 17
    },
    {
        c_code: "TW",
        d_code: "mas",
        score: 45
    },{
        c_code: "TW",
        d_code: "uai",
        score: 69
    },
    {
        c_code: "TW",
        d_code: "lto",
        score: 93
    },
    {
        c_code: "TZ",
        d_code: "lto",
        score: 34
    },
    {
        c_code: "TH",
        d_code: "pdi",
        score: 64
    },
    {
        c_code: "TH",
        d_code: "idv",
        score: 20
    },
    {
        c_code: "TH",
        d_code: "mas",
        score: 34
    },
    {
        c_code: "TH",
        d_code: "uai",
        score: 64
    },
    {
        c_code: "TH",
        d_code: "lto",
        score: 32
    },
    {
        c_code: "TT",
        d_code: "pdi",
        score: 47
    },
     {
        c_code: "TT",
        d_code: "idv",
        score: 16
    },
     {
        c_code: "TT",
        d_code: "mas",
        score: 58
    },
     {
        c_code: "TT",
        d_code: "uai",
        score: 55
    },
     {
        c_code: "TT",
        d_code: "lto",
        score: 13
    },
    {
        c_code: "TR",
        d_code: "pdi",
        score: 66
    },
    {
        c_code: "TR",
        d_code: "idv",
        score: 37
    },{
        c_code: "TR",
        d_code: "mas",
        score: 45
    },
    {
        c_code: "TR",
        d_code: "uai",
        score: 85
    },
    {
        c_code: "TR",
        d_code: "lto",
        score: 46
    },
    {
        c_code: "UG",
        d_code: "lto",
        score: 24
    },
    {
        c_code: "UA",
        d_code: "lto",
        score: 86
    },
    {
        c_code: "UY",
        d_code: "pdi",
        score: 61
    },
    {
        c_code: "UY",
        d_code: "idv",
        score: 36
    },
    {
        c_code: "UY",
        d_code: "mas",
        score: 38
    },
    {
        c_code: "UY",
        d_code: "uai",
        score: 100
    },
    {
        c_code: "UY",
        d_code: "lto",
        score: 26
    },
    {
        c_code: "US",
        d_code: "pdi",
        score: 40
    },
    {
        c_code: "US",
        d_code: "idv",
        score: 91
    },
    {
        c_code: "US",
        d_code: "mas",
        score: 62
    },
    {
        c_code: "US",
        d_code: "uai",
        score: 46
    },
    {
        c_code: "US",
        d_code: "lto",
        score: 26
    },
    {
        c_code: "VE",
        d_code: "pdi",
        score: 81
    },
    {
        c_code: "VE",
        d_code: "idv",
        score: 12
    },
    {
        c_code: "VE",
        d_code: "mas",
        score: 73
    },
    {
        c_code: "VE",
        d_code: "uai",
        score: 76
    },
    {
        c_code: "VE",
        d_code: "lto",
        score: 16
    },
    {
        c_code: "VN",
        d_code: "pdi",
        score: 70
    },
    {
        c_code: "VN",
        d_code: "idv",
        score: 20
    },
    {
        c_code: "VN",
        d_code: "mas",
        score: 40
    },
    {
        c_code: "VN",
        d_code: "uai",
        score: 30
    },
    {
        c_code: "VN",
        d_code: "lto",
        score: 57
    },
    {
        c_code: "ZM",
        d_code: "lto",
        score: 30
    },
    {
        c_code: "ZW",
        d_code: "lto",
        score: 15
    },
    ]
    
const categories = [
    {
        name: "general",
        id: 1
    },
    {
        name: "navigation",
        id: 2
    },
    {
        name: "help-service",
        id: 3
    },
    {
        name: "information-arrangement",
        id: 4
    },
    {
        name: "information-content",
        id: 5
    },
    {
        name: "multimedia-content",
        id: 6
    },
    {
        name: "security and restrictions",
        id: 7
    },
    {
        name: "colors",
        id: 8
    },
    ]
    
const preferences = [
    // General
    {
        text: "Rhetorical style = controversial and argumentative",
        category: 1,
        id: 120,
    },
    {
        text: "Success is defined as materialism and consumerism",
        category: 1,
        id: 121
    },
    {
        text: "Rhetorical style = official slogans and subdued hyperbole",
        category: 1,
        id: 122
    },
    {
        text: "Success is defined as the achievement of socio-political agendas",
        category: 1,
        id: 123
    },
    {
        text: "Attention gained through interactive elements (e.g: games and competitions)",
        category: 1,
        id: 130
    },
    {
        text: "Synchronic",
        category: 1,
        id: 131
    },
    {
        text: "Blurring of gender roles and age distinctions",
        category: 1,
        id: 132
    },
    {
        text: "Mutual cooperation, no winning",
        category: 1,
        id: 133
    },
    {
        text: "Attention gained through aesthetics",
        category: 1,
        id: 134
    },
    {
        text: "Polychronic",
        category: 1,
        id: 135
    },
    {
        text: "Symmetric",
        category: 1,
        id: 110
    },
    {
        text: "Asymmetric",
        category: 1,
        id: 111
    },
    {
        text: "Many functionalities",
        category: 1,
        id: 112
    },
    {
        text: "Simple imterfaces",
        category: 1,
        id: 140
    },
    {
        text: "Clear articulation",
        category: 1,
        id: 141
    },
    {
        text: "Attempts to forecast what a user is going to do",
        category: 1,
        id: 142
    },
    {
        text: "Redundancy",
        category: 1,
        id: 143
    },
    {
        text: "Complex interfaces",
        category: 1,
        id: 144
    },
    
    //Navigation
    {
        text: "Minimized navigation possibilities",
        category: 2,
        id: 210
    },
    {
        text: "Linear navigation",
        category: 2,
        id: 211
    },
    {
        text: "Few links",
        category: 2,
        id: 212
    },
    {
        text: "Icon-represented",
        category: 2,
        id: 213
    },
    {
        text: "Multiple navigation possibilities",
        category: 2,
        id: 214,
    },
    {
        text: "Non-linear navigation",
        category: 2,
        id: 215,
    },
    {
        text: "Customizable",
        category: 2,
        id: 220,
    },
    {
        text: "Action-oriented (e.g.: keyword-searches)",
        category: 2,
        id: 221,
    },
    {
        text: "Indication of popular choices",
        category: 2,
        id: 222,
    },
    {
        text: "Focused on control",
        category: 2,
        id: 230
    },
    {
        text: "Restricted navigation",
        category: 2,
        id: 231
    },
    {
        text: "Focused on Efficiency",
        category: 2,
        id: 232
    },
    {
        text: "Focused on exploration/wandering",
        category: 2,
        id: 233
    },
    {
        text: "Different paths",
        category: 2,
        id: 234
    },
    {
        text: "Intended to prevent users from getting lost",
        category: 2,
        id: 240
    },
    {
        text: "Limited scrolling",
        category: 2,
        id: 241
    },
    {
        text: "Showing position of user",
        category: 2,
        id: 242
    },
    {
        text: "Limited control (e.g.: links opening new browser-windows",
        category: 2,
        id: 243
    },
    {
        text: "Long pages with scrolling",
        category: 2,
        id: 244
    },
    {
        text: "Tolerance for long paths",
        category: 2,
        id: 250
    },
    {
        text: "Contemplation-oriented",
        category: 2,
        id: 251
    },
    {
        text: "Quick results",
        category: 2,
        id: 252
    },
    
    //Help-Service
    {
        text: "Strong support with the help of wizards",
        category: 3,
        id: 310
    },
    {
        text: "strict error messages",
        category: 3,
        id: 311
    },
    {
        text: "Friendly/supportive error messages",
        category: 3,
        id: 312
    },
    {
        text: "No support or cue-cards instead of wizards",
        category: 3,
        id: 313
    },
    {
        text: "Help systems to reduce ambiguity",
        category: 3,
        id: 340
    },
    {
        text: "Precise help-texts and feedback",
        category: 3,
        id: 341
    },
    {
        text: "Limited help-systems and feedback",
        category: 3,
        id: 342
    },
    {
        text: "Interactive (e.g.: Live-chats)",
        category: 3,
        id: 350
    },
    {
        text: "Personalized",
        category: 3,
        id: 351
    },
    {
        text: "Efficient communication",
        category: 3,
        id: 352
    },
    {
        text: "Impersonal/anonymous",
        category: 3,
        id: 353
    },
    
    //Information arrangement
    {
        text: "High-level structure",
        category: 4,
        id: 410
    },
    {
        text: "Organized by social roles",
        category: 4,
        id: 411
    },
    {
        text: "Tall hierarchies",
        category: 4,
        id: 412
    },
    {
        text: "Little information at first level",
        category: 4,
        id: 413
    },
    {
        text: "Maximal structure",
        category: 4,
        id: 414
    },
    {
        text: "Low-level structure",
        category: 4,
        id: 415
    },
    {
        text: "Shallow hierarchies",
        category: 4,
        id: 416
    },
    {
        text: "Does not have to be structured",
        category: 4,
        id: 417
    },
    {
        text: "Most information at interface level",
        category: 4,
        id: 418
    },
    {
        text: "Low multi-modality",
        category: 4,
        id: 420
    },
    {
        text: "Structured by products or tasks",
        category: 4,
        id: 421
    },
    {
        text: "High multi-modality",
        category: 4,
        id: 422
    },
    {
        text: "Structured by roles",
        category: 4,
        id: 423
    },
    {
        text: "Orientation towards control",
        category: 4,
        id: 430
    },
    {
        text: "Structured by work/business",
        category: 4,
        id: 431
    },
    {
        text: "Orientation towards relationships",
        category: 4,
        id: 432
    },
    {
        text: "Detailed views",
        category: 4,
        id: 434
    },
    {
        text: "Limited choices",
        category: 4,
        id: 440
    },
    {
        text: "Restricted amounts of data",
        category: 4,
        id: 441
    },
    {
        text: "Could be arranged around a focal area",
        category: 4,
        id: 450
    },
    {
        text: "Reduced information density",
        category: 4,
        id: 451
    },
    {
        text: "Small units of content",
        category: 4,
        id: 452
    },
    
    //Information content
    {
        text: "Prominence given to leaders/superiors",
        category: 5,
        id: 510
    },
    {
        text: "Focus on social-hierarchy",
        category: 5,
        id: 511
    },
    {
        text: "Having an official touch to it",
        category: 5,
        id: 512
    },
    {
        text: "Prominence given to citizens/customers/employees (not leaders)",
        category: 5,
        id: 513
    },
    {
        text: "Focus on equality",
        category: 5,
        id: 514
    },
    {
        text: "Focus on youth and action",
        category: 5,
        id: 520
    },
    {
        text: "Prominence given to individuals",
        category: 5,
        id: 521
    },
    {
        text: "Focus on personal achievement",
        category: 5,
        id: 522
    },
    {
        text: "Emphasis on truth and change",
        category: 5,
        id: 523
    },
    {
        text: "Focus on experienced and wise leaders",
        category: 5,
        id: 524
    },
    {
        text: "Prominence on tradition and history",
        category: 5,
        id: 525
    },
    {
        text: "Focus on groups and their achievements",
        category: 5,
        id: 526
    },
    {
        text: "Emphasis on authority",
        category: 5,
        id: 530
    },
    {
        text: "Personal presentation of content",
        category: 5,
        id: 531
    },
    {
        text: "Team-oriented",
        category: 5,
        id: 532
    },
    {
        text: "References to daily life",
        category:5,
        id: 540
    },
    {
        text: "Clear references/no metaphors",
        category: 5,
        id: 541
    },
    {
        text: "Maximal content",
        category: 5,
        id: 542
    },
    {
        text: "Unusual references/abstractions",
        category: 5,
        id: 543
    },
    {
        text: "Content related to love",
        category: 5,
        id: 550
    },
    {
        text: "Focus on social-responsibility",
        category: 5,
        id: 551
    },
    {
        text: "Emphasis of tradition an history",
        category: 5,
        id: 552
    },
    {
        text: "Refereces to the distant future",
        category: 5,
        id: 553
    },
    {
        text: "Content related to liberty",
        category: 5,
        id: 554
    },
    {
        text: "Focus on efficiency",
        category: 5,
        id: 555
    },
    {
        text: "Emphasis on current events",
        category: 5,
        id: 556
    },
    {
        text: "Clear strategic plans",
        category: 5,
        id: 557
    },
    
    //Multimedia content
    {
      text: "Official stamps, logos or certifications",
      category: 6,
      id: 610
    },
    {
        text: "Monumental buildings and monuments",
        category: 6,
        id: 611
    },
    {
        text: "Photographs of leaders",
        category: 6,
        id: 612
    },
    {
        text: "Music: official anthems",
        category: 6,
        id: 613
    },
    {
        text: "Photographs of students, citizens, employees",
        category: 6,
        id: 614
    },
    {
        text: "Representation of both genders",
        category: 6,
        id: 615
    },
    {
        text: "Scenery: public spaces",
        category: 6,
        id: 616,
    },
    {
        text: "Everyday activities",
        category: 6,
        id: 617
    },
    {
        text: "Music: popular music",
        category: 6,
        id: 618
    },
    {
        text: "Portrayment of individuals",
        category: 6,
        id: 620
    },
    {
        text: "Representation of the young",
        category: 6,
        id: 621
    },
    {
        text: "High text-to-image-ratio",
        category: 6,
        id: 622
    },
    {
        text: "Emphasis on traditions",
        category: 6,
        id: 623
    },
    {
        text: "Portrayment of groups",
        category: 6,
        id: 624
    },
    {
        text: "Representation of the aged and experienced",
        category: 6,
        id: 625
    },
    {
        text: "High image-to-text-ratio",
        category: 6,
        id: 626
    },
    {
        text: "Portrayment of buildings",
        category: 6,
        id: 630
    },
    {
        text: "Graphic, sound and animation used for utilitarian purposes only",
        category: 6,
        id: 631
    },
    {
        text: "Use of animated pictures",
        category: 6,
        id: 632
    },
    {
        text: "Graphics, sound and animation used as attention gainers",
        category: 6,
        id: 633
    },
    {
        text: "Portrayment of people laughing, talking or working together",
        category: 6,
        id: 634
    },
    {
        text: "Use of figurative images",
        category: 6,
        id: 635
    },
    {
        text: "Black and white (or other two-tone) images",
        category: 6,
        id: 636
    },
    {
        text: "Simple, clear and consistent imagery and sounds",
        category: 6,
        id: 640
    },
    {
        text: "Use of sound to maximize information",
        category: 6,
        id: 641
    },
    {
        text: "Use of national markers (e.g.: national images, flags)",
        category: 6,
        id: 650
    },
    {
        text: "Suggestion of friendship",
        category: 6,
        id: 651
    },
    {
        text: "Soft focus",
        category: 6,
        id: 652
    },
    {
        text: "Minimal usage of multimedia content",
        category: 6,
        id: 653
    },
    {
        text: "Sharp lines and edges",
        category: 6,
        id: 654
    },
    {
        text: "Portrayment of tasks or products",
        category: 6,
        id: 655
    },
    
    // Security and Restriction
    {
        text: "Restricted access and choices",
        category: 6,
        id: 710
    },
    {
        text: "Authentication needed",
        category: 7,
        id: 711
    },
    {
        text: "Frequent, explicit and enforced restrictions",
        category: 7,
        id: 712
    },
    {
        text: "Transparent",
        category: 7,
        id: 713
    },
    {
        text: "Implicit restrictions",
        category: 7,
        id: 714
    },
    {
        text: "No or limited restrictions",
        category: 7,
        id: 715
    },
    {
        text: "High willingness to provide personal information",
        category: 7,
        id: 720
    },
    {
        text: "Protection of personal data",
        category: 7,
        id: 721
    },
    {
        text: "Little to no willingness to provide personal information",
        category: 7,
        id: 722
    },
    
    //Colors
    {
        text: "Use of colors to encode information",
        category: 8,
        id: 820
    },
    {
        text: "Monotonously colored interface",
        category: 8,
        id: 821
    },
    {
        text: "Traditional colors",
        category: 8,
        id: 822
    },
    {
        text: "Colorful interface",
        category: 8,
        id: 823
    },
    {
        text: "High contrasts",
        category: 8,
        id: 830
    },
    {
        text: "Bright colors",
        category: 8,
        id: 831
    },
    {
        text: "Little saturation",
        category: 8,
        id: 832
    },
    {
        text: "Pastel colors",
        category: 8,
        id: 833
    },
    {
        text: "Use of redundant color cues to reduce ambiguity",
        category: 8,
        id: 840
    },
    {
        text: "Warm colors",
        category: 8,
        id: 851
    }
    ]

const hasPrefList = [
    {
        d_code: "idv",
		pref_id: 120,
		high: true
    },
	{
		d_code: "idv",
		pref_id: 121,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 122,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 123,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 130,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 131,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 132,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 133,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 134,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 135,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 110,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 111,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 112,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 140,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 141,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 142,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 143,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 144,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 210,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 211,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 212,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 213,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 214,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 215,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 220,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 221,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 222,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 210,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 230,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 231,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 232,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 210,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 233,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 234,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 240,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 241,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 242,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 211,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 210,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 243,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 244,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 214,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 215,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 233,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 221,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 250,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 251,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 252,
		high: false
	},
	{
		d_code: "pdi",
		perf_id: 310,
		high: true
	},
	{
		d_code: "pdi",
		perf_id: 311,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 312,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 313,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 312,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 340,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 341,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 342,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 350,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 351,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 352,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 353,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 410,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 411,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 412,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 413,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 414,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 415,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 416,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 417,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 418,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 420,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 421,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 422,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 423,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 430,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 431,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 410,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 432,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 411,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 434,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 440,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 441,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 412,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 418,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 418,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 450,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 451,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 452,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 410,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 510,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 511,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 512,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 513,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 514,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 520,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 521,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 522,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 523,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 524,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 525,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 526,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 525,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 530,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 521,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 531,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 532,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 540,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 541,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 542,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 543,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 550,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 551,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 552,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 553,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 554,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 555,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 556,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 557,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 610,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 611,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 612,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 613,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 614,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 615,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 616,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 617,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 618,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 620,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 621,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 622,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 623,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 624,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 625,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 626,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 630,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 631,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 632,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 633,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 634,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 635,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 636,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 640,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 641,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 635,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 623,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 650,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 651,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 624,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 652,
		high: true
	},
	{
		d_code: "lto",
		pref_id: 653,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 654,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 655,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 710,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 711,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 712,
		high: true
	},
	{
		d_code: "pdi",
		pref_id: 713,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 714,
		high: false
	},
	{
		d_code: "pdi",
		pref_id: 715,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 720,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 721,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 722,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 820,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 821,
		high: true
	},
	{
		d_code: "idv",
		pref_id: 822,
		high: false
	},
	{
		d_code: "idv",
		pref_id: 823,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 830,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 831,
		high: true
	},
	{
		d_code: "mas",
		pref_id: 832,
		high: false
	},
	{
		d_code: "mas",
		pref_id: 833,
		high: false
	},
	{
		d_code: "uai",
		pref_id: 840,
		high: true
	},
	{
		d_code: "uai",
		pref_id: 820,
		high: false
	},
	{
		d_code: "lto",
		pref_id: 851,
		high: true
	},
    ]
    
Array.prototype.asyncForEach= async function(fn){
        for(let i=0; i<this.length; i++){
            await fn(this[i]);
        }
};    

const run = async function(){
    await db.init(true);
    
    await countryList.asyncForEach(async function (item) {
        console.log(await db.createCountry(item));
    });
    await dims.asyncForEach(async function(item){
        console.log(await db.createDim(item)); 
    });
    await scoreList.asyncForEach(async function (item) {
        console.log(await db.createScores(item));
    });
    await categories.asyncForEach(async function (item) {
        console.log(await db.createCategories(item));
    });
    await preferences.asyncForEach(async function (item) {
        console.log(await db.createPrefs(item));
    });
    await hasPrefList.asyncForEach(async function (item) {
        console.log(await db.createPrefList(item));
    });
};

run().then(console.log).catch(console.error);

