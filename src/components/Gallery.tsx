const projects = [
  {
    title: 'Modern Home Lighting',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Commercial Office Upgrade',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Electrical Panel Installation',
    category: 'Installation',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Outdoor Lighting Design',
    category: 'Lighting',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Smart Home Integration',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Industrial Electrical Work',
    category: 'Industrial',
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Recent Projects
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Take a look at some of our completed electrical projects showcasing quality workmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-amber-500 text-white text-sm px-3 py-1 rounded-full mb-3 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
