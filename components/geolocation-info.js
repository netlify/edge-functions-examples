export default function geolocation({ city, countryCode, countryName }) {
  return `
    <ul class="geolocation">
      <li class="geolocation__item">
        <img src="https://flagcdn.com/96x72/${countryCode?.toLowerCase()}.png" class="geolocation__flag" alt="${countryName}" />
      </li>
      <li class="geolocation__item">
        <span>Your country name</span>
        <span>${countryName}</span>
      </li>
      <li class="geolocation__item">
        <span>Your country code</span>
        <span>${countryCode}</span>
      </li>
      <li class="geolocation__item">
        <span>Your city</span>
        <span>${city}</span>
      </li>
    </ul>
  `;
}
