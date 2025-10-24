#!/usr/bin/env node

const { spawn } = require('child_process');

const mcpUrl = process.env.MCP_URL || "https://5c1d4580785c.ngrok-free.app/mcp";

const proc = spawn('npx', ['-y', 'fastmcp', 'client', '--url', mcpUrl], {
  stdio: 'inherit'
});
