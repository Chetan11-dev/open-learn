export const UnreachableError = new Error('REACHED AN UNREACHABLE STATEMENT')
export const Unimplemented = new Error('UNIMPLEMENTED')
export class DevelopmentError extends Error {}

export const assert = (assertion: any) => {
    if (!assertion) throw new Error('ASSERTION FAILED')
}
// eslint-disable-next-line no-console
export const logError = (e: any) => console.error(e, e.stack)
