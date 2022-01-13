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
