import React from 'react';
import { TranslationDictionary, Language } from '../types';
import { ExternalLink, Heart, ShieldCheck, PhoneCall, Bus } from 'lucide-react';

interface FooterProps {
  t: TranslationDictionary;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-24 sm:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-stone-800 text-sm">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">⛩️</span>
              <span className="font-serif font-bold text-lg">{t.appName}</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.appSubtitle}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/80 text-[11px] text-stone-300 border border-stone-700/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Public Cultural Activity Registry</span>
            </div>
          </div>

          {/* Kyoto Responsible Tourism & Etiquette */}
          <div className="space-y-2 text-xs text-stone-400">
            <h4 className="font-serif font-bold text-sm text-stone-100 mb-2">
              {lang === 'en' ? 'Kyoto Visitor Etiquette' : lang === 'zh-CN' ? '京都文明旅游礼仪与贴士' : '京都文明旅遊禮儀與貼士'}
            </h4>
            <p>• {lang === 'en' ? 'Do not photograph Maiko or Geiko on private streets in Gion.' : lang === 'zh-CN' ? '在祇园及花见小路私道，严禁尾随追拍艺伎与舞妓。' : '在祇園及私有巷道，嚴禁尾隨跟拍藝妓與舞妓。'}</p>
            <p>• {lang === 'en' ? 'Kyoto City enforces a strict no-smoking policy on public streets.' : lang === 'zh-CN' ? '京都市全域实行道路禁烟条例，请于指定吸烟室吸烟。' : '京都市全境嚴格實施道路禁菸條例，違者罰款。'}</p>
            <p>• {lang === 'en' ? 'Remove shoes when entering temple main halls and tatami mats.' : lang === 'zh-CN' ? '进入寺庙本堂及榻榻米殿堂前请脱鞋并轻声细语。' : '進入寺廟本堂與榻榻米前請依規脫鞋，輕聲漫步。'}</p>
          </div>

          {/* Official Hotlines & Emergency */}
          <div className="space-y-2 text-xs text-stone-400">
            <h4 className="font-serif font-bold text-sm text-stone-100 mb-2">
              {lang === 'en' ? 'Official Resources & Transit' : lang === 'zh-CN' ? '官方指南与交通资讯' : '官方指南與大眾運輸'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://kyoto.travel/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                  <span>Kyoto City Official Travel Guide (DMO KYOTO)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.city.kyoto.lg.jp/kotsu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Bus className="w-3.5 h-3.5 text-stone-500" />
                  <span>Kyoto Municipal Transportation Bureau (Bus & Subway)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.jnto.go.jp/emergency/eng/mi_guide.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
                  <span>Japan Visitor Hotline (24/7 English/Chinese support)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© {new Date().getFullYear()} Kyoto Culture Hub. Preserving & sharing Kyoto’s cultural legacy.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for international travelers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
