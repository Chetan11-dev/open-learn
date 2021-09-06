import cogoToast from 'cogo-toast'

export const showErrorToast = (msg: string) => cogoToast.error(msg, { position: 'bottom-right' })

export const showSuccessToast = (msg: string) => cogoToast.success(msg, { position: 'bottom-right' })

export const showInfoToast = (msg: string) => cogoToast.info(msg, { position: 'bottom-right' })
