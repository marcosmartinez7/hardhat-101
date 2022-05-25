// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";


contract LoopTokenOZ is ERC20{
    uint constant _init_supply = 100 * (10**18);
    constructor() ERC20("LoopTokenOZ", "LT"){
        console.log("Address %s is deploying contract ", msg.sender);
        _mint(msg.sender, _init_supply);
        console.log("Minted %s to %s ", _init_supply, msg.sender);
        console.log("Deployed LoopTokenOZ at %s ", address(this));
    }
}