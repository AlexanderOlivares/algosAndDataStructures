// Edabit Jake's Meal Time
// tests in "./edbtJakesMealTime.test.js"

/* QUESTION:
Jake is a very habitual person. He eats breakfast at 7:00 a.m. 
each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in 
the evening.

Create a function that takes in the current time as a string 
and determines the duration of time before Jake's next meal.
Represent this as an array with the first and second elements
representing hours and minutes, respectively.
*/

///////////////////////
// SOLUTION #1
///////////////////////

function timeToEat(currentTime) {
  let [hour, min, amPm] = currentTime
    .split(/[: ]/)
    .map((e, i) => (i < 2 ? Number(e) : e));

  hour = amPm === "p.m." ? hour + 12 : hour === 12 ? 0 : hour;

  const mealTimes = [7, 12, 19];
  const upcomingMeals = mealTimes.filter(mealTime => mealTime > hour);
  const nextMeal = upcomingMeals[0] || 7;
  let hoursUntilNextMeal = nextMeal - hour - 1;
  let minTillNextHour = 60 - min;

  if (minTillNextHour === 60) {
    minTillNextHour = 0;
    hoursUntilNextMeal += 1;
  }

  if (nextMeal < hour) hoursUntilNextMeal = 24 - hour + 6;

  return [hoursUntilNextMeal, minTillNextHour];
}

module.exports = timeToEat;
