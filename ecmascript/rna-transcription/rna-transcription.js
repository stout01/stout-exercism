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
        return [...value].map((x) => {
            const complement = this.complements[x];

            if (!complement) {
                throw new Error('Invalid input DNA.');
            }

            return complement;
        }).join('');
    }
}

export default Transcriptor;
