exports.handler = async function(event) {

  let body = {};

  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    body = {};
  }

  console.log("Complete:", body.paymentId, body.txid);

  return {
    statusCode: 200,
    body: JSON.stringify({ result: "completed" })
  };
};
