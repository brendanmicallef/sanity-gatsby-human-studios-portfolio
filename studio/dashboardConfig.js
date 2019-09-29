export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d90248ba24467acaa9236d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-human-studios-portfolio-studio',
                  apiId: '8a11b1de-0852-4add-84a2-2d4bd696f9fc'
                },
                {
                  buildHookId: '5d90248bddd55ebd1c9d89b7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-human-studios-portfolio',
                  apiId: 'c5759ba7-cb64-480e-9682-6b6c609a91d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brendanmicallef/sanity-gatsby-human-studios-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-human-studios-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
