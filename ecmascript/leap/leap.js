class Year {
    constructor(value) {
        this.value = value;
    }

    isLeap() {
        return this.value % 4 == 0 && this.value % 100 != 0 || this.value % 400 == 0;
    }
}

export default Year;
