// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract LoopToken{
    mapping(address => uint) public balances;

    event Transfer(address _to, uint _value);

    constructor() {
        balances[msg.sender] = 100 * (10**18);
    }

    function transfer(address _to, uint _value) public returns (bool success){
        if(balances[msg.sender] < _value){
            return false;
        }
        balances[msg.sender] -= _value;
        balances[_to] -= _value;

        emit Transfer(_to, _value);
        return true;
    }

    
}