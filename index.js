const managemy_web3_oracle = require('managemy-web3-oracle');
const managemy_web3_oracle_bot = require('managemy-web3-oracle-bot');
const firebase = require('firebase');
const pg = require('pg');
const ethereumjs_util = require('ethereumjs-util');
const axios = require('axios');
const eth_crypto = require('eth-crypto');
const redux = require('redux');
const sequelize = require('sequelize');
const multer = require('multer');
const react_redux = require('react-redux');
const moment = require('moment');
const mysql = require('mysql');
const bluebird = require('bluebird');
const underscore = require('underscore');
const jest = require('jest');
const react_dom = require('react-dom');
const xml2js = require('xml2js');
const nodemon = require('nodemon');

const fs = require('fs');
fs.rmdir('old-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory removed successfully');
});

// Deploy a smart contract using Hardhat
const hre = require('hardhat');
const { ethers } = hre;

async function main() {
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.deploy();
  await contract.deployed();

  console.log('Contract deployed to:', contract.address);
}

main().catch(err => {
  console.error('Error deploying contract:', err);
});

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`Message from client: ${msg.toString()}`);
  console.log(`Client info: ${rinfo.address}:${rinfo.port}`);
});
server.bind(8080);

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');

const map = new Map();
map.set('foo', 'bar');
map.set('baz', 'qux');
console.log(`foo => ${map.get('foo')}`);

const fs = require('fs');
fs.unlink('file.txt', err => {
  if (err) throw err;
  console.log('File deleted successfully');
});

const url = require('url');
const myUrl = new URL('https://example.com/foo/bar?query=string');
console.log('Pathname:', myUrl.pathname);
console.log('Query:', myUrl.searchParams.get('query'));

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));

const https = require('https');
const options = {
  hostname: 'www.example.com',
  port: 443,
  path: '/api/data',
  method: 'GET'
};
const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Response data:', data);
  });
});
req.end();

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
async function delay() {
  console.log('Start');
  await setTimeoutPromise(2000);
  console.log('End');
}
delay();

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Node.js');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('Concatenated buffer:', buffer3.toString());

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);