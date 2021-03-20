![Blockchain Logo](/images/horizontal-logo.png)
# DIY Blockchain App
In this application you will gain an understanding of the technology that makes bitcoin and other cryptocurrencies so popular and secure.

If you do not know what blockchain is, I recommend checking out the links in the resources section before attempting this project, or give just it a shot, up to you.
## Contents 
* [Overview](https://github.com/blockchainpsu/diy-blockchain#Overview)
* [Setup](https://github.com/blockchainpsu/diy-blockchain#Setup)
* [Resources](https://github.com/blockchainpsu/diy-blockchain#Resources)
* [Links](https://github.com/blockchainpsu/diy-blockchain#Links)
* [Brief Explanation](https://github.com/blockchainpsu/diy-blockchain#Brief-Explanation)
### Overview
This is an introductory blockchain application to teach you about blockchain, cryptocurrencies, and the other technologies behind the hype. You will use mathematical hash functions to create private and public keys for the transactions. You will also use the same hash functions to both verify and mine blocks. The hashing will lead to immutable blocks within the chain. At the end of the project you will have your very own fully functioning blockchain application!
### Setup
To begin we must install everything necessary
1. Download [Git](https://git-scm.com/downloads). This is a useful tool for version control and general programming. You can ensure that everything installed correctly by running `git --version` in the terminal. It would be useful to familiarize yourself within this environment.
2. Download [Node.js](https://nodejs.org/en/download/). We will use npm to test our application. You can ensure that everything installed correctly by running `node -v` and `npm -v` in the terminal.
3. Download an IDE that you like. We recommend [Visual Studio Code](https://code.visualstudio.com/download)
4. Clone the repository (click the green code button and copy the link) then in your terminal execute the command `git clone (link)` you can paste the link in with control + v.
5. Change directories into your newly cloned repo with `cd diy-blockchain` and then install the dependecies with `npm install`.

**If you have any issue installing anything, google it. Google is a source of infinite knowledge.**
### Resources
* [How does a blockchain work - Simply Explained](https://www.youtube.com/watch?v=SSo_EIwHSd4&t=140s)
* [But how does bitcoin actually work - 3Blue1Brown](https://www.youtube.com/watch?v=bBC-nXj3Ng4&t=874s)
* [Khan Academy - Bitcoin Course](https://www.youtube.com/playlist?list=PL73q2zDIiGK_O5OYdK5vxcezzC0zu_3OS)
* [Bitcoin white paper](https://bitcoin.org/bitcoin.pdf)

These will be useful to understand the theory behind what you will be doing in this project. Below are links to contact our organization, feel free to message us in the slack or shoot us an email with any questions!
### Links
* [Email](mailto:blockchain.psu@gmail.com)
* [Slack](https://blockchainpsu.slack.com/signup#/)
* [Website](https://www.blockchainpsu.com/)
### Brief Explanation
Blockchain on the most basic level is a way to store information. It is similar to a linked list in the sense that they both store information and the blocks point to each other.

A blockchain (for our use) will store the transactions between people. Each block will house a number of transactions and will be connected with the chain via the previous blocks' hash. The first block, the genesis block, has no previous hash, but all subsequent blocks will reference the hash of the prior block. This is one of the many reasons why the structure is very secure. If you change the hash of one block (the content stored within the block) all of the blocks down the chain will change too. 

If any of that sounded like nonsense, I recommend looking at the resources listed above. If you already checked them out, maybe watch them again, or do some reseach further on your own, again, Google is a source of infinite knowledge.

Time to get into the project!

Navigate to the [blockchain-app](https://github.com/blockchainpsu/diy-blockchain/tree/main/blockchain-app) folder above, or click the link to get into the project!
