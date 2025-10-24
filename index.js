#!/usr/bin/env node

const { spawn } = require('child_process');

const mcpUrl = process.env.MCP_URL || 'https://abc1234.ngrok-free.app/mcp';

spawn('npx', [
  '-y',
  'fastmcp',
  'client',
  '--url', mcpUrl,
  '--header', 'accept: application/json, text/event-stream'
], {
  stdio: 'inherit'
});
