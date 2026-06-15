import { TargetIcon, EyeIcon, SparkleIcon, TrendingUpIcon } from "./ui/Icons";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--white)] dark:bg-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-light)] dark:bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
            <SparkleIcon size={14} />
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--gray-900)] dark:text-white mb-6 tracking-tight">
            Engineering Excellence Since{" "}
            <span className="text-[var(--primary)]">2019</span>
          </h2>
          <p className="text-lg text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
            We are a team of technologists, strategists, and builders committed to
            helping organizations thrive in the digital age.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Story */}
          <div className="reveal-left">
            <h3 className="text-2xl font-bold text-[var(--gray-900)] dark:text-white mb-6">
              Who We Are
            </h3>
            <div className="space-y-4 text-[var(--gray-600)] dark:text-[var(--gray-300)] leading-relaxed">
              <p>
                Founded in 2019, Prime Digital Solutions has grown from a boutique
                consultancy into a full-service technology partner serving Fortune 500
                companies, ambitious startups, and government agencies across 12 countries.
              </p>
              <p>
                Our team of 120+ engineers, designers, and strategists brings deep
                expertise in cloud architecture, AI/ML, enterprise software, and
                digital experience design. We don't just build software — we engineer
                competitive advantage.
              </p>
              <p>
                Every engagement begins with understanding your business. We embed
                with your teams, learn your domain, and deliver solutions that don't
                just work — they transform how you operate.
              </p>
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="reveal-right relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] p-8 lg:p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative grid grid-cols-2 gap-6">
                {[
                  { icon: <TrendingUpIcon size={28} />, value: "200+", label: "Projects Delivered", color: "from-blue-400 to-cyan-400" },
                  { icon: <TargetIcon size={28} />, value: "120+", label: "Team Members", color: "from-orange-400 to-amber-400" },
                  { icon: <EyeIcon size={28} />, value: "12", label: "Countries Served", color: "from-emerald-400 to-teal-400" },
                  { icon: <SparkleIcon size={28} />, value: "98%", label: "Client Retention", color: "from-purple-400 to-pink-400" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-3`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <TargetIcon size={24} />,
              title: "Our Mission",
              text: "To empower organizations with technology that drives measurable business outcomes — faster time-to-market, lower operational costs, and superior customer experiences.",
              gradient: "from-[var(--primary)] to-blue-400",
            },
            {
              icon: <EyeIcon size={24} />,
              title: "Our Vision",
              text: "A world where every organization, regardless of size, has access to world-class technology expertise and the tools to compete on a global stage.",
              gradient: "from-[var(--accent)] to-amber-400",
            },
            {
              icon: <SparkleIcon size={24} />,
              title: "Our Values",
              text: "Excellence in every line of code. Transparency in every interaction. Partnership in every engagement. Your success is our only metric that matters.",
              gradient: "from-emerald-500 to-teal-400",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-[var(--gray-50)] dark:bg-[var(--dark-card)] border border-[var(--gray-200)] dark:border-[var(--dark-border)] hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 reveal-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Hover gradient border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`} />
              <div className="absolute inset-[2px] rounded-3xl bg-[var(--gray-50)] dark:bg-[var(--dark-card)] -z-10" />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-5`}>
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-[var(--gray-900)] dark:text-white mb-3">
                {card.title}
              </h4>
              <p className="text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
