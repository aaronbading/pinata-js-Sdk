const IPFS = require('ipfs-mini');
const ipfs = new IPFS({host: 'ipfs.infura.io', port:5001, protocol : 'https'});
const data = "String for saving to INFURA IPFS"
ipfs.add(data, (err, hash) => {
    
    if(err)
    {console.log(err);
    }
    console.log('https://ipfs.infura.io/ipfs/' +hash)
    
})