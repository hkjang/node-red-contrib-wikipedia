const axios = require("axios")
var getBaseUrl = function(lang,searchStr){
   return 'https://'+lang+'.wikipedia.org/w/api.php?action=opensearch&origin=*&namespace=*&search='+encodeURI(searchStr);
};
var getWikiUrl =function(node,searchStr){
    var format = node.format || 'json';
    var limit = node.limit || 1;
    var profile = node.profile || 'fuzzy';
    var lang = node.lang || 'ko';
    var url =getBaseUrl(lang,searchStr) +'&limit='+limit+'&format='+format+'&profile='+profile;
    // node.error(url);
    return url;
};
var options = {};
var getWikiResults =function(node,msg){
    axios.get(getWikiUrl(node,msg.payload), options)
        .then(function(response) {
            // node.error(response);
            msg.payload = response.data;
            node.send(msg);
        }).catch(function (err){
            // node.error(err);
            msg.payload = err;
            node.send(msg);
    });
};

module.exports = function(RED) {
    function wikipediaNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.format = config.format;
        this.limit = config.limit;
        this.profile = config.profile;
        this.lang = config.lang;
        var node = this;
        
        node.on('input', function(msg) {
            if(msg.payload){
                node.status({fill:"green",shape:"dot",text:"searching"});
                getWikiResults(node,msg);
            }
            else{
                node.error("Message payload is empty.");
                node.status({fill:"red",shape:"dot",text:"searching failed."});
            }
                node.status({}); 
        });
    }
    
    RED.nodes.registerType("wikipedia",wikipediaNode);
}
