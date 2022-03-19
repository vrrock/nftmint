const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT'); //compile contract
    const nftContract = await nftContractFactory.deploy(); //deploy contract
    await nftContract.deployed(); //run app

    console.log("Contract is deployed to " + nftContract.address);
    let txn = await nftContract.makeAnEpicNFT();
    await txn.wait();

    txn = await nftContract.makeAnEpicNFT();
    await txn.wait();

    
}





const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


runMain();