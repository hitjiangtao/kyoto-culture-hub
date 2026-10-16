import React from 'react';
import { TranslationDictionary, Category } from '../types';
import { Compass, Map, Bookmark, Sparkles, Filter } from 'lucide-react';

interface BottomNavProps {
  t: TranslationDictionary;
  viewMode: 'list' | 'map';
  onToggleViewMode: (mode: 'list' | 'map') => void;
  bookmarkCount: number;
  onOpenBookmarks: () => void;
  onScrollToTop: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  t,
  viewMode,
  onToggleViewMode,
  bookmarkCount,
  onOpenBookmarks,
  onScrollToTop
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/80 px-2 py-1.5 pb-safe flex items-center justify-around shadow-lg">
      
      {/* Home / Explore */}
      <button
        onClick={() => {
          onToggleViewMode('list');
          onScrollToTop();
        }}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl text-[10px] font-medium transition-colors ${
          viewMode === 'list' ? 'text-red-600 font-bold' : 'text-stone-500 hover:text-stone-900'
        }`}
      >
        <Compass className="w-5 h-5 mb-0.5" />
        <span>{t.labels.listView}</span>
      </button>

      {/* Map View */}
      <button
        onClick={() => onToggleViewMode('map')}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl text-[10px] font-medium transition-colors ${
          viewMode === 'map' ? 'text-red-600 font-bold' : 'text-stone-500 hover:text-stone-900'
        }`}
      >
        <Map className="w-5 h-5 mb-0.5" />
        <span>{t.labels.mapView}</span>
      </button>

      {/* Saved / Bookmarks */}
      <button
        onClick={onOpenBookmarks}
        className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl text-[10px] font-medium text-stone-500 hover:text-stone-900 transition-colors"
      >
        <div className="relative">
          <Bookmark className="w-5 h-5 mb-0.5" />
          {bookmarkCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[9px] font-bold px-1 rounded-full min-w-3 text-center">
              {bookmarkCount}
            </span>
          )}
        </div>
        <span>{t.labels.myBookmarks}</span>
      </button>

    </div>
  );
};
