
//Test for truffle
//import getWeb3 from "./utils/getWeb3";
//import contract from "truffle-contract";


// Specifically request an abstraction for MetaCoin
//var cs = artifacts.require("./crowdsale");


var pesoCrowd = artifacts.require("./PesoCoinCrowdsale.sol");
var pesoCoin = artifacts.require("./PesoCoin.sol");
//var cs = artifacts.require("crowdsale");

// The account that will buy peso tokens.

var account1 = web3.eth.accounts[1] ;
pesoCrowd.deployed().then(inst => { crowdsale = inst});

account1.toString();

//var token1 = crowdsale.token().then(addr => { tokenAddress = account1 } );
//token1.toString();

//var pesoCoinInstance = pesoCoin.at(token1);
//
// Specifically request an abstraction for MetaCoin
//var MetaCoin = artifacts.require("MetaCoin");

//crowdsale.token().then(addr => { tokenAddress = account1 } );
