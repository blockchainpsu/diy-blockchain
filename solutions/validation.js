'use strict';

const { createHash, sign } = require('crypto');
const { Transaction, Block, Blockchain } = require('./blockchain');
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
  if (transaction.amount < 0) {
    return false
  }

  const msg = transaction.source + transaction.recipient + transaction.amount
  return signing.verify(transaction.source, msg, transaction.signature)
};

/**
 * Validation function for blocks. Accepts a block and returns true or false.
 * It should reject blocks if:
 *   - their hash or any other properties were altered
 *   - they contain any invalid transactions
 */
const isValidBlock = block => {
  // Your code here
  const transactionString = block.transactions.map(t => t.signature).join('')
  const toHash = block.previousHash + transactionString + block.nonce

  if (block.hash !==  createHash('sha512').update(toHash).digest('hex')) {
    return false
  }

  return block.transactions.every(isValidTransaction)
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

  const { blocks } = blockchain

  if (blocks[0].previousHash !== null) {
    return false
  }
  
  if (blocks.slice(1).some((b, i) => b.previousHash !== blocks[i].hash)) {
    return false
  }

  if (blocks.some(b => !isValidBlock(b))) {
    return false
  }
  
  return blocks
    .map(b => b.transactions)
    .reduce((acc, cur) => acc.concat(cur, []))
    .every(isValidTransaction)
};

/**
 * This last one is just for fun. Become a hacker and tamper with the passed in
 * blockchain, mutating it for your own nefarious purposes. This should
 * (in theory) make the blockchain fail later validation checks;
 */
const breakChain = blockchain => {
  // Your code here
  const privKeySend = signing.createPrivateKey()
  const pubKeySend = signing.getPublicKey(privKeySend)
  const privKeyRec = signing.createPrivateKey()
  const pubKeyRec = signing.getPublicKey(privKeyRec)

  const breakTrans = new Transaction(privKeySend, pubKeyRec, 10000000)

  blockchain.blocks[0].transactions.push(breakTrans)
};

module.exports = {
  isValidTransaction,
  isValidBlock,
  isValidChain,
  breakChain
};
