# PowerShell script to download country flags from flag-icons repository
# Run this script to populate the flags folder

param(
    [string]$OutputDir = "assets\flags"
)

# Ensure output directory exists
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

# Mapping of country names to ISO 3166-1 alpha-2 codes
$countryCodeMap = @{
    'Antigua and Barbuda' = 'ag'
    'Argentina' = 'ar'
    'Australia' = 'au'
    'Austria' = 'at'
    'Azerbaijan' = 'az'
    'Bahamas' = 'bs'
    'Bahrain' = 'bh'
    'Barbados' = 'bb'
    'Belarus' = 'by'
    'Belgium' = 'be'
    'Belize' = 'bz'
    'Bosnia and Herzegovina' = 'ba'
    'Botswana' = 'bw'
    'Brazil' = 'br'
    'Brunei' = 'bn'
    'Bulgaria' = 'bg'
    'Cambodia' = 'kh'
    'Canada' = 'ca'
    'Cape Verde' = 'cv'
    'Chile' = 'cl'
    'China' = 'cn'
    'Colombia' = 'co'
    'Comoros' = 'km'
    'Costa Rica' = 'cr'
    'Croatia' = 'hr'
    'Cuba' = 'cu'
    'Cyprus' = 'cy'
    'Czech Republic' = 'cz'
    'Denmark' = 'dk'
    'Dominica' = 'dm'
    'Dominican Republic' = 'do'
    'Ecuador' = 'ec'
    'Egypt' = 'eg'
    'El Salvador' = 'sv'
    'Estonia' = 'ee'
    'Eswatini' = 'sz'
    'Fiji' = 'fj'
    'Finland' = 'fi'
    'France' = 'fr'
    'Gabon' = 'ga'
    'Gambia' = 'gm'
    'Georgia' = 'ge'
    'Germany' = 'de'
    'Ghana' = 'gh'
    'Gibraltar' = 'gi'
    'Greece' = 'gr'
    'Grenada' = 'gd'
    'Guatemala' = 'gt'
    'Guernsey' = 'gg'
    'Guinea-Bissau' = 'gw'
    'Guyana' = 'gy'
    'Haiti' = 'ht'
    'Honduras' = 'hn'
    'Hong Kong' = 'hk'
    'Hungary' = 'hu'
    'Iceland' = 'is'
    'India' = 'in'
    'Indonesia' = 'id'
    'Ireland' = 'ie'
    'Isle of Man' = 'im'
    'Israel' = 'il'
    'Italy' = 'it'
    'Jamaica' = 'jm'
    'Japan' = 'jp'
    'Jersey' = 'je'
    'Kazakhstan' = 'kz'
    'Kenya' = 'ke'
    'Kiribati' = 'ki'
    'South Korea' = 'kr'
    'Kosovo' = 'xk'
    'Kyrgyzstan' = 'kg'
    'Laos' = 'la'
    'Latvia' = 'lv'
    'Lesotho' = 'ls'
    'Liberia' = 'lr'
    'Libya' = 'ly'
    'Liechtenstein' = 'li'
    'Lithuania' = 'lt'
    'Luxembourg' = 'lu'
    'Macao' = 'mo'
    'Madagascar' = 'mg'
    'Malawi' = 'mw'
    'Malaysia' = 'my'
    'Maldives' = 'mv'
    'Mali' = 'ml'
    'Malta' = 'mt'
    'Marshall Islands' = 'mh'
    'Mauritius' = 'mu'
    'Mexico' = 'mx'
    'Micronesia' = 'fm'
    'Moldova' = 'md'
    'Monaco' = 'mc'
    'Mongolia' = 'mn'
    'Montenegro' = 'me'
    'Morocco' = 'ma'
    'Mozambique' = 'mz'
    'Namibia' = 'na'
    'Nauru' = 'nr'
    'Netherlands' = 'nl'
    'New Zealand' = 'nz'
    'Nicaragua' = 'ni'
    'Niger' = 'ne'
    'Nigeria' = 'ng'
    'North Macedonia' = 'mk'
    'Norway' = 'no'
    'Oman' = 'om'
    'Pakistan' = 'pk'
    'Palau' = 'pw'
    'Palestine' = 'ps'
    'Panama' = 'pa'
    'Papua New Guinea' = 'pg'
    'Paraguay' = 'py'
    'Peru' = 'pe'
    'Philippines' = 'ph'
    'Poland' = 'pl'
    'Portugal' = 'pt'
    'Qatar' = 'qa'
    'Romania' = 'ro'
    'Russia' = 'ru'
    'Rwanda' = 'rw'
    'Saint Kitts and Nevis' = 'kn'
    'Saint Lucia' = 'lc'
    'Saint Vincent and the Grenadines' = 'vc'
    'Samoa' = 'ws'
    'San Marino' = 'sm'
    'Sao Tome and Principe' = 'st'
    'Saudi Arabia' = 'sa'
    'Senegal' = 'sn'
    'Serbia' = 'rs'
    'Seychelles' = 'sc'
    'Sierra Leone' = 'sl'
    'Singapore' = 'sg'
    'Slovakia' = 'sk'
    'Slovenia' = 'si'
    'Solomon Islands' = 'sb'
    'South Africa' = 'za'
    'South Sudan' = 'ss'
    'Spain' = 'es'
    'Sri Lanka' = 'lk'
    'Sudan' = 'sd'
    'Suriname' = 'sr'
    'Sweden' = 'se'
    'Switzerland' = 'ch'
    'Syria' = 'sy'
    'Taiwan' = 'tw'
    'Tajikistan' = 'tj'
    'Tanzania' = 'tz'
    'Thailand' = 'th'
    'Timor-Leste' = 'tl'
    'Togo' = 'tg'
    'Tonga' = 'to'
    'Trinidad and Tobago' = 'tt'
    'Tunisia' = 'tn'
    'Turkey' = 'tr'
    'Turkmenistan' = 'tm'
    'Tuvalu' = 'tv'
    'Uganda' = 'ug'
    'Ukraine' = 'ua'
    'United Arab Emirates' = 'ae'
    'United Kingdom' = 'gb'
    'United States' = 'us'
    'Uruguay' = 'uy'
    'Uzbekistan' = 'uz'
    'Vanuatu' = 'vu'
    'Vatican City' = 'va'
    'Venezuela' = 've'
    'Vietnam' = 'vn'
    'Yemen' = 'ye'
    'Zambia' = 'zm'
    'Zimbabwe' = 'zw'
}

