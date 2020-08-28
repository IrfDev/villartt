// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Villartt',
  siteDescription:
    'Proyecto artístico en la Ciudad de México, conoce el trabajo de Daniela Villanueva y Andrea Villanueva quienes siguen manteniendo su talento y convirtiendo ideas en arte.',
  siteUrl: 'https://villartt.me',
  plugins: [
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'vill.artt', // Instagram username
        typeName: 'instagramPhoto', // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      },
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'https://admin.villartt.me',
        contentTypes: ['pinturas', 'categorias', 'users'],
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-163708146-1',
      },
    },
  ],
};
