import { Award, Users, Shield, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Shield, value: '100%', label: 'Licensed & Insured' },
  { icon: Clock, value: '24/7', label: 'Available Support' }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Your Trusted Electrical Partner
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Odyssey Electrical has been serving the community with exceptional electrical services for over 15 years.
              Our team of licensed and certified electricians is committed to delivering safe, reliable, and innovative solutions
              for both residential and commercial clients.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              We pride ourselves on our attention to detail, transparent pricing, and unwavering commitment to customer
              satisfaction. Every project, big or small, receives the same level of professionalism and expertise.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-2 rounded-lg mt-1">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">Licensed & Certified</h3>
                  <p className="text-slate-600">All our electricians are fully licensed, insured, and continuously trained on the latest codes and technologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-2 rounded-lg mt-1">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">Quality Guaranteed</h3>
                  <p className="text-slate-600">We stand behind our work with comprehensive warranties and a commitment to excellence in every job.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <stat.icon className="h-10 w-10 text-amber-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
