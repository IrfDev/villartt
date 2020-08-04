// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Villartt',
  siteDescription:
    'Daniela Villanueva y Andrea Villanueva presentando su proyecto artístico, le damos vida a tus ideas entra y ve nuestro trabajo 👩🏻‍🎨',
  siteUrl: 'https://villartt.me',
  plugins: [
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'vill.artt', // Instagram username
        typeName: 'InstagramPhoto', // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
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
