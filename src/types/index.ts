export type Language = 'en' | 'zh-CN' | 'zh-TW';

export type Category = 'all' | 'shrine' | 'temple' | 'art_museum' | 'museum' | 'official';

export type Area = 'all' | 'higashiyama' | 'arashiyama' | 'gion' | 'central' | 'kita' | 'fushimi';

export type DateFilter = 'all' | 'today' | 'this_week' | 'this_month' | 'free_only';

export interface CulturalEvent {
  id: string;
  category: 'shrine' | 'temple' | 'art_museum' | 'museum' | 'official';
  area: Area;
  title: Record<Language, string>;
  japaneseTitle: string;
  venueName: Record<Language, string>;
  venueJapanese: string;
  address: string;
  nearestStation: Record<Language, string>;
  dates: {
    startDate: string;
    endDate: string;
    dateDisplay: Record<Language, string>;
    hours: Record<Language, string>;
  };
  admission: {
    type: 'free' | 'paid' | 'ticket_required';
    costText: Record<Language, string>;
    details?: Record<Language, string>;
  };
  summary: Record<Language, string>;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
  visitorTips: Record<Language, string[]>;
  officialUrl: string;
  imageUrl: string;
  badge?: Record<Language, string>;
  featured?: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  tags: Record<Language, string[]>;
}

export interface TranslationDictionary {
  appName: string;
  appSubtitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  searchPlaceholder: string;
  categories: Record<Category, string>;
  categoryDescriptions: Record<Category, string>;
  areas: Record<Area, string>;
  dateFilters: Record<DateFilter, string>;
  badges: {
    featured: string;
    today: string;
    official: string;
    free: string;
  };
  labels: {
    allEvents: string;
    eventCount: string;
    viewDetails: string;
    close: string;
    officialWebsite: string;
    getDirections: string;
    copyAddress: string;
    addressCopied: string;
    dateAndHours: string;
    admission: string;
    highlights: string;
    visitorTips: string;
    transitGuide: string;
    saveToBookmarks: string;
    removeFromBookmarks: string;
    myBookmarks: string;
    noBookmarksYet: string;
    noBookmarksDesc: string;
    noEventsFound: string;
    noEventsFoundDesc: string;
    clearFilters: string;
    switchLanguage: string;
    mapView: string;
    listView: string;
    calendarView: string;
    installApp: string;
    installed: string;
    appPwaPrompt: string;
    venueJapaneseNotice: string;
  };
}
