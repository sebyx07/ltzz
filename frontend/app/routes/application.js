import Ember from 'ember';
//import XMPP from 'npm:stanza.io';

export default Ember.Route.extend({
  model(){
   /* var client = XMPP.createClient({
      jid: 'sebi@sebi-k56cb',
      password: '951753',
      transport: 'websocket',
      wsURL: 'ws://127.0.0.1:5280/websocket'
    });

    client.on('session:started', function () {
      client.getRoster();
      client.sendPresence();
    });

    client.connect();

    client.on('chat', function(msg){
      console.log(msg.body);
    });

    window.client = client;

    window.onbeforeunload = function () {
      client.disconnect();
    }*/
  }
});
