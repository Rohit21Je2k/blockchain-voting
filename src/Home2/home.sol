// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {
    string public storedData;

    // event myEventTest(string eventOutput);

    function set(string memory myText) public {
        storedData = myText;
        // emit myEventTest(myText);
    }

    function get() public view returns (string memory) {
        return storedData;
    }
}
