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
                  buildHookId: '5f295997fa9dbd711643ed60',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5s2vkb99',
                  apiId: '2c8c5248-f2f6-4c5f-a2d5-622e0a94d2f7'
                },
                {
                  buildHookId: '5f29599786638f5c53d015aa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c6yobkdd',
                  apiId: 'c1722794-a725-4bbf-ae0f-a45f60978e70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MattSchoen25/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-c6yobkdd.netlify.app', category: 'apps' }
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
