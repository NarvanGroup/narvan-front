import { setSnackbarState } from '../../store/snackbarSlice';
import { snackbarTypes } from '../../shared/constants/snackbarTypes';
import { defaultErrors } from '../../shared/constants';

export const errorHandler = (response: { status: number; data: any }, dispatch: any) => {
  const options = {
    isSnackbarOpen: true,
    type: snackbarTypes.error
  };

  if (response.status === 500 || response.status === 503) {
    return dispatch(
      setSnackbarState({
        ...options,
        message: defaultErrors.serverError
      })
    );
  }

  if (response.status !== 404 && response.status !== 470) {
    return dispatch(
      setSnackbarState({
        ...options,
        message: response.data.message ?? defaultErrors.default
      })
    );
  }
};
