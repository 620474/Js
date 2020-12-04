export let b = {
        minArray: function (arr) {
            return Math.min(...arr);
        },
        maxArray: function (arr) {
            return Math.max(...arr);
        },
        averageArray: function (arr) {
            return arr.reduce((a, b) => a + b) / arr.length;
        },
        cloneArray: function (arr) {
            return arr.slice(0);
        }
    };
