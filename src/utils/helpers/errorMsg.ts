/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const callErrorMsg = (resError: any) => {
  const errorResponse = resError?.response
  if (errorResponse) {
    if (errorResponse?.data?.error?.message)
      // toastFailed(errorResponse.data.error.message, toastOptions)
      console.log(errorResponse.data.error.message)
    // toastFailed(defaultError || `Failed with status code ${errorResponse.status}`, toastOptions)
    else console.log(`Failed with status code ${errorResponse.status}`)
  }
}
