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
        return Array.prototype.map.call(value, (x) => this.complements[x]).join('');        
    }
}

export default Transcriptor;
