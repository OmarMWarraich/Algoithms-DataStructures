var averageWaitingTime = function (customers) {
  var totalWaitingTime = 0;
  var currentTime = 0;

  for (let i = 0; i < customers.length; i++) {
    var arrivalTime = customers[i][0];
    var mealTime = customers[i][1];

    var startingTime = Math.max(arrivalTime, currentTime);

    var waitingTime = startingTime + mealTime - arrivalTime;

    totalWaitingTime += waitingTime;

    currentTime = mealTime + startingTime;
  }
  var averageWaitingTime = totalWaitingTime / customers.length;
  console.log(averageWaitingTime);
  return averageWaitingTime;
};

averageWaitingTime([
  [1, 2],
  [2, 5],
  [4, 3],
]);
averageWaitingTime([
  [5, 2],
  [5, 4],
  [10, 3],
  [20, 1],
]);
