import EnvironmentSetup from "../../../util/environmentSetup";
import CommentCoreApiDataModel from "../../api/models/posts/comment.core.api.data.model";
import PostCoreApiDataModel from "../../api/models/posts/post.core.api.data.model";
import SymphonyApi from "../../api/symphonyApi"

const postDataModel: PostCoreApiDataModel = new PostCoreApiDataModel();
const commentDataModel: CommentCoreApiDataModel = new CommentCoreApiDataModel();

before(() => {
    EnvironmentSetup.setEnv();
    EnvironmentSetup.setAuthToken();
})

describe('Symphony Api - POST/Posts', () => {

    it('POST/Posts - 200', () => {
        SymphonyApi.postsRoute.postPostsEndpoint(`${Cypress.env('authToken')}`).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            postDataModel.postId = response.body.id
        })
    })

    it('POST/Post-comment - 200', () => {
        SymphonyApi.postsRoute.postPostCommentsEndpoint(postDataModel.postId, `${Cypress.env('authToken')}`).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            commentDataModel.commentId = response.body.id
        })
    })

    it('GET/Post-comment - 200', () => {
        SymphonyApi.postsRoute.getCommentEndpoint(commentDataModel.commentId, `${Cypress.env('authToken')}`).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})