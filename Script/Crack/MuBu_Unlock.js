/*
#loon
http-response https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user script-path=https://raw.githubusercontent.com/mandxy/ziyong/main/mubu.js, requires-body=true, timeout=10, tag=幕布

#quantumult-x
https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body https://raw.githubusercontent.com/mandxy/ziyong/main/mubu.js

[MITM]
hostname = =api2.mubu.com
*/

let obj = JSON.parse($response.body);
obj.data["level"] = "2";
$done({body: JSON.stringify(obj)});
