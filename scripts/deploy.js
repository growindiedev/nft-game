const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Dexter", "Kermit", "Nero"], // Names
    [
      "QmWFAhcb4boN6YuZQqVLQpKNWRCEYbtcYvTyiebrPUaVBs",
      "QmP5G6HbHrdmA8iz69cB6DTxJcsRW5ixCQdzEECxStdv6d",
      "QmacnVQQxf1JH3XXJUngv5ArdarUUPv5LzBFLQ7HDH4cZw",
    ],
    [200, 300, 290], // HP values
    [50, 40, 70], // Attack damage values
    "Spongbob", // Boss name
    "QmTsi1PiC75WojKbh21SbdksgrCGsooq2E69xgkwDd3xT6", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
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
