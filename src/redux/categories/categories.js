const CHECK_CATEGORY = 'CHECK_CATEGORY';

const initialState = 'UNDER CONSTRUCTION';
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_CATEGORY:
      return state;
    default:
      return state;
  }
}

export const checkCategory = () => ({ type: CHECK_CATEGORY });
