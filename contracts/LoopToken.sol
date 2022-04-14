// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LoopToken is ERC20{
    uint constant _init_supply = 100 * (10**18);
    constructor() ERC20("LoopToken", "LT"){
        _mint(msg.sender, _init_supply);
    }
}