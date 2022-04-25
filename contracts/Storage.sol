// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {
    int256 public candidate1 = 0;
    int256 public candidate2 = 0;

    mapping(address => bool) public voters;

    function vote1(address voterAddress) public {
        bool checkIfAlreadyVoted = voters[voterAddress];
        if (!checkIfAlreadyVoted) {
            candidate1++;
            voters[voterAddress] = true;
        }
    }

    function vote2(address voterAddress) public {
        bool checkIfAlreadyVoted = voters[voterAddress];
        if (!checkIfAlreadyVoted) {
            candidate2++;
            voters[voterAddress] = true;
        }
    }

    function getResults() public view returns (int256[2] memory) {
        return [candidate1, candidate2];
    }
}
