import React, { useState, useEffect } from 'react';
import { CulturalEvent, Language, TranslationDictionary } from '../types';
import { 
  X, Bookmark, MapPin, Calendar, Clock, Ticket, ExternalLink, 
  Copy, Check, Compass, Info, CheckCircle2, AlertCircle, Share2 
} from 'lucide-react';

interface EventDetailModalProps {
  event: CulturalEvent | null;
  lang: Language;
  t: TranslationDictionary;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  lang,
  t,
  isBookmarked,
  onToggleBookmark,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const [shareText, setShareText] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  const handleCopyJapanese = () => {
    navigator.clipboard.writeText(`${event.venueJapanese}\n${event.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title[lang],
        text: `${event.title[lang]} - Kyoto Culture Hub`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareText(true);
      setTimeout(() => setShareText(false), 2000);
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.venueJapanese + ' ' + event.address
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200/80 my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Banner Image */}
        <div className="relative h-60 sm:h-72 w-full bg-stone-900 flex-shrink-0">
          <img
            src={event.imageUrl}
            alt={event.title[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />

          {/* Action buttons on top of image */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-stone-900 shadow-md">
              {t.categories[event.category]}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white transition-all active:scale-95"
                title="Share event"
              >
                {shareText ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => onToggleBookmark(event.id)}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all active:scale-95 ${
                  isBookmarked
                    ? 'bg-stone-900 text-amber-400'
                    : 'bg-black/40 hover:bg-black/60 text-white'
                }`}
                title={isBookmarked ? t.labels.removeFromBookmarks : t.labels.saveToBookmarks}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white transition-all active:scale-95"
                aria-label={t.labels.close}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-serif text-amber-300 tracking-wider mb-1">
              {event.japaneseTitle}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
              {event.title[lang]}
            </h2>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-stone-700">
          
          {/* Key Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200/70 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-stone-900">{t.labels.dateAndHours}</p>
                <p className="text-stone-600">{event.dates.dateDisplay[lang]}</p>
                <p className="text-stone-500 text-xs mt-0.5">{event.dates.hours[lang]}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Ticket className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-stone-900">{t.labels.admission}</p>
                <p className="text-stone-600 font-medium">{event.admission.costText[lang]}</p>
              </div>
            </div>
          </div>

          {/* Special Feature: Tourist Taxi & Transit Card */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <Compass className="w-4 h-4 text-amber-700" />
                <span>{t.labels.venueJapaneseNotice}</span>
              </div>
              <button
                onClick={handleCopyJapanese}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-xs font-semibold text-amber-900 hover:bg-amber-100/50 shadow-xs active:scale-95 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">{t.labels.addressCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-700" />
                    <span>{t.labels.copyAddress}</span>
                  </>
                )}
              </button>
            </div>

            <p className="font-serif text-sm sm:text-base font-bold text-stone-900 mb-1 select-all">
              {event.venueJapanese}
            </p>
            <p className="text-xs text-stone-600 select-all mb-3">
              {event.address}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-amber-200/60 text-xs">
              <div className="flex items-center gap-1.5 text-stone-700">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="font-medium">{event.nearestStation[lang]}</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1 font-semibold text-red-700 hover:text-red-800 hover:underline"
              >
                <span>{t.labels.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Description Story */}
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              {t.labels.allEvents}
            </h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed whitespace-pre-line font-normal">
              {event.description[lang]}
            </p>
          </div>

          {/* Highlights List */}
          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.labels.highlights}</span>
            </h3>
            <ul className="space-y-2">
              {event.highlights[lang].map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cultural Etiquette & Visitor Tips */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
            <h3 className="font-serif font-bold text-base text-stone-900 mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-600" />
              <span>{t.labels.visitorTips}</span>
            </h3>
            <ul className="space-y-2">
              {event.visitorTips[lang].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {event.tags[lang].map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Bottom Actions Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200/80 flex items-center justify-between gap-3 flex-shrink-0">
          <a
            href={event.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm font-semibold text-stone-700 hover:bg-white transition-colors"
          >
            <span>{t.labels.officialWebsite}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => onToggleBookmark(event.id)}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-sm ${
              isBookmarked
                ? 'bg-stone-900 text-amber-400 hover:bg-stone-800'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            <span>{isBookmarked ? t.labels.removeFromBookmarks : t.labels.saveToBookmarks}</span>
          </button>
        </div>

      </div>

    </div>
  );
};
