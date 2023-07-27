import { createGlobalStyle } from 'styled-components';

// default breakpoints
// {
//   smallPhone: 320;
//   phone: 375;
//   tablet: 768;
//   desktop: 1024;
//   largeDesktop: 1440;
// }

export const GlobalStyle = createGlobalStyle`

.next-light-theme {
  --background: 251,251,253;
  --secondBackground: 255,255,255;
  --greenBackground: 73,90,88;
  --beigeBackground: 220,217,208;
  --sunset: 255,153,0;
  --text: 10,18,30;
  --textSecondary: 255,255,255;
  --primary: 106,168,79; 
  --secondary: 10,18,30;
  --tertiary: 231,241,251;
  --cardBackground: 255,255,255;
  --inputBackground: 255,255,255;
  --navbarBackground: 255,255,255;
  --modalBackground: 251,251,253;
  --errorColor: 207,34,46;
  --logoColor: #243A5A;
}

.next-dark-theme {
  --background: 26,32,44;
  --secondBackground: 45,55,72;
  --text: 237,237,238;
  --textSecondary: 255,255,255;
  --primary: 22,115,255; 
  --secondary: 10,18,30;
  --tertiary: 231,241,251;
  --cardBackground: 45,55,72;
  --inputBackground: 45,55,72;
  --navbarBackground: 45,55,72;
  --modalBackground: 26,32,44;
  --errorColor: 207,34,46;
  --logoColor: #fff;
}

:root {
  --font: 'Poppins', sans-serif;

  --farsiFont: IRANSansXFaNum, serif !important;
  
  --shadow-md: 0 2px 4px 0 rgb(12 0 46 / 4%);
  --shadow-lg: 0 10px 14px 0 rgb(12 0 46 / 6%);

  --z-sticky: 7777;
  --z-navbar: 8888;
  --z-drawer: 9999;
  --z-modal: 9999;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 

html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;

  @media (max-width: 37.5em) {
    font-size: 50%;
  }

  @media (max-width: 48.0625em) {
    font-size: 55%;
  }

  @media (max-width: 56.25em) {
    font-size: 60%;
  }
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--farsiFont);
  color: rgb(var(--text));
  background: rgb(var(--background));
  font-feature-settings: "kern";
}

svg {
  color: rgb(var(--text));
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

//font

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 100;
  font-style: normal;
  font-display: swap;
  src: url('/') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-Thin.woff') format('woff');
}

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 200;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/iransansX-faNum/woff2/IRANSansXFaNum-UltraLight.woff2') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-UltraLight.woff') format('woff');
}

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 300;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/iransansX-faNum/woff2/IRANSansXFaNum-Light.woff2') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-Light.woff') format('woff');
}

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/iransansX-faNum/woff2/IRANSansXFaNum-Regular.woff2') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-Regular.woff') format('woff');
}

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/iransansX-faNum/woff2/IRANSansXFaNum-Medium.woff2') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-Medium.woff') format('woff');
}

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 600;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/iransansX-faNum/woff2/IRANSansXFaNum-DemiBold.woff2') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-DemiBold.woff') format('woff');
}

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/iransansX-faNum/woff2/IRANSansXFaNum-Bold.woff2') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-Bold.woff') format('woff');
}

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 800;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/iransansX-faNum/woff2/IRANSansXFaNum-ExtraBold.woff2') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-ExtraBold.woff') format('woff');
}

@font-face {
  font-family: IRANSansXFaNum;
  font-weight: 900;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/iransansX-faNum/woff2/IRANSansXFaNum-Black.woff2') format('woff2'),
    url('/fonts/iransansX-faNum/woff/IRANSansXFaNum-Black.woff') format('woff');
}

@font-face {
  font-family: IRANSansX;
  font-weight: 400;
  font-style: normal;
  src: url('/fonts/iransansX/woff2/IRANSansX-Regular.woff2') format('woff2'),
    url('/fonts/iransansX/woff/IRANSansX-Regular.woff') format('woff');
  font-display: swap;
}

@font-face {
  font-family: IRANSansX;
  font-weight: 500;
  font-style: normal;
  src: url('/fonts/iransansX/woff2/IRANSansX-Medium.woff2') format('woff2'),
    url('/fonts/iransansX/woff/IRANSansX-Medium.woff') format('woff');
  font-display: swap;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    font-family: var(--farsiFont);
  }

}`;
