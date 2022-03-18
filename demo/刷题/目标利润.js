function stockPairs(stocksProfit, target) {
  // Write your code here
  const pairedValues = {};
  let count = 0;

  for (let i = 0; i < stocksProfit.length; i += 1) {
    //stocksProfit[0] = 5
    if (!pairedValues[stocksProfit[i]]) {
      for (let j = i + 1; j < stocksProfit.length; j += 1) {
        // stocksProfit[1] = 7
        if (stocksProfit[i] + stocksProfit[j] === target) {
          // console.log('pairedValues', pairedValues);
          if (
            !pairedValues[stocksProfit[i]] &&
            !pairedValues[stocksProfit[j]]
          ) {
            pairedValues[stocksProfit[i]] = true;
            pairedValues[stocksProfit[j]] = true;
            count += 1;
            break;
          }
        }
      }
    }
  }
  return count;
}