[![npm](https://img.shields.io/npm/v/node-red-contrib-wikipedia.svg)](https://www.npmjs.com/package/node-red-contrib-wikipedia) [![node-red-contrib-wikipedia](https://img.shields.io/badge/Node--RED-wikipedia-brightgreen.svg)](https://flows.nodered.org/node/node-red-contrib-wikipedia) [![Github All Releases](https://img.shields.io/github/downloads/hkjang/node-red-contrib-wikipedia/total.svg)](https://github.com/hkjang/node-red-contrib-wikipedia)

# node-red-contrib-wikipedia

[Node-RED](http://nodered.org) node to search input payload on wiki using OpenSearch API which will return wiki results in json|jsonfm|xml|xmlfm formats [node-red-contrib-wikipedia](https://github.com/hkjang/node-red-contrib-wikipedia).

## Install

Run the following command in your Node-RED user directory – typically `~/.node-red`:

```bash
npm i node-red-contrib-wikipedia
```

## Usage

Provides one palette node which will use the message payload in string format and returns wiki search results based on configured parameters.

### Output

Returns wiki results using OpenSearch API for given input message payload.

`msg.payload` is having wiki search results in json,jsonfm,xml,xmlfm format.


##### References
 This node's input payload structure is based on [node-red-contrib-wikipedia](https://github.com/hkjang/node-red-contrib-wikipedia), which uses [Wiki OpenSearch API](https://www.mediawiki.org/wiki/API:Opensearch).

### Input

`msg.payload` :This will be of type String, which needs to be searched on wiki.

### Configuration

Configure the parameters based on [Wiki OpenSearch API Doc](https://www.mediawiki.org/wiki/API:Opensearch) 

#### Details
This node will help user to search input payload on wiki using OpenSearch API

## Support
If something is not working as expected, or if you think this node could be improved in other ways, [please file an issue](https://github.com/hkjang/node-red-contrib-wikipedia/issues/new) on GitHub.
