const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

const server = app.listen(5000,function(){
    console.log("port is started at localhost 5000");
});
const portNumber = server.address().port;

// Initialize Web3
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Contract ABI and address (Replace with actual ABI and deployed contract address)
const contractABI = [];
const contractAddress = "0x...";
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to set greeting in smart contract
function setGreeting(greeting) {
    contract.methods.setGreeting(greeting).send({from: '0x...'});  // Replace with actual sender address
}

// Function to get greeting from smart contract
async function getGreeting() {
    const greeting = await contract.methods.getGreeting().call();
    console.log("Greeting from smart contract:", greeting);
    return greeting;
}

// Function to increment number in smart contract
function incrementNumber() {
    contract.methods.incrementNumber().send({from: '0x...'});  // Replace with actual sender address
}

// Express routes to interact with smart contract
app.get("/setGreeting/:greeting", (req, res) => {
    setGreeting(req.params.greeting);
    res.send("Greeting set successfully.");
});

app.get("/getGreeting", async (req, res) => {
    const greeting = await getGreeting();
    res.send(greeting);
});

app.get("/incrementNumber", (req, res) => {
    incrementNumber();
    res.send("Number incremented successfully.");
});
