function checkCashRegister(price, cash, cid) {
  var change = {
    status: "",
    change: []
  }

  var totalMoney = 0
  for(let i = 0, arrMoney = cid; i < arrMoney.length; i++) {
    totalMoney += arrMoney[i][1]
  }
  totalMoney = Math.round(totalMoney * 100) / 100
  
  var remainMoney = totalMoney - cash



  console.log("Total: "+totalMoney)
  console.log("Remaining: "+remainMoney)
  
  var change = {
    status: "",
    change: []
  }



  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));