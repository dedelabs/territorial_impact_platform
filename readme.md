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

```
    npm run dev
```


## Endpoints

- localhost:1337/admin , Strapi Admin panel
- localhost:1337/documentation , Swagger OpenAPI documentation
- localhost:1337/api , Base API endpoint
- localhost:3009/ , FE app

## Project tree

```
lerna.json                                  // Lerna confugurations
src/                                        // All the application
├── admin
│   └── package.json                        // Strapi app
│   └── config/plugins.js                   // Strapi (documentation) extensions settings 
│   └──src/extensions/documentation/config
│       └── settings.json                   // Strapi documentation more settings
└── frontend
    └── package.json                        // NuxtJS app
```

## Main packages

- [Lerna](https://github.com/lerna/lerna/)
- [Strapi](https://www.strapi.io/)
- [Strapi API Doc](https://docs.strapi.io/developer-docs/latest/plugins/documentation.html#installation)
- [Strapi Email designer](https://market.strapi.io/plugins/strapi-plugin-email-designer)
- [Strapi Entity relationship charts](https://market.strapi.io/plugins/strapi-plugin-entity-relationship-chart)
- [Vuetify Doc](https://vuetifyjs.com/en/getting-started/wireframes/)
- [NuxtJS](https://nuxtjs.org/docs/get-started/installation)
- [Vuetify](https://vuetifyjs.com/en/)

## TODO

- replace Lerna with [NX](https://github.com/nrwl/nx)
- https://market.strapi.io/plugins/strapi-plugin-slugify
- use typescript?
- use storybook?