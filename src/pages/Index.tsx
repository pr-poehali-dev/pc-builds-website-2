import { useState } from "react";
import Icon from "@/components/ui/icon";

const builds = [
  {
    id: 1,
    name: "БЮДЖЕТНЫЙ",
    tag: "Бюджетный ценовой сегмент",
    price: "от 40 000 ₽",
    cpu: "AMD Ryzen 5 5600G (OEM)",
    gpu: "Встроенная Radeon Vega 7",
    ram: "16 ГБ (2×8 ГБ) DDR4 3200 MHz",
    storage: "SSD M.2 512 ГБ Kingston",
    psu: "Chieftec Proton 400W",
    motherboard: "MSI B450M-A Pro Max 2",
    description: "Офис, учёба, интернет и лёгкие задачи без дискретной видеокарты.",
    color: "#3b82f6",
    badge: "БЮДЖЕТ",
  },
  {
    id: 2,
    name: "НАРОДНЫЙ",
    tag: "Средний ценовой сегмент",
    price: "от 100 000 ₽",
    cpu: "AMD Ryzen 5 5600X",
    gpu: "NVIDIA RTX 4060 Ti 16 ГБ",
    ram: "32 ГБ (2×16 ГБ) DDR5 5600 MHz",
    storage: "SSD M.2 1 ТБ NVMe Gen4 Kingston",
    psu: "Cougar STX 650W",
    motherboard: "GIGABYTE B550M Aorus Elite",
    description: "Народный игровой ПК: уверенные FPS в топовых играх, стриминг, монтаж.",
    color: "#2563ff",
    badge: "ХИТ",
  },
  {
    id: 3,
    name: "РАБОЧИЙ",
    tag: "Программист / Дизайнер",
    price: "под бюджет",
    cpu: "Intel Core i5-13500 (BOX)",
    gpu: "Встроенная Intel UHD Graphics 770",
    ram: "64 ГБ (2×32 ГБ) DDR4 3200 MHz",
    storage: "1 ТБ SSD M.2 (система) + 2 ТБ SSD (проекты)",
    psu: "500W Be Quiet / Aerocool",
    motherboard: "ASUS Prime B760-Plus",
    description: "Большой объём ОЗУ и хранилища для разработки, дизайна и работы с проектами.",
    color: "#6366f1",
    badge: "PRO",
  },
];

const faqItems = [
  {
    q: "Как выбрать подходящую сборку?",
    a: "Определитесь с основным использованием: офис и учёба — Стартовая, игры и развлечения — Игровая, профессиональная работа с медиа — Флагман.",
  },
  {
    q: "Можно ли изменить комплектующие?",
    a: "Да, любая сборка настраивается под ваши нужды. Напишите нам, и мы подберём альтернативные компоненты по вашему бюджету.",
  },
  {
    q: "Входит ли сборка и тестирование в стоимость?",
    a: "Да. Все сборки включают профессиональную сборку, установку системы, стресс-тестирование и диагностику.",
  },
  {
    q: "Какая гарантия на сборки?",
    a: "На готовую сборку предоставляется 12 месяцев гарантии. На отдельные комплектующие действует гарантия производителя (обычно 2–3 года).",
  },
  {
    q: "Сколько времени занимает сборка?",
    a: "Стандартная сборка готова за 1–2 рабочих дня. Срочная сборка — в день обращения при наличии компонентов на складе.",
  },
];

