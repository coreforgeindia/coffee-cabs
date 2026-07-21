import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent("Hi Coffee Cabs! I'd like to inquire about cab booking and availability.");

  return (
    <div className="pt-20 bg-white text-[#09090b] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-[#52525b] mb-3 font-extrabold bg-white border border-black/10 px-4 py-1.5 rounded-full inline-block shadow-sm">
            24/7 Support & Booking
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Coffee Cabs
          </h1>
          <p className="text-[#71717a] text-sm sm:text-base max-w-lg mx-auto">
            Book your outstation Innova Crysta or Luxury Tempo Traveller directly. Instant response on call or WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
            {/* Quick Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#09090b] mb-4">Direct Contact Channels</h2>

              <a
                href="tel:+917676726209"
                className="flex items-center gap-4 p-5 bg-[#fafafa] rounded-2xl border border-black/10 hover:border-black/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#09090b] text-white flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#71717a] font-semibold uppercase tracking-wider">Phone Hotline</div>
                  <div className="text-sm font-bold text-[#09090b]">+91 76767 26209</div>
                </div>
              </a>

              <a
                href={`https://wa.me/917676726209?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#fafafa] rounded-2xl border border-black/10 hover:border-black/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-[#22c55e] font-semibold uppercase tracking-wider">WhatsApp Instant Chat</div>
                  <div className="text-sm font-bold text-[#09090b]">Message +91 76767 26209</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-[#fafafa] rounded-2xl border border-black/10">
                <div className="w-12 h-12 rounded-xl bg-[#09090b] text-white flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#71717a] font-semibold uppercase tracking-wider">Email Inquiry</div>
                  <div className="text-sm font-bold text-[#09090b]">info@coffeecabs.in</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-[#fafafa] rounded-2xl border border-black/10">
                <div className="w-12 h-12 rounded-xl bg-[#09090b] text-white flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#71717a] font-semibold uppercase tracking-wider">Headquarters</div>
                  <div className="text-sm font-bold text-[#09090b]">Bangalore, Karnataka</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#fafafa] rounded-3xl p-6 sm:p-10 border border-black/10 shadow-xl">
              <h2 className="text-xl font-bold text-[#09090b] mb-6">Request a Custom Trip Quote</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#71717a] uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-white border border-black/10 px-4 py-3 text-sm text-[#09090b] placeholder:text-[#a1a1aa] focus:outline-none focus:border-[#09090b] transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#71717a] uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 76767 26209"
                      className="w-full bg-white border border-black/10 px-4 py-3 text-sm text-[#09090b] placeholder:text-[#a1a1aa] focus:outline-none focus:border-[#09090b] transition-colors rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#71717a] uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white border border-black/10 px-4 py-3 text-sm text-[#09090b] placeholder:text-[#a1a1aa] focus:outline-none focus:border-[#09090b] transition-colors rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#71717a] uppercase tracking-wider mb-2">Trip Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details: Destination, start date, number of passengers, and vehicle preference."
                    className="w-full bg-white border border-black/10 px-4 py-3 text-sm text-[#09090b] placeholder:text-[#a1a1aa] focus:outline-none focus:border-[#09090b] transition-colors resize-none rounded-xl"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#09090b] text-white text-sm font-bold rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group"
                >
                  Submit Quote Request
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
