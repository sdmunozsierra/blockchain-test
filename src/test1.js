
//Test for truffle
import getWeb3 from "./utils/getWeb3";
import contract from "truffle-contract";


// The account that will buy peso tokens.

account1 = web3.eth.accounts[1]

// The address of the GUS token instance that was created when the crowdsale contract was deployed
// assign the result of GustavoCoinCrowdsale.deployed() to the variable crowdsale
//
PesoCoinCrowdsale.deployed().then(inst => { crowdsale = inst })

//ID account#1

//contract('MetaCoin', function(accounts) {
 // it("should put 10000 MetaCoin in the first account", function() {
  //  // Get a reference to the deployed MetaCoin contract, as a JS object.
   // var meta = MetaCoin.deployed();

    // Get the MetaCoin balance of the first account and assert that it's 10000.
    //return meta.getBalance.call(accounts[0]).then(function(balance) {
     // assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
 //   });
 // });
//});
