class Gigasecond {
    constructor(dob) {
        this.gigaDate = new Date(dob.getTime() + 10 ** 12);
    }

    date() {
        return this.gigaDate;
    }
}

export default Gigasecond;
