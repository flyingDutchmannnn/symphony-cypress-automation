export default class PostsRoute {

    static postPostsEndpoint(authToken): Cypress.Chainable {
        return cy.request({
            method: "POST",
            url: `${Cypress.env('swaggerUrl')}/api/posts/`,
            headers: {
                Authorization: `token ${authToken}`
            },
            body: {
                text: 'This is TEST'
            },
            failOnStatusCode: false
        });
    }

    static postPostCommentsEndpoint(postId, authToken): Cypress.Chainable {
        return cy.request({
            method: "POST",
            url: `${Cypress.env('swaggerUrl')}/api/post-comments/`,
            headers: {
                Authorization: `token ${authToken}`
            },
            body: {
                text: 'This is TEST Comment',
                post: postId
            },
            failOnStatusCode: false
        });
    }

    static getCommentEndpoint(commentId, authToken): Cypress.Chainable {
        return cy.request({
            method: "GET",
            url: `${Cypress.env('swaggerUrl')}/api/posts/${commentId}/comments/`,
            headers: {
                Authorization: `token ${authToken}`
            },
            failOnStatusCode: false
        });
    }


}