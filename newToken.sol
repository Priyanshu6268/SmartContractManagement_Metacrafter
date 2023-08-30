//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract newToken {
 

    uint256 public number;
    string public message;

    function Number() external pure returns(uint){
        return 1000*3;
        
    }

    function Message() external pure returns( string memory){
        return "I did it";
    }

}

    // Additional functions for the project requirements
    string public greeting = "Hello, World!";

    function setGreeting(string calldata _greeting) external {
        greeting = _greeting;
    }

    function getGreeting() external view returns (string memory) {
        return greeting;
    }

    function incrementNumber() external {
        number += 1;
    }