# Base URL for country flags (PNG files from countryflags.io API)
# Using 256px resolution for better quality
$baseUrl = "https://countryflags.io"

# Counter for progress
$count = 0
$total = $countryCodeMap.Count

Write-Host "Starting to download $total country flags..." -ForegroundColor Cyan

foreach ($country in $countryCodeMap.GetEnumerator()) {
    $code = $country.Value.ToUpper()
    $filename = "$($country.Value).png"
    $filepath = Join-Path $OutputDir $filename
    
    # Skip if already downloaded
    if (Test-Path $filepath) {
        $count++
        Write-Host "[$count/$total] $($country.Name) - Already exists" -ForegroundColor Green
        continue
    }
    
    # countryflags.io API format: https://countryflags.io/[CODE]/flat/256.png
    $url = "$baseUrl/${code}/flat/256.png"
    
    try {
        $progressPreference = 'SilentlyContinue'
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
        $webClient.DownloadFile($url, $filepath)
        $webClient.Dispose()
        $count++
        Write-Host "[$count/$total] Downloaded: $($country.Name)" -ForegroundColor Green
        # Add delay to avoid rate limiting (50ms between requests)
        Start-Sleep -Milliseconds 50
    }
    catch {
        # Try alternative: fallback to different service
        try {
            $altUrl = "https://flagcdn.com/256x192/$($country.Value).png"
            $webClient = New-Object System.Net.WebClient
            $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
            $webClient.DownloadFile($altUrl, $filepath)
            $webClient.Dispose()
            $count++
            Write-Host "[$count/$total] Downloaded (alt): $($country.Name)" -ForegroundColor Green
            Start-Sleep -Milliseconds 50
        }
        catch {
            Write-Host "[$count/$total] Failed: $($country.Name)" -ForegroundColor Red
            $count++
        }
    }
}

Write-Host "`nDownload complete!" -ForegroundColor Cyan
Write-Host "Flags saved to: $(Resolve-Path $OutputDir)" -ForegroundColor Cyan

# List downloaded files
$downloadedCount = (Get-ChildItem $OutputDir -Filter "*.png" | Measure-Object).Count
Write-Host "Total flags downloaded: $downloadedCount" -ForegroundColor Yellow
