import cogoToast from 'cogo-toast'

export const showErrorToast = (msg: string, heading?: string) =>
  cogoToast.error(msg, { heading, position: 'bottom-right' })

export const showSuccessToast = (msg: string) => cogoToast.success(msg, { position: 'bottom-right' })

export const showInfoToast = (msg: string) => cogoToast.info(msg, { position: 'bottom-right' })

export function showToastUntillFinally<A>(x: Promise<A>, message = 'Uploading') {
  const trimTo40chars = (s: string) => (s.length > 40 ? `${s.substring(0, 40 - 3)}...` : s)

  const hideFn = cogoToast.info(trimTo40chars(message), {
    hideAfter: 0,
    position: 'bottom-right',
  }).hide!

  return x.finally(() => {
    hideFn()
  })
}
