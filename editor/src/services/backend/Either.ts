/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
export abstract class Either<L, R> {
    leftData: L

    rightData: R

    constructor(left: L, right: R) {
        this.leftData = left
        this.rightData = right
    }

    isLeft() {
        return false
    }

    isRight() {
        return false
    }

    left() {
        return this.leftData
    }

    right() {
        return this.rightData
    }

    cata<T>(leftFn: (err: L) => T, rightFn: (val: R) => T): T {
        if (this.isLeft()) {
            return leftFn(this.leftData)
        }

        return rightFn(this.rightData)
    }
}
export class Left<L, R> extends Either<L, R> {
    constructor(left: L) {
        super(left, undefined as never)
    }

    isLeft() {
        return true
    }
}
export class Right<L, R> extends Either<L, R> {
    constructor(right: R) {
        super(undefined as never, right)
    }

    isRight() {
        return true
    }
}
