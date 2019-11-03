var fs = require("fs");
var functions = require("./services/functions.js");
// var logger = require("./logger");
const configs = require("./configuration");
const configuration = configs.configs;

var auth = {
  tenancyId: configuration.tenancyId,
  userId: configuration.userId,
  keyFingerprint: configuration.keyFingerprint,
  RESTversion: configuration.RESTversion,
  region: configuration.region
};
auth.privateKey = fs.readFileSync(configuration.privateKeyFile, "ascii");
auth.passphrase = configuration.passphrase;
// set up parameters object
//
var parameters = {
  compartmentId: configuration.compartmentId
};
var callback = function(data) {
  // logger.log("debug", JSON.stringify(data));
  console.log(JSON.stringify(data));
  // console.log("callback", data);
  return;
};

async function invokeFunction(functionParams, input) {
  // logger.log("info", `invoke function for ${JSON.stringify(input)} `);
  // set up the parameter object
  parameters = {};
  // found through fn inspect f soaring shippings-generator
  parameters.path = functionParams.path;
  parameters.host = functionParams.host;
  parameters.body = input;
  functions.func.invokeFunction(auth, parameters, callback);
  return;
} // invokeFunction

// test call

// ocid1.fnfunc.oc1.phx.aaaaaaaaaa3kvbaarhonuelfqsa2xpys2jilib23o2f6qe3vt254w75lanbq

// invokeFunction(
//   {
//     path:
//       "/20181201/functions/ocid1.fnfunc.oc1.phx.aaaaaaaaaa3kvbaarhonuelfqsa2xpys2jilib23o2f6qe3vt254w75lanbq/actions/invoke",
//     host: "6q2o72e3mba.us-phoenix-1.functions.oci.oraclecloud.com"
//   },
//   [
//     { key: "neutral", value: "966" },
//     { key: "happy", value: "30" },
//     { key: "sad", value: "0" },
//     { key: "angry", value: "0" },
//     { key: "fearful", value: "0" },
//     { key: "disgusted", value: "0" },
//     { key: "surprised", value: "4" }
//   ]
// );

module.exports = {
  InsertData: invokeFunction
};
