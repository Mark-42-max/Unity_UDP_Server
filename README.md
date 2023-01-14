# Unity UDP Server

A Multiplayer setup for unity that is capable of receiving and broadcasting responses that include player transforms and other messages

## Important note: Currently in development phase

## What is the use of this Repo

This Project is a Simple Unity Project which demonstrates the following
1. How to create dgrams server for unity
2. How to receive data from client side
3. A template server for future games that are mostly multiplayer.

The project Template can be used to build other games.

## Prerequisites

### Server

#### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

#### Install dgram package
Install the dgram official library for node

```bash
npm i dgram
```

#### Pre built client
Find the pre built client for this at [udp_frontend](https://github.com/Mark-42-max/Unity_UDP_Client)

#### Run

```bash
node index.js
```

### Client

#### Install Unity
Refer to https://unity.com/download for downloading unity and unity hub (optional but recommended)

#### License
Licensing would be done on unity hub. Highly recommended to be done before moving on.

## Clone the project

### After cloning the client is going to use port 5400 for sending and receiving data. Be sure to clear the specific port before running. Or you can change the port.
