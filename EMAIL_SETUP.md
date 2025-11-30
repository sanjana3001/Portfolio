# Email Setup Instructions for Contact Form

This guide will help you set up email functionality for your CV contact form using EmailJS.

## 🚀 **Step 1: Create EmailJS Account**

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 📧 **Step 2: Set Up Email Service**

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and grant permissions
5. Note down your **Service ID** (something like `service_xxxxx`)

## 📝 **Step 3: Create Email Template**

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email (sanjanas.3001@gmail.com)

4. Example template content:
   ```
   Subject: {{subject}}

   Hello,

   You have received a new message from your CV website:

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}

   Best regards,
   Your CV Contact Form
   ```

5. Save the template and note down your **Template ID** (something like `template_xxxxx`)

## 🔑 **Step 4: Get Your Public Key**

1. Go to "Account" → "General"
2. Copy your **Public Key** (something like `xxxxxxxxxxxxxx`)

## ⚙️ **Step 5: Configure Your Code**

1. Open `script.js` in your project
2. Replace the placeholder values:

```javascript
// Replace these three values with your EmailJS credentials:
emailjs.init('YOUR_PUBLIC_KEY'); // Your Public Key
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Your Service ID and Template ID
```

Example:
```javascript
emailjs.init('abc123def456');
emailjs.send('service_myportfolio', 'template_contact', templateParams)
```

## 📧 **Step 6: Test Your Setup**

1. Open your CV website (`index.html`)
2. Navigate to the Contact section
3. Fill out and submit the contact form
4. Check your email (sanjanas.3001@gmail.com) for the message

## 🔒 **Security Notes**

- Your Public Key is safe to include in client-side code
- EmailJS handles the email sending server-side
- No sensitive information is exposed

## 🆘 **Troubleshooting**

- **Emails not sending**: Check your Service ID, Template ID, and Public Key
- **Template variables not working**: Ensure variable names match exactly (case-sensitive)
- **Emails going to spam**: Check your email provider's spam settings

## 📞 **Support**

If you need help, check the [EmailJS documentation](https://www.emailjs.com/docs/) or contact their support.
