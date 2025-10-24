#!/usr/bin/env node

const { spawn } = require('child_process');

// Set the MCP URL (use your ngrok address)
const mcpUrl = 'https://5c1d4580785c.ngrok-free.app/mcp';

spawn('npx', [
  '--yes', // skip prompt
  'fastmcp',
  'client',
  '--url', mcpUrl,
  '--header', 'accept: application/json, text/event-stream'
], {
  stdio: 'inherit'
});
