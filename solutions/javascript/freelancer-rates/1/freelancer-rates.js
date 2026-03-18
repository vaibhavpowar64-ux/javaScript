// 1. Day rate
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

// 2. Days in budget
export function daysInBudget(budget, ratePerHour) {
  const dailyRate = dayRate(ratePerHour);
  return Math.floor(budget / dailyRate);
}

// 3. Price with monthly discount
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyRate = dayRate(ratePerHour);

  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  const monthlyCost = fullMonths * 22 * dailyRate * (1 - discount);
  const remainingCost = remainingDays * dailyRate;

  return Math.ceil(monthlyCost + remainingCost);
}