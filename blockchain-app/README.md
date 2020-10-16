# Creating a Blockchain App
Assuming you have everything installed from the main page of this repo, we can get into the programming!

You can certainly complete this project by yourself by researching and troubleshooting as you go, but I will be walking through it below.

We will be using the test folder to check our work and make sure it works and passes all of the test cases. You can run the tests with `npm test`.

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
   1. We can verify all of this by the same concept that we can prove that a certain public key derives from a specific private key without actually knowing the private key.
   
   2. Verifying involves hashing the message, signature, and public key to check whether the signature is valid.
   
### Blockchain


### Validation


### Mining

