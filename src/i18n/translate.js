export class Translate {
    constructor(area, t) {
        this.area = area
        this.t = t
    }

    translate(str, options = {}) {
        return this.t(`${this.area}.${str}`, options)
    }
}
