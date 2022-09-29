const getParams = (paramsKey: string) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(paramsKey)
}

export const objectToQueryParams = (
  object: string | string[][] | Record<string, string> | URLSearchParams | undefined,
) => (object ? `?${new URLSearchParams(object).toString()}` : '')

export default getParams
