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
        const output = Array.prototype.map.call(value, (x) => {
            const complement = this.complements[x];

            if (!complement) {
                throw new Error('Invalid input DNA.');
            }

            return complement;
        }).join('');

        return output;
    }
}

export default Transcriptor;
