const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create profile image
const profileCanvas = createCanvas(400, 400);
const pctx = profileCanvas.getContext('2d');

// Background
pctx.fillStyle = '#f3f4f6';
pctx.fillRect(0, 0, 400, 400);

// Circle
pctx.beginPath();
pctx.arc(200, 160, 100, 0, Math.PI * 2);
pctx.fillStyle = '#2563eb';
pctx.fill();

// Text
pctx.fillStyle = '#1f2937';
pctx.font = 'bold 24px Arial';
pctx.textAlign = 'center';
pctx.fillText('Profile', 200, 320);

// Save profile image
const profileBuffer = profileCanvas.toBuffer('image/png');
fs.writeFileSync(path.join(__dirname, 'profile.jpg'), profileBuffer);

// Create project image
const projectCanvas = createCanvas(800, 400);
const ctx = projectCanvas.getContext('2d');

// Background
ctx.fillStyle = '#f3f4f6';
ctx.fillRect(0, 0, 800, 400);

// Project Screenshot
ctx.fillStyle = '#2563eb';
ctx.fillRect(50, 50, 700, 250);

// Window Controls
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.arc(80, 80, 6, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(100, 80, 6, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(120, 80, 6, 0, Math.PI * 2);
ctx.fill();

// Text
ctx.fillStyle = '#1f2937';
ctx.font = 'bold 24px Arial';
ctx.textAlign = 'center';
ctx.fillText('GitHub Topics Updater', 400, 350);

// Save project image
const projectBuffer = projectCanvas.toBuffer('image/png');
fs.writeFileSync(path.join(__dirname, 'project1.jpg'), projectBuffer);
