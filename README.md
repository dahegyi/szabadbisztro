<div align="center" style="text-align:center;">
<img src="https://raw.githubusercontent.com/dahegyi/szabadbisztro/master/public/tes.gif" height="50" />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://raw.githubusercontent.com/dahegyi/szabadbisztro/master/public/logo.webp" height="60" />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://raw.githubusercontent.com/dahegyi/szabadbisztro/master/public/lec.gif" height="50" />
</div>

---

<div align="center" style="text-align:center;">

![GitHub package.json version](https://img.shields.io/github/package-json/v/dahegyi/szabadbisztro)
![GitHub repo size](https://img.shields.io/github/repo-size/dahegyi/szabadbisztro)

[![Deploy to Firebase Hosting](https://github.com/dahegyi/szabadbisztro/actions/workflows/firebase-deploy.yml/badge.svg)](https://github.com/dahegyi/szabadbisztro/actions/workflows/firebase-deploy.yml)

[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-black.svg)](https://opensource.org/licenses/MIT)

Live website available at [szabadbisztro.hu](https://szabadbisztro.hu)

</div>

## Installation & Usage

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your machine
- [Firebase CLI](https://firebase.google.com/docs/cli) installed on your machine

### Installation

1. Clone the repository: `git clone git@github.com:dahegyi/szabadbisztro.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

### Usage

- `npm run dev` - Runs the development server
- `npm run build` - Builds the production version
- `npm run preview` - Serves the production version locally
- `npm run prepare` - Installs the Git hooks (runs automatically on `npm install`)
- `npm run lint` - Runs ESLint and Stylelint
- `npm run lint:fix` - Runs ESLint and Stylelint and fixes the errors

## Deployment

The website is deployed automatically to Firebase Hosting on every push to the `master` and `staging` branches.

### Deployment without Github Actions:

1. Build the production version: `npm run build`
2. Deploy the `dist` folder to Firebase Hosting:
   - **Staging:** `firebase hosting:channel:deploy staging`
   - **Production:** `firebase deploy`

## License

The code of this project is licensed under The Unlicense. See the [LICENSE](LICENSE) file for details.

The logo is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

## Credits

- [Urania Czech](https://www.dafont.com/urania-czech.font) font by [Lukas Krakora](https://www.typewriterfonts.net/)
- Patterns generated with [Pattern Monster](https://pattern.monster/)
