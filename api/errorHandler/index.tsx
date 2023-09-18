export const errorHandler = (response: { status: number; data: any }) => {
  if (response.status === 500 || response.status === 503) {
  }

  if (response.status !== 404 && response.status !== 470) {
  }
};
