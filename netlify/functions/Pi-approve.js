exports.handler = async function(event) {

  let body = {};

  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    body = {};
  }

  console.log("Approve:", body.paymentId);

  return {
    statusCode: 200,
    body: JSON.stringify({ result: "approved" })
  };
};
