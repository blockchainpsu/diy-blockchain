# Creating a Blockchain App
Assuming you have everything installed from the main page of this repo, we can get into the programming!

You can certainly complete this project by yourself by researching and troubleshooting as you go, but I will be walking through it below.

We will be using the test folder to check our work and make sure it works and passes all of the test cases. You can run the tests with `npm test`. I recommend running these tests as you go.

## Contents
* [Signing](https://github.com/blockchainpsu/diy-blockchain#Signing)
* [Blockchain](https://github.com/blockchainpsu/diy-blockchain#Blockchain)
* [Validation](https://github.com/blockchainpsu/diy-blockchain#Validation)
* [Mining](https://github.com/blockchainpsu/diy-blockchain#Mining)

### Signing
In this module we will be creating our keys, signatures, and verification of signatures.
1. Private key
   1. We will be using [secp256k1](https://github.com/cryptocoinjs/secp256k1-node#usage) in this module. It is an elliptic curve that will be used to generate our private and public keys. [Elliptic Curves - Computerphile](https://www.youtube.com/watch?v=NF1pwjL9-DE) is a good introductory video into elliptic curves and their uses in key generation. 
   
   2. Secp256k1 will yield our private and public key pair. The private key is a 32 byte random number and the public key is the private key ran through the secp256k1 function.
   
   3. We will implement [Buffer.from](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding) and [Buffer.toString](https://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end) to handle the formatting between bytes and hex.
   
2. Signature
   1. The sender can sign a transaction by hashing their private key, the receiver's public key, and the message (maybe the payment). [What is Hashing on the Blockchain?](https://www.youtube.com/watch?v=IGSB9zoSx70) and [SHA: Secure Hashing Algorithm - Computerphile](https://www.youtube.com/watch?v=DMtFhACPnTY) are good videos explaining the security and concepts of hashing. 
   
   2. Signing a transaction is essentially the same thing as signing a receipt at a restaurant, but more secure. 

3. Verification
   1. We can verify all of this by the same concept as proving that a certain public key derives from a specific private key without actually knowing the private key.
   
   2. Verifying involves hashing the message, signature, and public key to check whether the signature is valid.
   
### Blockchain
Within this module, we will create the blockchain itself.
1. Transaction
   1. For the transaction class we will implement some of what we coded within our signing module. 

   2. The source will be the public key of the sender. It is important that it is the public key because we do not want to broadcast our private key to the entire network.
   
   3. The recicipient and amount are pretty straightforward. We will use the public key of the recipient.
   
   4. The message will consist of the source, recicpient and amount.
   
   5. To complete a transaction we will sign the private key and message to the transaction.
   
2. Block
   1. A block will consist of transactions and the previous hash.
   
   2. To calculate the hash of a block we will hash the previous hash, all of the transactions in one string, and the nonce. 
   
   3. It is through the previous step that the blockchain is connected. Each block's hash includes the previous block's hash.
   
3. Blockchain
   1. Here we will put all of the blocks together.
   
   2. We first must instantiate a genesis block and add it to our array of blocks.
   
   3. Getting the head block and adding a block are very simple and shouldn't require more than a few lines.
   
   4. Getting the balance is a little more complex. Try to think through this yourself. How would we check the balance for a certain public key given the entire blockchain? We will have to iterate through every block and then every transaction. We will then react accordingly if the source or recipient is our public key.
   
### Validation
Within this module we will check the validity blockchain. But we will break this down into checking the validity of the different scopes of the blockchain.
1. For a transaction to be valid it must have a positive transaction amount and the transaction signature must equal the signature on the transaction. You will want to verify that the information within the transaction wasn't changed at one point.

2. A block will be valid when all of it's transactions are valid and the hash verifies (verify the hash within the signing module and check to see if it matches the hash of the block). Again, we want to ensure that no information was changed in our blockchain.

3. Similarily, a blockchain will be valid when all of its blocks are valid. We will want to ensure that the genesis' previous hash is null, and that the previous hash of any given block actually is the hash of the previous hash.

4. Breaking the chain is just a fun concept check. Here you will try to break the blockchain to pay yourself a large sum of money

### Mining
So far, the blockchain cannot be mined. The blocks cannot be added my miners. Within this module you will figure out how to mine and add blocks to the chain.
1. Mineable Transaction
   1. Within this class we will check whether a transaction is from a newly mined block, or from peer to peer.
   
   2. To do this we will follow the advice within the code. We will assign the source and recipient as needed. We will then keep the rest of transaction as the same.
   
2. A mineable block is similar to a nonmineable block, except we do not initialize the hash and nonce.

3. Creating a mineable blockchain is kind of similar to a normal blockchain except we must assign the difficulty of mining the new blocks, the reward for mining the new blocks, and the pending transactions (which won't be added to the block until after it is mined).
   1. The difficulty is the amount of zeros necessary at the start of the hash for a newly mined block.
   
   2. The hash of the new block is what mining computers race to find. They increment the nonce until the block's hash meets the desired difficulty, and contains all of the necessary information that we discussed previously.
   
   3. We must throw an error if the user tries to directly add a block without mining it first
   
   4. To add a transaction we will append it to the pending transactions list that will be added to a newly mined block.
   
   5. The mine() method is where the good stuff occurs. A reward transaction is added to the pending transactions with the miners key. We then create a block to be mined. The miner will then iterate the nonce to try and find the hash with the given difficulty and stored information. When the miners succeeds, the block is added to the chain and then the pending transactions are cleared.
   
   6. Checking for a valid mineable blockchain is more difficult than a regular blockchain. We must check that the blocks' hashes match the given difficulty and therefore the desired amount of zeros at the beginning of the hash. We must also check that all of the balances that take place on the blocks are valid (positive), you cannot give money when you have a negative amount of it. We will also ensure that the reward given to the miners matches the amount of the reward that was supposed to be given.
   
## Congratulations! That is the end of my explanation, so if you followed along and I did a good enough job, you should have a fully functioning blockchain!
