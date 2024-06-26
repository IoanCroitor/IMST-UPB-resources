# IMST-UPB-resources
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f76cc23-aa01-4d81-be7e-77d7257f6311/deploy-status)](https://app.netlify.com/sites/imst-cinematica/deploys)
![Static Badge](https://img.shields.io/badge/Built%20with-_Svelte-FF3E00?style=flat&logo=Svelte)
![Static Badge](https://img.shields.io/badge/Styled%20with-_Tailwind-06B6D4?style=flat&logo=Tailwind%20CSS)
![Static Badge](https://img.shields.io/badge/-_C%2B%2B-00599C?style=flat&logo=C%2B%2B)
![Static Badge](https://img.shields.io/badge/Maintained-_YES-A100FF?style=flat)




A collection of useful programs used for my master's degree at the University Politehnica of Bucharest (UPB), focusing on cinematic calculators and other tools relevant to my studies. This monorepo contains the source code for both the calculators and the website hosting these interactive tools.

## Website

The interactive calculator can be accessed through the website: [IMST cinematica](https://imst-cinematica.netlify.app)

## Roadmap

- [x] Offload the calculations to a C++ wasm service (not implemented in the final production version because Vite doen't seem to play nice with Emscripten ES6 exports, until Vite fixes it, the calculations are done in a Typescript function)
- [ ] Add LaTeX rendering to explain the rest of the results
- [ ] Code refactoring
- [ ] Other things

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/IoanCroitor/IMST-UPB-resources.git
```

2. Navigate to the Svelte drectory

```bash
cd "Calculator Cinematica Svelte"
```

3. Install dependencies (assuming you have Node.js installed):

```bash
npm install
```

## Usage

_DEV documentation coming soon™_

To run a local development server:

```bash
npm run dev
```

This command will compile the TypeScript files and serve the website on a local server, typically accessible at `http://localhost:5173`.

## Contributing

Contributions are welcome! If you have suggestions for improving the calculators or adding new features, please feel free to:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
