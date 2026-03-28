exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);

  console.log("Complete:", body.paymentId, body.txid);

  return {
    statusCode: 200,
    body: JSON.stringify({ result: "completed" })
  };
};