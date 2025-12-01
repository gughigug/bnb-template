"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaGlobe,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

type Language = "en" | "it";
type Translator = (enText: string, itText: string) => string;

// Unità neutre per BnB / hotel / appartamenti
const units = [
  {
    code: "01",
    name: { en: "Standard", it: "Standard" },
    label: { en: "Essential", it: "Essenziale" },
    meta: {
      en: "2 guests · 1 bathroom",
      it: "2 ospiti · 1 bagno",
    },
    img: "/unit-1.jpg",
  },
  {
    code: "02",
    name: { en: "Comfort", it: "Comfort" },
    label: { en: "Extended", it: "Esteso" },
    meta: {
      en: "2–3 guests · workspace",
      it: "2–3 ospiti · area lavoro",
    },
    img: "/unit-2.jpg",
  },
  {
    code: "03",
    name: { en: "Suite", it: "Suite" },
    label: { en: "Hybrid", it: "Ibrida" },
    meta: {
      en: "Living · kitchen module",
      it: "Living · modulo cucina",
    },
    img: "/unit-3.jpg",
  },
  {
    code: "04",
    name: { en: "Family", it: "Family" },
    label: { en: "Shared", it: "Condivisa" },
    meta: {
      en: "Up to 4 guests",
      it: "Fino a 4 ospiti",
    },
    img: "/unit-4.jpg",
  },
];

// Mini feature stack
const stackCards = [
  {
    k: "layout",
    en: "Mobile-first grid with fluid cards and touch-friendly spacing.",
    it: "Griglia mobile-first con card fluide e spazi pensati per il touch.",
  },
  {
    k: "system",
    en: "Neutral shell: swap palette, typography and content per project.",
    it: "Shell neutra: cambi palette, tipografia e contenuti per progetto.",
  },
  {
    k: "stack",
    en: "Next.js · React · Tailwind · Framer Motion · GSAP.",
    it: "Next.js · React · Tailwind · Framer Motion · GSAP.",
  },
];

type StackSectionProps = {
  t: Translator;
};

