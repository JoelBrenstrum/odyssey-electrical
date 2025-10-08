import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Contact Us Today
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your electrical project? Reach out and let's discuss how we can help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white py-4 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:5551234567" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@odysseyelectrical.com" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
                      info@odysseyelectrical.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <p className="text-slate-300">
                      123 Electric Avenue<br />
                      Your City, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Business Hours</div>
                    <p className="text-slate-300">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Emergency Service Only<br />
                      <span className="text-amber-400 font-semibold">24/7 Emergency Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-500 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Emergency Service</h3>
              <p className="text-amber-50 mb-4">
                Electrical emergency? We're here to help 24/7. Call now for immediate assistance.
              </p>
              <a
                href="tel:5551234567"
                className="inline-flex items-center bg-white text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors duration-200 font-semibold shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
