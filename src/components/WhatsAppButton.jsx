import { contact } from '../data/siteData.js'
import Icon from './Icons.jsx'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Supplybase on WhatsApp"
    >
      <Icon name="whatsapp" size={28} />
    </a>
  )
}
