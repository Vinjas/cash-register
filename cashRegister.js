function checkCashRegister(price, cash, cid) {
    // Define Object change
    var change = {
      status: "",
      change: []
    }
    // Calculate Total amount of Money in the cash register
    var totalMoney = 0
    var arrMoney = cid.slice()
    for(let i = 0; i < arrMoney.length; i++) {
      totalMoney += arrMoney[i][1]
    }
    totalMoney = Math.round(totalMoney * 100) / 100
    
    // Calculate remaining money after purchase
    var remainMoney = totalMoney - cash
  
    // Calculate total change
    var totalChange = cash - price
  
    // Create array with amount of coins and bills
    var coins = cid.slice()
    for(let i = 0; i < arrMoney.length; i++) {
      switch (arrMoney[i][0]) {
        case "PENNY":
          coins[i][1] = Math.round(coins[i][1] /= 0.01)
          break
        case "NICKEL":
          coins[i][1] = Math.round(coins[i][1] /= 0.05)
          break
        case "DIME":
          coins[i][1] = Math.round(coins[i][1] /= 0.1)
          break
        case "QUARTER":
          coins[i][1] = Math.round(coins[i][1] /= 0.25)
          break
        case "ONE":
          coins[i][1] = Math.round(coins[i][1] /= 1)
          break
        case "FIVE":
          coins[i][1] = Math.round(coins[i][1] /= 5)
          break
        case "TEN":
          coins[i][1] = Math.round(coins[i][1] /= 10)
          break
        case "TWENTY":
          coins[i][1] = Math.round(coins[i][1] /= 20)
          break
        case "ONE HUNDRED":
          coins[i][1] = Math.round(coins[i][1] /= 100)
          break
      }
    }  
  
  
  
    console.log("Total: "+totalMoney)
    console.log("Remaining: "+remainMoney)
    console.log("Change total: "+totalChange)
    console.log("Coins: "+coins)
  
    var change = {
      status: "",
      change: []
    }
  
  
  
    return change;
  }
  
  
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));