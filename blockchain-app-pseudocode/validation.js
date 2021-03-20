'use strict';

const { createHash } = require('crypto');
const signing = require('./signing');

/**
 * A simple validation function for transactions. Accepts a transaction
 * and returns true or false. It should reject transactions that:
 *   - have negative amounts
 *   - were improperly signed
 *   - have been modified since signing
 */
const isValidTransaction = transaction => {
  // Enter your solution here

  // amount must be positive
  // verify the signature (signing file)

};

/**
 * Validation function for blocks. Accepts a block and returns true or false.
 * It should reject blocks if:
 *   - their hash or any other properties were altered
 *   - they contain any invalid transactions
 */
const isValidBlock = block => {
  // Your code here

  // stringify all of the transactions
  // hash the contents of the block
  // ensure the blocks hash matches the blocks contents hash (the hash you found vs the on chain block's hash)
  // use the isValidTransaction to ensure all transactions on the block are valid

};

/**
 * One more validation function. Accepts a blockchain, and returns true
 * or false. It should reject any blockchain that:
 *   - is a missing genesis block
 *   - has any block besides genesis with a null hash
 *   - has any block besides genesis with a previousHash that does not match
 *     the previous hash
 *   - contains any invalid blocks
 *   - contains any invalid transactions
 */
const isValidChain = blockchain => {
  // Your code here

  // ensure prev hashes are accurate
  // ensure all blocks are valid (isValidBlock)
  // ensure balances within the transactions are valid

};

/**
 * This last one is just for fun. Become a hacker and tamper with the passed in
 * blockchain, mutating it for your own nefarious purposes. This should
 * (in theory) make the blockchain fail later validation checks;
 */
const breakChain = blockchain => {
  // Your code here

  // just a fun module to try to break your chain
  // alter information on your blockchain
  
};

module.exports = {
  isValidTransaction,
  isValidBlock,
  isValidChain,
  breakChain
};