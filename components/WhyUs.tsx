export default function WhyUs() {
  const pillars = [
    {
      number: '01',
      title: 'محليون بفكر عالمي',
      description: 'نجمع بين الخبرة العالمية وفهم عميق للسوق السعودي وثقافته، مما يضمن برامج ملائمة وفعالة تحقق نتائج ملموسة.',
    },
    {
      number: '02',
      title: 'برامج مصمَّمة باحترافية',
      description: 'كل برنامج تدريبي يُصمم خصيصاً بناءً على احتياجاتكم الفعلية، بمنهجية علمية وأدوات حديثة تضمن التطبيق العملي المباشر.',
    },
    {
      number: '03',
      title: 'شراكة متكاملة',
      description: 'لا نكتفي بتقديم التدريب فقط، بل نرافقكم في رحلة التطوير من التشخيص والتصميم إلى التنفيذ والمتابعة وقياس الأثر.',
    },
    {
      number: '04',
      title: 'مرونة في التنفيذ',
      description: 'نتكيف مع احتياجاتكم بمرونة كاملة: تدريب حضوري، عن بُعد، أو مدمج، بجداول زمنية تناسب طبيعة عملكم وأولوياتكم.',
    },
  ]

  return (
    <section id="why-us" className="py-20 md:py-32 bg-primary-black text-white">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ما يميزنا
          </h2>
          <div className="w-20 h-1 bg-accent-orange mx-auto mb-4"></div>
          <p className="text-2xl md:text-3xl text-accent-orange font-semibold">
            لماذا كور كونسيبت؟
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-accent-orange/20 hover:border-accent-orange hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-accent-orange text-white font-bold text-3xl w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {pillar.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="w-16 h-1 bg-accent-orange"></div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg leading-relaxed text-gray-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


