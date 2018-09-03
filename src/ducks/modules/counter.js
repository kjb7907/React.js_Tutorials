// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성자
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// State
const initialState = {
    number: 0
};

// 리듀서
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}