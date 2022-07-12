import {createAction , handleActions} from 'redux-actions';
import produce from 'immer';

//samle 액션 타입 정의
//const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

//액션 생성자
//createAction함수는 매번 객체를 직접 만들어 줄 필요없이 더욱 간단한 액션 생성 함수를 선언
//export const sampleAction = createAction(SAMPLE_ACTION);

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form, //register, login
        key, //usernae, password, passwordConfirm
        value //실제로 바꾸려는 값
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

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
        }),
    },
    initialState,
);

export default auth;