const compareSpecs = [
  { label: "Процессор", key: "cpu" },
  { label: "Материнская плата", key: "motherboard" },
  { label: "Видеокарта", key: "gpu" },
  { label: "Оперативная память", key: "ram" },
  { label: "Накопитель", key: "storage" },
  { label: "Блок питания", key: "psu" },
  { label: "Цена", key: "price" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-xl font-bold tracking-widest text-white">
            PC<span className="text-[#3b82f6]">BUILD</span>
          </span>
          <div className="flex gap-1">
            {[
              { id: "home", label: "Главная" },
              { id: "builds", label: "Сборки" },
              { id: "compare", label: "Сравнение" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 text-sm font-body font-medium transition-all rounded-sm ${
                  activeSection === item.id
                    ? "text-[#3b82f6] bg-[#3b82f6]/10"
                    : "text-white/50 hover:text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center"
      >
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#3b82f6]/30 rounded-sm mb-8 bg-[#3b82f6]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="text-xs font-body text-[#3b82f6] tracking-widest uppercase">
              Профессиональные сборки ПК
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6">
            МОЩЬ
            <br />
            <span className="text-[#3b82f6]">ДЛЯ ЛЮБЫХ</span>
            <br />
            ЗАДАЧ
          </h1>
          <p
            className="font-body text-white/50 text-lg max-w-lg leading-relaxed mb-10 opacity-0 animate-fade-in-up delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            Три готовые конфигурации от бюджетной до флагманской. Каждая
            собрана, протестирована и готова к работе.
          </p>
          <div
            className="flex gap-4 opacity-0 animate-fade-in-up delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            <button
              onClick={() => scrollTo("builds")}
              className="px-8 py-3 bg-[#3b82f6] text-white font-display font-medium tracking-wider text-sm hover:bg-[#2563ff] transition-colors"
            >
              ВЫБРАТЬ СБОРКУ
            </button>
            <button
              onClick={() => scrollTo("compare")}
              className="px-8 py-3 border border-white/15 text-white/70 font-display font-medium tracking-wider text-sm hover:border-white/40 hover:text-white transition-all"
            >
              СРАВНИТЬ
            </button>
          </div>
        </div>

        {/* stats */}
        <div
          className="mt-24 grid grid-cols-3 gap-px border border-white/5 overflow-hidden opacity-0 animate-fade-in-up delay-500"
          style={{ animationFillMode: "forwards" }}
        >
          {[
            { value: "3", label: "Конфигурации" },
            { value: "40K+", label: "От 40 000 ₽" },
            { value: "100%", label: "Реальные цены" },
          ].map((s) => (
            <div key={s.label} className="bg-[#111] p-6 text-center">
              <div className="font-display text-3xl font-bold text-[#3b82f6]">
                {s.value}
              </div>
              <div className="font-body text-xs text-white/40 mt-1 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUILDS */}
      <section id="builds" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs text-[#3b82f6] tracking-widest uppercase mb-3">
            Конфигурации
          </p>
          <h2 className="font-display text-5xl font-bold">СБОРКИ</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {builds.map((b) => (
            <div
              key={b.id}
              className="bg-[#0a0a0a] p-8 flex flex-col group hover:bg-[#111] transition-colors relative"
            >
              {b.badge === "ХИТ" && (
                <div className="absolute top-0 left-0 right-0 h-px bg-[#3b82f6]" />
              )}
              <div className="flex items-start justify-between mb-6">
                <span className="font-body text-xs text-white/30 tracking-widest uppercase">
                  {b.tag}
                </span>
                <span
                  className="font-display text-xs tracking-widest px-2 py-0.5"
                  style={{
                    color: b.color,
                    border: `1px solid ${b.color}30`,
                  }}
                >
                  {b.badge}
                </span>
              </div>
              <h3 className="font-display text-4xl font-bold mb-2">{b.name}</h3>
              <p className="font-body text-white/40 text-sm mb-8 leading-relaxed">
                {b.description}
              </p>

              <div className="space-y-3 mb-8 flex-1">
                {[
                  { icon: "Cpu", label: b.cpu },
                  { icon: "CircuitBoard", label: b.motherboard },
                  { icon: "Monitor", label: b.gpu },
                  { icon: "MemoryStick", label: b.ram },
                  { icon: "HardDrive", label: b.storage },
                  { icon: "Zap", label: b.psu },
                ].map((spec) => (
                  <div key={spec.icon} className="flex items-start gap-3">
                    <Icon
                      name={spec.icon}
                      size={14}
                      className="text-white/25 flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-white/60 leading-snug">
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span
                  className="font-display text-2xl font-bold"
                  style={{ color: b.color }}
                >
                  {b.price}
                </span>
                <button className="px-4 py-2 text-xs font-display tracking-wider text-white/50 border border-white/10 hover:border-[#3b82f6]/50 hover:text-[#3b82f6] transition-all">
                  ПОДРОБНЕЕ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs text-[#3b82f6] tracking-widest uppercase mb-3">
            Детали
          </p>
          <h2 className="font-display text-5xl font-bold">СРАВНЕНИЕ</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left py-4 pr-8 font-body text-xs text-white/30 tracking-widest uppercase w-40">
                  Характеристика
                </th>
                {builds.map((b) => (
                  <th key={b.id} className="text-left py-4 px-6 font-display text-lg font-bold">
                    <div>{b.name}</div>
                    <div
                      className="font-body text-xs font-normal mt-1"
                      style={{ color: b.color }}
                    >
                      {b.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareSpecs.map((spec, i) => (
                <tr
                  key={spec.key}
                  className={`border-b border-white/5 ${
                    i % 2 === 0 ? "bg-white/[0.01]" : ""
                  }`}
                >
                  <td className="py-4 pr-8 font-body text-xs text-white/30 tracking-widest uppercase">
                    {spec.label}
                  </td>
                  {builds.map((b) => (
                    <td
                      key={b.id}
                      className="py-4 px-6 font-body text-sm text-white/70"
                    >
                      {(b as Record<string, string>)[spec.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-px bg-white/5">
          {builds.map((b) => (
            <div key={b.id} className="bg-[#0a0a0a] p-6 text-center">
              <div className="font-display text-sm tracking-widest text-white/30 mb-2 uppercase">
                {b.name}
              </div>
              <div
                className="font-display text-2xl font-bold mb-4"
                style={{ color: b.color }}
              >
                {b.price}
              </div>
              <button
                className="w-full py-2 text-xs font-display tracking-widest transition-all hover:opacity-80"
                style={{
                  backgroundColor: `${b.color}15`,
                  color: b.color,
                  border: `1px solid ${b.color}30`,
                }}
              >
                ВЫБРАТЬ
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-xs text-[#3b82f6] tracking-widest uppercase mb-3">
            Вопросы
          </p>
          <h2 className="font-display text-5xl font-bold">FAQ</h2>
        </div>

        <div className="max-w-3xl">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-white/5">
              <button
                className="w-full text-left py-6 flex items-start justify-between gap-4 group"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-body font-medium text-white/80 group-hover:text-white transition-colors">
                  {item.q}
                </span>
                <Icon
                  name={openFaq === i ? "Minus" : "Plus"}
                  size={16}
                  className={`flex-shrink-0 mt-0.5 transition-colors ${
                    openFaq === i
                      ? "text-[#3b82f6]"
                      : "text-white/25 group-hover:text-white/50"
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="pb-6 font-body text-sm text-white/40 leading-relaxed animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-display text-lg font-bold tracking-widest">
            PC<span className="text-[#3b82f6]">BUILD</span>
          </span>
          <span className="font-body text-xs text-white/25">
            © 2026 PCBuild. Все права защищены.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;