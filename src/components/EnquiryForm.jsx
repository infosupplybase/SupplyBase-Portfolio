import { useState } from 'react'
import { contact, services } from '../data/siteData.js'
import Icon from './Icons.jsx'

const empty = { name: '', phone: '', email: '', service: '', location: '', details: '' }

function validate(v) {
  const errors = {}
  if (!v.name.trim()) errors.name = 'Please enter your name.'
  const digits = v.phone.replace(/\D/g, '')
  if (!digits) errors.phone = 'Please enter your phone number.'
  else if (digits.length < 10 || digits.length > 13) errors.phone = 'Please enter a valid 10-digit mobile number.'
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) errors.email = 'This email address does not look right.'
  if (!v.service) errors.service = 'Please choose a service.'
  return errors
}

// This site has no backend, so the form does not save anything. On submit it
// opens WhatsApp with the details filled in, and the visitor presses Send there.
export default function EnquiryForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus()
      return
    }
    const lines = [
      'Hello SupplyBase, I would like to discuss a project.',
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.email && `Email: ${values.email.trim()}`,
      `Service: ${values.service}`,
      values.location && `Location: ${values.location.trim()}`,
      values.details && `Details: ${values.details.trim()}`,
    ].filter(Boolean)
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
    setSent(true)
  }

  const field = (key, label, props = {}, optional = false) => (
    <div className={`field ${errors[key] ? 'has-error' : ''}`}>
      <label htmlFor={`f-${key}`}>
        {label} {optional && <span className="field__opt">(optional)</span>}
      </label>
      <input
        id={`f-${key}`}
        name={key}
        value={values[key]}
        onChange={set(key)}
        aria-invalid={!!errors[key]}
        aria-describedby={errors[key] ? `f-${key}-err` : undefined}
        {...props}
      />
      {errors[key] && (
        <span className="field__error" id={`f-${key}-err`}>
          {errors[key]}
        </span>
      )}
    </div>
  )

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate>
      <div className="enquiry__row">
        {field('name', 'Your name', { autoComplete: 'name' })}
        {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}
      </div>
      <div className="enquiry__row">
        {field('email', 'Email', { type: 'email', autoComplete: 'email' }, true)}
        <div className={`field ${errors.service ? 'has-error' : ''}`}>
          <label htmlFor="f-service">Service you need</label>
          <select
            id="f-service"
            name="service"
            value={values.service}
            onChange={set('service')}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'f-service-err' : undefined}
          >
            <option value="">Choose a service</option>
            {services.map((s) => (
              <option key={s.id}>{s.title}</option>
            ))}
            <option>Furniture & Tables</option>
            <option>Not sure yet</option>
          </select>
          {errors.service && (
            <span className="field__error" id="f-service-err">
              {errors.service}
            </span>
          )}
        </div>
      </div>
      {field('location', 'Project location', { autoComplete: 'address-level2', placeholder: 'e.g. Kalyan West' }, true)}
      <div className="field">
        <label htmlFor="f-details">
          Project details <span className="field__opt">(optional)</span>
        </label>
        <textarea
          id="f-details"
          name="details"
          rows={4}
          value={values.details}
          onChange={set('details')}
          placeholder="Rooms, size, timeline or a design code like SB-24"
        />
      </div>

      <button className="btn btn--primary btn--block" type="submit">
        <Icon name="whatsapp" size={18} /> Send on WhatsApp
      </button>
      <p className="enquiry__note" role="status">
        {sent
          ? 'WhatsApp has opened with your details. Press Send there and our team will reply.'
          : 'This opens WhatsApp with your details filled in. Nothing is stored on this website.'}
      </p>
    </form>
  )
}
