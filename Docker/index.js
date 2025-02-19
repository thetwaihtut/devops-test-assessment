const lynx = require('lynx');

// Instantiate a metrics client using environment variables for the host and port.
// If the environment variables STATSD_HOST and STATSD_PORT are not set,
// default to 'localhost' and port 8125 respectively.
const statsd_host = process.env.STATSD_HOST || 'localhost';
const statsd_port = process.env.STATSD_PORT || 8125;
const metrics = new lynx(statsd_host, statsd_port);

// sleep for a given number of milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  // send message to the metrics server
  metrics.timing('test.core.delay', Math.random() * 1000);

  // sleep for a random number of milliseconds to avoid flooding metrics server
  return sleep(3000);
}

// infinite loop
(async () => {
  console.log("🚀🚀🚀");
  while (true) { await main() }
})()
  .then(console.log, console.error);