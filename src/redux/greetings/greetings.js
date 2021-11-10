const DISPLAY_GREETING = 'DISPLAY_GREETING';

const initialState = []

export const displayGreeting = (payload) => ({
  type: DISPLAY_GREETING,
  payload
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_GREETING:
      return { greeting: action.payload }
    default:
      return state;
  }
}

export default reducer