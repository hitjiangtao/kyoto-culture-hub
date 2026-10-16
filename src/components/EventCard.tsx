import React, { useState } from 'react';
import { CulturalEvent, Language, TranslationDictionary } from '../types';
import { Bookmark, MapPin, Calendar, Clock, Ticket, ArrowUpRight, Copy, Check } from 'lucide-react';

interface EventCardProps {
  event: CulturalEvent;
  lang: Language;
  t: TranslationDictionary;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSelectEvent: (event: CulturalEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  lang,
  t,
  isBookmarked,
  onToggleBookmark,
  onSelectEvent
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(event.venueJapanese);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categoryColorMap = {
    shrine: 'bg-red-50 text-red-700 border-red-200/60',
    temple: 'bg-amber-50 text-amber-800 border-amber-200/60',
    art_museum: 'bg-blue-50 text-blue-700 border-blue-200/60',
    museum: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
    official: 'bg-purple-50 text-purple-700 border-purple-200/60'
  };

  const categoryIconMap = {
    shrine: '⛩️',
    temple: '🏯',
    art_museum: '🎨',
    museum: '🏛️',
    official: '📜'
  };

  return (
    <div
      onClick={() => onSelectEvent(event)}
      className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-stone-300 transition-all duration-300 flex flex-col cursor-pointer relative"
    >
      {/* Top Image Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
        <img
          src={event.imageUrl}
          alt={event.title[lang]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/90 shadow-xs border ${categoryColorMap[event.category]}`}>
            <span>{categoryIconMap[event.category]}</span>
            <span>{t.categories[event.category].split(' ')[0]}</span>
          </span>
          {event.featured && (
            <span className="px-2 py-1 rounded-full text-[11px] font-semibold bg-red-600 text-white shadow-xs">
              {t.badges.featured}
            </span>
          )}
          {event.admission.type === 'free' && (
            <span className="px-2 py-1 rounded-full text-[11px] font-semibold bg-emerald-600 text-white shadow-xs">
              {t.badges.free}
            </span>
          )}
        </div>

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(event.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all active:scale-90 ${
            isBookmarked
              ? 'bg-stone-900 text-amber-400 shadow-md'
              : 'bg-white/80 hover:bg-white text-stone-700 shadow-xs'
          }`}
          title={isBookmarked ? t.labels.removeFromBookmarks : t.labels.saveToBookmarks}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
        </button>

        {/* Venue tag overlay at bottom of photo */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-1 text-xs font-medium text-stone-200">
            <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
            <span className="truncate">{event.venueName[lang]}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Authentic Japanese Kanji Subtitle */}
          <p className="text-[11px] font-serif tracking-wider text-stone-400 mb-1 truncate">
            {event.japaneseTitle}
          </p>

          {/* Event Title */}
          <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug group-hover:text-red-700 transition-colors line-clamp-2 mb-2">
            {event.title[lang]}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
            {event.summary[lang]}
          </p>
        </div>

        {/* Event Key Meta Info */}
        <div className="space-y-2 pt-3 border-t border-stone-100 text-xs text-stone-500">
          
          {/* Dates & Hours */}
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
            <span className="truncate">{event.dates.dateDisplay[lang]}</span>
          </div>

          {/* Admission */}
          <div className="flex items-center gap-2">
            <Ticket className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
            <span className="truncate font-medium text-stone-700">
              {event.admission.costText[lang]}
            </span>
          </div>

          {/* Nearest Transit */}
          <div className="flex items-center gap-2 text-[11px] text-stone-400">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 flex-shrink-0 ml-1 mr-1" />
            <span className="truncate">{event.nearestStation[lang]}</span>
          </div>

        </div>

        {/* Bottom Card Actions */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          
          {/* Quick Copy Taxi Japanese Address */}
          <button
            onClick={handleCopyAddress}
            className="flex items-center gap-1 text-[11px] font-medium text-stone-500 hover:text-stone-800 transition-colors p-1 rounded-md hover:bg-stone-50"
            title={t.labels.copyAddress}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">{t.labels.addressCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-400" />
                <span>{t.labels.copyAddress.split(' ')[0]}</span>
              </>
            )}
          </button>

          {/* View Details Link */}
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 group-hover:text-red-700">
            <span>{t.labels.viewDetails}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

        </div>

      </div>
    </div>
  );
};
