class Gigasecond {
    constructor(dob) {
        this.dob = dob;
    }

    date() {
        const gigaDate = new Date(this.dob);
        gigaDate.setSeconds(gigaDate.getSeconds() + 1000000000);
        return gigaDate;
    }
}

export default Gigasecond;
