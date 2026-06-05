import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '263788177569'

export default function WhatsAppFab() {
  const text = encodeURIComponent("Hi TW8.tech! I'd like to discuss a project.")
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.8)] transition-transform duration-300 hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  )
}
