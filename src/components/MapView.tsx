import React, { useState } from 'react';
import { CulturalEvent, Language, TranslationDictionary, Category } from '../types';
import { MapPin, ArrowRight, ExternalLink, Compass } from 'lucide-react';

interface MapViewProps {
  events: CulturalEvent[];
  lang: Language;
  t: TranslationDictionary;
  onSelectEvent: (event: CulturalEvent) => void;
}

export const MapView: React.FC<MapViewProps> = ({
  events,
  lang,
  t,
  onSelectEvent
}) => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(
    events.length > 0 ? events[0].id : null
  );

  const selectedEvent = events.find((e) => e.id === selectedEventId) || events[0];

  // Map Kyoto geographic bounds approx:
  // North: 35.05 (Kita/Kamigamo), South: 34.96 (Fushimi/To-ji)
  // West: 135.71 (Arashiyama), East: 135.80 (Higashiyama)
  const minLat = 34.965;
  const maxLat = 35.055;
  const minLng = 135.715;
  const maxLng = 135.805;

  const getPositionPercent = (lat: number, lng: number) => {
    const x = ((lng - minLng) / (maxLng - minLng)) * 100;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 100;
    return {
      left: `${Math.max(8, Math.min(92, x))}%`,
      top: `${Math.max(10, Math.min(90, y))}%`
    };
  };

  const categoryColor: Record<string, string> = {
    shrine: 'bg-red-600 border-red-200 text-white shadow-red-500/30',
    temple: 'bg-amber-600 border-amber-200 text-white shadow-amber-500/30',
    art_museum: 'bg-blue-600 border-blue-200 text-white shadow-blue-500/30',
    museum: 'bg-emerald-600 border-emerald-200 text-white shadow-emerald-500/30',
    official: 'bg-purple-600 border-purple-200 text-white shadow-purple-500/30'
  };

  const categoryIcon: Record<string, string> = {
    shrine: '⛩️',
    temple: '🏯',
    art_museum: '🎨',
    museum: '🏛️',
    official: '📜'
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col lg:flex-row min-h-[620px]">
      
      {/* Left/Main Spatial Visual Map Area */}
      <div className="relative flex-1 bg-stone-100 min-h-[420px] lg:min-h-[620px] overflow-hidden select-none">
        
        {/* Kyoto Stylized Grid & River Background */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Kamogawa River stylized line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path
            d="M 68 0 Q 64 30, 62 50 T 52 80 T 48 100"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <text x="66" y="25" fill="#3B82F6" fontSize="3" fontWeight="bold" opacity="0.6">
            鴨川 (Kamogawa River)
          </text>
        </svg>

        {/* Major District Landmarks Overlay */}
        <div className="absolute top-4 left-6 text-xs font-serif font-bold text-stone-400 pointer-events-none">
          ▲ 北山 (Kitayama / North Kyoto)
        </div>
        <div className="absolute top-1/2 left-4 text-xs font-serif font-bold text-stone-400 pointer-events-none">
          ◀ 嵐山 (Arashiyama)
        </div>
        <div className="absolute top-1/3 right-6 text-xs font-serif font-bold text-stone-400 pointer-events-none">
          ▶ 東山 (Higashiyama & Gion)
        </div>
        <div className="absolute bottom-6 left-1/3 text-xs font-serif font-bold text-stone-400 pointer-events-none">
          ▼ 京都駅 (Kyoto Station) & 伏見 (Fushimi)
        </div>

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-stone-200/80 shadow-xs text-xs space-y-1.5 hidden sm:block z-10">
          <p className="font-semibold text-stone-800 mb-1 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-stone-600" />
            <span>{t.labels.mapView}</span>
          </p>
          <div className="flex items-center gap-1.5 text-stone-600">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <span>{t.categories.shrine}</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-600">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
            <span>{t.categories.temple}</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-600">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span>{t.categories.art_museum}</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-600">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span>{t.categories.museum}</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-600">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
            <span>{t.categories.official}</span>
          </div>
        </div>

        {/* Interactive Event Map Pins */}
        {events.map((ev) => {
          const pos = getPositionPercent(ev.coordinates.lat, ev.coordinates.lng);
          const isSelected = selectedEvent?.id === ev.id;

          return (
            <button
              key={ev.id}
              onClick={() => setSelectedEventId(ev.id)}
              style={{ left: pos.left, top: pos.top }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-20 ${
                isSelected ? 'scale-125 z-30' : 'hover:scale-110'
              }`}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-sm shadow-md border-2 transition-all ${
                  categoryColor[ev.category]
                } ${isSelected ? 'ring-4 ring-stone-900/20 shadow-xl' : ''}`}
              >
                <span>{categoryIcon[ev.category]}</span>
              </div>
              
              {/* Floating label pill */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded-md bg-stone-900/85 backdrop-blur-sm text-white text-[10px] font-medium whitespace-nowrap shadow-md pointer-events-none transition-opacity ${
                  isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {ev.venueName[lang]}
              </div>
            </button>
          );
        })}

      </div>

      {/* Right Detail Preview Panel for Selected Pin */}
      {selectedEvent && (
        <div className="w-full lg:w-96 p-5 sm:p-6 bg-white border-t lg:border-t-0 lg:border-l border-stone-200 flex flex-col justify-between">
          <div>
            <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-stone-100">
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title[lang]}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md shadow-xs">
                {t.categories[selectedEvent.category]}
              </span>
            </div>

            <p className="text-xs font-serif text-stone-400 mb-1">
              {selectedEvent.japaneseTitle}
            </p>
            <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug mb-2">
              {selectedEvent.title[lang]}
            </h3>
            <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
              {selectedEvent.summary[lang]}
            </p>

            <div className="space-y-2 text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span className="truncate font-medium text-stone-800">{selectedEvent.venueName[lang]}</span>
              </div>
              <div className="text-[11px] text-stone-500 pl-5">
                {selectedEvent.nearestStation[lang]}
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-stone-100 flex items-center gap-2">
            <button
              onClick={() => onSelectEvent(selectedEvent)}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm active:scale-95"
            >
              <span>{t.labels.viewDetails}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
