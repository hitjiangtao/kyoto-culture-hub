import { Language, TranslationDictionary } from '../types';

export const translations: Record<Language, TranslationDictionary> = {
  'en': {
    appName: 'Kyoto Cultural Pulse',
    appSubtitle: 'Curated Shrines, Temples, Museums & Official Public Events',
    heroHeadline: 'Discover the Living Heritage of Kyoto',
    heroSubheadline: 'Real-time guide to seasonal festivals, temple night viewings, art exhibitions, and official city events for global travelers.',
    searchPlaceholder: 'Search festivals, temples, exhibitions, venues...',
    categories: {
      all: 'All Categories',
      shrine: 'Shrines (神社)',
      temple: 'Temples (寺院)',
      art_museum: 'Art Museums (美術館)',
      museum: 'Museums (博物館)',
      official: 'Official Public Events (市府公報)'
    },
    categoryDescriptions: {
      all: 'Explore all public cultural happenings across Kyoto city',
      shrine: 'Traditional Shinto rituals, portable shrine processions & antique markets',
      temple: 'Zen garden illuminations, secret treasure viewings & seasonal rituals',
      art_museum: 'Contemporary art, Japanese Nihonga paintings & avant-garde exhibitions',
      museum: 'Imperial Kyoto history, National Treasures & Kyoto craft heritage',
      official: 'Festivals organized by Kyoto City Hall, official tourism boards & public squares'
    },
    areas: {
      all: 'All Districts',
      higashiyama: 'Higashiyama (Kiyomizu & Gion)',
      arashiyama: 'Arashiyama & Sagano',
      gion: 'Gion & Kawaramachi Downtown',
      central: 'Central & Imperial Palace',
      kita: 'Kita & Kamigamo (North)',
      fushimi: 'Fushimi & South Kyoto'
    },
    dateFilters: {
      all: 'All Dates',
      today: 'Happening Today',
      this_week: 'This Week',
      this_month: 'This Month',
      free_only: 'Free Admission'
    },
    badges: {
      featured: 'Special Highlight',
      today: 'Open Today',
      official: 'Kyoto Official',
      free: 'Free Entry'
    },
    labels: {
      allEvents: 'Cultural Events',
      eventCount: 'events discovered',
      viewDetails: 'View Details',
      close: 'Close',
      officialWebsite: 'Official Website',
      getDirections: 'Google Maps Directions',
      copyAddress: 'Copy Japanese Address for Taxi',
      addressCopied: 'Address Copied!',
      dateAndHours: 'Date & Opening Hours',
      admission: 'Admission & Tickets',
      highlights: 'Cultural Highlights',
      visitorTips: 'Visitor Etiquette & Tips',
      transitGuide: 'Public Transit Guide',
      saveToBookmarks: 'Save to Itinerary',
      removeFromBookmarks: 'Remove from Saved',
      myBookmarks: 'Saved Itinerary',
      noBookmarksYet: 'No Saved Events Yet',
      noBookmarksDesc: 'Tap the bookmark icon on any event to build your personalized Kyoto cultural itinerary.',
      noEventsFound: 'No Events Match Your Filters',
      noEventsFoundDesc: 'Try adjusting your category, district, or date search filters.',
      clearFilters: 'Reset All Filters',
      switchLanguage: 'Language',
      mapView: 'Map View',
      listView: 'List View',
      calendarView: 'Timeline',
      installApp: 'Install Mobile App',
      installed: 'App Installed',
      appPwaPrompt: 'Install this web app to your home screen for quick offline access during your Kyoto trip.',
      venueJapaneseNotice: 'Show this Japanese address to your taxi driver or station staff'
    }
  },
  'zh-CN': {
    appName: '京都文化周报 · Kyoto Culture Hub',
    appSubtitle: '京都市神社、寺庙、美术馆、博物馆及官方公开活动精选',
    heroHeadline: '探索京都千年的文化呼吸',
    heroSubheadline: '专为全球访客整理的京都市文化活动指南：实时掌握神社祭典、寺院夜间特别拜观、美术展讯与市政府公开节庆。',
    searchPlaceholder: '搜索祭典、寺庙特别拜观、艺术展览、地标...',
    categories: {
      all: '全部活动',
      shrine: '神社 (神道祭典)',
      temple: '寺院 (特别拜观)',
      art_museum: '美术馆 (艺术展讯)',
      museum: '博物馆 (历史国宝)',
      official: '官方活动 (市府公开)'
    },
    categoryDescriptions: {
      all: '浏览全京都市正在进行及即将开幕的丰富文化活动',
      shrine: '古老神道仪式、神舆巡行、天满宫古董集市与除灾消灾祈愿',
      temple: '世界遗产特别点灯、枯山水名园夜游、秘藏佛像限期公开',
      art_museum: '京都现代艺术、日本传统浮世绘、京瓷美术馆特展与先锋设计',
      museum: '千年古都历史沿革、京都国立博物馆国宝特展与铁道机车文化',
      official: '京都市政府、京都观光协会（DMO KYOTO）主办的市民公开文化节庆'
    },
    areas: {
      all: '全区范围',
      higashiyama: '东山区（清水寺·高台寺·八坂）',
      arashiyama: '岚山区（嵯峨野·竹林之道）',
      gion: '祇园·河原町市中心',
      central: '中京·御所（京都站与皇宫周遭）',
      kita: '北区（金阁寺·上贺茂神社）',
      fushimi: '伏见区（伏见稻荷·清酒故里）'
    },
    dateFilters: {
      all: '全部时间',
      today: '今日进行中',
      this_week: '本周精彩',
      this_month: '当月活动',
      free_only: '免费入场'
    },
    badges: {
      featured: '重点推荐',
      today: '今日开放',
      official: '官方认证',
      free: '免费入场'
    },
    labels: {
      allEvents: '文化活动精选',
      eventCount: '个精选文化活动',
      viewDetails: '查看详情',
      close: '关闭',
      officialWebsite: '官方网站 / 机构主页',
      getDirections: '在 Google 地图中导航',
      copyAddress: '复制日文地址 (给司机看)',
      addressCopied: '已成功复制日文地址！',
      dateAndHours: '举办日期与开放时间',
      admission: '门票费用与预约须知',
      highlights: '活动亮点与文化看点',
      visitorTips: '参拜礼仪与访客贴士',
      transitGuide: '公共交通指南',
      saveToBookmarks: '加入我的行程',
      removeFromBookmarks: '移出行程',
      myBookmarks: '我的行程收藏',
      noBookmarksYet: '暂无收藏的活动',
      noBookmarksDesc: '点击任意活动卡片上的书签图标，规划您的专属京都文化之旅。',
      noEventsFound: '没有找到符合条件的活动',
      noEventsFoundDesc: '您可以尝试更换分类标签、地区筛选或清空搜索关键词。',
      clearFilters: '重置所有筛选',
      switchLanguage: '语言选择',
      mapView: '地图模式',
      listView: '列表模式',
      calendarView: '时间线',
      installApp: '安装手机 App',
      installed: '已安装 App',
      appPwaPrompt: '添加到手机主屏幕，旅行途中随时查阅活动时间与乘车路线，支持离线浏览。',
      venueJapaneseNotice: '乘坐出租车或向车站工作人员问路时，出示此日文地址即可'
    }
  },
  'zh-TW': {
    appName: '京都文化日曆 · Kyoto Culture Hub',
    appSubtitle: '京都市神社、寺廟、美術館、博物館及官方公開活動薈萃',
    heroHeadline: '感受京都深邃的千年文化脈搏',
    heroSubheadline: '專為全球旅人彙整的京都市文化活動指南：即時掌握神社祭典、寺院夜間特別拜觀、美術特展與市政府公開節慶。',
    searchPlaceholder: '搜尋祭典、寺廟特別拜觀、藝術展覽、名勝...',
    categories: {
      all: '全部活動',
      shrine: '神社 (神道祭典)',
      temple: '寺院 (特別拜觀)',
      art_museum: '美術館 (藝術展覽)',
      museum: '博物館 (歷史國寶)',
      official: '官方活動 (市府公開)'
    },
    categoryDescriptions: {
      all: '探索全京都市正在舉辦及即將登場的精彩文化盛事',
      shrine: '神道御神輿巡行、天滿宮古董市集、祓禊神事與時令祈願',
      temple: '世界遺產夜間點燈、枯山水名庭夜賞、秘藏國寶佛像特別開扉',
      art_museum: '京都市京瓷美術館、日本近代膠彩畫（日畫）與國際當代策展',
      museum: '京都國立博物館珍貴古物、鐵道博物館運行及傳統工藝實演',
      official: '京都市役所、京都觀光會議局官方主辦的公開文化嘉年華與節慶'
    },
    areas: {
      all: '全區範圍',
      higashiyama: '東山區（清水寺·高台寺·八坂）',
      arashiyama: '嵐山區（嵯峨野·渡月橋）',
      gion: '祇園·河原町繁華街區',
      central: '中京·御所（京都車站與御所一帶）',
      kita: '北區（金閣寺·上賀茂神社）',
      fushimi: '伏見區（伏見稻荷·酒藏之鄉）'
    },
    dateFilters: {
      all: '全部時間',
      today: '今日進行中',
      this_week: '本週推薦',
      this_month: '當月精選',
      free_only: '免費入場'
    },
    badges: {
      featured: '重點推薦',
      today: '今日開放',
      official: '官方認證',
      free: '免費入場'
    },
    labels: {
      allEvents: '文化活動精華',
      eventCount: '個精選文化活動',
      viewDetails: '查看詳情',
      close: '關閉',
      officialWebsite: '官方網站 / 機構首頁',
      getDirections: '在 Google 地圖中導航',
      copyAddress: '複製日文地址 (便於搭計程車)',
      addressCopied: '已成功複製日文地址！',
      dateAndHours: '舉辦日期與開放時間',
      admission: '門票費用與預約須知',
      highlights: '活動亮點與文化看點',
      visitorTips: '參拜禮儀與遊客須知',
      transitGuide: '大眾運輸交通指南',
      saveToBookmarks: '加入我的行程',
      removeFromBookmarks: '移出行程',
      myBookmarks: '我的行程收藏',
      noBookmarksYet: '尚無收藏的活動',
      noBookmarksDesc: '點擊任一活動卡片上的書籤圖示，規劃專屬您的京都文化漫步旅程。',
      noEventsFound: '沒有找到符合條件的活動',
      noEventsFoundDesc: '您可以嘗試更換分類、地區篩選條件，或清空搜尋字詞。',
      clearFilters: '重設所有篩選',
      switchLanguage: '語言切換',
      mapView: '地圖模式',
      listView: '列表模式',
      calendarView: '時間線',
      installApp: '安裝手機 App',
      installed: '已安裝 App',
      appPwaPrompt: '加入手機主畫面，在京都漫步時免受網路限制，隨時查閱活動時程與搭車指引。',
      venueJapaneseNotice: '搭乘計程車或向車站人員詢問時，直接出示此日文地址即可'
    }
  }
};
