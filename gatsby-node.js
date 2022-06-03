

/*
* Followed instructions from here: 
* https://auth0.com/blog/securing-gatsby-with-auth0/?utm_source=pocket_mylist
*
* 
*/

exports.onCreatePage = async({page, actions}) => {

    const {createPage } = actions

     if (page.path.match(/^\/private/)) {
         page.matchPath = "/private/*"

         createPage(page)
     }
}

exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
    if (stage === "build-html")

    actions.setWebpackConfig({
        module : {
            rules: [
                {
                    test: /auth0-js/,
                    use: loaders.null(),
                }
            ]
        }
    })
}