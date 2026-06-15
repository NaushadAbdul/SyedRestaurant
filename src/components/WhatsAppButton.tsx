import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=919642477545&text=Hello%20Syed%20Royal%20Family%20Restaurant!%20I'm%20visiting%20your%20website%20and%20want%20to%20order%20or%20make%20a%20reservation.";

  return (
    <motion.a
      id="whatsapp-floating-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full sm:rounded-full shadow-lg shadow-green-500/20 border border-white/20 transition-all duration-300"
      title="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Soft ripple glow */}
        <span className="absolute -inset-1 rounded-full bg-white/20 animate-ping" />
        <MessageSquare className="w-5 h-5 fill-white text-[#25D366] relative z-10" />
      </div>
      <span className="hidden sm:inline font-poppins font-medium text-xs tracking-wide">
        Chat with Us
      </span>
    </motion.a>
  );
}
