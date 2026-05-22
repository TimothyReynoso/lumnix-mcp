// Lumnix MCP Server — Client Config Helper
// This package provides configuration instructions for connecting to the Lumnix MCP server.
// The actual server runs remotely at https://lumnix.dev/api/mcp

const LUMNIX_URL = "https://lumnix.dev/api/mcp";

function getConfig(apiKey) {
  if (!apiKey || !apiKey.startsWith("lmx_")) {
    throw new Error("Invalid API key. Get yours at https://lumnix.dev");
  }
  return {
    mcpServers: {
      lumnix: {
        url: LUMNIX_URL,
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    },
  };
}

module.exports = { LUMNIX_URL, getConfig };
