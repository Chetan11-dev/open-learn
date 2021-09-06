import cogoToast from 'cogo-toast'

export const showErrorToast = (msg: string, heading?: string) =>
  cogoToast.error(msg, { heading, position: 'bottom-right' })
