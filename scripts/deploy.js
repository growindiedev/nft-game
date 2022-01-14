const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Leo", "Otter", "Pikachu", "Nero"], // Names
    [
      "https://i.imgur.com/pKd5Sdk.png", // Images
      "https://i.imgur.com/arOOY56.jpeg",
      "https://i.imgur.com/WMB6g9u.png",
      "https://i.imgur.com/VyzGtls.jpeg",
    ],
    [100, 200, 300, 290], // HP values
    [100, 50, 25, 70] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(3);
  await txn.wait();
  console.log("Minted NFT #4");

  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #5");

  console.log("done deploying and minting");

  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
