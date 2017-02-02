[![Build Status](https://travis-ci.org/rodrigopandini/get-bmfbovespa.svg?branch=master)](https://travis-ci.org/rodrigopandini/get-bmfbovespa)  [![Coverage Status](https://coveralls.io/repos/rodrigopandini/get-bmfbovespa/badge.svg?branch=master)](https://coveralls.io/r/rodrigopandini/get-bmfbovespa?branch=master)

get-bmfbovespa
=========

A small library to get historic market data of BM&F/Bovespa

## Installation

    $ git clone https://github.com/rodrigopandini/get-bmfbovespa.git && cd get-bmfbovespa
    $ mkdir market-data
    $ npm install
    $ npm start

## Usage
    var getBMFBovespa = require('get-bmfbovespa');

    getBMFBovespa(1986, 2017);
  
  
  Should outputs the files in the market-data folder of the chosen period.


## Tests

    $ npm test

## Info

  Check this [link](http://www.bmfbovespa.com.br/pt_br/servicos/market-data/historico/mercado-a-vista/series-historicas/) to get more info.
