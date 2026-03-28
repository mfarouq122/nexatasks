exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);

  console.log("Approve:", body.paymentId);

  return {
    statusCode: 200,
    body: JSON.stringify({ result: "approved" })
  };
};