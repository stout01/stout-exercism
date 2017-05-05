class Gigasecond {
    constructor(dob) {
        this.dob = dob;
    }

    date() {
        return new Date(this.dob.getTime() + 10 ** 12);
    }
}

export default Gigasecond;
