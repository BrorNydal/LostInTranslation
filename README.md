# LostInTranslation - Handshaper
![build](https://img.shields.io/badge/build-passing-green)

## Abstract
> Make a React application for translating text to sign language, with login-page, translate-page and a page for profile-history.
> Part of the Noroff fullstack .NET accelerate module.

## Download and run
You can download the code with ```bash== git clone (this url) ```. If you want to run the app in a browser, just click the following link: [https://lost-in-translation-pi.vercel.app/](https://lost-in-translation-pi.vercel.app/). The app was deployed and is hosted by [vercel](https://vercel.com).

## Functionality
The following pages are available, with described GUI options:
1. Login: Login with your name. 
2. Translate: Translate words or sentences into sign language. The Americal Sign Language (ASL) is used, which means the app excludes any letters **not** included in the American alphabet. You can also toggle to profile history, or log out. 
3. Profile History: See the last 10 translations in your profile, clean history and/or logout. 

## Dependencies
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![react](https://camo.githubusercontent.com/4e4a3b5c3e9c00501ec866e2f2466c5a6032f838aca5f2cf3b14450e39e8a2f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)](https://reactjs.org/)
[![js](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com)
[![css](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=000)](https://en.wikipedia.org/wiki/CSS)
[![html](https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![vscode](https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=000)](https://code.visualstudio.com/)
[![windows](https://img.shields.io/badge/-Windows-0078D6?logo=windows&logoColor=000)](https://www.microsoft.com/sv-se/windows)

(Want to use badges see e.g. [https://github.com/Ileriayo/markdown-badges](https://github.com/Ileriayo/markdown-badges) or [https://home.aveek.io/GitHub-Profile-Badges/](https://home.aveek.io/GitHub-Profile-Badges/)).

## Project Management
The first draft and final structure of the app components were made with [figma](https://www.figma.com/file/3z0n5zfEAe2u9Mlw9W5BL0/Diagram---Untitled?node-id=0%3A1&t=R0evprNBn3FGprio-1), and is shown below.

<b href="https://github.com/BrorNydal/LostInTranslation">
  <img width = "800" height = "600" src="https://github.com/BrorNydal/LostInTranslation/blob/main/lost-in-translation/assets/Figma.png">
</b>

## Code: Link and description of folders
- [public](https://github.com/BrorNydal/LostInTranslation/tree/main/lost-in-translation/public): Folder containing public assets, including sprites for sign language icons and profile symbol.
- [src](https://github.com/BrorNydal/LostInTranslation/tree/main/lost-in-translation/src): Source folder for the application
  -  [Components](https://github.com/lasse-steinnes/LostInTranslation/tree/main/lost-in-translation/src/Components): Folder with React components in .jsx.
  -  [view-pages](https://github.com/BrorNydal/LostInTranslation/tree/main/lost-in-translation/src/view-pages): Folder with pages, piecing the app components together into a web-page. 
  
## Contributors
- [Lasse Steinnes](https://github.com/lasse-steinnes)
- [Bror Nydal](https://github.com/BrorNydal) 
