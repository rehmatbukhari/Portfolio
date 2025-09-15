# Portfolio Setup Instructions

## 📧 Email Functionality Setup

To enable the contact form to actually send emails, you need to set up EmailJS:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:
```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```
4. Save the template and copy the **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` with your Service ID
   - `YOUR_TEMPLATE_ID` with your Template ID
   - `YOUR_PUBLIC_KEY` with your Public Key

## 📄 Resume Download Setup

### Step 1: Add Resume File
1. Add your resume PDF file to the `public` folder
2. Name it `resume.pdf`
3. The file will be accessible at `/resume.pdf` when deployed

### Step 2: Update Resume Name (Optional)
If you want to change the downloaded filename, edit `src/components/Contact.tsx` line 141:
```typescript
link.download = 'Your_Desired_Filename.pdf';
```

## 🚀 Testing

### Test Email Functionality
1. Run `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the message

### Test Resume Download
1. Click the "Download Resume" button
2. Verify the PDF downloads correctly

## 🔧 Troubleshooting

### Email Not Sending
- Check that all EmailJS credentials are correct
- Verify your email service is properly configured
- Check browser console for error messages

### Resume Not Downloading
- Ensure `resume.pdf` exists in the `public` folder
- Check that the file is not corrupted
- Verify the file path in the code matches your filename

## 📝 Notes
- EmailJS free plan allows 200 emails per month
- Resume file should be optimized for web (under 2MB recommended)
- Test both features before deploying to production
