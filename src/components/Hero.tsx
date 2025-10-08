import { Phone, Clock, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-500/30">
                Licensed & Insured Electricians
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Powering Your World with
              <span className="text-amber-400"> Excellence</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Professional electrical services for residential and commercial properties.
              Your trusted partner for safe, reliable, and innovative electrical solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 group">
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get Free Quote
              </a>
              <a href="#services" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold border border-white/20">
                Our Services
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">Licensed Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-amber-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors duration-200">
                  <Clock className="h-8 w-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Available 24/7</h3>
                    <p className="text-slate-300 text-sm">Emergency electrical services whenever you need them</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors duration-200">
                  <CheckCircle className="h-8 w-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Certified Experts</h3>
                    <p className="text-slate-300 text-sm">Highly trained and certified electrical professionals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors duration-200">
                  <Phone className="h-8 w-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quick Response</h3>
                    <p className="text-slate-300 text-sm">Fast response times for all service requests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
