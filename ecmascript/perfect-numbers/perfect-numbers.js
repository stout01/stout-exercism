class PerfectNumbers {
    classify(num) {
        if (num <= 0) {
            throw new Error('Classification is only possible for natural numbers.');
        }

        let sum = 0;
        for (let x = 1; x < num; x += 1) {
            if (num % x === 0) {
                sum += x;
            }
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
