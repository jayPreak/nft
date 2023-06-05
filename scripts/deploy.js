const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("NFTee");

  const deployedNFTContract = await nftContract.deploy();

  await deployedNFTContract.deployed();

  console.log("NFTee deployed to:", deployedNFTContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
