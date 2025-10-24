#!/usr/bin/env node

const { run } = require('fastmcp/client');

run({
  url: process.env.MCP_URL || "https://xxxxxxxxx.ngrok-free.app"
});
