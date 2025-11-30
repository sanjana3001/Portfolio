<template>
  <section class="card contact expanded">
    <h2><i class="fas fa-envelope"></i> Contact Me</h2>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            :class="{ error: errors.name }"
          >
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            :class="{ error: errors.email }"
          >
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          required
          :class="{ error: errors.subject }"
        >
        <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
          :class="{ error: errors.message }"
        ></textarea>
        <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
      </div>
      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
        <i v-else class="fas fa-paper-plane"></i>
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
    <div v-if="message.text" class="form-message" :class="message.type">
      {{ message.text }}
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {},
      isSubmitting: false,
      message: {
        text: '',
        type: ''
      }
    }
  },
  methods: {
    validateForm() {
      this.errors = {}

      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required'
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
      }

      if (!this.form.subject.trim()) {
        this.errors.subject = 'Subject is required'
      }

      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
      }

      return Object.keys(this.errors).length === 0
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },

    async submitForm() {
      if (!this.validateForm()) {
        return
      }

      this.isSubmitting = true
      this.message = { text: '', type: '' }

      try {
        const templateParams = {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
          to_email: 'sanjanas.3001@gmail.com'
        }

        await emailjs.send('service_nmhik0m', 'template_i6kmwzn', templateParams)

        this.message = {
          text: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!',
          type: 'success'
        }
        this.form = { name: '', email: '', subject: '', message: '' }
      } catch (error) {
        console.error('Email sending failed:', error)
        this.message = {
          text: 'Sorry, there was an error sending your message. Please try again later.',
          type: 'error'
        }
      } finally {
        this.isSubmitting = false

        if (this.message.type === 'success') {
          setTimeout(() => {
            this.message = { text: '', type: '' }
          }, 5000)
        }
      }
    }
  }
}
</script>

<style scoped>
.error {
  border-color: #dc3545 !important;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 5px;
  display: block;
}
</style>