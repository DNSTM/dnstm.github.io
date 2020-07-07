
class SavingsAccount extends Account{

	constructor (numberValue, interestValue){
		super(numberValue);
		this.interest = interestValue;
	}
	
	//getter and setter for interest
	get interest (){
		return this._interest;
	}
	
	set interest (value){
		this._interest = value;
	}
	
	addInterest (){
		let balance = super.getBalance ();
		let amount =  balance * this.interest / 100;
		super.deposit(amount);
	}
	
	toString() {
		super.toString();
		return "Savings Account : " + super.getNumber () +  " balance: " + super.getBalance();
	}
	
	endOfMonth() {
        return "Interest added SavingsAccount" + super.getNumber() +" : balance: " + super.getBalance() + " interest: " + this.interest;
    }
	
}

