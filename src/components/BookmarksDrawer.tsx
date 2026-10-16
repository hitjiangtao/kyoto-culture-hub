import React from 'react';
import { CulturalEvent, Language, TranslationDictionary } from '../types';
import { X, Bookmark, Trash2, ArrowRight, Share2, MapPin, Calendar } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedEvents: CulturalEvent[];
  lang: Language;
  t: TranslationDictionary;
  onSelectEvent: (event: CulturalEvent) => void;
  onRemoveBookmark: (id: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedEvents,
  lang,
  t,
  onSelectEvent,
  onRemoveBookmark
}) => {
  if (!isOpen) return null;

  const handleCopyItinerary = () => {
    const text = bookmarkedEvents
      .map(
        (e, idx) =>
          `${idx + 1}. ${e.title[lang]} (${e.japaneseTitle})\n📍 ${e.venueJapanese}\n⏰ ${e.dates.dateDisplay[lang]}`
      )
      .join('\n\n');
    navigator.clipboard.writeText(`Kyoto Cultural Itinerary:\n\n${text}`);
    alert(t.labels.addressCopied || 'Itinerary copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/50 backdrop-blur-xs flex justify-end animate-fade-in">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="font-serif font-bold text-lg text-stone-900">
              {t.labels.myBookmarks}
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
              {bookmarkedEvents.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Event List */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          {bookmarkedEvents.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-4">
                <Bookmark className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-800 mb-1">
                {t.labels.noBookmarksYet}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto">
                {t.labels.noBookmarksDesc}
              </p>
            </div>
          ) : (
            bookmarkedEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => {
                  onSelectEvent(event);
                  onClose();
                }}
                className="group relative flex gap-3 p-3 rounded-2xl bg-stone-50 hover:bg-white border border-stone-200/80 hover:border-stone-300 hover:shadow-md transition-all cursor-pointer"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title[lang]}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-red-600 uppercase tracking-wider">
                      {t.categories[event.category]}
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 line-clamp-1 group-hover:text-red-700">
                      {event.title[lang]}
                    </h4>
                    <p className="text-[11px] text-stone-400 truncate">
                      {event.japaneseTitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                    <span className="truncate max-w-[150px]">{event.venueName[lang]}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveBookmark(event.id);
                      }}
                      className="text-stone-400 hover:text-red-600 p-1 rounded-md transition-colors"
                      title={t.labels.removeFromBookmarks}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {bookmarkedEvents.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center gap-2">
            <button
              onClick={handleCopyItinerary}
              className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Copy Full Itinerary List</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
