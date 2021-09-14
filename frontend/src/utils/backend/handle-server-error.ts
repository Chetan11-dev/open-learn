/* eslint-disable no-alert */
import { OurFaultMessage } from '../constants/constants'
import { showErrorToast } from '../toasts/toasts'
import HTTPRequestError from './HTTPRequestError'

export const getStatus = (e: HTTPRequestError) => e.response.status

export const handleServerError = (e: HTTPRequestError) => {
  if (e instanceof HTTPRequestError) {
    e.response.json().then(({ message }) => showErrorToast(message))
  } else {
    alert(OurFaultMessage)
  }
}
