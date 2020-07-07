(function (){
"user strict";

/*#################################################################################################################*/
//Test for Account 

describe("Account Class", function (){
	let account1 = new Account(10001);
	it ("Account: getNumber()",
		function (){
			assert.equal (10001, account1.getNumber());
		}
	)
	it ("Account: getBalance()",
		function (){
			assert.equal (0, account1.getBalance ());
		}
	)
	it ("Account: deposit()",
		function (){
			account1.deposit(10000);
			assert.equal (10000, account1.getBalance ());
		}
	)
	it ("Account: withdraw()",
		function (){
			account1.withdraw(500);
			assert.equal (9500, account1.getBalance ());
		}
	)
	it ("Account: toString()",
		function (){
			assert.equal ("Account " + account1.getNumber() + ": balance " + account1.getBalance(), account1.toString());
		}
	)
});

/*#################################################################################################################*/
//Test for SavingsAccount

describe("Savings Account Class", function (){
	let savingsAccount = new SavingsAccount(10002, 0.5);
	savingsAccount.deposit(10000);
	it ("Savings Account: getter function for interest",
		function (){
			assert.equal (0.5, savingsAccount.interest );
		}
	)
	it ("Savings Account: setter function for interest",
		function (){
			savingsAccount.interest = 0.1;
			assert.equal (0.1, savingsAccount.interest );
		}
	)
	it ("Savings Account: check balance after initiated 10000",
		function (){
			assert.equal (10000, savingsAccount.getBalance() );
		}
	)
	it ("Savings Account: addInterest()",
		function (){
			savingsAccount.addInterest();
			assert.equal (10010, savingsAccount.getBalance() );
		}
	)
	it ("Savings Account: toString()",
		function (){
			assert.equal ("Savings Account : " + savingsAccount.getNumber() +  " balance: " + savingsAccount.getBalance(), savingsAccount.toString() );
		}
	)
});


/*#################################################################################################################*/
//Test for CheckingAccount

describe("Checking Account Class", function (){
	let checkingAccount = new CheckingAccount(10003, 12000);
	checkingAccount.deposit(10000);
	
	it ("Checking Account: getter function for limit",
		function (){
			assert.equal (12000, checkingAccount.limit );
		}
	)
	it ("Checking Account: setter function for interest",
		function (){
			checkingAccount.interest = 8000;
			assert.equal (8000, checkingAccount.interest );
		}
	)
	it ("Checking Account: check balance after initiated 20000",
		function (){
			assert.equal (10000, checkingAccount.getBalance() );
		}
	)
	
	it ("Checking Account: withdraw()",
		function (){
			checkingAccount.withdraw(18000);
			assert.equal (-8000, checkingAccount.getBalance() );
		}
	)
	it ("Checking Account: toString()",
		function (){
			assert.equal ("Checking Account : " + checkingAccount.getNumber() +  " balance: " + checkingAccount.getBalance(), checkingAccount.toString() );
		}
	)
});


/*#################################################################################################################*/
//Test for Bank

describe("Bank Class", function (){
	let bankObject = new Bank();
	
	it ("Bank : addAccount()",
		function (){
			//new initiated account number is 10000
			assert.equal (10000, bankObject.addAccount() );
		}
	)
	it ("Bank : addCheckingAccount() with overdraft 500",
		function (){
			//2nd acccount number must be 10001
			assert.equal (10001, bankObject.addCheckingAccount(500));
		}
	)
	it ("Bank : addSavingsAccount() with interest value 0.2",
		function (){
			assert.equal (10002, bankObject.addSavingsAccount() );
		}
	)
	
	it ("Bank : closeAccount()",
		function (){
			let tempArray = [];
			tempArray = bankObject.closeAccount(10001);
			assert.deepEqual( bankObject._accounts,tempArray);
		}
	)
	
    it("Bank: accountReport()", function() {
        assert.deepEqual(bankObject.accountReport(), ["Account Number: 10000 Balance: 0", "Account Number: 10002 Balance: 0"]);
    })
	
	it ("Bank : closeAccount()",
		function (){
			let tempArray = [];
			tempArray = bankObject.endOfMonth();
			assert.deepEqual( ["Interest added SavingsAccount10002 : balance: 0 interest: undefined"], tempArray);
		}
	)
	
});


})();