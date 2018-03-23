// Twilio Function deployed at https://www.twilio.com/console/runtime/functions/manage/ZHffa6bf57cf69f0d2ed67b3c29f517fe7
// 
// Use:
// When someone hits the URL specified in the link above, this function will initiate a call
// to the `fromNumber`, and then, using the TwilioBin, will attempt to connect to the
// `forwardNumber`.

exports.handler = function(context, event, callback) {
  const sourceCountry = event.sc;
  const twilioNumber = context.TWILIO_NUMBER; // In future, TBD by source country
  const fromNumber = context.FROM_NUMBER;
  const forwardNumber = event.t;
  const twimlUrl = context.TWIML_URL_BASE + '?';
  
  const queryData = {
    forwardNumber
  };
  const twimlQueryString = encodeQueryData(queryData);
  const url = twimlUrl + twimlQueryString;
  console.log('Twiml Request URL', url);

  const client = context.getTwilioClient();
  // Connect inital caller to Twilio
  client.calls.create({
    url,
    from: twilioNumber,
    to: fromNumber,
  }, function(err, result) {
    console.log(`Phone Call Started: ${twilioNumber} to ${fromNumber}`);
    console.log('Error:', err);
    console.log('Result:', result);
    callback(err, result);
  });
};

// Nicked from: https://stackoverflow.com/a/111545/1772238
function encodeQueryData(data) {
   let ret = [];
   for (let d in data) {
     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
   }
   return ret.join('&');
}