function StackSection({ t }: StackSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#f7f7f9] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60"
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        {stackCards.map((item) => (
          <motion.div
            key={item.k}
            className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">
              {item.k}
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t(item.en, item.it)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

type UnitsSectionProps = {
  t: Translator;
};

function UnitsSection({ t }: UnitsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="units"
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.26em] uppercase text-slate-500 mb-1">
            {t("Units module", "Modulo unità")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            {t("Room types as a system.", "Tipologie stanza come sistema.")}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
            {t(
              "Standard, Comfort, Suite, Family. Same structure, interchangeable content and pricing logic.",
              "Standard, Comfort, Suite, Family. Stessa struttura, contenuti e logica prezzi intercambiabili."
            )}
          </p>
        </div>
      </div>

      {/* Mobile: scroll orizzontale touch-friendly */}
      <div className="max-w-6xl mx-auto sm:hidden">
        <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory">
          {units.map((unit) => (
            <motion.article
              key={unit.code}
              className="snap-start min-w-[80%] rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={unit.img}
                  alt={unit.name.en}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-600">
                  {unit.code}
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  <span>{t(unit.label.en, unit.label.it)}</span>
                  <span>{t("Unit", "Unità")}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {t(unit.name.en, unit.name.it)}
                </h3>
                <p className="text-sm text-slate-600">
                  {t(unit.meta.en, unit.meta.it)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Desktop: griglia fluida, con animazione on scroll */}
      <div className="max-w-6xl mx-auto hidden sm:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {units.map((unit, index) => (
          <motion.article
            key={unit.code}
            className="group rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: index * 0.06,
            }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={unit.img}
                alt={unit.name.en}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-600">
                {unit.code}
              </div>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-1">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-500">
                <span>{t(unit.label.en, unit.label.it)}</span>
                <span>{t("Unit", "Unità")}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">
                {t(unit.name.en, unit.name.it)}
              </h3>
              <p className="text-sm text-slate-600">
                {t(unit.meta.en, unit.meta.it)}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

// HERO – titolo e sottotitolo
type HeroTitleProps = {
  language: Language;
};

const HeroTitle: React.FC<HeroTitleProps> = ({ language }) => (
  <div className="space-y-4">
    <p className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-100 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
      guglielmogiannattasio.exe · hospitality shell v01
    </p>
    <h1 className="text-[2.2rem] sm:text-[2.6rem] md:text-[3rem] font-semibold tracking-tight text-slate-50">
      {language === "en"
        ? "A hospitality shell that behaves like a product."
        : "Una shell hospitality che si comporta come un prodotto."}
    </h1>
  </div>
);

type HeroSubtitleProps = {
  language: Language;
};

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ language }) => (
  <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-100/90 max-w-xl">
    {language === "en"
      ? "Built as a neutral interface layer for B&Bs, apartments and small hotels: you can reskin colors, typography and flows without touching the core layout."
      : "Pensata come layer di interfaccia neutro per B&B, appartamenti e piccoli hotel: puoi rifare colori, tipografia e flussi senza toccare il layout centrale."}
  </p>
);

const HomePage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>("it");
  const [menuOpen, setMenuOpen] = useState(false);

  // Registrazione plugin solo client
  useEffect(() => {
    setMounted(true);
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  }, []);

  if (!mounted) {
    // Evita hydration mismatch dovuti alle animazioni
    return null;
  }

  const t: Translator = (enText, itText) =>
    language === "en" ? enText : itText;

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: id, offsetY: 72 },
      ease: "power3.out",
    });
  };

  return (
    <div className="relative bg-[#f5f5f7] text-slate-900 min-h-screen">
      {/* NAVBAR sopra l'immagine */}
      <nav className="fixed top-0 left-0 w-full bg-black/35 backdrop-blur-md border-b border-white/10 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center text-slate-50">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 text-[10px] font-bold">
              GG.EXE
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide">
                Hospitality Shell v01
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-200/85">
                BnB · Apartments · Hotel
              </span>
            </div>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-[0.18em] uppercase text-slate-200/90">
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#hero")}
            >
              {t("Hero", "Hero")}
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#units")}
            >
              {t("Units", "Unità")}
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#about")}
            >
              {t("Overview", "Panoramica")}
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("#contact")}
            >
              {t("Contact", "Contatti")}
            </li>

            <button
              onClick={() =>
                setLanguage((prev) => (prev === "en" ? "it" : "en"))
              }
              className="ml-3 w-8 h-8 border border-slate-200/70 rounded-full text-[11px] font-semibold flex items-center justify-center hover:bg-white hover:text-slate-900 transition"
            >
              {language === "en" ? "IT" : "EN"}
            </button>
          </ul>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() =>
                setLanguage((prev) => (prev === "en" ? "it" : "en"))
              }
              className="w-8 h-8 border border-slate-200/70 rounded-full text-[11px] font-semibold flex items-center justify-center hover:bg-white hover:text-slate-900 transition"
            >
              {language === "en" ? "IT" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl leading-none text-slate-50"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/70 backdrop-blur-lg border-t border-white/10 z-30">
            <ul className="flex flex-col space-y-3 text-sm px-4 py-3 text-slate-50">
              <li
                className="cursor-pointer hover:text-white transition"
                onClick={() => {
                  scrollToSection("#hero");
                  setMenuOpen(false);
                }}
              >
                {t("Hero", "Hero")}
              </li>
              <li
                className="cursor-pointer hover:text-white transition"
                onClick={() => {
                  scrollToSection("#units");
                  setMenuOpen(false);
                }}
              >
                {t("Units", "Unità")}
              </li>
              <li
                className="cursor-pointer hover:text-white transition"
                onClick={() => {
                  scrollToSection("#about");
                  setMenuOpen(false);
                }}
              >
                {t("Overview", "Panoramica")}
              </li>
              <li
                className="cursor-pointer hover:text-white transition"
                onClick={() => {
                  scrollToSection("#contact");
                  setMenuOpen(false);
                }}
              >
                {t("Contact", "Contatti")}
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO con hero-room come sfondo */}
      <motion.section
        id="hero"
        className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center px-4 sm:px-6 pt-24 pb-16 sm:pb-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Background full screen con hero-room */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0 bg-[url('/hero-room.jpg')]"
          initial={{ scale: 1.05 }}
          animate={{ scale: [1.05, 1.1, 1.05] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* Overlay per rendere leggibile il testo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/85 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050509] via-black/60 to-transparent z-10" />

        <div className="relative z-20 max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <HeroTitle language={language} />
            <HeroSubtitle language={language} />

            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => scrollToSection("#units")}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold bg-slate-50 text-slate-900 hover:bg-slate-200 transition shadow-sm"
              >
                {t("Browse units module", "Esplora modulo unità")}
              </button>
              <button
                onClick={() => scrollToSection("#about")}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold border border-slate-200/70 text-slate-100 hover:bg-white/10 transition backdrop-blur-sm"
              >
                {t("Read overview", "Leggi panoramica")}
              </button>
            </motion.div>

            <p className="mt-4 text-xs text-slate-200/80">
              {t(
                "Designed to be re-skinned: palette, typography, spacing and content are all replaceable.",
                "Progettata per essere re-skin: palette, tipografia, spazi e contenuti sono tutti sostituibili."
              )}
            </p>
          </div>

          {/* Card “Layout touch-first” che fluttua */}
          <motion.div
            className="mt-8 max-w-xs rounded-2xl border border-white/18 bg-white/10 backdrop-blur-md px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -4, 0] }}
            transition={{
              delay: 0.6,
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-100/90">
              {t("Layout touch-first", "Layout touch-first")}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-50">
              {t("Scroll, tap, resize.", "Scroll, tap, resize.")}
            </p>
            <p className="mt-1 text-[11px] text-slate-100/85">
              {t(
                "Cards, units and sections respond cleanly on mobile and desktop.",
                "Card, unità e sezioni rispondono in modo pulito su mobile e desktop."
              )}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SEPARATORE GRADIENTE tra hero scura e sezione chiara */}
      <div className="h-10 bg-gradient-to-b from-[#050509] via-[#151520] to-[#f7f7f9]" />

      {/* STACK */}
      <StackSection t={t} />

      {/* UNITS */}
      <UnitsSection t={t} />

      {/* OVERVIEW */}
      <section
        id="about"
        className="bg-[#f7f7f9] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header testuale */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] tracking-[0.26em] uppercase text-slate-500">
                {t("System notes", "Note di sistema")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              {t("What this shell is for.", "A cosa serve questa shell.")}
            </h2>
          </div>

          {/* Layout “scheda prodotto” */}
          <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="grid md:grid-cols-3 gap-x-8">
              {/* Colonna sinistra – metadata */}
              <div className="border-b md:border-b-0 md:border-r border-slate-200 p-5 space-y-4 text-sm">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                    Layer
                  </p>
                  <p className="text-slate-800">
                    {t(
                      "Neutral UI shell, front-end only.",
                      "Shell UI neutra, solo front-end."
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                    Use cases
                  </p>
                  <p className="text-slate-800">
                    {t(
                      "B&B, serviced apartments, boutique hotels.",
                      "B&B, appartamenti serviti, boutique hotel."
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                    Status
                  </p>
                  <p className="text-slate-800">
                    {t(
                      "Multi-brand ready, booking-agnostic.",
                      "Multi-brand ready, booking-agnostic."
                    )}
                  </p>
                </div>
              </div>

              {/* Colonna destra – descrizione */}
              <div className="md:col-span-2 p-5 sm:p-6 lg:p-7 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <motion.p
                  whileHover={{ x: 1, backgroundColor: "rgba(248,249,252,1)" }}
                  className="rounded-md px-1 py-1 transition-colors"
                >
                  {t(
                    "This is not a finished website. It’s a reusable shell: a neutral interface layer you can connect to real brands, real content and real booking logic.",
                    "Questo non è un sito finito. È una shell riutilizzabile: un layer di interfaccia neutro da collegare a brand reali, contenuti reali e logiche di prenotazione reali."
                  )}
                </motion.p>

                <motion.p
                  whileHover={{ x: 1, backgroundColor: "rgba(248,249,252,1)" }}
                  className="rounded-md px-1 py-1 transition-colors"
                >
                  {t(
                    "It’s multi-brand ready. Colors, typography, spacing, copy, languages and media can shift completely, while the structure remains coherent and reliable.",
                    "È multi-brand ready. Colori, tipografia, spazi, testi, lingue e media possono cambiare completamente, mentre la struttura resta coerente e affidabile."
                  )}
                </motion.p>

                <motion.p
                  whileHover={{ x: 1, backgroundColor: "rgba(248,249,252,1)" }}
                  className="rounded-md px-1 py-1 transition-colors"
                >
                  {t(
                    "This pattern can support small B&Bs, serviced apartments or boutique hotels with different identities and editorial directions — without rebuilding everything from scratch.",
                    "Questo pattern può supportare piccoli B&B, appartamenti serviti o boutique hotel con identità e linee editoriali completamente diverse — senza dover ricostruire tutto da zero."
                  )}
                </motion.p>

                <motion.p
                  whileHover={{ x: 1, backgroundColor: "rgba(248,249,252,1)" }}
                  className="rounded-md px-1 py-1 transition-colors"
                >
                  {t(
                    "It integrates with custom booking engines, enquiry forms, pricing rules and automation flows. The guest-facing layer is flexible, the system beneath stays consistent.",
                    "Si integra con motori di prenotazione personalizzati, form di richiesta, logiche tariffarie e flussi di automazione. Il layer rivolto all’ospite è flessibile, il sistema sottostante resta stabile."
                  )}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer
        id="contact"
        className="bg-black text-slate-50 py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Contatti */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
              {t("Contact", "Contatti")}
            </h3>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-slate-300 text-sm" />
              <span className="text-slate-100">hello@staytemplate.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-slate-300 text-sm" />
              <span className="text-slate-100">(+00) 000 000 000</span>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
              {t("Online presence", "Presenza online")}
            </h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-slate-300 text-sm" />
                <span className="text-slate-100">@yourbrand</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFacebook className="text-slate-300 text-sm" />
                <span className="text-slate-100">facebook.com/yourbrand</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-slate-300 text-sm" />
                <span className="text-slate-100">www.yourwebsite.com</span>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
              Signature
            </h3>
            <p className="text-slate-100 text-sm">
              guglielmogiannattasio.exe
              <br />
              <span className="text-slate-400 text-xs">
                interface &amp; web systems
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 text-[11px] text-center text-slate-500 space-y-1">
          <p>
            © 2025 guglielmogiannattasio.exe — hospitality shell v01.{" "}
            {t("All rights reserved.", "Tutti i diritti riservati.")}
          </p>
          <p className="text-[10px] opacity-70">
            {t(
              "Demo content only. Replace with live brand, copy and data.",
              "Contenuti demo. Sostituiscili con brand, testi e dati reali."
            )}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
