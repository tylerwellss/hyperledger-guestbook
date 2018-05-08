# Hyperledger Guestbook

A simple blockchain guestbook powered by Hyperledger Fabric, Hyperledger Composer, and Hyperledger Fabric Explorer. This project uses my [Hyperledger Starter repo](https://github.com/wellstyler/hyperledger-starter) as a foundation. Check that repo for more specific installation/setup instructions.

## Run it locally

### Prereqs
* [Hyperledger Fabric](http://hyperledger-fabric.readthedocs.io/en/release-1.1/prereqs.html)
* [Hyperledger Composer](https://hyperledger.github.io/composer/latest/installing/development-tools.html)
* [Hyperledger Explorer](https://github.com/wellstyler/hyperledger-starter#deploy-exporer)

### Usage and installation

```bash
# Clone this repo
git clone https://github.com/wellstyler/hyperledger-guestbook.git

# Run the deploy script
./deploy.sh

# Install dependencies in /composer, /explorer, and /fabric.
npm i

# Run the web server
npm start

# Access the web UI
http://localhost:3001

# Check out Composer's Rest Server explorer
http://localhost:3000
```

Within the web UI, you can input entries to the guestbook. Adding an entry is a transaction in the blockchain network. You can use Hyperledger Fabric Explorer to see more detailed info on the blocks and transactions.

## TODO

* Host this thing on a server.
