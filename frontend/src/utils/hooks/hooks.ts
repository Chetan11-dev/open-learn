/* eslint-disable consistent-return */
import { useEffect, useState } from 'react'

function useDidMount(callback: () => void): void {
  useEffect(() => {
    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export function useEventlistner<E extends Event>(type: keyof DocumentEventMap, cb: (e: E) => void): void {
  useEffect(() => {
    document.addEventListener(type, cb as any)
    return () => document.removeEventListener(type, cb as any)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

function useDidReRender(callback: () => void): void {
  useEffect(() => {
    callback()
  })
}
export const MutationObserverOptions: MutationObserverInit = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
}

function useMutationObserver(callback: () => void, el: HTMLElement | null, ...deps: any[]): void {
  useEffect(() => {
    if (el) {
      const observer = new MutationObserver(callback)

      observer.observe(el, MutationObserverOptions)
      return () => {
        observer.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el, ...deps])
}
// https://stackoverflow.com/questions/53215285/how-can-i-force-a-component-to-re-render-with-hooks-in-react
export function useForceUpdate(): () => void {
  // @ts-ignore
  return useState()[1].bind(null, {})
}

export { useDidMount, useDidReRender, useMutationObserver }
