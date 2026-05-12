// Comprehensive list of Hague Apostille Convention signatories with ISO country codes
const hagueCoutries = [
    { name: 'Antigua and Barbuda', code: 'ag' },
    { name: 'Argentina', code: 'ar' },
    { name: 'Australia', code: 'au' },
    { name: 'Austria', code: 'at' },
    { name: 'Azerbaijan', code: 'az' },
    { name: 'Bahamas', code: 'bs' },
    { name: 'Bahrain', code: 'bh' },
    { name: 'Barbados', code: 'bb' },
    { name: 'Belarus', code: 'by' },
    { name: 'Belgium', code: 'be' },
    { name: 'Belize', code: 'bz' },
    { name: 'Bosnia and Herzegovina', code: 'ba' },
    { name: 'Botswana', code: 'bw' },
    { name: 'Brazil', code: 'br' },
    { name: 'Brunei', code: 'bn' },
    { name: 'Bulgaria', code: 'bg' },
    { name: 'Cambodia', code: 'kh' },
    { name: 'Canada', code: 'ca' },
    { name: 'Cape Verde', code: 'cv' },
    { name: 'Chile', code: 'cl' },
    { name: 'China', code: 'cn' },
    { name: 'Colombia', code: 'co' },
    { name: 'Comoros', code: 'km' },
    { name: 'Costa Rica', code: 'cr' },
    { name: 'Croatia', code: 'hr' },
    { name: 'Cuba', code: 'cu' },
    { name: 'Cyprus', code: 'cy' },
    { name: 'Czech Republic', code: 'cz' },
    { name: 'Denmark', code: 'dk' },
    { name: 'Dominica', code: 'dm' },
    { name: 'Dominican Republic', code: 'do' },
    { name: 'Ecuador', code: 'ec' },
    { name: 'Egypt', code: 'eg' },
    { name: 'El Salvador', code: 'sv' },
    { name: 'Estonia', code: 'ee' },
    { name: 'Eswatini', code: 'sz' },
    { name: 'Fiji', code: 'fj' },
    { name: 'Finland', code: 'fi' },
    { name: 'France', code: 'fr' },
    { name: 'Gabon', code: 'ga' },
    { name: 'Gambia', code: 'gm' },
    { name: 'Georgia', code: 'ge' },
    { name: 'Germany', code: 'de' },
    { name: 'Ghana', code: 'gh' },
    { name: 'Gibraltar', code: 'gi' },
    { name: 'Greece', code: 'gr' },
    { name: 'Grenada', code: 'gd' },
    { name: 'Guatemala', code: 'gt' },
    { name: 'Guernsey', code: 'gg' },
    { name: 'Guinea-Bissau', code: 'gw' },
    { name: 'Guyana', code: 'gy' },
    { name: 'Haiti', code: 'ht' },
    { name: 'Honduras', code: 'hn' },
    { name: 'Hong Kong', code: 'hk' },
    { name: 'Hungary', code: 'hu' },
    { name: 'Iceland', code: 'is' },
    { name: 'India', code: 'in' },
    { name: 'Indonesia', code: 'id' },
    { name: 'Ireland', code: 'ie' },
    { name: 'Isle of Man', code: 'im' },
    { name: 'Israel', code: 'il' },
    { name: 'Italy', code: 'it' },
    { name: 'Jamaica', code: 'jm' },
    { name: 'Japan', code: 'jp' },
    { name: 'Jersey', code: 'je' },
    { name: 'Kazakhstan', code: 'kz' },
    { name: 'Kenya', code: 'ke' },
    { name: 'Kiribati', code: 'ki' },
    { name: 'South Korea', code: 'kr' },
    { name: 'Kosovo', code: 'xk' },
    { name: 'Kyrgyzstan', code: 'kg' },
    { name: 'Laos', code: 'la' },
    { name: 'Latvia', code: 'lv' },
    { name: 'Lesotho', code: 'ls' },
    { name: 'Liberia', code: 'lr' },
    { name: 'Libya', code: 'ly' },
    { name: 'Liechtenstein', code: 'li' },
    { name: 'Lithuania', code: 'lt' },
    { name: 'Luxembourg', code: 'lu' },
    { name: 'Macao', code: 'mo' },
    { name: 'Madagascar', code: 'mg' },
    { name: 'Malawi', code: 'mw' },
    { name: 'Malaysia', code: 'my' },
    { name: 'Maldives', code: 'mv' },
    { name: 'Mali', code: 'ml' },
    { name: 'Malta', code: 'mt' },
    { name: 'Marshall Islands', code: 'mh' },
    { name: 'Mauritius', code: 'mu' },
    { name: 'Mexico', code: 'mx' },
    { name: 'Micronesia', code: 'fm' },
    { name: 'Moldova', code: 'md' },
    { name: 'Monaco', code: 'mc' },
    { name: 'Mongolia', code: 'mn' },
    { name: 'Montenegro', code: 'me' },
    { name: 'Morocco', code: 'ma' },
    { name: 'Mozambique', code: 'mz' },
    { name: 'Namibia', code: 'na' },
    { name: 'Nauru', code: 'nr' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'New Zealand', code: 'nz' },
    { name: 'Nicaragua', code: 'ni' },
    { name: 'Niger', code: 'ne' },
    { name: 'Nigeria', code: 'ng' },
    { name: 'North Macedonia', code: 'mk' },
    { name: 'Norway', code: 'no' },
    { name: 'Oman', code: 'om' },
    { name: 'Pakistan', code: 'pk' },
    { name: 'Palau', code: 'pw' },
    { name: 'Palestine', code: 'ps' },
    { name: 'Panama', code: 'pa' },
    { name: 'Papua New Guinea', code: 'pg' },
    { name: 'Paraguay', code: 'py' },
    { name: 'Peru', code: 'pe' },
    { name: 'Philippines', code: 'ph' },
    { name: 'Poland', code: 'pl' },
    { name: 'Portugal', code: 'pt' },
    { name: 'Qatar', code: 'qa' },
    { name: 'Romania', code: 'ro' },
    { name: 'Russia', code: 'ru' },
    { name: 'Rwanda', code: 'rw' },
    { name: 'Saint Kitts and Nevis', code: 'kn' },
    { name: 'Saint Lucia', code: 'lc' },
    { name: 'Saint Vincent and the Grenadines', code: 'vc' },
    { name: 'Samoa', code: 'ws' },
    { name: 'San Marino', code: 'sm' },
    { name: 'Sao Tome and Principe', code: 'st' },
    { name: 'Saudi Arabia', code: 'sa' },
    { name: 'Senegal', code: 'sn' },
    { name: 'Serbia', code: 'rs' },
    { name: 'Seychelles', code: 'sc' },
    { name: 'Sierra Leone', code: 'sl' },
    { name: 'Singapore', code: 'sg' },
    { name: 'Slovakia', code: 'sk' },
    { name: 'Slovenia', code: 'si' },
    { name: 'Solomon Islands', code: 'sb' },
    { name: 'South Africa', code: 'za' },
    { name: 'South Sudan', code: 'ss' },
    { name: 'Spain', code: 'es' },
    { name: 'Sri Lanka', code: 'lk' },
    { name: 'Sudan', code: 'sd' },
    { name: 'Suriname', code: 'sr' },
    { name: 'Sweden', code: 'se' },
    { name: 'Switzerland', code: 'ch' },
    { name: 'Syria', code: 'sy' },
    { name: 'Taiwan', code: 'tw' },
    { name: 'Tajikistan', code: 'tj' },
    { name: 'Tanzania', code: 'tz' },
    { name: 'Thailand', code: 'th' },
    { name: 'Timor-Leste', code: 'tl' },
    { name: 'Togo', code: 'tg' },
    { name: 'Tonga', code: 'to' },
    { name: 'Trinidad and Tobago', code: 'tt' },
    { name: 'Tunisia', code: 'tn' },
    { name: 'Turkey', code: 'tr' },
    { name: 'Turkmenistan', code: 'tm' },
    { name: 'Tuvalu', code: 'tv' },
    { name: 'Uganda', code: 'ug' },
    { name: 'Ukraine', code: 'ua' },
    { name: 'United Arab Emirates', code: 'ae' },
    { name: 'United Kingdom', code: 'gb' },
    { name: 'United States', code: 'us' },
    { name: 'Uruguay', code: 'uy' },
    { name: 'Uzbekistan', code: 'uz' },
    { name: 'Vanuatu', code: 'vu' },
    { name: 'Vatican City', code: 'va' },
    { name: 'Venezuela', code: 've' },
    { name: 'Vietnam', code: 'vn' },
    { name: 'Yemen', code: 'ye' },
    { name: 'Zambia', code: 'zm' },
    { name: 'Zimbabwe', code: 'zw' }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadFlags();
});

// Load and display flags
function loadFlags() {
    const flagsGrid = document.getElementById('flagsGrid');
    
    hagueCoutries.forEach(country => {
        const flagItem = document.createElement('div');
        flagItem.className = 'flag-item';
        flagItem.title = country.name;
        
        const flagImg = document.createElement('img');
        flagImg.src = `assets/flags/${country.code}.png`;
        flagImg.alt = `${country.name} flag`;
        flagImg.className = 'flag-image';
        
        const flagName = document.createElement('div');
        flagName.className = 'flag-name';
        flagName.textContent = country.name;
        
        flagItem.appendChild(flagImg);
        flagItem.appendChild(flagName);
        flagsGrid.appendChild(flagItem);
    });
}

// Handle email signup
function handleSignup(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const messageDiv = document.getElementById('formMessage');
    
    // Simple validation
    if (!email || !email.includes('@')) {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.className = 'error';
        return;
    }
    
    // Simulate form submission (in production, this would send to a server)
    messageDiv.textContent = 'Thanks! We\'ll notify you when we launch.';
    messageDiv.className = 'success';
    
    // Clear the form
    form.reset();
    
    // Optional: Clear message after 5 seconds
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 5000);
}
