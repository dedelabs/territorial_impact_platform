module.exports = () => ({
  documentation: {
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'Api doc',
        description: '',
        termsOfService: 'YOUR_TERMS_OF_SERVICE_URL',
        contact: {
          name: 'TEAM',
          email: 'contact-email@something.io',
          url: 'mywebsite.io',
        },
        license: {
          name: 'Apache 2.0',
          url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
      },
      'x-strapi-config': {
        path: '/documentation',
        showGeneratedFiles: true,
        generateDefaultResponse: true,
        plugins: ['email', 'upload', 'users-permissions']
      },
      servers: [
        {
          url: "http://localhost:1337",
          description: "Development server"
        },
        {
          url: "YOUR_STAGING_SERVER",
          description: "Staging server"
        }
      ],
      externalDocs: {
        description: 'Find out more',
        url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html',
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      paths: {},
      tags: [],
      components: {}
    },
  },
});