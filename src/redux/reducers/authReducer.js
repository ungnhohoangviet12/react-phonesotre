import * as types from '../actionType';

const initialState = {
    profile: {},
    isLoggIn: false,
    isAuthenticated: false,
    isLoading: false,
    notif: '',
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            const { profile, find } = action.payload;
            console.log(profile, find);
            state = {
                profile: profile,
                isLoggIn: true,
                isLoading: false,
                notif: 'loginSucess',
                isAuthenticated: find
            };
            return { ...state };
        }
        case types.GET_PROFILE_SUCCESS: {
            const profile = action.payload.profile;
            state = {
                ...state,
                profile: profile,
                isLoggIn: true,
                isAuthenticated: profile.role,
            };
            return { ...state };
        }
        case types.LOGOUT: {
            return { ...initialState };
        }
        case types.GET_PROFILE_FAIL: {
            return { ...initialState };
        }
        case types.LOGIN_FAIL: {
            return { ...state, isLoading: false, notif: 'loginFail' };
        }
        case types.SET_IS_LOADING: {
            return { ...state, isLoading: true };
        }
        default:
            return { ...state };
    }
};
