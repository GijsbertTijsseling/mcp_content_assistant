#!/usr/bin/env node

const { run } = require('fastmcp/client');

run({
  url: process.env.MCP_URL || "https://5c1d4580785c.ngrok-free.app"
});
