import { CulturalEvent } from '../types';

export const culturalEvents: CulturalEvent[] = [
  // ----------------------------------------------------
  // 1. SHRINERS (神社)
  // ----------------------------------------------------
  {
    id: 'shrine-yasaka-gion',
    category: 'shrine',
    area: 'gion',
    featured: true,
    title: {
      en: 'Gion Festival & Yasaka Shrine Evening Lantern Dedication',
      'zh-CN': '祇园祭神事与八坂神社千灯奉纳',
      'zh-TW': '祇園祭神事與八坂神社千燈奉納'
    },
    japaneseTitle: '祇園祭神事・八坂神社 提灯点灯',
    venueName: {
      en: 'Yasaka Shrine (Gion-san)',
      'zh-CN': '八坂神社（祇园社）',
      'zh-TW': '八坂神社（祇園社）'
    },
    venueJapanese: '八坂神社（京都市東山区祇園町北側625番地）',
    address: '625 Gionmachi Kitagawa, Higashiyama Ward, Kyoto, 605-0073',
    nearestStation: {
      en: '5 min walk from Gion-Shijo Station (Keihan Line) or Kyoto-Kawaramachi (Hankyu)',
      'zh-CN': '京阪本线“祇园四条站”步行5分钟，或阪急“京都河原町站”步行8分钟',
      'zh-TW': '京阪本線「祇園四條站」徒步5分鐘，或阪急「京都河原町站」徒步8分鐘'
    },
    dates: {
      startDate: '2026-07-01',
      endDate: '2026-07-31',
      dateDisplay: {
        en: 'Throughout July (Lanterns lit daily 18:00 - 22:00)',
        'zh-CN': '7月全月举办（舞殿灯笼每日18:00 - 22:00点亮）',
        'zh-TW': '7月全月舉辦（舞殿燈籠每日18:00 - 22:00點燈）'
      },
      hours: {
        en: 'Open 24 hours (Grounds); Main Hall prayers 09:00 - 17:00',
        'zh-CN': '全天24小时开放境内参拜；授产所与御朱印 09:00 - 17:00',
        'zh-TW': '全天24小時開放境內參拜；御守御朱印 09:00 - 17:00'
      }
    },
    admission: {
      type: 'free',
      costText: {
        en: 'Free admission to shrine grounds',
        'zh-CN': '神社境内免费参拜',
        'zh-TW': '神社境內免費參拜'
      }
    },
    summary: {
      en: 'Kyoto’s most legendary Shinto festival center, featuring hundreds of glowing merchant lanterns at the sacred dance pavilion and spiritual purification rituals.',
      'zh-CN': '京都千年最具代表性的神道信仰核心。夜幕降临后，舞殿四周数百盏名家奉纳白灯笼同时点亮，洋溢着古都夏夜的典雅与静谧。',
      'zh-TW': '京都千年最具代表性的神道信仰核心。夜幕降臨後，舞殿四周數百盞京都名店奉納之提燈齊明，映照出古都夏夜的典雅與神聖。'
    },
    description: {
      en: 'Yasaka Shrine, founded over 1,350 years ago, is the spiritual headquarters of the famous Gion Festival. Even outside peak parade days, visitors can witness traditional Shinto purification rituals, purchase authentic omamori talismans, and enjoy the magical warm glow of the lantern-adorned central dance stage (Buden).',
      'zh-CN': '八坂神社创立于公元656年，是日本全国三千多座八坂神社与祭祀素盏鸣尊的总本社。这里不仅是日本三大祭之一“祇园祭”的主办舞台，其标志性的中央舞殿四周环绕着写有京都花街各料亭与百年老铺商号的献灯，是体验地道京都夜间传统文化不可错过的经典圣地。',
      'zh-TW': '八坂神社創立於西元656年，為日本全國三千餘座八坂神社之總本社，亦是日本三大祭「祇園祭」的策源聖地。境內中央舞殿懸掛數百盞各大祇園茶屋與老字號料亭奉獻的白提燈，夜幕初上時金光璀璨，是感受京都深厚神道文化的絕佳體驗。'
    },
    highlights: {
      en: [
        'Over 300 traditional glowing lanterns dedicated by Gion tea houses and artisan shops',
        'Utsukushigozensha: The Sub-shrine of Beauty blessed with sacred cosmetic spring water',
        'Close walking distance to both Hanami-koji geisha district and Maruyama Park'
      ],
      'zh-CN': [
        '舞殿四周300余盏手工纸灯笼夜间点亮，为京都代表性夜景之一',
        '“美御前社”涌出的美容神水，相传轻拍两三滴可润泽肌肤与身心',
        '步行即达花见小路古街、圆山公园枝垂樱与白川巽桥'
      ],
      'zh-TW': [
        '舞殿四周300餘盞手工紙提燈夜間點亮，古都傳統風情洋溢',
        '美御前社前湧出之「美容水」，祈求容顏端麗與氣質昇華',
        '徒步即可漫步至花見小路茶屋街與白川巽橋石疊路'
      ]
    },
    visitorTips: {
      en: [
        'Photography is welcome, but do not use tripods on the crowded dance stage terrace',
        'Traditional Shinto bowing protocol: Bow twice, clap hands twice, make your wish, bow once',
        'Best photo timing: 30 minutes after sunset during twilight'
      ],
      'zh-CN': [
        '参拜礼仪：两拜、两拍手、一拜（心存敬意祈福）',
        '舞殿周围人流较多，请勿架设大型三脚架妨碍行人',
        '最佳拍摄时间：日落后30分钟的“蓝调时刻”，此时天空深蓝与灯笼暖黄形成绝美对比'
      ],
      'zh-TW': [
        '參拜禮儀：二拜、二拍手、深祈願、最後一拜',
        '舞殿前人潮聚集，請勿使用大型三腳架阻礙通行',
        '推薦拍攝時段：黃昏日落後半小時藍調時分，燈影映襯最為動人'
      ]
    },
    officialUrl: 'https://www.yasaka-jinja.or.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 35.0037, lng: 135.7785 },
    tags: {
      en: ['Shinto Ritual', 'Night Illumination', 'Gion', 'Historic Heritage'],
      'zh-CN': ['神道仪式', '夜间点灯', '祇园商圈', '千年古迹'],
      'zh-TW': ['神道儀式', '夜間點燈', '祇園商圈', '千年古蹟']
    }
  },
  {
    id: 'shrine-kitano-tenjin',
    category: 'shrine',
    area: 'kita',
    featured: false,
    title: {
      en: 'Kitano Tenmangu Monthly "Tenjin-san" Antique & Cultural Fair',
      'zh-CN': '北野天满宫“天神市”古董集市与四季御苑',
      'zh-TW': '北野天滿宮「天神市」古董市集與四季御苑'
    },
    japaneseTitle: '北野天満宮 天神市（縁日）・もみじ苑・梅花祭',
    venueName: {
      en: 'Kitano Tenmangu Shrine',
      'zh-CN': '北野天满宫',
      'zh-TW': '北野天滿宮'
    },
    venueJapanese: '北野天満宮（京都市上京区馬喰町）',
    address: 'Bakurocho, Kamigyo Ward, Kyoto, 602-8386',
    nearestStation: {
      en: 'Kyoto City Bus #50 or #101 to "Kitano Tenmangu-mae" stop; 5 min from Keifuku Hakubaicho',
      'zh-CN': '京都市营巴士50路、101路直达“北野天满宫前”站；或京福电铁“北野白梅町站”步行5分钟',
      'zh-TW': '京都市營巴士50、101路至「北野天滿宮前」；或京福電鐵「北野白梅町站」步行5分鐘'
    },
    dates: {
      startDate: '2026-01-25',
      endDate: '2026-12-25',
      dateDisplay: {
        en: 'Held on the 25th of every month (Antique fair 06:00 - 16:00)',
        'zh-CN': '每月25日定期举办（全天古董集市 06:00 - 16:00）',
        'zh-TW': '每月25日固定舉辦（全天古董市集 06:00 - 16:00）'
      },
      hours: {
        en: 'Shrine gates 05:00 - 18:00; Treasure Hall 09:00 - 16:00',
        'zh-CN': '神社开门 05:00 - 18:00；宝物殿 09:00 - 16:00',
        'zh-TW': '神社開門 05:00 - 18:00；寶物殿 09:00 - 16:00'
      }
    },
    admission: {
      type: 'free',
      costText: {
        en: 'Free admission to shrine & fair (Treasure Hall: ¥1,000)',
        'zh-CN': '神社及集市免费开放（宝物殿参观1,000日元）',
        'zh-TW': '神社及市集免費開放（寶物殿門票1,000日圓）'
      }
    },
    summary: {
      en: 'Kyoto’s premier monthly flea market packed with over 1,000 stalls selling vintage kimono, ceramics, Edo-period antiques, and piping-hot street food.',
      'zh-CN': '京都三大著名缘日集市之一。每月25日，上千家古董铺、和服旧货、陶艺工匠与京都传统小吃摊位汇聚参道两旁，热闹非凡。',
      'zh-TW': '京都三大緣日市集之一。每月25日千餘家古董商、二手絲綢和服、茶具陶藝與關西屋台小吃匯聚參道兩側，生機勃勃。'
    },
    description: {
      en: 'Dedicated to Sugawara no Michizane, the patron deity of scholars and education, Kitano Tenmangu boasts over 1,500 plum trees and national treasure architecture. On the 25th of every month, celebrating the deity’s birth and memorial day, the entire district transforms into an immense open-air treasure hunt.',
      'zh-CN': '北野天满宫是日本全国约一万两千座天满宫与天神社的总本社，供奉着“学问之神”菅原道真。每月25日举办的“天神市”是淘寻二手复古和服（Kimono）、古董木版画、伊万里烧瓷器及昭和玩具的绝佳去处。春季梅花苑与秋季红叶苑更是京都市著名的自然名胜。',
      'zh-TW': '北野天滿宮為全日本天滿宮之總本社，供奉學問之神菅原道真。每逢25日緣日市集，參道上聚集來自日本各地的古董商與手工職人，是尋訪正統二手和服、漆器、古書畫與品嚐現烤御手洗丸子的絕佳去處。'
    },
    highlights: {
      en: [
        'Over 1,000 open-air antique and food vendors spanning the entire precinct',
        'Stunning collection of bronze and stone "Nade-ushi" (revered reclining ox statues to rub for wisdom)',
        'Plum blossom garden (Baika-en) featuring 50 varieties and 1,500 trees in early spring'
      ],
      'zh-CN': [
        '上千家古董、旧和服、陶瓷器具与风味小吃摊位，堪称淘宝圣地',
        '抚摸境内著名的“抚牛”（抚摸牛头相传可增长智慧、祈愿金榜题名）',
        '初春梅苑拥有约50种、1500株红白梅花争相竞放'
      ],
      'zh-TW': [
        '逾千家露天攤位，為古董迷、骨董陶瓷與和服愛好者的尋寶天堂',
        '摸摸境內象徵智慧的「撫牛」銅像，祈求學業進步與考試合格',
        '梅花季期間境內1,500株梅樹滿開，清香四溢'
      ]
    },
    visitorTips: {
      en: [
        'Cash is preferred by almost all antique stallholders; bring Japanese yen in small denominations',
        'Early morning (07:30 - 09:30) is the best time for prime antique hunting before crowds arrive',
        'Polite haggling is acceptable on high-value vintage items'
      ],
      'zh-CN': [
        '摊位普遍仅支持日元现金支付，建议提前备好小面额纸币与硬币',
        '建议上午7:30 - 9:30前往，既能避开下午的人流高峰，又能淘到最优质的古董旧物',
        '高价值古董可礼貌商谈价格，但建议尊重店主报价'
      ],
      'zh-TW': [
        '露天攤商多數僅收日圓現金，請備妥千圓紙鈔與零錢',
        '建議清晨7:30至9:30抵達，避開正午人潮並挑選最精緻的骨董好物',
        '選購多件和服或瓷器時可嘗試禮貌議價'
      ]
    },
    officialUrl: 'https://kitanotenmangu.or.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 35.0315, lng: 135.7352 },
    tags: {
      en: ['Antique Flea Market', 'Education Deity', 'Vintage Kimono', 'Plum Blossom'],
      'zh-CN': ['古董集市', '学问祈愿', '复古和服', '名胜梅花'],
      'zh-TW': ['古董市集', '學問之神', '古著和服', '梅花名所']
    }
  },
  {
    id: 'shrine-shimogamo-mitarashi',
    category: 'shrine',
    area: 'kita',
    featured: false,
    title: {
      en: 'Shimogamo Shrine Mitarashi Sacred Spring Cleansing Ritual',
      'zh-CN': '下鸭神社御手洗祭与糺之森古森林漫步',
      'zh-TW': '下鴨神社御手洗祭與糺之森漫步'
    },
    japaneseTitle: '下鴨神社 御手洗祭（みたらし祭）・糺の森',
    venueName: {
      en: 'Shimogamo Shrine (Kamo Mioya Shrine)',
      'zh-CN': '下鸭神社（贺茂御祖神社）',
      'zh-TW': '下鴨神社（賀茂御祖神社）'
    },
    venueJapanese: '下鴨神社（京都市左京区下鴨泉川町59）',
    address: '59 Shimogamo Izumikawacho, Sakyo Ward, Kyoto, 606-0805',
    nearestStation: {
      en: '10 min walk from Demachiyanagi Station (Keihan / Eizan Railway)',
      'zh-CN': '京阪电车 / 叡山电铁“出町柳站”步行约10分钟',
      'zh-TW': '京阪電車 / 叡山電鐵「出町柳站」步行約10分鐘'
    },
    dates: {
      startDate: '2026-07-19',
      endDate: '2026-07-28',
      dateDisplay: {
        en: 'Late July Annual Ritual (09:00 - 20:00 Daily during festival)',
        'zh-CN': '每年7月下旬为期10天举行（每日 09:00 - 20:00）',
        'zh-TW': '每年7月下旬為期10天舉行（每日 09:00 - 20:00）'
      },
      hours: {
        en: 'Precinct open 06:30 - 17:00 (Extended to 20:00 during festivals)',
        'zh-CN': '神社开门 06:30 - 17:00（节日期间延长至 20:00）',
        'zh-TW': '神社開門 06:30 - 17:00（祭典期間延長至 20:00）'
      }
    },
    admission: {
      type: 'paid',
      costText: {
        en: 'Shrine entry free; Mitarashi candle offering: ¥300',
        'zh-CN': '神社免费入内；御手洗池献灯祈愿300日元',
        'zh-TW': '神社免費參拜；御手洗池獻燈水浸300日圓'
      }
    },
    summary: {
      en: 'UNESCO World Heritage shrine nestled in ancient primeval forest. During the festival, visitors wade knee-deep into icy natural springs with lit candles to pray for good health.',
      'zh-CN': '世界文化遗产。信众与游客手持白烛，卷起裤管步入清凉彻骨的御手洗池天然泉水中献灯，祈求全年无病无灾、身心康泰。这里也是“日式御手洗团子”的发祥地。',
      'zh-TW': '世界文化遺產。每逢御手洗祭，大人小孩紛紛捲起褲管步入清澈冰涼的御手洗川泉水中手捧燭光獻燈，祈求消災解厄、祛病延年。更是御手洗糰子之起源聖地。'
    },
    description: {
      en: 'Surrounded by the pristine Tadasu no Mori forest which has stood since the Jomon period, Shimogamo Shrine is one of the oldest sanctuaries in Kyoto. The bubbles rising from the spring at Mitarashi Pond inspired Japan’s iconic skewered sweet soy Mitarashi dango rice dumplings.',
      'zh-CN': '下鸭神社被上万棵古树环绕的原生古森林“糺之森”所守护，历史比京都建都还要久远。在御手洗池漫过膝盖的清泉中步行献灯是极具沉浸感的日本神道夏日风物诗。出神社后，推荐在茶屋品尝香糯诱人的始祖御手洗烤丸子。',
      'zh-TW': '下鴨神社坐落於擁有千年以上樹齡的原生林「糺之森」之中。在夏日涉入冰涼甘冽的天然泉水點燃祈福白燭，洗滌塵世浮躁。參道兩旁的森林小道與微風令人心曠神怡。'
    },
    highlights: {
      en: [
        'Submerging feet in natural cold spring water to offer glowing white candles',
        'Kawai Shrine inside the forest: Dedicated to the deity of beauty and inner grace',
        'Tadasu no Mori: A serene 124,000-square-meter virgin forest sanctuary'
      ],
      'zh-CN': [
        '涉入御手洗冰泉点烛献灯，体验独特的神道祓禊祈福',
        '糺之森入口处的“河合神社”：供奉第一美丽之神，绘有独特的美人绘马',
        '品尝发源于此处的现烤“加茂御手洗团子”，浓郁焦香'
      ],
      'zh-TW': [
        '親踏御手洗川清泉，手持燭火獻祭神前，消暑又神聖',
        '糺之森內的河合神社：女性旅人必訪，祈願內外兼美之「鏡繪馬」',
        '品味正宗元祖御手洗醬油烤糰子，感受和風甜點魅力'
      ]
    },
    visitorTips: {
      en: [
        'Bring a small hand towel or tenugui to dry your feet after wading in the spring pond',
        'Wear pants that can easily be rolled above the knees or comfortable skirts',
        'Plastic bags are provided at the entrance to carry your shoes while in the pond'
      ],
      'zh-CN': [
        '下水前神社提供鞋袋，请自备一条便携小毛巾用于上岸后擦脚',
        '建议穿着容易卷过膝盖的宽松长裤、短裤或裙装',
        '夜晚点灯后氛围尤佳，水波倒映烛火，如梦似幻'
      ],
      'zh-TW': [
        '現場會發放裝鞋塑膠袋，請隨身攜帶擦腳小手帕或毛巾',
        '建議穿著容易捲至膝蓋上方的休閒褲或裙裝便於涉水',
        '傍晚至入夜點燈時段前來，水面燭火搖曳最為浪漫'
      ]
    },
    officialUrl: 'https://www.shimogamo-jinja.or.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 35.0392, lng: 135.773 },
    tags: {
      en: ['UNESCO Heritage', 'Spring Purification', 'Ancient Forest', 'Sweet Dumplings'],
      'zh-CN': ['世界遗产', '清泉除灾', '原始森林', '御手洗团子'],
      'zh-TW': ['世界遺產', '泉水祓禊', '原始森林', '御手洗糰子']
    }
  },

  // ----------------------------------------------------
  // 2. TEMPLES (寺院)
  // ----------------------------------------------------
  {
    id: 'temple-kiyomizu-night',
    category: 'temple',
    area: 'higashiyama',
    featured: true,
    title: {
      en: 'Kiyomizu-dera Temple Special Night Illumination & Blue Beam of Mercy',
      'zh-CN': '清水寺夜间特别拜观与大慈大悲苍空之光',
      'zh-TW': '清水寺夜間特別拜觀與大慈悲觀音之光'
    },
    japaneseTitle: '音羽山 清水寺 夜間特別拝観・青い光',
    venueName: {
      en: 'Kiyomizu-dera Temple',
      'zh-CN': '清水寺（音羽山）',
      'zh-TW': '清水寺（音羽山）'
    },
    venueJapanese: '清水寺（京都市東山区清水1丁目294）',
    address: '1-294 Kiyomizu, Higashiyama Ward, Kyoto, 605-0862',
    nearestStation: {
      en: 'Kyoto City Bus #206 or #100 to "Kiyomizu-michi" or "Gojo-zaka" stop, 10 min uphill walk',
      'zh-CN': '京都市营巴士206路、100路至“清水道”或“五条坂”站，沿斜坡步行约10分钟',
      'zh-TW': '京都市營巴士206路、100路至「清水道」或「五條坂」站，沿坡道步行約10分鐘'
    },
    dates: {
      startDate: '2026-11-18',
      endDate: '2026-12-03',
      dateDisplay: {
        en: 'Autumn Viewing: Late Nov - Early Dec | Spring: Late Mar - Early Apr',
        'zh-CN': '秋季特别夜间拜观：11月中旬 - 12月上旬；春季夜樱：3月下旬 - 4月上旬',
        'zh-TW': '秋季特別夜間拜觀：11月中旬 - 12月上旬；春季夜櫻：3月下旬 - 4月上旬'
      },
      hours: {
        en: 'Special Night Opening 17:30 - 21:30 (Last entry 21:00)',
        'zh-CN': '夜间特别点灯 17:30 - 21:30（21:00停止入场）',
        'zh-TW': '夜間特別點燈 17:30 - 21:30（21:00最後入場）'
      }
    },
    admission: {
      type: 'paid',
      costText: {
        en: 'Adults: ¥400 | Children: ¥200',
        'zh-CN': '成人400日元，中小学生200日元',
        'zh-TW': '全票400日圓，中小學學生200日圓'
      }
    },
    summary: {
      en: 'Kyoto’s most celebrated stage illuminated against the night sky, featuring a luminous blue beam shooting across the ancient capital representing Kannon’s mercy.',
      'zh-CN': '依悬崖而建的世界遗产巨型木构本堂悬空大舞台。在千株枫叶与樱花映衬下，一束代表观音大慈大悲的湛蓝光束划破古都夜空，壮丽绝伦。',
      'zh-TW': '依崖壁而建的國寶棟樑「清水舞台」。在萬千璀璨楓紅與櫻林掩映中，象徵觀音菩薩慈悲心念的澄澈藍光直穿京都夜空，令人嘆為觀止。'
    },
    description: {
      en: 'Perched on the slope of Mount Otowa without a single nail in its towering wooden stage, Kiyomizu-dera is a crown jewel of Buddhist architecture. During the bi-annual night viewing seasons, the temple transforms into a dreamlike world. The famous blue beam of light (Seiran) originates from the temple grounds and can be seen from all over the Kyoto basin.',
      'zh-CN': '清水寺建于公元778年，本堂前方的“清水大舞台”由139根巨大的榉木圆柱以榫卯结构支撑搭建，未使用一根铁钉。在春秋两季的夜间特别拜观中，整座音羽山在泛光灯烘托下宛若悬浮仙境。顺着山道向下，还可在著名的“音羽之瀑”品饮保佑健康、学业与良缘的三脉灵泉。',
      'zh-TW': '清水寺以不用一根釘子的高超懸造工法築成著名的「清水舞台」。春秋兩季特別點燈夜遊時，璀璨林木與千年伽藍交相輝映。遊人漫步其間，還可前往「音羽之瀧」以長柄長杓盛接三股甘泉，祈求學問、健康或緣分。'
    },
    highlights: {
      en: [
        'The awe-inspiring Kiyomizu Stage floating 13 meters above the autumn foliage or spring sakura',
        'The single iconic cyan-blue light beam cutting across Kyoto’s skyline toward the western horizon',
        'Otowa Waterfall: Taste the three streams of sacred mountain spring water'
      ],
      'zh-CN': [
        '悬空13米高达四层楼的纯木构“清水舞台”，俯瞰锦绣枫林与京都夜景',
        '代表观世音菩萨慈悲照拂的苍空青光（一束耀眼蓝光射向古都天际）',
        '音羽瀑布：饮用自古流传的天然灵水，祈求学业有成、恋爱良缘与长寿'
      ],
      'zh-TW': [
        '高懸於山谷之上13公尺的清水大舞台，俯瞰壯闊夜景與萬千楓葉',
        '穿透京都夜空的標誌性觀音青藍光束，象徵祥和與慈悲照拂',
        '音羽之瀧：以特製長杓飲取象徵健康、學業或戀愛的甘美山泉'
      ]
    },
    visitorTips: {
      en: [
        'Expect long queues during peak autumn weekends; arriving around 20:00 often provides lighter crowds',
        'The slope up Ninenzaka and Sannenzaka can be steep; comfortable walking shoes are strongly recommended',
        'Tripods and monopods are strictly prohibited inside the main stage area'
      ],
      'zh-CN': [
        '秋季赏枫高峰期排队人数较多，建议在20:00以后错峰入场，人流明显减少',
        '前往寺庙的二年坂、三年坂石阶坡道较陡，建议穿防滑轻便步行鞋',
        '本堂大舞台内严禁使用三脚架、自拍杆或单脚架'
      ],
      'zh-TW': [
        '旺季週末人潮較多，建議晚上20:00後抵達錯峰入內，參觀動線更為從容',
        '二年坂與三年坂皆為古樸石階斜坡，建議穿著舒適好走的平底鞋',
        '清水舞台全區嚴禁架設三腳架及自拍棒以維護動線安全'
      ]
    },
    officialUrl: 'https://www.kiyomizudera.or.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 34.9948, lng: 135.785 },
    tags: {
      en: ['World Heritage', 'Night Illumination', 'Sacred Waterfall', 'Wooden Stage'],
      'zh-CN': ['世界遗产', '夜间特别点灯', '灵泉祈福', '木构舞台'],
      'zh-TW': ['世界遺產', '夜間點燈', '靈泉祈福', '木構舞台']
    }
  },
  {
    id: 'temple-toji-kobo',
    category: 'temple',
    area: 'central',
    featured: false,
    title: {
      en: 'To-ji Temple "Kobo-san" Fair & Pagoda Special Opening',
      'zh-CN': '东寺“弘法市”大型古董集市与五重塔特别公开',
      'zh-TW': '東寺「弘法市」大型市集與五重塔特別公開'
    },
    japaneseTitle: '教王護国寺（東寺） 弘法市（縁日）・国宝五重塔初層公開',
    venueName: {
      en: 'To-ji Temple (Kyo-o-gokoku-ji)',
      'zh-CN': '东寺（教王护国寺）',
      'zh-TW': '東寺（教王護國寺）'
    },
    venueJapanese: '東寺（京都市南区九条町1番地）',
    address: '1 Kujocho, Minami Ward, Kyoto, 601-8473',
    nearestStation: {
      en: '15 min walk southwest from Kyoto Station Hachijo Exit; or 5 min walk from Kintetsu Toji Station',
      'zh-CN': '京都站八条口向西南步行15分钟；或近铁京都线“东寺站”步行5分钟',
      'zh-TW': '京都車站八條口往西南步行15分鐘；或近鐵京都線「東寺站」步行5分鐘'
    },
    dates: {
      startDate: '2026-01-21',
      endDate: '2026-12-21',
      dateDisplay: {
        en: 'Held on the 21st of every month (Fair: 05:00 - 16:00)',
        'zh-CN': '每月21日固定举办（集市营业时间 05:00 - 16:00）',
        'zh-TW': '每月21日固定舉辦（市集營業時間 05:00 - 16:00）'
      },
      hours: {
        en: 'Grounds open 05:00 - 17:00; Kondo & Kodo Halls 08:00 - 17:00',
        'zh-CN': '寺院境内 05:00 - 17:00；金堂与讲堂 08:00 - 17:00',
        'zh-TW': '寺院境內 05:00 - 17:00；金堂與講堂 08:00 - 17:00'
      }
    },
    admission: {
      type: 'paid',
      costText: {
        en: 'Fair access free; Kondo & Kodo special hall entry: ¥500 - ¥800',
        'zh-CN': '集市与境内免费进出；金堂与讲堂国宝佛像拜观500 - 800日元',
        'zh-TW': '市集免費逛覽；金堂與講堂國寶佛像特別拜觀500 - 800日圓'
      }
    },
    summary: {
      en: 'Home to Japan’s tallest wooden five-story pagoda (54.8 meters). On the 21st of every month, 1,200 stalls surround the temple grounds commemorating Kobo Daishi (Kukai).',
      'zh-CN': '伫立着高54.8米的全日本最高国宝木构五重塔。每月21日为纪念真言宗宗祖弘法大师空海，1200余家古物摊位环绕古刹展开，盛况空前。',
      'zh-TW': '擁有全日本最高木造建築（54.8公尺）之國寶五重塔。每月21日為弘法大師入定緣日，上千攤古董、舊物、手作工藝與在地小吃聚落於此。'
    },
    description: {
      en: 'Founded in 796 just after Kyoto became the imperial capital, To-ji was entrusted to Kukai (Kobo Daishi) in 823 as the grand center of Shingon Esoteric Buddhism. The interior of the Kodo lecture hall houses a stunning 3D Mandala of 21 Buddhist statues carved in the Heian period. During spring and autumn, the ground floor of the 5-story pagoda is specially opened to reveal vibrant Esoteric murals.',
      'zh-CN': '东寺是平安京迁都之初保存至今的唯二官寺之一，后由嵯峨天皇下赐给真言宗祖师弘法大师空海。讲堂内震撼人心的“立体曼荼罗”由21尊巨型密宗佛像组成，是日本密教美术的至高杰作。五重塔倒映在庭园瓢瓢池中的景致，是代表京都的永恒经典名画。',
      'zh-TW': '東寺為平安建都至今逾1200年歷史的密教總本山。講堂內供奉21尊弘法大師構想之「立體曼荼羅」佛像群，威嚴靜謐。春秋特定期間，五重塔初層心柱與四周精緻壁畫亦會限期對外開放。'
    },
    highlights: {
      en: [
        'Japan’s tallest wooden five-story pagoda (54.8m) illuminated above the reflection pond',
        'The 3D Mandala in Kodo Hall: 21 Heian-period statues including 15 designated National Treasures',
        'Huge monthly flea market with rare tea ceremony ceramics, antique tools, and street food'
      ],
      'zh-CN': [
        '全日本最高的木构五重塔（54.8米），在夜间点灯与倒影池中巍峨壮丽',
        '讲堂“立体曼荼罗”：21尊密宗佛雕（其中15尊为日本国宝），气场磅礴',
        '每月21日“弘法市”：搜罗古董茶道具、古布织物、漆器餐具的绝妙体验'
      ],
      'zh-TW': [
        '日本第一高之木造五重塔，白天莊嚴挺拔，夜間點燈倒映池中更顯絕美',
        '講堂內21尊國寶級密教雕像組成之「立體曼荼羅」，極具震撼力',
        '每月弘法市：匯聚京都傳統漆器、老印染布、茶道器具與美味屋台'
      ]
    },
    visitorTips: {
      en: [
        'Conveniently accessible by a short walk or taxi from Kyoto Station',
        'Photography is strictly prohibited inside the Kondo and Kodo halls to preserve religious sanctity',
        'Bring cash for purchasing vintage treasures at the 21st monthly market'
      ],
      'zh-CN': [
        '从京都站八条口出来步行即可到达，交通极为便利',
        '金堂与讲堂内部严禁摄影录像，请保持安静与虔诚心境',
        '若计划逛集市，建议备足日元现金，上午9点前前往货品最齐全'
      ],
      'zh-TW': [
        '距離京都車站步行約15分鐘，非常適合作為抵達或離開京都的第一站或尾聲',
        '佛堂殿內嚴格禁止拍照攝影，以示對宗教神聖殿堂之崇敬',
        '市集當天請準備現金零錢，若遇五重塔初層公開切莫錯過'
      ]
    },
    officialUrl: 'https://toji.or.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 34.9806, lng: 135.7477 },
    tags: {
      en: ['Tallest Pagoda', 'Esoteric Mandala', 'Monthly Antique Market', 'World Heritage'],
      'zh-CN': ['最高五重塔', '立体曼荼罗', '每月弘法市', '世界文化遗产'],
      'zh-TW': ['最高五重塔', '立體曼荼羅', '每月弘法市', '世界遺產']
    }
  },

  // ----------------------------------------------------
  // 3. ART MUSEUMS (美术馆)
  // ----------------------------------------------------
  {
    id: 'art-kyocera-modern',
    category: 'art_museum',
    area: 'higashiyama',
    featured: true,
    title: {
      en: 'Kyoto City KYOCERA Museum of Art Modern & Contemporary Exhibitions',
      'zh-CN': '京都市京瓷美术馆：近现代日本画特展与先锋当代艺术',
      'zh-TW': '京都市京瓷美術館：近現代日本畫特展與當代前衛藝術'
    },
    japaneseTitle: '京都市京セラ美術館 特別展・コレクション展',
    venueName: {
      en: 'Kyoto City KYOCERA Museum of Art',
      'zh-CN': '京都市京瓷美术馆（前身为京都大礼纪念美术馆）',
      'zh-TW': '京都市京瓷美術館（原京都市美術館）'
    },
    venueJapanese: '京都市京セラ美術館（京都市左京区岡崎円勝寺町124）',
    address: '124 Okazaki Enshojicho, Sakyo Ward, Kyoto, 606-8344',
    nearestStation: {
      en: '8 min walk from Higashiyama Station (Tozai Subway Line); or bus to "Okazaki Koen / Bijutsukan-mae"',
      'zh-CN': '京都市营地铁东西线“东山站”步行约8分钟；或市营巴士至“冈崎公园 / 美术馆·平安神宫前”',
      'zh-TW': '京都市營地下鐵東西線「東山站」步行約8分鐘；或市公車至「岡崎公園 / 美術館·平安神宮前」'
    },
    dates: {
      startDate: '2026-03-01',
      endDate: '2026-12-28',
      dateDisplay: {
        en: 'Rotating Year-Round Exhibitions (Closed Mondays)',
        'zh-CN': '常年举办国际巡展与京都名作特展（每周一休馆，遇节假日顺延）',
        'zh-TW': '全年舉辦國際巡展與京都典藏名作特展（每週一休館，逢國定假日順延）'
      },
      hours: {
        en: '10:00 - 18:00 (Last entry 17:30)',
        'zh-CN': '10:00 - 18:00（17:30停止入馆）',
        'zh-TW': '10:00 - 18:00（17:30最後入場）'
      }
    },
    admission: {
      type: 'paid',
      costText: {
        en: 'Collection exhibitions: ¥730 | Special exhibitions vary (approx. ¥1,600 - ¥2,200)',
        'zh-CN': '馆藏常设展730日元；大型特展约1,600 - 2,200日元',
        'zh-TW': '常設典藏展730日圓；特展約1,600 - 2,200日圓'
      }
    },
    summary: {
      en: 'Japan’s oldest public municipal art museum, renovated by Jun Aoki and Tezzo Nishizawa into an architectural marvel blending Imperial Crown style with glass pavilion minimalism.',
      'zh-CN': '日本现存最古老的公立美术馆。由著名建筑大师青木淳与西泽彻夫巧妙翻新，传统“帝冠式”古典红砖外壳与纯白通透的下沉式玻璃前庭完美交融。',
      'zh-TW': '日本現存最古老之公立美術館。由建築名師青木淳與西澤徹夫操刀翻新，將1933年的「帝冠樣式」古典磚造建築與通透玻璃廊帶優雅共融。'
    },
    description: {
      en: 'Originally opened in 1933, the Kyocera Museum holds over 4,200 modern masterpieces emphasizing Kyoto-style Nihonga (traditional Japanese mineral painting), Western-style yoga painting, sculpture, and craft arts. The museum features an expansive Japanese stroll garden, a glass-box contemporary wing called Higashiyama Cube, and a rooftop viewing terrace with panoramic views of the Higashiyama mountain ridge.',
      'zh-CN': '京都市京瓷美术馆坐落于冈崎文化特区，馆藏拥有竹内栖凤、上村松园等日本近代绘画大师的稀世珍品。其新设的“东山方块（Higashiyama Cube）”当代艺术空间常年策划重量级先锋艺术展。户外回游式日式庭园与屋顶露台更可免费进入，将平安神宫大鸟居与东山连绵群峦尽收眼底。',
      'zh-TW': '京都市京瓷美術館地處岡崎文化綠意街區，典藏竹內棲鳳、上村松園等近代大師膠彩名作。全新「東山方塊」展館專注於國際當代藝術展出。館內的日式回遊庭園與頂樓觀景平台免費對外開放，能將平安神宮巨型朱紅鳥居與東山美景盡納眼底。'
    },
    highlights: {
      en: [
        'The Glass Ribbon: Striking subterranean entrance seamlessly guiding visitors into light-filled halls',
        'Higashiyama Cube: Modern exhibition space hosting world-class contemporary artists',
        'Rooftop Terrace & Traditional Stroll Garden with a peaceful lotus pond'
      ],
      'zh-CN': [
        '“玻璃丝带（Glass Ribbon）”下沉式通透玻璃大堂，荣获多项国际建筑大奖',
        '当代艺术展馆“东山方块”常年举办国际顶级先锋艺术展与潮流展',
        '馆内免费开放的日式传统回游庭园与顶层东山全景展望台'
      ],
      'zh-TW': [
        '「玻璃緞帶」下沉式挑高入口，將自然光線引渡進古老建築之中',
        '新館「東山方塊（Higashiyama Cube）」聚焦當代跨界藝術與前衛設計',
        '戶外雅致的日式池泉回遊庭園，以及遠眺平安神宮大鳥居之頂樓露台'
      ]
    },
    visitorTips: {
      en: [
        'Special exhibitions often require timed entry booking during weekends; reserve on official website',
        'The museum cafe and bookshop can be accessed without an exhibition ticket',
        'Wheelchair and stroller accessible with elevators across all galleries'
      ],
      'zh-CN': [
        '周末参观热门特展建议提前在官网预定指定时段门票（Timed Ticket）',
        '馆内庭园、顶层露台、艺术咖啡馆和设计礼品店均可免费进入游览',
        '展馆内全平整无障碍设计，提供免费轮椅与婴儿车租借'
      ],
      'zh-TW': [
        '假日特展建議先於官方網站預約時段入場門票，以免現場久候',
        '即使不參觀收費特展，亦可自由漫步庭園、造訪附設咖啡廳與文創商店',
        '全館具備完善無障礙電梯與動線，推嬰兒車或輪椅十分便利'
      ]
    },
    officialUrl: 'https://kyotocity-kyocera.museum/',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 35.0135, lng: 135.7836 },
    tags: {
      en: ['Modern Art', 'Renowned Architecture', 'Nihonga Painting', 'Rooftop Terrace'],
      'zh-CN': ['现代艺术', '建筑名作', '近代日本画', '全景天台'],
      'zh-TW': ['現代藝術', '大師建築', '近現代日畫', '景觀露台']
    }
  },
  {
    id: 'art-momak-crafts',
    category: 'art_museum',
    area: 'higashiyama',
    featured: false,
    title: {
      en: 'The National Museum of Modern Art, Kyoto (MOMAK) Crafts & Western Arts',
      'zh-CN': '京都国立近代美术馆：京都传统工芸与西方现代艺术大师展',
      'zh-TW': '京都國立近代美術館：京都傳統工藝與現代藝術大師展'
    },
    japaneseTitle: '京都国立近代美術館（MoMAK） 所蔵品展・企画展',
    venueName: {
      en: 'The National Museum of Modern Art, Kyoto (MOMAK)',
      'zh-CN': '京都国立近代美术馆（MoMAK）',
      'zh-TW': '京都國立近代美術館（MoMAK）'
    },
    venueJapanese: '京都国立近代美術館（京都市左京区岡崎円勝寺町26-1）',
    address: '26-1 Okazaki Enshojicho, Sakyo Ward, Kyoto, 606-8344',
    nearestStation: {
      en: 'Across the canal from Kyocera Museum; 6 min walk from Higashiyama Subway Station',
      'zh-CN': '位于京瓷美术馆对面隔运河相望；地下铁东西线“东山站”步行约6分钟',
      'zh-TW': '位於京瓷美術館對岸；地下鐵東西線「東山站」步行約6分鐘'
    },
    dates: {
      startDate: '2026-01-10',
      endDate: '2026-12-20',
      dateDisplay: {
        en: 'Open Tuesday - Sunday 10:00 - 18:00 (Fridays & Saturdays extended to 20:00)',
        'zh-CN': '周二至周日 10:00 - 18:00（周五与周六夜间开放至 20:00，周一闭馆）',
        'zh-TW': '週二至週日 10:00 - 18:00（週五及週六延長開館至 20:00，週一休館）'
      },
      hours: {
        en: '10:00 - 18:00 (Night opening until 20:00 on Fridays/Saturdays)',
        'zh-CN': '日间 10:00 - 18:00（周末特别夜间展延至 20:00）',
        'zh-TW': '日間 10:00 - 18:00（週末夜間延長至 20:00）'
      }
    },
    admission: {
      type: 'paid',
      costText: {
        en: 'Collection Gallery: ¥430 (Free for seniors 65+ and under 18) | Special shows vary',
        'zh-CN': '馆藏常设展430日元（65岁以上老人及18岁以下免票）；特展单独定价',
        'zh-TW': '常設展430日圓（65歲以上長者及未滿18歲免費）；特展另行收費'
      }
    },
    summary: {
      en: 'Designed by Pritzker Prize laureate Fumihiko Maki, focusing on the historic masters of Kansai and Kyoto modern craftwork, including ceramics, textiles, and lacquerware.',
      'zh-CN': '由普利兹克建筑奖得主槙文彦设计。专注于关西及京都近现代工艺美术，汇聚顶尖陶瓷、染织（西阵织·京友禅）、漆艺、金工与日本画名作。',
      'zh-TW': '由普立茲克建築獎得主槙文彥大師設計。著重展現關西與京都近代名匠工藝，涵蓋陶瓷、染織、漆藝、金工及日本現代美術名作。'
    },
    description: {
      en: 'Positioned right beside the Biwako Canal in the serene Okazaki park area, MOMAK is renowned for bridging traditional craft techniques with modern aesthetics. Its 4th floor collection gallery provides an intimate viewing experience of Japanese master craftspeople designated "Living National Treasures", alongside international pieces by Picasso, Matisse, and Kandinsky.',
      'zh-CN': '美术馆紧依琵琶湖疏水运河，四季樱花与绿柳掩映。常设展着重呈现京都特有的深厚工匠传统，展出众多被列为“人间国宝”的工艺大师杰作。馆内附设的咖啡厅Cafe de 500正对运河水景，是冈崎片区最具艺术格调的休息站。',
      'zh-TW': '座落於琵琶湖疏水運河畔，與櫻花林並肩而立。MoMAK將傳統職人手工技藝昇華至現代藝術高度，展出眾多「人間國寶」的珍稀工藝品。4樓常設展廳還可遠眺大鳥居與東山群峰。'
    },
    highlights: {
      en: [
        'Master craft collections of Living National Treasures in ceramics, lacquer, and textiles',
        'Building designed by Pritzker Prize winner Fumihiko Maki featuring granite and glass balance',
        'Waterside Cafe de 500 looking out directly over the historic Biwako Canal'
      ],
      'zh-CN': [
        '近现代“人间国宝”工艺大师的陶瓷、漆艺与织锦精品，工艺精绝',
        '普利兹克奖大师槙文彦打造的几何花岗岩与大面积采光玻璃建筑',
        '临水咖啡馆 Cafe de 500，可一边品味抹茶甜点一边静赏运河游船'
      ],
      'zh-TW': [
        '名列「人間國寶」的近代陶藝、漆器與染織名匠精萃，嘆為觀止',
        '槙文彥大師的純粹幾何線條建築美學，空間靜穆雅緻',
        '運河畔 Cafe de 500 咖啡座，欣賞疏水遊船與櫻柳交織之絕景'
      ]
    },
    visitorTips: {
      en: [
        'Night admission on Friday and Saturday evenings offers peaceful, low-crowd viewing',
        'Combined tickets are occasionally available when visiting alongside neighboring museums',
        'Audio guides in English and Chinese are accessible directly through smartphones'
      ],
      'zh-CN': [
        '周五和周六晚间延长开放至20:00，此时人流稀少，夜间观展体验极佳',
        '常设展对65岁以上长者和18岁以下学生免费，入场请出示护照或身份证件',
        '支持使用智能手机直接扫描展厅二维码收听中文与英文语音导览'
      ],
      'zh-TW': [
        '週五及週六夜間延長開放至20:00，夜晚造訪環境幽靜，體驗格外愜意',
        '65歲以上長者及18歲以下青年常設展免費，請出示護照備查',
        '手機掃描展板QR Code即可輕鬆聆聽繁體中文語音導覽'
      ]
    },
    officialUrl: 'https://www.momak.go.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 35.0128, lng: 135.7825 },
    tags: {
      en: ['Pritzker Architecture', 'Living National Treasures', 'Ceramics & Textiles', 'Night Museum'],
      'zh-CN': ['大师建筑', '人间国宝工艺', '陶瓷染织', '夜间开放'],
      'zh-TW': ['大師建築', '人間國寶工藝', '陶瓷染織', '夜間開館']
    }
  },

  // ----------------------------------------------------
  // 4. MUSEUMS (博物馆)
  // ----------------------------------------------------
  {
    id: 'museum-kyoto-national',
    category: 'museum',
    area: 'higashiyama',
    featured: true,
    title: {
      en: 'Kyoto National Museum: National Treasures of Ancient Japan',
      'zh-CN': '京都国立博物馆：日本古都千年纪与国宝特展',
      'zh-TW': '京都國立博物館：日本古都千年紀與國寶特展'
    },
    japaneseTitle: '京都国立博物館 平成知新館・特別展・名品ギャラリー',
    venueName: {
      en: 'Kyoto National Museum',
      'zh-CN': '京都国立博物馆',
      'zh-TW': '京都國立博物館'
    },
    venueJapanese: '京都国立博物館（京都市東山区茶屋町527）',
    address: '527 Chayacho, Higashiyama Ward, Kyoto, 605-0931',
    nearestStation: {
      en: '7 min walk from Shichijo Station (Keihan Line); or bus #206, #208 to "Hakubutsukan Sanjusangendo-mae"',
      'zh-CN': '京阪电车“七条站”步行7分钟；或京都站前乘206、208路巴士至“博物馆三十三间堂前”',
      'zh-TW': '京阪電車「七條站」步行7分鐘；或京都站搭206、208路市公車至「博物館三十三間堂前」'
    },
    dates: {
      startDate: '2026-04-11',
      endDate: '2026-11-29',
      dateDisplay: {
        en: 'Spring Special Exhibition (Apr-Jun) | Autumn National Treasures (Oct-Nov)',
        'zh-CN': '春季特别展（4月 - 6月） | 秋季国宝级重磅特展（10月 - 11月）',
        'zh-TW': '春季特別展（4月 - 6月） | 秋季國寶級重量特展（10月 - 11月）'
      },
      hours: {
        en: '09:30 - 17:00 (Last entry 16:30; Closed Mondays)',
        'zh-CN': '09:30 - 17:00（16:30停止入场；每周一闭馆）',
        'zh-TW': '09:30 - 17:00（16:30停止入場；每週一休館）'
      }
    },
    admission: {
      type: 'paid',
      costText: {
        en: 'Collection Galleries: ¥700 (Special Exhibitions ¥1,800 - ¥2,200)',
        'zh-CN': '名品展藏品门票700日元（特别大展约1,800 - 2,200日元）',
        'zh-TW': '常設名品展700日圓（大型特展約1,800 - 2,200日圓）'
      }
    },
    summary: {
      en: 'One of Japan’s premier imperial museums, preserving hundreds of registered National Treasures and Important Cultural Properties from Kyoto’s thousand-year reign.',
      'zh-CN': '日本四大国立博物馆之一。专门收藏保护京都各大寺庙、神社奉寄的千年佛像神雕、平安王朝绘卷、禅画屏风与皇室传世瑰宝。',
      'zh-TW': '日本四大國立博物館之一。典藏京都各大寺廟、神社託管之千年珍貴佛雕、平安朝繪卷、桃山金碧屏風與帝皇璽印名品。'
    },
    description: {
      en: 'Opened in 1897, Kyoto National Museum comprises the iconic Meiji-era brick Red Brick Hall (Meiji Kotokan) and the sleek, light-sculpted Heisei Chishinkan designed by architect Yoshio Taniguchi. The museum displays magnificent collections of Buddhist statuary, Japanese calligraphy, lacquerware, ceramics, and medieval scrolls that define Japanese cultural identity.',
      'zh-CN': '博物馆正对三十三间堂，园区内同时拥有建于明治时代的法国巴洛克风格红砖主馆，以及由设计纽约现代艺术博物馆（MoMA）新馆的日本大师谷口吉生操刀的“平成知新馆”。知新馆采用传统日本障子光影概念，将自然天光与现代展柜科技融合，观赏平安至江户时代的顶级国宝体验极度舒适。',
      'zh-TW': '座落於三十三間堂正對面。館區結合了明治時代紅磚巴洛克式典雅舊館，以及紐約MoMA新館設計者谷口吉生所打造的「平成知新館」。透過日式障子借光設計，細賞佛像雕刻細節與千年紙絹書畫，深具文化震撼力。'
    },
    highlights: {
      en: [
        'Heisei Chishinkan: Yoshio Taniguchi’s tranquil, world-class gallery design with zen water gardens',
        'Invaluable National Treasure Buddhist sculptures and Kamakura-period folding screens',
        'Historic Western-style Meiji Kotokan main gate and French-inspired garden fountains'
      ],
      'zh-CN': [
        '建筑大师谷口吉生设计的“平成知新馆”，静谧的水庭与现代禅意空间令人赞叹',
        '各大古寺寄存的国宝级平安与镰仓时代佛像雕刻、雪舟水墨画与莳绘漆器',
        '国家重要文化财明治古都馆（红砖旧馆）与法式喷泉庭园罗丹雕塑'
      ],
      'zh-TW': [
        '建築巨匠谷口吉生代表作「平成知新館」，水景庭院倒映當代和風線條',
        '京都千年古剎秘藏佛雕、桃山時代華麗蒔繪與雪舟名畫輪替展出',
        '明治時代巴洛克式紅磚洋風正門與噴水池庭園，兼具歷史與典雅'
      ]
    },
    visitorTips: {
      en: [
        'Combine your visit with Sanjusangen-do Temple located directly across the street (home to 1,001 Kannon statues)',
        'Comprehensive multi-language audio guides (English, Chinese) are available for rental',
        'Photography is strictly prohibited inside the exhibition galleries'
      ],
      'zh-CN': [
        '建议与正对面的“三十三间堂”（供奉1001尊千手观音立像）安排在同一半天游览',
        '馆内租借服务台提供专业的中文语音导览器，详细解读国宝背后的历史典故',
        '展厅内一律禁止拍照，庭园及户外建筑景观可自由拍摄'
      ],
      'zh-TW': [
        '推薦與正對面的「三十三間堂」（千尊千手觀音立像壯景）合併規劃半日遊程',
        '服務台提供租借繁體中文語音導覽機，能深入了解每件國寶古物之傳奇緣由',
        '展廳內全面禁止拍照以保護脆弱文物，館外庭園與紅磚館舍可自由留影'
      ]
    },
    officialUrl: 'https://www.kyohaku.go.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 34.9912, lng: 135.7728 },
    tags: {
      en: ['National Treasures', 'Buddhist Sculptures', 'Yoshio Taniguchi', 'Imperial Heritage'],
      'zh-CN': ['国宝文物', '佛教造像', '谷口吉生建筑', '古都千年纪'],
      'zh-TW': ['國寶文物', '佛教雕像', '大師建築', '千年古物']
    }
  },
  {
    id: 'museum-railway-sl',
    category: 'museum',
    area: 'central',
    featured: false,
    title: {
      en: 'Kyoto Railway Museum Historic Steam Locomotive Live Steam Rides',
      'zh-CN': '京都铁道博物馆：梅小路扇形机车库与动态蒸汽机车运行',
      'zh-TW': '京都鐵道博物館：梅小路扇形車庫與蒸汽火車動態運行'
    },
    japaneseTitle: '京都鉄道博物館・梅小路蒸気機関車庫・SLスチーム号',
    venueName: {
      en: 'Kyoto Railway Museum (Umekoji Park)',
      'zh-CN': '京都铁道博物馆（梅小路公园内）',
      'zh-TW': '京都鐵道博物館（梅小路公園）'
    },
    venueJapanese: '京都鉄道博物館（京都市下京区観喜寺町）',
    address: 'Kankijicho, Shimogyo Ward, Kyoto, 600-8835',
    nearestStation: {
      en: '2 min walk from JR Umekoji-Kyotonishi Station (1 stop from Kyoto Station on San-in Line)',
      'zh-CN': 'JR嵯峨野线（山阴本线）“梅小路京都西站”出站步行2分钟（距京都站仅1站路）',
      'zh-TW': 'JR嵯峨野線「梅小路京都西站」步行2分鐘（自京都車站搭車僅需1站）'
    },
    dates: {
      startDate: '2026-01-05',
      endDate: '2026-12-30',
      dateDisplay: {
        en: 'Open daily 10:00 - 17:00 (Closed Wednesdays, open on holidays)',
        'zh-CN': '每日 10:00 - 17:00（每周三休馆，遇节假日照常开放）',
        'zh-TW': '每日 10:00 - 17:00（每週三休館，國定假日照常開放）'
      },
      hours: {
        en: '10:00 - 17:00 (Last entry 16:30; SL rides hourly)',
        'zh-CN': '10:00 - 17:00（16:30停止入馆；蒸汽机车体验每小时一班）',
        'zh-TW': '10:00 - 17:00（16:30停止入館；蒸汽火車體驗每小時發車）'
      }
    },
    admission: {
      type: 'paid',
      costText: {
        en: 'Adults: ¥1,500 | University/HS: ¥1,300 | Children: ¥500 | SL Ride: ¥300',
        'zh-CN': '成人1,500日元，高校生1,300日元，中小学生500日元；SL乘车体验300日元',
        'zh-TW': '全票1,500日圓，高中大專1,300日圓，中小學500日圓；SL火車體驗300日圓'
      }
    },
    summary: {
      en: 'One of the largest railway museums in Japan, preserving 53 iconic railcars from early steam trains to the 500-Series Shinkansen Bullet Train and an authentic turntable depot.',
      'zh-CN': '日本规模最大的铁道博物馆之一。实车珍藏53辆从明治蒸汽机车到时速300公里的500系新干线先头车，拥有仍在作业的国家指定重要文化财扇形车库。',
      'zh-TW': '全日本規模最完備的鐵道主題博物館。完整典藏53輛歷史名車，包含動態運轉的百年蒸氣老火車、轉向轉車盤與500系列新幹線，兼具歷史與科技。'
    },
    description: {
      en: 'A paradise for families, engineering buffs, and travelers of all ages. Experience the historic "SL Steam Train" as it chugs along alongside real active train lines, explore the historic 20-track roundhouse fan depot built in 1914, drive high-precision Shinkansen train driver simulators, and enjoy panoramic views of Kyoto Tower and passing bullet trains from the Sky Terrace.',
      'zh-CN': '坐落于绿意盎然的梅小路公园内。不仅可以亲自登上喷吐白烟、鸣响长笛的“SL蒸汽号”在铁道上悠然行驶1公里，还能在国家重要文化财“梅小路扇形车库”近距离观察20余辆货真价实的老式机车。顶楼天空露台是俯瞰京都塔与东海道新干线、JR特急列车穿梭交汇的绝佳打卡地。',
      'zh-TW': '適合全年齡旅人與鐵道迷共襄盛舉。可實地搭乘鳴笛吐氣的「SL蒸汽號」體驗古早鐵道浪漫，參觀建於1914年的梅小路扇形車庫與回轉盤，並在頂樓戶外瞭望台俯瞰新幹線與特急電車於眼前奔馳。'
    },
    highlights: {
      en: [
        'Ride the live coal-fired "SL Steam Train" through Umekoji Park with authentic train whistles',
        'Historic 1914 Umekoji Roundhouse (Important Cultural Property) with 20 tracks and active turntable',
        'Sky Terrace overlooking active JR tracks, Kyoto Tower, and To-ji five-story pagoda'
      ],
      'zh-CN': [
        '乘坐真正燃煤发动的“SL蒸汽机车号”，体验喷气鸣笛的复古铁道之旅',
        '建于1914年的国家重要文化财“梅小路扇形机车库”及中央旋转轨道转盘',
        '顶层全景天空露台：将东海道新干线穿梭、京都塔与东寺五重塔同框捕捉'
      ],
      'zh-TW': [
        '實地搭乘正宗燃煤蒸汽火車「SL蒸汽號」，聽汽笛轟鳴穿透園區',
        '國家指定重要文化財「梅小路扇形火車庫」，近距離仰望機械巨獸',
        '頂樓「天空露台」眺望全景：同時捕捉疾馳的新幹線與京都塔倒影'
      ]
    },
    visitorTips: {
      en: [
        'Book the SL Steam Train ride at ticket vending machines immediately upon entry, as tickets sell out',
        'Train driving simulator experiences require lotteries or advance app reservations',
        'Directly linked with Umekoji-Kyotonishi Station, completely accessible and stroller-friendly'
      ],
      'zh-CN': [
        '入馆后建议先在售票机购买“SL蒸汽号”乘车券（300日元/人），热门时段极易售罄',
        '新干线驾驶模拟体验需通过入场后的抽签机制或手机App提前预约',
        '从JR梅小路京都西站出站直达，全馆配备无障碍坡道与升降机，带婴儿车出行极方便'
      ],
      'zh-TW': [
        '入館後建議第一時間前往自動售票機購買「SL蒸汽號」乘車票，假日往往熱銷售罄',
        '新幹線專業駕駛模擬艙體驗採入館抽籤或專屬App預約機制',
        '出站即達，全館室內寬敞平坦，推嬰兒車或行動不便者動線極為友善'
      ]
    },
    officialUrl: 'https://www.kyotorailwaymuseum.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 34.9875, lng: 135.7428 },
    tags: {
      en: ['Steam Locomotive', 'Roundhouse Depot', 'Family Friendly', 'Shinkansen Simulator'],
      'zh-CN': ['蒸汽机车', '扇形机车库', '亲子友好', '新干线体验'],
      'zh-TW': ['蒸汽火車', '扇形車庫', '親子共遊', '新幹線體驗']
    }
  },

  // ----------------------------------------------------
  // 5. OFFICIAL PUBLIC & CITY GOVERNMENT EVENTS (市政府及官方公开活动)
  // ----------------------------------------------------
  {
    id: 'official-jidai-matsuri',
    category: 'official',
    area: 'central',
    featured: true,
    title: {
      en: 'Kyoto Official "Jidai Matsuri" (Festival of the Ages) Historic Parade',
      'zh-CN': '京都市官方“时代祭”千人华服历史大巡行',
      'zh-TW': '京都市官方「時代祭」千人歷史盛裝大巡行'
    },
    japaneseTitle: '京都市公式 時代祭（京都三大祭）・時代行列',
    venueName: {
      en: 'Kyoto Imperial Palace to Heian Jingu Shrine route',
      'zh-CN': '京都御所 → 乌丸通 → 御池通 → 平安神宫 巡行沿线',
      'zh-TW': '京都御所 → 烏丸通 → 御池通 → 平安神宮 巡行路線'
    },
    venueJapanese: '京都御所建礼門前（京都市上京区京都御苑3）～ 平安神宮',
    address: 'Kyoto Gyoen National Garden to Heian Jingu, Kyoto',
    nearestStation: {
      en: 'Marutamachi or Imadegawa Subway Stations (for start); Higashiyama Subway (for finish)',
      'zh-CN': '地铁乌丸线“丸太町站”或“今出川站”（御所起点）；地铁东西线“东山站”（神宫终点）',
      'zh-TW': '地下鐵烏丸線「丸太町站」或「今出川站」（出發點）；地下鐵東西線「東山站」（終點）'
    },
    dates: {
      startDate: '2026-10-22',
      endDate: '2026-10-22',
      dateDisplay: {
        en: 'Annually on October 22 (Parade departs 12:00 from Kyoto Imperial Palace)',
        'zh-CN': '每年10月22日定例举办（中午12:00自京都御所浩荡启程）',
        'zh-TW': '每年10月22日隆重舉行（中午12:00自京都御所盛大出發）'
      },
      hours: {
        en: '12:00 - 15:30 (Parade takes approx. 2 hours to pass any single viewing spot)',
        'zh-CN': '12:00 - 15:30（整个行列经过任意固定观赏点需约2小时）',
        'zh-TW': '12:00 - 15:30（整隊行列通過單一定點約需歷時2小時）'
      }
    },
    admission: {
      type: 'free',
      costText: {
        en: 'Free roadside viewing along public streets (Reserved seated bleachers: ¥4,500 - ¥6,000)',
        'zh-CN': '沿街公共道路全程免费观赏（市府官方预留座席约4,500 - 6,000日元）',
        'zh-TW': '沿途市區公共道路全程免費觀賞（官方劃位觀覽席約4,500 - 6,000日圓）'
      }
    },
    summary: {
      en: 'Organized by Kyoto City and Heian Jingu, a living museum procession of 2,000 participants wearing authentic attire recreating 1,200 years of Kyoto history from the Meiji Restoration back to the 8th century.',
      'zh-CN': '京都市政府与平安神宫主办的古都三大祭之一。两千名市民身着严格考证的真正丝绸织物、古代战甲与宫廷华服，组成长达两公里的流动历史画卷。',
      'zh-TW': '京都市府與平安神宮主辦之京都三大祭盛事。兩千名盛裝隊伍綿延兩公里，重現從明治維新倒溯至平安初期的千年古都盛世風華。'
    },
    description: {
      en: 'Inaugurated in 1895 to commemorate the 1,100th anniversary of the founding of Heian-kyo (Kyoto), the Jidai Matsuri is a triumph of traditional craftsmanship. Every garment, wig, sword, and carriage is handcrafted using traditional techniques passed down by Kyoto’s heritage guild masters. The grand parade features iconic figures including Oda Nobunaga, Toyotomi Hideyoshi, Lady Murasaki Shikibu (author of The Tale of Genji), and Sei Shonagon.',
      'zh-CN': '为纪念平安迁都1100周年而创设。时代祭不仅是一场盛大的祭典巡行，更是京都市传统工艺（西阵织、京绣、武具铸造、古典发型梳理）活生生的露天博览会。巡行队伍从幕末维新志士出发，逆时间顺序历经江户、安土桃山、室町、吉野、镰仓、藤原，最终回到平安时代，让观众仿佛在数小时内穿梭于千年历史长河。',
      'zh-TW': '創始於1895年紀念平安建都1100週年。全體演員所穿戴的服飾、武器與祭祀神輿皆嚴格依照歷史考證、由京都頂級工匠復原。遊行隊伍逆時間順序，由幕末倒溯至平安開京，紫式部、清少納言、織田信長等歷史傳奇人物款款前行，令人嘆服。'
    },
    highlights: {
      en: [
        'A 2-kilometer-long procession featuring over 2,000 participants and 70 horses and oxen',
        'Authentic museum-grade historical garments valued at billions of yen crafted by Kyoto masters',
        'Heian Court Ladies procession showcasing exquisite twelve-layered junihitoe silk kimonos'
      ],
      'zh-CN': [
        '全长两公里、超过2000人与70匹马牛参与的历史长龙大巡行',
        '身着价值数十亿日元、由京都国宝工匠复原的历代真丝华服与金铜武具',
        '平安时代仕女行列：惊艳全场的“十二单衣（Junihitoe）”宫廷重锦拖曳'
      ],
      'zh-TW': [
        '綿延兩公里、逾2000名演員與70匹駿馬神牛構成的活體歷史巨作',
        '全數採用西陣織與京都傳統工藝復原之歷朝歷代珍貴禮服盔甲',
        '平安宮廷仕女隊列：華麗絕倫的「十二單」真絲朝服優雅拖曳'
      ]
    },
    visitorTips: {
      en: [
        'Kyoto Gyoen National Garden or Oike-dori boulevard offer the best wide-angle photography angles',
        'If rain is forecast on October 22, the festival is postponed to the next clear day (announced by city hall)',
        'Arrive at your viewing spot along the street at least 45 minutes before the parade head reaches that location'
      ],
      'zh-CN': [
        '最佳免费观赏点：京都御苑绿荫大道或视野开阔的御池通林荫大道',
        '如遇雨天，京都市政府会在当天早晨官方公告顺延至次日晴天举行',
        '建议提前45分钟占好路边观赏位，随身携带防晒帽或折叠便携坐垫'
      ],
      'zh-TW': [
        '最佳拍攝取景點：京都御苑寬闊砂石大道或視野寬敞的御池通兩側',
        '若遇天雨，京都市役所將於當日清晨宣布順延至翌日晴天舉辦',
        '請提早45分鐘前往佔位，並自備折疊坐墊與飲水'
      ]
    },
    officialUrl: 'https://kyoto.travel/en/see-and-do/jidai_matsuri.html',
    imageUrl: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 35.0234, lng: 135.7628 },
    tags: {
      en: ['Big 3 Kyoto Festivals', 'City Hall Official', 'Historic Costumes', 'Heian Court'],
      'zh-CN': ['京都三大祭', '市府主办', '千人华服', '平安宫廷'],
      'zh-TW': ['京都三大祭', '市府主辦', '千人盛裝', '平安宮廷']
    }
  },
  {
    id: 'official-crafts-miyakomesse',
    category: 'official',
    area: 'higashiyama',
    featured: false,
    title: {
      en: 'Kyoto Museum of Crafts and Design Master Artisan Live Demonstrations',
      'zh-CN': '京都市传统产业交流馆：74项传统工艺大师现场实演展',
      'zh-TW': '京都市傳統產業交流館：74項京都傳統工藝大師現場實演'
    },
    japaneseTitle: '京都市伝統産業ミュージアム（みやこめっせ地下1階） 実演・体験',
    venueName: {
      en: 'Kyoto Museum of Crafts and Design (Miyako Messe)',
      'zh-CN': '京都市传统产业交流馆（京都劝业馆 Miyako Messe 地下一层）',
      'zh-TW': '京都市傳統產業交流館（Miyako Messe B1）'
    },
    venueJapanese: '京都市伝統産業ミュージアム（京都市左京区岡崎成勝寺町9-1 みやこめっせ地下1階）',
    address: '9-1 Okazaki Seishojicho, Sakyo Ward, Kyoto, 606-8343',
    nearestStation: {
      en: '8 min walk from Higashiyama Subway Station (Exit 1 or 2); 2 min walk from Kyocera Museum',
      'zh-CN': '地铁东西线“东山站”1号/2号出口步行8分钟；紧邻京瓷美术馆与平安神宫大鸟居',
      'zh-TW': '地下鐵東西線「東山站」步行8分鐘；緊鄰京瓷美術館與平安神宮大鳥居'
    },
    dates: {
      startDate: '2026-01-08',
      endDate: '2026-12-27',
      dateDisplay: {
        en: 'Daily 10:00 - 18:00 (Craft artisan live demos every weekend & holidays)',
        'zh-CN': '每日 10:00 - 18:00（周末与节假日举办传统大师现场制作实演）',
        'zh-TW': '每日 10:00 - 18:00（週末與例假日舉辦名匠現場實演與手作體驗）'
      },
      hours: {
        en: '10:00 - 18:00 (Last entry 17:30; Artisan stage 11:00 - 16:00)',
        'zh-CN': '10:00 - 18:00（17:30停止入馆；大师实演时段 11:00 - 16:00）',
        'zh-TW': '10:00 - 18:00（17:30停止入場；實演時段 11:00 - 16:00）'
      }
    },
    admission: {
      type: 'free',
      costText: {
        en: 'Permanent Exhibition: Free Admission (Special workshops from ¥1,000)',
        'zh-CN': '常设展区完全免费入场（传统手作体验工坊约1,000日元起）',
        'zh-TW': '常設展示區完全免費參觀（手作體驗工作坊約1,000日圓起）'
      }
    },
    summary: {
      en: 'Official municipal craft gallery showcasing all 74 traditional industries designated by Kyoto City, featuring live master demonstrations in silk Yuzen dyeing, lacquerware, and bamboo crafting.',
      'zh-CN': '京都市官方设立的传统产业展示殿堂。完整汇集并免费展示京都市指定的全部74种传统手工艺品，并由资深匠人现场实演京友禅染织、西阵织纺线与莳绘贴金。',
      'zh-TW': '京都市官方設立的傳統文化工藝展示館。全面免費展出京都市指定的全部74項傳統手工藝品，每逢週末由國寶級匠人現場演示京友禪手繪、西陣織紡紗與金箔蒔繪。'
    },
    description: {
      en: 'Located beneath the grand Miyako Messe exhibition hall, this modern venue provides visitors with a sensory journey through Kyoto’s unparalleled material culture. Explore hands-on touch exhibits displaying woodblock printing, Kiyomizu-yaki ceramics, Kyoto folding fans, stone lanterns, and braided kumihimo cords. Visitors can speak with authentic master artisans through English-speaking guides and buy certified artisan works directly.',
      'zh-CN': '这里是全方位了解京都“工匠精神（Monozukuri）”的最佳官方场馆。馆内将繁复的74门传统技艺以生动的触觉体验、原料分解与解构模型呈现。周末专设的“工匠实演台”上，大师们凝神静气现场操作，让观众零距离目睹一件件精美绝伦的京友禅和服或京漆器如何诞生。',
      'zh-TW': '深入體會京都職人靈魂之美的不二之選。館內將74項被京都府指定的傳統技術以原料標本、工法解剖展示，並設有可親手觸摸的互動展示區。附設的「MOCAD SHOP」更是購買經過官方品質認證之原創工藝伴手禮的寶庫。'
    },
    highlights: {
      en: [
        'Complete overview of all 74 official Kyoto traditional crafts under one roof',
        'Live weekend demonstrations by real masters of Kyo-yuzen silk dyeing and lacquerware',
        'MOCAD Official Shop: Curated authentic crafts certified by Kyoto municipal artisan guilds'
      ],
      'zh-CN': [
        '一站式饱览京都市官方认定的全部74项传统产业精品（京烧、京扇子、西阵织等）',
        '周末名匠亲临现场：近距离目睹大师挥毫手绘京友禅丝绸或细致打磨漆器',
        '官方文创馆 MOCAD SHOP：经市府行会严格认证的京都正宗手作伴手礼'
      ],
      'zh-TW': [
        '完整收錄京都府認定全部74項傳統產業工藝品，且常設館全面免費參觀',
        '週末職人實演舞台：近距離觀摩京友禪手繪、京漆器蒔繪與竹工藝精妙技法',
        'MOCAD SHOP：由市府工藝公會嚴格把關之高品質伴手禮與設計選品'
      ]
    },
    visitorTips: {
      en: [
        'Permanent exhibits are completely free of charge—one of the best free cultural experiences in Kyoto',
        'English QR code panels accompany every single craft display',
        'Check the daily schedule board at the entrance for artisan demonstration hours'
      ],
      'zh-CN': [
        '常设展区完全免费参观，是冈崎片区性价比极高的宝藏官方文化场馆',
        '每一件工艺品展柜均配有中、英双语二维码，手机扫码即可阅读详细工法视频',
        '入口处电子屏列有当日实演大师的轮值安排与手作体验工坊预约'
      ],
      'zh-TW': [
        '全館常設展區免費入場，是京都文化深度遊極具價值的官方景點',
        '展台均附有繁體中文與英文解說，手機掃碼即可觀看名匠製作紀錄片',
        '館內提供英語志工講解，並設有空調與舒適休息座椅'
      ]
    },
    officialUrl: 'https://kmtc.jp/',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 35.0142, lng: 135.7818 },
    tags: {
      en: ['74 Official Crafts', 'Free Admission', 'Live Artisan Demo', 'Miyako Messe'],
      'zh-CN': ['74项传统工艺', '免费入场', '大师实演', '市府官方'],
      'zh-TW': ['74項傳統工藝', '免費參觀', '大師實演', '官方認定']
    }
  },
  {
    id: 'official-kamogawa-yuka',
    category: 'official',
    area: 'gion',
    featured: false,
    title: {
      en: 'Kamogawa River Terrace (Noryo-yuka) Official Cultural Season',
      'zh-CN': '鸭川纳凉床官方文化季：古河水榭与纳凉传统',
      'zh-TW': '鴨川納涼床官方文化季：水榭平台與夏日納涼風物詩'
    },
    japaneseTitle: '鴨川納涼床（かもがわのうりょうゆか）・京都市公認水辺テラス',
    venueName: {
      en: 'Kamogawa Riverbank Promenade (Sanjo to Gojo)',
      'zh-CN': '鸭川西岸水畔长廊（三条通至五条通沿岸）',
      'zh-TW': '鴨川西岸水畔長廊（三條通至五條通）'
    },
    venueJapanese: '鴨川右岸（京都市中京区・下京区の三条大橋～五条大橋間）',
    address: 'Kamogawa Riverbank, Nakagyo/Shimogyo Ward, Kyoto',
    nearestStation: {
      en: '1 min walk from Sanjo or Gion-Shijo Stations (Keihan Line)',
      'zh-CN': '京阪电车“三条站”或“祇园四条站”出站即达',
      'zh-TW': '京阪電車「三條站」或「祇園四條站」出站即抵'
    },
    dates: {
      startDate: '2026-05-01',
      endDate: '2026-09-30',
      dateDisplay: {
        en: 'May 1 to September 30 annually (Open throughout lunch and dinner)',
        'zh-CN': '每年5月1日 - 9月30日（午间与晚间全时段开放水上水榭）',
        'zh-TW': '每年5月1日 - 9月30日（午間與晚間全時段水上平台開放）'
      },
      hours: {
        en: 'Riverbank promenade open 24 hours; Terraces operate 11:30 - 22:00',
        'zh-CN': '河畔公众长廊24小时免费漫步；纳凉床店铺营业 11:30 - 22:00',
        'zh-TW': '河畔公眾步道24小時免費開放；納涼床店家營業 11:30 - 22:00'
      }
    },
    admission: {
      type: 'free',
      costText: {
        en: 'Free to walk, relax, and photograph along the riverbank',
        'zh-CN': '河畔步道免费漫步与休闲拍照（各餐饮店消费另计）',
        'zh-TW': '沿岸步道自由漫步拍照全免（入座各料理店依餐點計費）'
      }
    },
    summary: {
      en: 'A 400-year-old Kyoto cultural tradition certified by Kyoto City, erecting over 90 elevated open-air wooden platforms directly over the babbling Kamogawa River.',
      'zh-CN': '拥有400年历史的京都市官方认定传统民俗风物诗。每年夏季，近百家料理亭与特色茶室在清冽的鸭川浅滩上方搭建起凌空木质露台（纳凉床）。',
      'zh-TW': '傳承逾400年、經京都市府官方認證的盛夏風物詩。每年夏秋之際，近百家京都料理亭與茶寮於鴨川清流之上搭建懸空木質水榭露台。'
    },
    description: {
      en: 'Originating during the Edo period when tea vendors and kabuki troupes entertained crowds along the dry riverbed, Kamogawa Noryo-yuka is an essential Kyoto summer experience. At dusk, red chochin paper lanterns light up sequentially along the water’s edge while river breezes naturally cool visitors enjoying Kyoto kaiseki, craft beer, or matcha desserts.',
      'zh-CN': '起源自江户时代初期的鸭川河滩茶摊与歌舞伎露天表演。沿岸架设的纳凉床由京都市根据严格安全规程与水利法规统一监管。黄昏时分，沿河红灯笼依次亮起，吹拂着穿透水面的阵阵凉风，无论是在木台上品尝怀石料理，还是沿着平整的河畔步道闲庭信步，都是体验地道京都慢生活的极乐体验。',
      'zh-TW': '發源於江戶時代歌舞伎始祖出雲阿國在鴨川河灘之演出與茶肆歇息。由京都市政府依嚴謹水利與文化保護條例統籌推展。夜幕低垂時，沿岸數百盞朱紅燈籠在水波中泛起瀲灩倒影，伴隨流水微風，浪漫非凡。'
    },
    highlights: {
      en: [
        'Over 90 traditional wooden dining terraces jutting out above the rushing river currents',
        'Stunning sunset views of Higashiyama mountain ridge and traditional Machiya facades',
        'Pedestrian-only waterside path beloved by locals and international travelers alike'
      ],
      'zh-CN': [
        '近百家高悬于清澈鸭川溪流之上的传统木构水榭露台，错落有致',
        '日落时分远眺东山群峰连绵轮廓与传统京町家木造立面',
        '沿岸宽敞的步行绿道，傍晚吹着晚风与三两好友散步小憩格调非凡'
      ],
      'zh-TW': [
        '近百家依水而立的木構水上高台，清波流響於腳下，暑意全消',
        '夕陽餘暉下眺望東山群巒與川端通百年京町家交織的絕美剪影',
        '沿河平坦的親水石板步道，夜間散步休閒極具情調'
      ]
    },
    visitorTips: {
      en: [
        'Walking along the gravel riverbank is completely free and affords the most scenic vantage point',
        'Reservations are recommended if planning to dine on a designated terrace during July & August evenings',
        'The river stepping stones (tobi-ishi) near Sanjo offer fun photo opportunities during daytime'
      ],
      'zh-CN': [
        '鸭川岸边的草坪与石阶长廊对公众全天免费开放，是欣赏水榭全景的最佳机位',
        '如果计划在7、8月旺季夜晚入座纳凉床用餐，建议提前1 - 2周致电店家预定座席',
        '三条大桥北侧与荒神桥附近的“乌龟跳石（飛び石）”是白天打卡拍照的网红趣味点'
      ],
      'zh-TW': [
        '川邊草坪與石階完全對公眾免費開放，坐在河畔吹風是欣賞納涼床全景的最佳視角',
        '若計劃於7、8月盛夏夜晚在水榭用餐，強烈建議提前預約心儀餐廳',
        '三條大橋附近的「烏龜形跳石」趣味十足，是日間漫步渡河的必訪打卡點'
      ]
    },
    officialUrl: 'https://www.kyoto-yuka.com/',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    coordinates: { lat: 35.0058, lng: 135.7712 },
    tags: {
      en: ['River Terrace', 'Summer Tradition', 'Free Promenade', 'Edo Heritage'],
      'zh-CN': ['水上纳凉床', '夏日风物诗', '免费步道', '江户传承'],
      'zh-TW': ['水上納涼床', '夏日風物詩', '免費步道', '江戶傳承']
    }
  }
];
