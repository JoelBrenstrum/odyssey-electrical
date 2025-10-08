import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Odyssey Electrical did an amazing job rewiring our entire home. Professional, punctual, and their attention to detail was outstanding. Highly recommend!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'We needed emergency electrical work for our office, and they responded immediately. The team was knowledgeable and solved the issue quickly. Excellent service!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    content: 'I manage multiple properties and Odyssey Electrical is my go-to for all electrical needs. Reliable, fair pricing, and quality work every time.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
