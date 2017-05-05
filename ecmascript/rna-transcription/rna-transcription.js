class Transcriptor {
    constructor() {
        this.complements = {
            G: 'C',
            C: 'G',
            T: 'A',
            A: 'U'
        };
    }

    toRna(value) {
        return this.complements[value];
    }
}

export default Transcriptor;
