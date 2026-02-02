'use client'

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'العنوان',
      value: 'سيبويه، حي الروضة، الرياض',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'البريد الإلكتروني',
      value: 'info@coreconcept.sa',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      label: 'الموقع الإلكتروني',
      value: 'coreconcept.sa',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/company/coreconcept',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary-black text-white">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            تواصلوا معنا
          </h2>
          <div className="w-20 h-1 bg-accent-orange mx-auto mb-4"></div>
          <p className="text-2xl text-accent-orange font-semibold">
            لنبدأ رحلة التميز معاً
          </p>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {/* Company Info Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-accent-orange/30">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-accent-orange">كور كونسيبت</span> – المكتب السعودي
            </h3>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="text-accent-orange flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12">
            <button className="btn-primary text-lg px-12 py-4">
              ابدأ رحلتك معنا الآن
            </button>
          </div>

          {/* Footer Quote */}
          <div className="text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-accent-orange/20">
              <svg
                className="w-8 h-8 text-accent-orange mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl font-semibold text-gray-300 mb-2">
                الاستثمار في المعرفة يُحقق أعلى الفوائد
              </p>
              <p className="text-accent-orange font-medium">
                — بنجامين فرانكلين
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-20 pt-8 border-t border-white/10">
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} كور كونسيبت - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </section>
  )
}

