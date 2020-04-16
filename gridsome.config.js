// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Villartt',
    plugins: [{
            use: '@gridsome/source-strapi',
            options: {
                apiURL: 'http://localhost:1337',
                contentTypes: ['pinturas', 'categorias', 'users'],
            }
        },
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-163708146-1'
            }
        }
    ],
}