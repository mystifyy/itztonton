exports.handler = async (event) => {
  const ip = event.headers['x-nf-client-connection-ip'];
  console.log("Visitor IP:", ip);
  return { statusCode: 200, body: JSON.stringify({ ip }) };
};