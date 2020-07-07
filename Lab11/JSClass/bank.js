class Bank{
	constructor (){
		this._accounts = [];
		this.nextNumber = this._accounts.length === 0 ? 10000 : this._accounts[this._accounts.length - 1].getNumber() + 1 ; 
		this._index = 0;
	}
	
	get nextNumber (){
		return this._nextNumber; 
	}
	
	set nextNumber (newNumber){
		this._nextNumber = newNumber;
	}
	
	getNewNextNumber(){
		this.nextNumber = this._accounts.length === 0 ? 10000 : this._accounts[this._accounts.length - 1].getNumber() + 1 ; 
	}
	
	addAccount(){
		this.getNewNextNumber();
		this._accounts [this._index] = new Account(this.nextNumber);
		return this._accounts [this._index++].getNumber();
	} 
	
	addSavingsAccount(interest){
		this.getNewNextNumber();
		this._accounts [this._index] = new SavingsAccount(this.nextNumber, interest);
		return this._accounts [this._index++].getNumber();
	} 
	
	addCheckingAccount(overdraft){
		this.getNewNextNumber();
		this._accounts [this._index] = new CheckingAccount(this.nextNumber, overdraft);
		return this._accounts[this._index++].getNumber();
	}
	
	closeAccount(number) {
		this._accounts = this._accounts.filter (eachAccount => (eachAccount._number !== number));		
		return this._accounts;
	}
	
	accountReport() {
        let allAccounts = [];
		let counterIndex = 0;
        for (let i = 0; i < this._accounts.length; i++) {
             allAccounts[counterIndex] = "Account Number: " + this._accounts[i].getNumber() + " Balance: " + this._accounts[i].getBalance();
			 counterIndex++;
        }
        return allAccounts;
    }
	
	endOfMonth() {
        let allAccounts = [];
		let countIndex = 0;
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i].endOfMonth() !== "") {
                allAccounts[countIndex] = this._accounts[i].endOfMonth();
				countIndex++;
            }
        }
        return allAccounts;
    }
	 
}