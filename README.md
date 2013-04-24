Plivo Meteor API bindings
==========================

This smart package exposes the official Plivo Meteor API from the node.js npm package: https://github.com/plivo/plivo-node/

This uses version 0.1.0 of the Plivo node.js package and the new meteor 0.6.0 npm bindings.

To get started, replace AUTH_ID, AUTH_TOKEN with your Plivo credentials and use some of the examples below:

####Send an SMS text message

```javascript

  plivo = Plivo.RestAPI({
    authId: AUTH_ID,
    authToken: AUTH_TOKEN,
  });

  var params = {
      'src': 'xxxxxxxxxx', // Caller Id
      'dst' : 'xxxxxxxxxx', // User Number to Call
      'text' : "Hi, message from Plivo",
      'type' : "sms",
  };

  plivo.send_message(params, function (status, response) {
      console.log('Status: ', status);
      console.log('API Response:\n', response);
  });


```

####Place a phone call, and respond with instructions from the given URL

```javascript

  plivo = Plivo.RestAPI({
    authId: AUTH_ID,
    authToken: AUTH_TOKEN,
  });
  
  var params = {};
  params.from = "xxxxxxxxxx";
  params.to = "xxxxxxxxxx";
  params.answer_url = "http://somesite.com/answer_url.xml";

  plivo.make_call(params, function (status, response) {
      console.log('Status: ', status);
      console.log('API Response:\n', response);
  });


```


For more examples, check out the official Plivo node.js quickstart section: https://github.com/plivo/plivo-examples-node

