import React from 'react';
import { Language, TranslationDictionary } from '../types';
import { Bookmark, Globe, Download, Check } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  t: TranslationDictionary;
  bookmarkCount: number;
  onOpenBookmarks: () => void;
  isInstallable: boolean;
  onInstallApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  t,
  bookmarkCount,
  onOpenBookmarks,
  isInstallable,
  onInstallApp
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-md shadow-red-600/20 flex-shrink-0">
              <span className="text-xl sm:text-2xl">⛩️</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-stone-900">
                  {t.appName.split('·')[0].trim()}
                </span>
                <span className="hidden md:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200/60">
                  KYOTO
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden sm:block truncate max-w-xs md:max-w-md">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Install App Button (PWA/Mobile trigger) */}
            {isInstallable && (
              <button
                onClick={onInstallApp}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-red-50 text-red-700 hover:bg-red-100 transition-colors border border-red-200/80"
                title={t.labels.installApp}
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.labels.installApp}</span>
              </button>
            )}

            {/* Language Switcher */}
            <div className="relative flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
              <Globe className="w-4 h-4 text-stone-400 ml-1.5 mr-1 hidden sm:block" />
              <button
                onClick={() => onSelectLang('en')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentLang === 'en'
                    ? 'bg-white text-stone-900 shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onSelectLang('zh-CN')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentLang === 'zh-CN'
                    ? 'bg-white text-stone-900 shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                简体中文
              </button>
              <button
                onClick={() => onSelectLang('zh-TW')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentLang === 'zh-TW'
                    ? 'bg-white text-stone-900 shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                繁體中文
              </button>
            </div>

            {/* Saved Itinerary Bookmark Counter */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-2 sm:px-3.5 sm:py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
              aria-label={t.labels.myBookmarks}
            >
              <Bookmark className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="hidden sm:inline">{t.labels.myBookmarks}</span>
              {bookmarkCount > 0 && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-4 text-center">
                  {bookmarkCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
