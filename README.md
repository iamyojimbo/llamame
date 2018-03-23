# llamame
Personal call centre

## Intended Features

### Outbound Calls
* Send an SMS to Twilio to tell it the number you want to dial and the country of the number you want to dial from
* Twilio should first make a call to the number that sent the SMS
* Twilio should then make an outbound call to the number provided via SMS from a Twilio number so initial rings can be heard

### Inbound Calls
* There should be a configurable list of inboud numbers
* Anyone calling any of the listed numbers should be redirected to one single, configurable mobile phone number
