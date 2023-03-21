# Rock Paper Scissors

Implementation of Rock-Paper-Scissors game !

I did this project as a technical test for a company.

API: Node.js, Express, Apollo server, GraphQL and Typescript.

Frontend: Node.js, Express, Apollo client, Typescript, React.js, Zustand, Tailwind CSS and Material UI.

<br />

---


<br />

## To run this project in dev
```sh
git clone https://github.com/Flo-Slv/rock-paper-scissors.git 
```

<br />

### API
```sh
cd rock-paper-scissors/api && \
npm install
```

<br />

Create `.env` file
```env
touch .env
```

<br />

Add this line into `.env`
```sh
MONGODB=mongodb+srv://FloSlv:SweepBright2023@sweep-bright.9q4kkbe.mongodb.net/rock-paper-scissors?retryWrites=true&w=majority
```

<br />

Run API server.
```sh
npm run dev
```

<br />

### Frontend
```sh
cd rock-paper-scissors/rockpaperscissors && \
npm install && \
npm run dev
```

<br />

---

<br />

## Dependencies
### API
List of dependencies
```sh
@apollo/server express graphql cors body-parser mongoose dotenv
```

List of dev dependencies
```sh
nodemon ts-node tsc-watch typescript @types/cors @types/express @types/node
```

<br />

### Frontend
List of dependencies
```sh
express @apollo/client express cors dotenv graphql react react-dom react-hook-form @hookform/resolvers validator yup @mui/material @emotion/react @emotion/styled clsx zustand
```

List of dev dependencies
```sh
tailwindcss postcss autoprefixer typescript ts-node tsc-watch ts-loader @types/cors @types/express @types/node @types/react @types/react-dom @types/validator webpack webpack-cli css-loader postcss-loader style-loader postcss-preset-env nodemon  @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript jest jest-environment-jsdom babel-jest cross-fetch @testing-library/dom @testing-library/jest-dom @testing-library/react
```
