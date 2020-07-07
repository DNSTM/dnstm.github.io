
class CheckingAccount extends Account{
	
	constructor (numberValue, limitValue){
		super(numberValue);
		this.limit = limitValue;
	}
	
	get limit (){
		return this._limit;
	}
	set limit (value) {
		this._limit = value;
	}
	
	withdraw (amount) {
		if(amount <= 0) {
			throw new RangeError("Withdraw amount has to be greater than zero");
		}
		if (amount >= super.getBalance()){
			if (amount > super.getBalance() + this.limit){
				throw new RangeError ("Overdraft exceeded!");
			}else {
				this._balance -= amount;
			}
		}
	}
	
	 toString() {
        super.toString();
        return "Checking Account : " + super.getNumber() + " balance: " + super.getBalance();
    }

    endOfMonth() {
        if (super.getBalance() < 0) {
            return "Warning, low balance added CheckingAccount" + super.getNumber() +" : balance: " + super.getBalance() + " overdraft limit: " + this.limit;
        }
        return "";
    }
	
}