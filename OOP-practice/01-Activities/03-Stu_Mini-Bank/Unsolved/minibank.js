function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.setBalance = (value) => {
    this.balance = value;
  };
  this.updateStatement = (num) => {
    this.statement.push(num);
  };
  this.getStatement = () => {
    return this.statement;
  };
  this.printStatement = () => {
    this.statement.forEach(item => {
      console.log(item)
    })
  };
  this.deposit = (num) => {
    this.updateStatement(num);
    let update = this.balance + num;
    this.setBalance(update)
  };
  this.withdraw = (num) => {
    if (num < 0) {
      this.updateStatement(num);
      let update = this.balance + num;
      if(update > 0) {
        this.setBalance(update);
      } else {
        console.log("YOU DONT HAVE ENOUGH MONEY")
      }
    }
  };
  this.getBalance = () => {
    return this.balance;
  },
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}


let bank = new MiniBank(200);
bank.printBalance();
bank.deposit(100);
bank.printBalance();
bank.withdraw(-400);
bank.printBalance();