import { Zap, Home, Building2, Lightbulb, ShieldCheck, Wrench } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Electrical',
    description: 'Complete electrical solutions for your home including installations, repairs, and upgrades.',
    features: ['Lighting installation', 'Panel upgrades', 'Outlet & switch repair', 'Home rewiring']
  },
  {
    icon: Building2,
    title: 'Commercial Electrical',
    description: 'Professional electrical services for businesses, offices, and commercial properties.',
    features: ['Office lighting', 'Data cabling', 'Emergency systems', 'Maintenance contracts']
  },
  {
    icon: Zap,
    title: 'Emergency Services',
    description: '24/7 emergency electrical repairs to keep your property safe and powered.',
    features: ['Power outages', 'Electrical faults', 'Urgent repairs', 'Safety inspections']
  },
  {
    icon: Lightbulb,
    title: 'Lighting Solutions',
    description: 'Modern lighting design and installation for enhanced ambiance and efficiency.',
    features: ['LED upgrades', 'Smart lighting', 'Outdoor lighting', 'Custom design']
  },
  {
    icon: ShieldCheck,
    title: 'Safety Inspections',
    description: 'Comprehensive electrical safety inspections and compliance testing.',
    features: ['Code compliance', 'Safety testing', 'Fault detection', 'Detailed reports']
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Regular maintenance services to ensure optimal performance and safety.',
    features: ['Preventive maintenance', 'System checks', 'Upgrades', 'Troubleshooting']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Comprehensive Electrical Solutions
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            From residential repairs to commercial installations, we provide expert electrical services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200 group hover:-translate-y-1"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
