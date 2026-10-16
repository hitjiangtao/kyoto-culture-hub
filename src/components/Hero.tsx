import React from 'react';
import { TranslationDictionary, Category } from '../types';
import { Search, X, Sparkles, MapPin, Calendar } from 'lucide-react';

interface HeroProps {
  t: TranslationDictionary;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  totalEvents: number;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  totalEvents
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-[#F9F8F5] pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-stone-200/60">
      
      {/* Decorative Traditional Kyoto Motifs */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-12 w-80 h-80 bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200/80 mb-4 shadow-sm animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span>京都市公認 · {totalEvents} {t.labels.eventCount}</span>
        </div>

        {/* Hero Title with Japanese Calligraphic serif feel */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
          {t.heroHeadline}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-600 font-normal leading-relaxed mb-8">
          {t.heroSubheadline}
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center bg-white rounded-2xl shadow-lg shadow-stone-200/60 border border-stone-200 p-1.5 focus-within:ring-2 focus-within:ring-red-500/30 focus-within:border-red-500 transition-all">
            <div className="pl-3.5 pr-2 text-stone-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent py-2.5 sm:py-3 pr-4 text-sm text-stone-900 placeholder-stone-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="p-1.5 mr-1 text-stone-400 hover:text-stone-600 rounded-lg transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Category Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:text-stone-900'
            }`}
          >
            {t.categories.all}
          </button>
          <button
            onClick={() => onSelectCategory('shrine')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              selectedCategory === 'shrine'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-red-300 hover:text-red-700'
            }`}
          >
            <span>⛩️</span>
            <span>{t.categories.shrine}</span>
          </button>
          <button
            onClick={() => onSelectCategory('temple')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              selectedCategory === 'temple'
                ? 'bg-amber-700 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-300 hover:text-amber-800'
            }`}
          >
            <span>🏯</span>
            <span>{t.categories.temple}</span>
          </button>
          <button
            onClick={() => onSelectCategory('art_museum')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              selectedCategory === 'art_museum'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-blue-300 hover:text-blue-700'
            }`}
          >
            <span>🎨</span>
            <span>{t.categories.art_museum}</span>
          </button>
          <button
            onClick={() => onSelectCategory('museum')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              selectedCategory === 'museum'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-300 hover:text-emerald-800'
            }`}
          >
            <span>🏛️</span>
            <span>{t.categories.museum}</span>
          </button>
          <button
            onClick={() => onSelectCategory('official')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 ${
              selectedCategory === 'official'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-purple-300 hover:text-purple-800'
            }`}
          >
            <span>📜</span>
            <span>{t.categories.official}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
