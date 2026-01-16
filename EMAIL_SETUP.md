# Email Setup Guide - Hire Me Button

## Overview
The "Hire Me" button is now fully functional and will send emails to your Gmail when users submit the contact form.

## Setup Steps

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add Service**
3. Choose **Gmail** as the service
4. Click **Connect Account** and authorize your Gmail
5. Name your service (e.g., "Gmail Service")
6. Note down your **Service ID** (it will look like `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Inquiry from {{from_name}}

From: {{from_name}} ({{from_email}})
Project Type: {{project_type}}

Message:
{{message}}
```

4. Click on "Test it" to verify
5. Note down your **Template ID** (it will look like `template_xxxxx`)

### Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (it will look like a long string)

### Step 5: Update Environment Variables
Edit the `.env.local` file with your credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_TO_EMAIL=your-email@gmail.com
```

## How It Works

1. User clicks "Hire Me" button
2. Contact modal opens
3. User fills in their details:
   - Name
   - Email
   - Project Type (dropdown)
   - Message
4. User clicks "Send Message"
5. Email is sent to your Gmail inbox
6. Success message is displayed to the user

## Features

✅ Form validation (all fields required)  
✅ Loading state while sending  
✅ Success confirmation message  
✅ Error handling with retry option  
✅ Form auto-clears after successful submission  
✅ Responsive design (mobile & desktop)  
✅ Secure credentials in environment variables  

## Troubleshooting

**Emails not sending?**
- Check that your `.env.local` file has correct credentials
- Verify your Gmail account has less secure apps enabled (if needed)
- Check browser console for error messages

**Template variables not working?**
- Make sure template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{project_type}}`, `{{message}}`

**Rate limiting?**
- EmailJS free tier allows limited emails per day
- Upgrade to paid plan for higher limits

## Testing

To test locally:
1. Run `npm run dev`
2. Click "Hire Me" button
3. Fill in the form with test data
4. Click "Send Message"
5. Check your Gmail inbox for the email
