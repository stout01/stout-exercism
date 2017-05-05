class PerfectNumbers {
    classify(num) {
        if (num <= 0) {
            throw new Error('Classification is only possible for natural numbers.');
        }

        const limit = Math.floor(num / 2);
        let sum = 0;
        for (let x = 1; x <= limit; x += 1) {
            sum += num % x === 0 ? x : 0;
        }

        if (num === sum) {
            return 'perfect';
        } else if (num > sum) {
            return 'deficient';
        } else {
            return 'abundant';
        }
    }
}

export default PerfectNumbers;
