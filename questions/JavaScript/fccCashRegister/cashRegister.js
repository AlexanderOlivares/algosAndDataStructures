// FCC CASH REGISTER PROJECT
// tests in cashRegister.test.js

/*
QESTION:

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

*/

function checkCashRegister(price, cash, cid) {
  const denom = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  const cidCopy = JSON.parse(JSON.stringify(cid));

  cid = cid.reverse();

  let status = "INSUFFICIENT_FUNDS";

  let changeDue = +(cash - price).toFixed(2);

  const cashInReg = +cid.reduce((a, c) => a + c[1], 0).toFixed(2);

  // cash-in-drawer is less than the change due
  if (changeDue > cashInReg) return { status: status, change: [] };

  // changeArr formatted like so: [string "CURRENCY TYPE", number[] AMOUNT GIVEN IN IN CURRENCY TYPE]
  let changeArr = [];

  // loop thru every denom and if it is less than changeDue and we have at least 1 unit of the denom
  // then add that to howMuchInDenom arr to accumulate the amount of units per denom to give as change
  // push howMuchInDenom to the changeArr to be the output value of our change key in the obj we return
  for (let i = 0; i < cid.length; i++) {
    let currentDenom = denom[cid[i][0]];
    let currentAmountOfDenom = cid[i][1];

    if (currentDenom < changeDue && currentAmountOfDenom > 0) {
      let howMuchInDenom = [cid[i][0], 0];

      while (currentDenom <= +changeDue.toFixed(2) && cid[i][1] > 0) {
        changeDue -= currentDenom;
        cid[i][1] = +(cid[i][1] - currentDenom).toFixed(2);
        howMuchInDenom[1] += currentDenom;
      }

      howMuchInDenom[1] = howMuchInDenom[1];
      changeArr.push(howMuchInDenom);

      if (changeDue <= 0) {
        changeDue = 0;
        status = "OPEN";
      }
    }
  }

  // check if we have exactly $0.00 in the register for the below edgecase:
  // Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
  if (cid.every(e => e[1] === 0)) {
    changeArr = cidCopy;
    status = "CLOSED";
    return { status: status, change: cidCopy };
  }

  //cannot return the exact change
  if (status === "INSUFFICIENT_FUNDS") {
    changeArr = [];
  }

  return { status: status, change: changeArr };
}

// run npm run test for test suite

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

module.exports = checkCashRegister;
