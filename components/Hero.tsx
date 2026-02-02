'use client'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-primary-black text-white min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-accent-orange rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-accent-orange transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-l from-transparent via-accent-orange to-transparent"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            من العمق… إلى{' '}
            <span className="text-accent-orange">العُلا</span>
          </h1>

          {/* Accent Line */}
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>

          {/* Main Description */}
          <div className="text-lg md:text-xl lg:text-2xl leading-relaxed space-y-6 mb-12 text-primary-white/90 max-w-4xl mx-auto">
            <p>
              كور كونسيبت تعني <span className="text-accent-orange font-semibold">صُلب الموضوع</span> وهذا هو جوهر ما نؤمن به.
            </p>
            <p>
              في عالم يتسم بالتعقيد، يكون التميز في الوصول إلى الجوهر وبناء المفاهيم الأساسية الراسخة.
            </p>
            <p>
              نحن في كور كونسيبت للتدريب لا نقدم معلومات سطحية؛ نغوص معكم إلى صُلب الموضوع لنبني معاً فهماً عميقاً يتحول إلى أداء ملموس.
            </p>
            <p>
              من قلب <span className="text-accent-orange font-semibold">المملكة العربية السعودية</span>، نطلق رحلة تحويلية تبدأ من الأساس لتصل بكم إلى القمة.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-10 py-4"
            >
              تواصل معنا
            </button>
            <button
              onClick={() => scrollToSection('domains')}
              className="btn-secondary text-lg px-10 py-4 border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-black"
            >
              استكشف مجالاتنا
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-accent-orange to-transparent"></div>
    </section>
  )
}

