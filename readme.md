## Installation

prerequisites

- node: '>=12.22.0 <=16.x.x'

configure `src/admin/.env`

```
npm install
npx lerna bootstrap // install applications dependencies
```

### Note

Strapi can only starts on 1337 port. There is an open issue about this [gh/strapi/12826](https://github.com/strapi/strapi/issues/12826)

## Run

`npm run dev`

## Project tree

```
lerna.json              // Lerna confugurations
src/                    // All the applications
├── admin
│   └── package.json    // Strapi app
└── app2
    └── package.json
```

## Main packages

- [Lerna](https://github.com/lerna/lerna/)
- [Strapi](https://www.strapi.io/)