let blockchain = [];

function createHash(block) {
  // Simulate hash generation using Base64 and JSON
  return btoa(JSON.stringify(block)).substring(0, 15);
}

function addBlock() {
  const source = document.getElementById("source").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const data = document.getElementById("data").value.trim();

  if (!source || !destination || !data) {
    alert("Please fill in all fields.");
    return;
  }

  const previousHash = blockchain.length === 0 ? "0" : blockchain[blockchain.length - 1].hash;

  const block = {
    index: blockchain.length + 1,
    timestamp: new Date().toISOString(),
    source,
    destination,
    data,
    previousHash,
  };

  block.hash = createHash(block);

  blockchain.push(block);
  displayBlockchain();

  // Clear inputs
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("data").value = "";
}

function displayBlockchain() {
  const chainContainer = document.getElementById("blockchain");
  chainContainer.innerHTML = "";

  blockchain.forEach((block) => {
    const blockDiv = document.createElement("div");
    blockDiv.className = "block";

    blockDiv.innerHTML = `
      <p><strong>Block #${block.index}</strong></p>
      <p><strong>Timestamp:</strong> ${block.timestamp}</p>
      <p><strong>Source:</strong> ${block.source}</p>
      <p><strong>Destination:</strong> ${block.destination}</p>
      <p><strong>Data:</strong> ${block.data}</p>
      <p><strong>Prev Hash:</strong> ${block.previousHash}</p>
      <p><strong>Hash:</strong> ${block.hash}</p>
    `;

    chainContainer.appendChild(blockDiv);
  });
}