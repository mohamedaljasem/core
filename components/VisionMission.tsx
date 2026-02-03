export default function VisionMission() {
  return (
    <section id="vision" className="py-20 md:py-32 bg-gradient-to-b from-primary-white to-gray-50">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            رؤيتنا <span className="text-accent-orange">&</span> رسالتنا
          </h2>
          <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="card-premium hover:transform hover:-translate-y-2 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-accent-orange/10 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-accent-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2 text-primary-black group-hover:text-accent-orange transition-colors">
                  رؤيتنا
                </h3>
                <div className="w-12 h-1 bg-accent-orange mb-4"></div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              أن نكون <span className="font-bold text-accent-orange">الشريك التدريبي الأول والأنسب</span> للشركات 
              والمؤسسات الطموحة في المملكة السعودية، من خلال تقديم برامج تحويلية تخلق تأثيراً مستداماً.
            </p>
          </div>

          {/* Mission Card */}
          <div className="card-premium hover:transform hover:-translate-y-2 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-accent-orange/10 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-accent-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2 text-primary-black group-hover:text-accent-orange transition-colors">
                  رسالتنا
                </h3>
                <div className="w-12 h-1 bg-accent-orange mb-4"></div>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              تمكين الأفراد والمؤسسات من تحقيق أقصى إمكاناتهم عبر تقديم حلول تدريبية <span className="font-bold">مبتكرة 
              وعالية الجودة</span>، ترتكز على فهم عميق لاحتياجات السوق المحلي وتطلعات <span className="font-bold text-accent-orange">رؤية 
              المملكة لغاية عام 2030 وما بعدها</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


