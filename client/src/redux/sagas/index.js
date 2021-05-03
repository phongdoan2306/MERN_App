import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (error) {
        console.error(error);
        yield put(actions.getPosts.getPostsFailure(error));
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (error) {
        console.error(error);
        yield put(actions.createPost.createPostFailure(error));
    }
}

function* updatePostSaga(action) {
    try {
        const updatedPost = yield call(api.updatePost, action.payload);
        yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
    } catch (error) {
        console.error(error);
        yield put(actions.updatePost.updatePostFailure(error));
    }
}

function* loginAccountSaga(action) {
    try {
        const account = yield call(api.loginAccount, action.payload);
        console.log(account);
        yield put(actions.loginAccount.loginAccountSuccess(account.data));
    } catch (error) {
        console.log(error);
        yield put(actions.loginAccount.loginAccountFailure(error));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
    yield takeLatest(actions.loginAccount.loginAccountRequest, loginAccountSaga);
}

//generator function ES6
export default mySaga;