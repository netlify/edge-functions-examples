export default function geolocation({ city, countryCode, countryName }) {
  return `
    <ul class="geolocation">
      <li class="geolocation__item">
        <img src="https://flagcdn.com/96x72/${countryCode.toLowerCase()}.png" class="geolocation__flag" alt="${countryName}" />
      </li>
      <li class="geolocation__item">
        <span>Country name</span>
        <span>${countryName}</span>
      </li>
      <li class="geolocation__item">
        <span>Country code</span>
        <span>${countryCode}</span>
      </li>
      <li class="geolocation__item">
        <span>City</span>
        <span>${city}</span>
      </li>
    </ul>
  `;
}
