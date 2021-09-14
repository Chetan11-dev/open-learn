import _ from 'lodash'

/** @from https://stackoverflow.com/questions/10527983/best-way-to-detect-mac-os-x-or-windows-computers-with-javascript-or-jquery */
export const isMac = () => navigator.platform.toUpperCase().indexOf('MAC') > -1

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

export const onNextTick = (fn: VoidFunction) => {
  setTimeout(() => {
    fn()
  }, 0)
}
export const findEl = (x: string) => document.getElementById(x)!
export const getRect = (x: Element) => x.getBoundingClientRect()

export const findElRect = _.flow(findEl, getRect)

export function closest(el: HTMLElement | null, fn: (el: HTMLElement) => boolean): HTMLElement | undefined {
  let x: HTMLElement | null = el

  while (x) {
    if (fn(x)) return x
    x = x.parentElement
  }
  return undefined
}
export const inputValue = (e: any): string => e.target.value
