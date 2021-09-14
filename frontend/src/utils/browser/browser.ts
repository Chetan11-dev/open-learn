import _ from 'lodash'

/** @from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript */
export function getUrlParam(name: string, url = window.location.href) {
  // eslint-disable-next-line no-useless-escape
  const regex = new RegExp(
    // eslint-disable-next-line no-useless-escape
    `[?&]${name.replace(/[\[\]]/g, '\\$&')}(=([^&#]*)|&|#|$)`
  )
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const inputValue = (e: any): string => e.target.value
