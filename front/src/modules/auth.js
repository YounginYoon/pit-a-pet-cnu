import {createAction , handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, { createRequestActionType } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

//samle 액션 타입 정의
//const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';


const [ REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionType(
    'auth/REGISTER',
);

const [ LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE ] = createRequestActionType(
    'auth/LOGIN',
);

//액션 생성자
//createAction함수는 매번 객체를 직접 만들어 줄 필요없이 더욱 간단한 액션 생성 함수를 선언
//export const sampleAction = createAction(SAMPLE_ACTION);

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form, //register, login
        key, //usernae, password, passwordConfirm
        value //실제로 바꾸려는 값
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const register = createAction(REGISTER, ({username, password}) => ({
    username,
    password,
}));

export const login = createAction(LOGIN, ({username, password}) => ({
    username,
    password,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function*authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}

//초기 상태 정의
const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: ''
    },
    login: {
        username: '',
        password: ''
    },

    auth: null,
    authError: null,
}

//reducer 함수
const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => {
                draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),

        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
            authError:null,
        }),

        //회원가입 성공
        [REGISTER_SUCCESS]: (state, {payload: auth}) => ({
            ...state,
            authError: null,
            auth,
        }),

        //회원가입 실패
        [REGISTER_FAILURE]: (state, {payload: error}) => ({
            ...state,
            authError: error,
            auth,
        }),

        //로그인 성공
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
          }),

        //로그인 실패
        [LOGIN_FAILURE]: (state, {payload: error}) => ({
            ...state,
            authError:error,
        }),
    },
    initialState,
);

export default auth;