export default function layout(data) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${data.title}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;900&display=swap" rel="stylesheet" />

    <meta name="theme-color" content="#ffffff" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#000000" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="stylesheet" href="/styles.css" />
    
  </head>
  <body>
  <header class="header">
    <div class="header__logo">
      <svg width="80" height="80" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M317.301 187.215L317.176 187.161C317.104 187.134 317.031 187.107 316.969 187.044C316.865 186.933 316.789 186.8 316.745 186.655C316.701 186.51 316.692 186.356 316.716 186.207L323.673 143.673L356.298 176.307L322.368 190.743C322.274 190.781 322.173 190.799 322.071 190.797H321.936C321.891 190.77 321.846 190.734 321.757 190.644C320.494 189.238 318.984 188.076 317.301 187.215ZM364.623 184.623L399.507 219.507C406.752 226.761 410.379 230.379 411.702 234.573C411.9 235.194 412.062 235.815 412.188 236.454L328.822 201.147C328.777 201.128 328.732 201.11 328.686 201.093C328.353 200.958 327.966 200.805 327.966 200.463C327.966 200.121 328.362 199.959 328.695 199.824L328.803 199.779L364.623 184.623ZM410.766 247.65C408.966 251.034 405.456 254.544 399.516 260.493L360.186 299.814L309.318 289.221L309.049 289.167C308.599 289.095 308.122 289.014 308.122 288.609C307.928 286.51 307.305 284.474 306.291 282.627C305.277 280.78 303.893 279.161 302.227 277.872C302.02 277.665 302.073 277.341 302.136 277.044C302.136 276.999 302.137 276.954 302.154 276.918L311.721 218.184L311.757 217.986C311.811 217.536 311.893 217.014 312.298 217.014C314.348 216.759 316.327 216.098 318.119 215.071C319.911 214.043 321.481 212.669 322.738 211.029C322.819 210.939 322.872 210.84 322.98 210.786C323.268 210.651 323.611 210.786 323.908 210.912L410.757 247.65H410.766ZM351.141 308.859L286.467 373.533L297.537 305.493L297.555 305.403C297.564 305.313 297.582 305.223 297.609 305.142C297.699 304.926 297.934 304.836 298.158 304.746L298.267 304.701C300.69 303.667 302.834 302.072 304.521 300.048C304.738 299.796 304.999 299.553 305.332 299.508C305.418 299.494 305.506 299.494 305.592 299.508L351.133 308.868L351.141 308.859ZM272.779 387.222L265.489 394.512L184.893 278.034C184.864 277.991 184.834 277.949 184.803 277.908C184.677 277.737 184.542 277.566 184.569 277.368C184.578 277.224 184.668 277.098 184.767 276.99L184.857 276.873C185.1 276.513 185.307 276.153 185.532 275.766L185.712 275.451L185.739 275.424C185.865 275.208 185.982 275.001 186.198 274.884C186.387 274.794 186.648 274.83 186.855 274.875L276.145 293.289C276.394 293.328 276.63 293.43 276.828 293.586C276.945 293.703 276.973 293.829 276.999 293.973C277.622 296.329 278.781 298.51 280.386 300.344C281.991 302.179 283.999 303.617 286.251 304.548C286.503 304.674 286.395 304.953 286.279 305.25C286.22 305.38 286.175 305.516 286.144 305.655C285.019 312.495 275.37 371.337 272.779 387.222ZM257.551 402.441C252.178 407.76 249.01 410.577 245.428 411.711C241.896 412.828 238.105 412.828 234.573 411.711C230.379 410.379 226.752 406.761 219.507 399.507L138.57 318.57L159.711 285.783C159.81 285.621 159.909 285.477 160.071 285.36C160.296 285.198 160.62 285.27 160.89 285.36C165.743 286.824 170.953 286.56 175.632 284.613C175.875 284.523 176.118 284.46 176.307 284.631C176.402 284.717 176.487 284.814 176.559 284.919L257.551 402.45V402.441ZM130.767 310.767L112.2 292.2L148.866 276.558C148.96 276.517 149.061 276.496 149.163 276.495C149.469 276.495 149.649 276.801 149.811 277.08C150.18 277.647 150.57 278.199 150.981 278.736L151.098 278.88C151.206 279.033 151.134 279.186 151.026 279.33L130.776 310.767H130.767ZM103.983 283.983L80.4935 260.493C76.4975 256.497 73.5995 253.599 71.5835 251.106L143.007 265.92C143.097 265.936 143.187 265.952 143.277 265.965C143.718 266.037 144.204 266.118 144.204 266.532C144.204 266.982 143.673 267.189 143.223 267.36L143.016 267.45L103.983 283.983ZM67.4795 239.028C67.5609 237.515 67.833 236.018 68.2895 234.573C69.6215 230.379 73.2395 226.761 80.4935 219.507L110.553 189.447C124.394 209.534 138.272 229.595 152.187 249.63C152.43 249.954 152.7 250.314 152.421 250.584C151.107 252.033 149.793 253.617 148.866 255.336C148.766 255.557 148.611 255.749 148.416 255.894C148.299 255.966 148.173 255.939 148.038 255.912H148.02L67.4795 239.019V239.028ZM118.599 181.401L159.018 140.982C162.816 142.647 176.64 148.488 189.006 153.708C198.366 157.668 206.898 161.268 209.58 162.438C209.85 162.546 210.093 162.654 210.21 162.924C210.283 163.086 210.246 163.293 210.21 163.464C209.571 166.381 209.666 169.412 210.487 172.284C211.309 175.156 212.831 177.778 214.917 179.916C215.187 180.186 214.917 180.573 214.684 180.906L214.557 181.095L173.517 244.662C173.409 244.842 173.31 244.995 173.13 245.112C172.914 245.247 172.608 245.184 172.356 245.121C170.76 244.703 169.119 244.479 167.469 244.455C165.993 244.455 164.391 244.725 162.771 245.022H162.762C162.582 245.049 162.42 245.085 162.276 244.977C162.117 244.847 161.981 244.692 161.871 244.518L118.599 181.401ZM167.181 132.819L219.507 80.4929C226.752 73.2479 230.379 69.6209 234.573 68.2979C238.105 67.1811 241.896 67.1811 245.428 68.2979C249.622 69.6209 253.249 73.2479 260.493 80.4929L271.833 91.8329L234.618 149.469C234.526 149.637 234.401 149.784 234.249 149.901C234.025 150.054 233.71 149.991 233.439 149.901C230.505 149.01 227.398 148.848 224.388 149.429C221.377 150.009 218.553 151.314 216.16 153.231C215.917 153.483 215.557 153.339 215.251 153.204C210.391 151.089 172.59 135.114 167.181 132.819ZM279.736 99.7349L314.098 134.097L305.817 185.379V185.514C305.81 185.631 305.786 185.746 305.745 185.856C305.656 186.036 305.475 186.072 305.295 186.126C303.525 186.662 301.858 187.493 300.364 188.583C300.299 188.629 300.239 188.68 300.184 188.736C300.085 188.844 299.985 188.943 299.823 188.961C299.692 188.965 299.56 188.944 299.436 188.898L247.074 166.65L246.975 166.605C246.643 166.47 246.247 166.308 246.247 165.966C245.939 163.048 244.986 160.235 243.457 157.731C243.204 157.317 242.926 156.885 243.142 156.462L279.736 99.7349ZM244.348 177.189L293.434 197.979C293.704 198.105 294.001 198.222 294.118 198.501C294.164 198.669 294.164 198.846 294.118 199.014C293.973 199.734 293.848 200.553 293.848 201.381V202.758C293.848 203.1 293.497 203.244 293.173 203.379L293.073 203.415C285.297 206.736 183.903 249.972 183.75 249.972C183.597 249.972 183.435 249.972 183.282 249.819C183.012 249.549 183.282 249.171 183.525 248.829C183.568 248.77 183.61 248.71 183.651 248.649L223.99 186.189L224.061 186.081C224.296 185.703 224.566 185.28 224.997 185.28L225.402 185.343C226.32 185.469 227.13 185.586 227.949 185.586C234.069 185.586 239.74 182.607 243.16 177.513C243.241 177.377 243.344 177.255 243.465 177.153C243.708 176.973 244.068 177.063 244.348 177.189ZM188.133 259.854L298.654 212.721C298.654 212.721 298.815 212.721 298.969 212.874C299.572 213.477 300.085 213.882 300.579 214.26L300.822 214.413C301.047 214.539 301.272 214.683 301.29 214.917C301.29 215.007 301.29 215.061 301.273 215.142L291.805 273.3L291.769 273.534C291.706 273.984 291.643 274.497 291.219 274.497C288.695 274.667 286.251 275.451 284.097 276.779C281.944 278.107 280.147 279.94 278.863 282.12L278.817 282.192C278.691 282.399 278.575 282.597 278.368 282.705C278.178 282.795 277.936 282.759 277.738 282.714L189.6 264.534C189.51 264.516 188.232 259.863 188.133 259.854Z"
          fill="url(#paint0_radial_2_176)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2_176"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(55.9061 235.136) rotate(90) scale(344.709 397.979)"
          >
            <stop stop-color="#20C6B7" />
            <stop offset="1" stop-color="#4D9ABF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <span class="header__title"><a href="/">Edge Handlers Examples</a> /  ${data.title}</span>
  </header>
  <main class="main">
    ${data.content}
  </main>
  <footer class="footer">
    <p class="footer__copyright">© 2022 Netlify</p>
  </footer>
  </body>
</html>
`;
}