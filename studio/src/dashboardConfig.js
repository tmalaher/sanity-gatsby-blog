export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fba7d669314afcaa9a318c7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2vj3uod7',
                  apiId: '3fb90d0d-e6b4-416a-a041-7aa79780d142'
                },
                {
                  buildHookId: '5fba7d66b3cc31a8cb3317f5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-czfi8e5x',
                  apiId: '8a044d12-125a-4ee2-950d-110da8cc3b2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tmalaher/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-czfi8e5x.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
