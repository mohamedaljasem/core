export default function Partners() {
  return (
    <section id="partners" className="py-20 md:py-32 bg-primary-white">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            شركاؤنا في النجاح
          </h2>
          <div className="w-20 h-1 bg-accent-orange mx-auto mb-4"></div>
          <p className="text-2xl text-accent-orange font-semibold">
            الثقة تُبنى بالإنجاز
          </p>
        </div>

        {/* Partners Content */}
        <div className="max-w-5xl mx-auto">
          {/* Logo Wall Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-12 border-t-4 border-accent-orange">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40 grayscale">
              {/* Placeholder for partner logos */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm font-medium">شعار {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Statement */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              نفتخر بشراكتنا مع <span className="font-bold text-accent-orange">عشرات المؤسسات الرائدة</span> في المملكة العربية السعودية.
            </p>
          </div>

          {/* Testimonial Section */}
          <div className="bg-gradient-to-br from-primary-black to-gray-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <svg
                className="w-12 h-12 text-accent-orange flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent-orange">
                  شهاداتهم خير دليل على جودة خدماتنا
                </h3>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  &ldquo;التعاون مع كور كونسيبت كان تجربة تحويلية حقيقية. البرامج التدريبية المصممة خصيصاً لاحتياجاتنا أحدثت فرقاً ملموساً في أداء فريقنا. 
                  الاحترافية العالية والفهم العميق لبيئة الأعمال السعودية جعلهم الشريك المثالي لنا.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-accent-orange"></div>
                  <p className="text-sm text-gray-300">
                    شريك مؤسسي رائد في المملكة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


