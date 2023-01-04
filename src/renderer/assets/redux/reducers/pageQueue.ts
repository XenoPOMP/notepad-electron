const defaultState = {
  currentPage: '/',
  previousPages: [],
};

type ChangePage = {
  nextPage: string,
};

export const pageQueue = (
  state = defaultState,
  action: { type: string, payload: ChangePage },
) => {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      const lastPathIsSame = state.currentPage === action.payload.nextPage;

      // Check if last path does not match
      if (!lastPathIsSame) {
        // @ts-ignore
        state.previousPages.push(state.currentPage);
        state.currentPage = action.payload.nextPage;
      }

      return { ...state };
    }

    case 'GO_BACK': {
      state.previousPages.pop();
      state.currentPage =
        state.previousPages.length === 0
          ? '/'
          : state.previousPages[state.previousPages.length - 1];
      return { ...state };
    }

    default:
      return state;
  }
};
