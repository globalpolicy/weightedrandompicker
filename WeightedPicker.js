function WeightedPick(populationList, weightList) {
/**
 * Takes a list of objects and a list of corresponding weights
 * Normalizes the weights
 * Scales the weights randomly
 * Picks the highest weight and returns
 * The resulting distribution checks out with the given weights
 */
    var sumOfWeights = 0;
    weightList.forEach(weight => {
        sumOfWeights += weight; // sum up all the weights
    });

    var largestScaledWeightIndex;
    var largestScaledWeight = 0;
    for (var i = 0; i < weightList.length; i++) {
        var tmp = weightList[i] / sumOfWeights * Math.random(); //normalize the weight and scale by a random float
        if (tmp > largestScaledWeight) {
            largestScaledWeight = tmp;
            largestScaledWeightIndex = i;
        }
    }

    return populationList[largestScaledWeightIndex];
}


// example usage
var popList = ['C#', 'VB6', 'Java', 'ASM', 'Delphi'];
var weightList = [50, 60, 40, 20, 25];
var result = {};
for (var i = 0; i < popList.length; i++) {
    result[popList[i]] = 0;
}
for (var i = 0; i < 10000; i++) {

    result[WeightedPick(popList, weightList)]++;
}
console.log(result);
