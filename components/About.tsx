export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                من نحن؟
              </h2>
              <div className="w-20 h-1 bg-accent-orange mx-auto mb-4"></div>
              <p className="text-2xl md:text-3xl text-accent-orange font-semibold">
                شركاؤكم في بناء القدرات
              </p>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-r-4 border-accent-orange">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
              <span className="text-accent-orange font-bold">كور كونسيبت</span> هي ذراع الخبرة العالمية المتجذر محلياً.
              بخبرة تمتد لعقود في مجال التدريب الاحترافي على مستوى العالم، وبتأسيس مكتبنا السعودي، 
              نقدم حلولاً تدريبية <span className="font-bold">مصمّمة خصيصاً</span> لتناسب بيئة الأعمال السعودية 
              والثقافة العربية الأصيلة، مع التزامنا بمعايير الجودة العالمية.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


