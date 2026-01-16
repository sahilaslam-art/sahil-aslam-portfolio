# Email Setup Guide - Complete

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure Gmail password in .env.local
GMAIL_USER=sahilaslam754@gmail.com
GMAIL_PASSWORD=your_app_password

# 3. Run both server and app
npm run dev:all
```

## Step-by-Step Setup

### Step 1: Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Search for **App Passwords**
4. Select **Mail** and **Windows Computer**
5. Copy the 16-character password generated

### Step 2: Add to .env.local

```env
GMAIL_USER=sahilaslam754@gmail.com
GMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

### Step 3: Run Development

```bash
# Terminal 1 - Run backend server
npm run server

# Terminal 2 - Run frontend
npm run dev
```

Or use both together:
```bash
npm run dev:all
```

### Step 4: Test

1. Open http://localhost:3000
2. Click "Hire Me" button
3. Fill form and submit
4. Check Gmail inbox

## Architecture

- **Frontend**: React + TypeScript (Vite)
- **Backend**: Node.js + Express
- **Email**: Nodemailer + Gmail SMTP
- **Endpoints**: 
  - `POST http://localhost:3001/api/contact` - Send inquiry

## Features

✅ Real emails to your Gmail  
✅ Confirmation email to user  
✅ Form validation  
✅ Error handling  
✅ Loading states  

## Production Deployment

For production, you'll need to:

1. Deploy backend to Heroku/Railway/Render
2. Update frontend API endpoint
3. Use environment variables in production

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
```

## Troubleshooting

**"Failed to send email"**
- Check Gmail credentials in .env.local
- Verify App Password is correct (16 characters with spaces)
- Ensure 2FA is enabled on Gmail

**"Cannot connect to server"**
- Make sure `npm run server` is running
- Check port 3001 is not blocked

**"CORS error"**
- Backend already has CORS enabled
- Verify server is running before frontend

## Notes

- Keep `.env.local` secret (don't commit to git)
- App Password is safer than regular Gmail password
- Free tier: unlimited emails
