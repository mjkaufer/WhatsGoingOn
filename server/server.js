var data = {};

data = JSON.parse(Assets.getText("credentials.json"));
xml = Assets.getText("call.xml");
Acc_SID = data.sid;
Auth_token = data.authToken;
var phoneNumber = data.from;

twilioClient = Twilio(Acc_SID, Auth_token);


Meteor.methods({
	'sendCall':function(number){
		twilioClient.makeCall({
			url: "http://twimlets.com/echo?Twiml=" + encodeURIComponent(xml),
			to: number,
			from: phoneNumber
		}, function(err, call) {
			console.log(err, call);
			Meteor.call('callback',number,(err===undefined || err==="" || err===null));
		});
		
	}
})