import { result } from "cypress/types/lodash";
import EnvironmentSetup from "../../util/environmentSetup";
import CommentCoreApiDataModel from "../api/models/posts/comment.core.api.data.model";
import PostCoreApiDataModel from "../api/models/posts/post.core.api.data.model";
import SignupCoreApiDataModel from "../api/models/signup/signup.core.api.data.model";
import SymphonyApi from "../api/symphonyApi";

const postDataModel: PostCoreApiDataModel = new PostCoreApiDataModel();
const commentDataModel: CommentCoreApiDataModel = new CommentCoreApiDataModel();


before(() => {
    EnvironmentSetup.setEnv();
    SignupCoreApiDataModel.getSignupModel();
    EnvironmentSetup.setAuthToken();

})

describe('Task 2 - Happy Path', () => {

    it('Verify Scenario', () => {
        cy.fixture('user').then((user) => {
            SymphonyApi.signupRoute.postSignupEndpoint(user).then((response) => {
                expect(response.status).to.eq(201)
            })
        }).then(() => {
            cy.fixture('user').then((user) => {
                SymphonyApi.loginRoute.postLoginEndpoint(user).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.user).to.have.property('id')
                })
            })
        }).then (() => {
            SymphonyApi.postsRoute.postPostsEndpoint(`${Cypress.env('authToken')}`).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('id')
                postDataModel.postId = response.body.id
            })
         }).then(() => {
            SymphonyApi.postsRoute.postPostCommentsEndpoint(postDataModel.postId, `${Cypress.env('authToken')}`).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('id')
                commentDataModel.commentId = response.body.id
            })
         }).then(() => {
            SymphonyApi.postsRoute.getCommentEndpoint(commentDataModel.commentId, `${Cypress.env('authToken')}`).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.count).to.eq(1)
                response.body.results.forEach(result => {
                    expect(result).to.have.property('id').and.to.eq(Number(commentDataModel.commentId))
                });
            })
         })
    })
})

