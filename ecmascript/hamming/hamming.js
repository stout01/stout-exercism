class Hamming {
  compute(original, actual) {
    if (original.length !== actual.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let count = 0;

    for (let i = 0; i < original.length; i += 1) {
      if (original[i] !== actual[i]) {
        count += 1;
      }
    }

    return count;
  }
}

export default Hamming;
