import React, { useState, useEffect, useMemo } from 'react';
import { Language, Category, Area, DateFilter, CulturalEvent } from './types';
import { translations } from './data/translations';
import { culturalEvents } from './data/events';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { EventCard } from './components/EventCard';
import { EventDetailModal } from './components/EventDetailModal';
import { MapView } from './components/MapView';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

export function App() {
  // Current active language (defaults to Simplified Chinese, switchable to English / Traditional Chinese)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('kyoto_lang');
    return (saved as Language) || 'zh-CN';
  });

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedArea, setSelectedArea] = useState<Area>('all');
  const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  // Modal & Drawer States
  const [activeEvent, setActiveEvent] = useState<CulturalEvent | null>(null);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Bookmarks saved in local storage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kyoto_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // PWA Install prompt handling
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
      setIsInstallable(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallApp = async () => {
    if (!installPrompt) {
      alert(t.labels.appPwaPrompt);
      return;
    }
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstallable(false);
      setInstallPrompt(null);
    }
  };

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('kyoto_lang', newLang);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('kyoto_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedArea('all');
    setSelectedDateFilter('all');
    setSearchQuery('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[lang];

  // Filtered Events logic
  const filteredEvents = useMemo(() => {
    return culturalEvents.filter((ev) => {
      // 1. Category Filter
      if (selectedCategory !== 'all' && ev.category !== selectedCategory) {
        return false;
      }

      // 2. Area Filter
      if (selectedArea !== 'all' && ev.area !== selectedArea) {
        return false;
      }

      // 3. Date / Admission Filter
      if (selectedDateFilter === 'free_only' && ev.admission.type !== 'free') {
        return false;
      }

      // 4. Keyword Search query across multiple languages & Japanese title
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const titleEn = ev.title.en.toLowerCase();
        const titleZh = ev.title['zh-CN'].toLowerCase();
        const titleTw = ev.title['zh-TW'].toLowerCase();
        const venueJa = ev.venueJapanese.toLowerCase();
        const titleJa = ev.japaneseTitle.toLowerCase();
        const venueEn = ev.venueName.en.toLowerCase();
        const summary = ev.summary[lang].toLowerCase();
        const desc = ev.description[lang].toLowerCase();

        const match =
          titleEn.includes(query) ||
          titleZh.includes(query) ||
          titleTw.includes(query) ||
          titleJa.includes(query) ||
          venueJa.includes(query) ||
          venueEn.includes(query) ||
          summary.includes(query) ||
          desc.includes(query) ||
          ev.tags[lang].some((tag) => tag.toLowerCase().includes(query));

        if (!match) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedArea, selectedDateFilter, searchQuery, lang]);

  const bookmarkedEvents = useMemo(() => {
    return culturalEvents.filter((ev) => bookmarkedIds.includes(ev.id));
  }, [bookmarkedIds]);

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedArea !== 'all' ||
    selectedDateFilter !== 'all' ||
    searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-[#F9F8F5] flex flex-col text-stone-800 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Top Fixed Header */}
      <Header
        currentLang={lang}
        onSelectLang={handleSelectLang}
        t={t}
        bookmarkCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        isInstallable={isInstallable}
        onInstallApp={handleInstallApp}
      />

      {/* Main Hero Banner with Search */}
      <Hero
        t={t}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        totalEvents={culturalEvents.length}
      />

      {/* Sticky Secondary Category & Filter Navigation */}
      <CategoryFilter
        t={t}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedArea={selectedArea}
        onSelectArea={setSelectedArea}
        selectedDateFilter={selectedDateFilter}
        onSelectDateFilter={setSelectedDateFilter}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        onResetFilters={handleResetFilters}
        hasActiveFilters={hasActiveFilters}
        totalFiltered={filteredEvents.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Category Description Banner */}
        {selectedCategory !== 'all' && (
          <div className="mb-6 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-between gap-4">
            <div>
              <h2 className="font-serif font-bold text-base text-stone-900">
                {t.categories[selectedCategory]}
              </h2>
              <p className="text-xs text-stone-600 mt-0.5">
                {t.categoryDescriptions[selectedCategory]}
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-semibold text-red-600 hover:text-red-700 whitespace-nowrap"
            >
              {t.labels.clearFilters}
            </button>
          </div>
        )}

        {/* Mode: List View */}
        {viewMode === 'list' && (
          <>
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    lang={lang}
                    t={t}
                    isBookmarked={bookmarkedIds.includes(event.id)}
                    onToggleBookmark={toggleBookmark}
                    onSelectEvent={setActiveEvent}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 px-4 bg-white rounded-3xl border border-stone-200/80 shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">
                  {t.labels.noEventsFound}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto mb-6">
                  {t.labels.noEventsFoundDesc}
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors shadow-sm active:scale-95"
                >
                  {t.labels.clearFilters}
                </button>
              </div>
            )}
          </>
        )}

        {/* Mode: Spatial Map View */}
        {viewMode === 'map' && (
          <MapView
            events={filteredEvents}
            lang={lang}
            t={t}
            onSelectEvent={setActiveEvent}
          />
        )}

      </main>

      {/* Event Details Modal */}
      <EventDetailModal
        event={activeEvent}
        lang={lang}
        t={t}
        isBookmarked={activeEvent ? bookmarkedIds.includes(activeEvent.id) : false}
        onToggleBookmark={toggleBookmark}
        onClose={() => setActiveEvent(null)}
      />

      {/* Saved Itinerary Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedEvents={bookmarkedEvents}
        lang={lang}
        t={t}
        onSelectEvent={setActiveEvent}
        onRemoveBookmark={toggleBookmark}
      />

      {/* Mobile Floating Bottom Bar */}
      <BottomNav
        t={t}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        bookmarkCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onScrollToTop={scrollToTop}
      />

      {/* Global Footer */}
      <Footer t={t} lang={lang} />

    </div>
  );
}

export default App;
