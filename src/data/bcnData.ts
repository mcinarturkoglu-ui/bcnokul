export interface Level {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  ageGroup: string;
  tagline: string;
  description: string;
  fullContent: string[];
  keyFeatures: { title: string; desc: string }[];
  curriculum: string[];
  image: string;
  badge: string;
}

export interface InternationalProgram {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  targetAges: string;
  details: string[];
  benefits: string[];
  image: string;
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  capacity: string;
  image: string;
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  stats?: string;
  featured?: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  author: string;
  content: string[];
  featured?: boolean;
}

export const INSTITUTION_INFO = {
  name: "BCN Eğitim Kurumları",
  englishName: "BCN International School & College",
  shortName: "BCN College",
  motto: "Modern Uluslararası Vizyon • Akademik Mükemmeliyet • Zihinsel Disiplin",
  phone: "0552 051 23 36",
  phoneFormatted: "+90 552 051 23 36",
  email: "info@bcnegitimkurumlari.k12.tr",
  address: "Madenler Mahallesi, İdealist Kent Caddesi No:5/A, 34776 Ümraniye / Çekmeköy, İstanbul",
  coordinates: { lat: 41.0182, lng: 29.1724 },
  googleMapsUrl: "https://maps.app.goo.gl/d5Yio28y78d5B6wd6",
  workingHours: "Pazartesi - Cuma: 08:00 - 18:00 | Cumartesi: 09:00 - 15:00",
  socials: {
    instagram: "https://www.instagram.com/bcncollege/",
    facebook: "https://www.facebook.com/boldchallengernetworkcollege",
    linkedin: "https://www.linkedin.com/company/bcn-college/",
    tiktok: "https://www.tiktok.com/@bcncollege",
  },
  stats: [
    { label: "Öğretmen / Öğrenci Oranı", value: "1 : 8", subtext: "Kişiselleştirilmiş akademik takip" },
    { label: "Dünya & Ulusal Şampiyonluk", value: "4+", subtext: "STEM & Robotik dünya derecesi" },
    { label: "Kazanılan Madalya", value: "23+", subtext: "13 prestijli yarışmada üstün başarı" },
    { label: "Uluslararası Program", value: "8+", subtext: "IB PYP, OSSD Kanada, AP, MUN" },
    { label: "Çift Dilli Eğitim", value: "%100", subtext: "İngilizce & Almanca edinim modeli" },
    { label: "Kampüs Alanı", value: "12.000m²", subtext: "Madenler / Çekmeköy entegre tesis" },
  ],
};

export const LEVELS: Level[] = [
  {
    id: "preschool",
    slug: "aurelia-preschool",
    name: "Aurelia Preschool",
    subtitle: "Erken Çocukluk & Keşif Akademisi",
    ageGroup: "3 - 6 Yaş",
    tagline: "Baskı yerine alan, ezber yerine keşif ve güvenli bağlanma.",
    description: "Aurelia Preschool'da çocuklar; çift dilli, güvenli ve bütünsel bir ortamda potansiyellerini keşfeder. Kelebeğin dönüşümünü simgeleyen Aurelia felsefesiyle; ezber yerine doğal merakı ve araştırmayı odağa alıyoruz.",
    fullContent: [
      "Yale Üniversitesi Çocuk Çalışmaları Merkezi tarafından geliştirilen Yale RULER duygusal zekâ yaklaşımı ile çocukların duygularını tanıma, adlandırma ve regüle etme becerilerini erken yaşta inşa ediyoruz.",
      "Nörobilim temelli oyun ve etkinliklerle bilişsel esneklik, problem çözme ve ince motor becerilerini geliştiriyoruz.",
      "İngilizce ve Almanca dillerini yaşamın doğal ritminde anadil edinimi benzeri immersion (daldırma) modeliyle sunuyoruz.",
      "Geliştirdiğimiz yapay zekâ destekli takip sistemiyle her çocuğun ilgi, dikkat ve gelişim eğrilerine özel bireysel haritalar oluşturuyoruz."
    ],
    keyFeatures: [
      { title: "Yale RULER Modeli", desc: "Duygusal zeka, empati ve öz-düzenleme atölyeleri" },
      { title: "Doğal Çift Dillilik", desc: "Günün her anında yaşayan İngilizce ve Almanca" },
      { title: "Nöro-Gelişimsel Oyunlar", desc: "Zihinsel disiplin ve motor beceri inşası" },
      { title: "Yapay Zekâ Gelişim Haritası", desc: "Her çocuğa özgü bilimsel pedagojik gözlem" }
    ],
    curriculum: ["Yale RULER", "Montessori & Reggio Emilia İlhamı", "Erken STEM & Kodlama", "Doğa & Bahçe Atölyesi", "Müzik & Orff"],
    image: "/images/bcn/preschool-aurelia.jpg",
    badge: "Erken Çocukluk"
  },
  {
    id: "primary",
    slug: "ilkokul",
    name: "İlkokul (Primary School)",
    subtitle: "IB PYP Sorgulama Temelli Eğitim",
    ageGroup: "1 - 4. Sınıf",
    tagline: "Yalnızca bilgi edinmek değil; anlam kurmak, bağlantı kurmak ve dünyayı sorgulamak.",
    description: "İlkokulumuzda IB Primary Years Programme (PYP) ilkeleri doğrultusunda öğrenciler disiplinler arası temalar aracılığıyla sorgulayan, araştıran ve kendi öğrenmesinin sorumluluğunu alan bireyler haline gelir.",
    fullContent: [
      "Akademik temeller (Türkçe, Matematik, Fen, Sosyal) ezberletilerek değil; kavramsal sorgulama döngüleriyle derinlemesine kavratılır.",
      "Öğrencilerin eleştirel düşünme, takım çalışması, iletişim ve öz yönetim becerileri sistemli biçimde geliştirilir.",
      "MOXO Sürekli Dikkat Testi ile öğrencilerin dikkat ve dürtüsellik profilleri ölçülür, kişiye özel çalışma stratejileri oluşturulur.",
      "Cambridge English müfredatı ile desteklenen yoğun yabancı dil eğitimi, öğrencilerin uluslararası seviyede kendini ifade etmesini sağlar."
    ],
    keyFeatures: [
      { title: "IB PYP Yaklaşımı", desc: "Disiplinlerarası küresel temalar ve sorgulama üniteleri" },
      { title: "MOXO Dikkat Desteği", desc: "Bilişsel odaklanma ve kişisel öğrenme haritası" },
      { title: "Okuma Kültürü & Münazara", desc: "Yılda 30+ seçkin eser incelemesi ve ifade zenginliği" },
      { title: "STEM & Maker Atölyesi", desc: "Erken yaşta robotik kodlama ve algoritma mantığı" }
    ],
    curriculum: ["IB Primary Years Programme (PYP)", "Cambridge Primary", "MEB Temel Müfredat Entegrasyonu", "Kodlama & Robotik"],
    image: "/images/bcn/primary-school.jpg",
    badge: "IB PYP Aday Okulu"
  },
  {
    id: "middle",
    slug: "ortaokul",
    name: "Ortaokul (Middle School)",
    subtitle: "Akademik Disiplin & Karakter İnşası",
    ageGroup: "5 - 8. Sınıf",
    tagline: "7. sınıftan başlayan LGS hazırlık sistemi, küresel farkındalık ve etik liderlik.",
    description: "Ortaokul kademesinde öğrenciler; derinleşen akademik bilginin yanı sıra kendi kimliklerini, analitik düşünme yeteneklerini ve dünya ile kurdukları bağı keşfeder. Sorgulayan, kanıta dayalı düşünen ve bilinçli kararlar veren nesiller yetişir.",
    fullContent: [
      "BCN LGS Başarı Tasarımı: 7. sınıftan itibaren başlayan yoğunlaştırılmış akademik mentorluk, haftalık deneme analizleri ve birebir etüt sistemi.",
      "Model United Nations (MUN) ve Erasmus+ projeleriyle dünya meselelerine diplomatik çözümler üretme pratiği.",
      "First Lego League (FLL) robotik takımlarımız ile Türkiye ve Marmara şampiyonlukları kazanan STEM ekosistemi.",
      "İkinci yabancı dil (Almanca) ile küresel iletişim kapasitesinin çok dilli boyuta taşınması."
    ],
    keyFeatures: [
      { title: "7. Sınıftan İtibaren LGS", desc: "Erken teşhis, hedef odaklı sınav koçluğu ve soru kampları" },
      { title: "Şampiyon Robotik Kulübü", desc: "FLL Türkiye Şampiyonu rehberliğinde ileri robotik" },
      { title: "MUN Diplomasisi", desc: "Uluslararası komitelerde İngilizce savunma ve delege deneyimi" },
      { title: "Akademik Koçluk", desc: "Haftalık veri odaklı bireysel gelişim takibi" }
    ],
    curriculum: ["MEB Ortaokul Müfredatı", "Cambridge Lower Secondary", "FLL STEM Lab", "LGS Özel Hazırlık Modülü"],
    image: "/images/bcn/stem-lab.jpg",
    badge: "LGS & STEM Liderliği"
  },
  {
    id: "anadolu-lisesi",
    slug: "anadolu-lisesi",
    name: "Anadolu Lisesi",
    subtitle: "Akademik Derinlik & Küresel Fırsatlar",
    ageGroup: "9 - 12. Sınıf",
    tagline: "Akademik Derinlik, Küresel Fırsatlar, Güçlü Gelecek.",
    description: "Özel Çekmeköy BCN College Anadolu Lisemizde eğitim; öğrencilerin akademik potansiyellerini en üst düzeyde ortaya çıkarırken, onları uluslararası ölçekte düşünebilen, hedef odaklı ve sorumluluk sahibi bireyler olarak geleceğe hazırlar.",
    fullContent: [
      "Programımız, öğrencilerin hem ulusal akademik hedeflere (YKS) hem de uluslararası üniversite seçeneklerine bilinçli ve donanımlı şekilde yönelmelerini destekleyecek biçimde yapılandırılmıştır.",
      "Anadolu Lisesi sürecinde öğrenciler güçlü bir akademik altyapı kazanırken; eleştirel düşünme, analiz, akademik yazma ve araştırma becerilerini sistemli biçimde geliştirir.",
      "AP (Advanced Placement) Programı ile öğrenciler, üniversite seviyesinde dersler alarak akademik derinlik kazanır; yurt içi ve yurt dışı üniversitelere başvurularda güçlü bir akademik profil oluşturur.",
      "OSSD Kanada Çift Diploma Programı sayesinde öğrencilerimiz, Türk diplomasının yanı sıra resmi Kanada lise diploması alarak mezun olur ve yurt dışı üniversitelere doğrudan kabul avantajı elde eder."
    ],
    keyFeatures: [
      { title: "OSSD Kanada Çift Diploma", desc: "Kanada ve dünya üniversitelerine sınavsız doğrudan başvuru hakkı" },
      { title: "AP (Advanced Placement)", desc: "Üniversite düzeyinde ders tamamlama ve uluslararası prestij" },
      { title: "YKS Başarı Stratejisi", desc: "11 ve 12. sınıfta hedef odaklı koçluk ve etüt takibi" },
      { title: "Uluslararası MUN & Projeler", desc: "Model United Nations ve Erasmus+ ile diplomatik tecrübe" }
    ],
    curriculum: ["OSSD Kanada Müfredatı", "College Board AP Dersleri", "MEB Anadolu Lisesi Programı", "YKS Derece Hazırlık Modülü"],
    image: "/images/bcn/secondary-highschool.jpg",
    badge: "Çift Diploma (OSSD) & AP"
  },
  {
    id: "fen-lisesi",
    slug: "fen-lisesi",
    name: "Fen Lisesi",
    subtitle: "Bilimsel Derinlik & Küresel İnovasyon",
    ageGroup: "9 - 12. Sınıf",
    tagline: "Bilimsel Derinlik, Akademik Mükemmeliyet, Küresel Ufuk.",
    description: "BCN College Fen Lisemizde eğitim; bilimi yalnızca öğrenilen bir alan değil, sorgulanan, araştırılan ve üretilen bir disiplin olarak ele alan güçlü bir akademik anlayış üzerine kuruludur. İleri matematik, fen bilimleri ve yapay zekâ odaklıdır.",
    fullContent: [
      "Fen Lisemizde akademik program; matematik, fen bilimleri ve teknoloji alanlarında ileri düzey düşünme becerileri kazandıracak şekilde planlanır. Öğrenciler problem çözme, modelleme ve veri analizi becerilerini geliştirir.",
      "Dünya STEM Olimpiyatları Finalleri'nde 4 Dünya Derecesi ve 23 Madalya kazanan araştırma kültürümüz, öğrencilerimizi küresel bilim sahnesine hazırlar.",
      "Fen Lisesi öğrencilerimiz, AP Programı (Calculus, Physics, Chemistry) aracılığıyla üniversite düzeyinde ileri akademik içeriklerle çalışma fırsatı bulur.",
      "Tıp, mühendislik ve temel bilimler alanlarında Türkiye'nin en seçkin üniversitelerini hedefleyen öğrenciler için yoğunlaştırılmış YKS Sayısal Derece Kampı uygulanır."
    ],
    keyFeatures: [
      { title: "Dünya STEM Şampiyonu", desc: "Uluslararası olimpiyatlarda şampiyonluk kazanan mentor kadrosu" },
      { title: "İleri Ar-Ge & Laboratuvar", desc: "Fizik, Kimya, Moleküler Biyoloji ve Yapay Zekâ labları" },
      { title: "AP Science & Calculus", desc: "Dünya standartlarında üniversiteye eşdeğer bilim dersleri" },
      { title: "YKS Sayısal Derece Koçluğu", desc: "Birebir eksik tamamlama ve kişiselleştirilmiş soru analizleri" }
    ],
    curriculum: ["İleri MEB Fen Müfredatı", "AP STEM Capstone", "Olimpiyat Hazırlık Programı", "OSSD Kanada Fen Entegrasyonu"],
    image: "/images/bcn/science-lab.jpg",
    badge: "İleri STEM & Dünya Şampiyonu"
  }
];

export const INTERNATIONAL_PROGRAMS: InternationalProgram[] = [
  {
    id: "ib-pyp",
    slug: "ib-primary-years-programme-pyp",
    title: "IB Primary Years Programme (PYP)",
    shortTitle: "IB PYP",
    badge: "Uluslararası Bakalorya",
    description: "International Baccalaureate® (IB) İlk Yıllar Programı, 3-12 yaş arası öğrencileri hem sınıfta hem de dış dünyada aktif, şefkatli ve yaşam boyu öğrenen bireyler olarak yetiştirir.",
    targetAges: "3 - 12 Yaş (Preschool & İlkokul)",
    details: [
      "Öğrenci merkezli ve sorgulama temelli 6 disiplinlerarası tema",
      "Kavramsal anlama ve küresel bağlamda eyleme geçme becerisi",
      "Uluslararası zihin yapısı ve kültürel çeşitliliğe derin saygı",
      "Öz-yönetim, araştırma, düşünme, iletişim ve sosyal beceri gelişimi"
    ],
    benefits: [
      "Dünyadaki en prestijli eğitim felsefesiyle erken yaşta tanışma",
      "Ezberden uzak, merak odaklı kalıcı öğrenme",
      "Kendi öğrenme sürecini yönetebilen özgüvenli bireyler"
    ],
    image: "/images/bcn/primary-school.jpg"
  },
  {
    id: "ossd",
    slug: "kanada-cift-diploma-programi",
    title: "Kanada Çift Diploma Programı (OSSD)",
    shortTitle: "Kanada OSSD",
    badge: "Ontario Ministry of Education",
    description: "Ontario Secondary School Diploma (OSSD), Kanada Eğitim Bakanlığı tarafından verilen ve dünyadaki tüm saygın üniversitelerce tanınan resmi bir lise diplomasıdır.",
    targetAges: "9 - 12. Sınıf",
    details: [
      "Öğrenciler BCN Lisesi'nde eğitimlerine devam ederken çevrim içi ve yüz yüze modüllerle OSSD kredilerini tamamlar.",
      "Programı bitiren öğrenciler hem Türk hem Kanada lise diploması alarak mezun olur.",
      "Kanada, İngiltere, ABD, Avrupa ve Avustralya üniversitelerine 'Kanadalı yerel öğrenci' statüsünde başvuru imkânı sağlar.",
      "IELTS / TOEFL muafiyeti veya kolaylaştırılmış dil şartı sunar."
    ],
    benefits: [
      "Dünya çapında ilk 100 üniversiteye sınavsız kabul kapısı",
      "Küresel akademik İngilizce yetkinliği",
      "Kariyer ve burs başvurularında kritik avantaj"
    ],
    image: "/images/bcn/campus-facade-1.jpg"
  },
  {
    id: "ap",
    slug: "ap-programi",
    title: "Advanced Placement (AP) Programı",
    shortTitle: "College Board AP",
    badge: "College Board USA",
    description: "AP programı, lise öğrencilerine üniversite düzeyinde ders alma ve bu dersleri uluslararası sınavlarda kredilendirerek üniversitede muafiyet kazanma imkânı sunar.",
    targetAges: "10 - 12. Sınıf",
    details: [
      "AP Calculus, AP Physics, AP Chemistry, AP Biology, AP Microeconomics gibi ileri düzey ders seçenekleri.",
      "Öğrencilerin akademik potansiyelini uluslararası ölçekte kanıtlama olanağı.",
      "Türkiye'deki vakıf üniversitelerinde burs ve ders muafiyeti hakkı.",
      "Dünya üniversitelerine kabul oranını kanıtlanmış biçimde artıran referans."
    ],
    benefits: [
      "Üniversitede birinci sınıf derslerinden muafiyet",
      "Seçkin bölümlerde burs ve öncelikli kabul",
      "Analitik ve bilimsel araştırma derinliği"
    ],
    image: "/images/bcn/science-lab.jpg"
  },
  {
    id: "thinkglobal",
    slug: "thinkglobal",
    title: "ThinkGlobal Eğitim Modeli",
    shortTitle: "ThinkGlobal",
    badge: "BCN Özgün İnovasyon",
    description: "BCN'nin dünyadaki en ileri pedagojik modelleri harmanlayarak geliştirdiği; küresel düşünme, eleştirel problem çözme ve kültürlerarası entegrasyon sistemidir.",
    targetAges: "Tüm Kademeler",
    details: [
      "Çok dilli öğrenme mimarisi ve kültürel diplomasi çalışmaları.",
      "Birleşmiş Milletler Sürdürülebilir Kalkınma Amaçları ile entegre proje üretimi.",
      "Yurt dışı kardeş okullarla ortak sınıf çalışmaları ve eş zamanlı seminerler.",
      "Etik teknoloji ve yapay zekâ okuryazarlığı."
    ],
    benefits: [
      "Dünya vatandaşı kimliği ve çok yönlü liderlik",
      "Karmaşık küresel problemleri analiz edebilme yetisi"
    ],
    image: "/images/bcn/classroom-modern.jpg"
  },
  {
    id: "mun",
    slug: "mun-programi",
    title: "Model United Nations (MUN)",
    shortTitle: "MUN Kulübü",
    badge: "Genç Diplomatlar",
    description: "Öğrencilerin dünya ülkelerinin delegesi rolünü üstlenerek güncel jeopolitik, çevresel ve ekonomik krizlere çözüm aradığı uluslararası simülasyon konferanslarıdır.",
    targetAges: "Ortaokul & Lise",
    details: [
      "Resmi diplomatik protokol ve hitabet kuralları eğitimi.",
      "Akıcı ve ikna edici İngilizce münazara performansı.",
      "Yılda en az 4 ulusal ve uluslararası konferansa aktif delege katılımı.",
      "Resolution (karar tasarısı) yazımı ve müzakere yönetimi."
    ],
    benefits: [
      "Üst düzey İngilizce hitabet ve ikna kabiliyeti",
      "Uluslararası network ve liderlik referansı"
    ],
    image: "/images/bcn/conference-hall.jpg"
  },
  {
    id: "erasmus",
    slug: "erasmus",
    title: "Erasmus+ ve Avrupa Projeleri",
    shortTitle: "Erasmus+",
    badge: "Avrupa Birliği Fonlu",
    description: "Avrupa Komisyonu destekli gençlik ve okul eğitimi projeleriyle öğrencilerimiz Avrupa'daki akranlarıyla ortak bilim, sanat ve sürdürülebilirlik projeleri yürütür.",
    targetAges: "Ortaokul & Lise",
    details: [
      "Almanya, İtalya, Finlandiya ve İspanya partner okullarıyla değişim programları.",
      "Kültürlerarası empati ve ortak proje üretimi.",
      "Europass sertifikası ile CV zenginleştirme."
    ],
    benefits: [
      "Avrupa'da doğrudan akademik ve kültürel deneyim",
      "Uluslararası geçerliliğe sahip proje belgeleri"
    ],
    image: "/images/bcn/campus-facade-2.jpg"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "campus-building",
    name: "Modern Madenler Kampüsü",
    category: "Genel Kampüs",
    description: "Çekmeköy-Ümraniye aksında, 12.000 m² modern kapalı ve açık alana sahip, akıllı havalandırma ve doğal ışık alan mimari yapı.",
    capacity: "1.200 Öğrenci",
    image: "/images/bcn/campus-building-wide.jpg",
    highlights: ["Depreme tam dayanıklı özel mühendislik", "Geniş peyzajlı güvenli iç avlular", "Akıllı bina yönetim sistemi"]
  },
  {
    id: "stem-labs",
    name: "İleri STEM & Kodlama Laboratuvarı",
    category: "Bilim & Teknoloji",
    description: "FLL Türkiye Şampiyonu robotik takımlarımızın çalıştığı, 3D yazıcılar, sensör kitleri ve yapay zekâ iş istasyonlarıyla donatılmış Ar-Ge alanı.",
    capacity: "35 Öğrenci",
    image: "/images/bcn/stem-lab.jpg",
    highlights: ["Endüstriyel prototipleme cihazları", "Lego Education Spike Prime & EV3 setleri", "Yapay zekâ ve algoritma istasyonları"]
  },
  {
    id: "science-lab",
    name: "Fizik, Kimya & Biyoloji Laboratuvarı",
    category: "Bilim",
    description: "Uluslararası güvenlik standartlarında havalandırma sistemine sahip, ileri düzey moleküler biyoloji ve mekanik deney setleri barındıran araştırma labı.",
    capacity: "30 Öğrenci",
    image: "/images/bcn/science-lab.jpg",
    highlights: ["Dijital mikroskoplar ve sensörlü veri toplayıcılar", "Bireysel çalışma tezgâhları", "Tam donanımlı kimyasal güvenlik donanımı"]
  },
  {
    id: "library",
    name: "Kütüphane & Araştırma Merkezi",
    category: "Akademik Kaynak",
    description: "15.000'i aşkın Türkçe, İngilizce ve Almanca basılı kaynak ile dünya çapında dijital veri tabanlarına erişim sunan sessiz çalışma alanı.",
    capacity: "120 Öğrenci",
    image: "/images/bcn/library-resource.jpg",
    highlights: ["JSTOR & Britannica dijital erişimi", "Bireysel çalışma kabinleri", "Grup proje ve tartışma odaları"]
  },
  {
    id: "sports-complex",
    name: "Kapalı Spor Kompleksi",
    category: "Spor & Sağlık",
    description: "FIBA onaylı parke zeminli basketbol/voleybol salonu, tırmanma duvarı, jimnastik stüdyosu ve sporcu performans ölçüm alanı.",
    capacity: "250 Seyirci",
    image: "/images/bcn/sports-facility.jpg",
    highlights: ["Çok amaçlı olimpik zemin", "Bireysel kondisyon ve esneklik alanı", "Lisanslı okul takımları çalışma merkezi"]
  },
  {
    id: "art-music",
    name: "Sanat & Müzik Stüdyoları",
    category: "Sanat & Kültür",
    description: "Doğal kuzey ışığı alan resim ve seramik atölyeleri ile ses yalıtımlı enstrüman odaları ve orkestra prova alanı.",
    capacity: "45 Öğrenci",
    image: "/images/bcn/music-art-studio.jpg",
    highlights: ["Akustik piyano ve enstrüman setleri", "Seramik fırını ve heykel tezgâhları", "Dijital müzik prodüksiyon ünitesi"]
  },
  {
    id: "auditorium",
    name: "Konferans & Oditoryum Salonu",
    category: "Etkinlik",
    description: "350 kişilik amfi oturma düzeni, profesyonel ses-ışık sistemleri ve tiyatro sahnesiyle ulusal/uluslararası organizasyonların merkezi.",
    capacity: "350 Kişi",
    image: "/images/bcn/conference-hall.jpg",
    highlights: ["Simultane çeviri altyapısı", "Sinematik 4K projeksiyon", "Akustik ahşap kaplama"]
  },
  {
    id: "dining",
    name: "Organik Beslenme Yemekhanesi",
    category: "Beslenme",
    description: "Gıda mühendisleri ve çocuk diyetisyenleri kontrolünde, yerel üreticilerden temin edilen katkısız gıdalarla hazırlanan 4 kap sıcak menü.",
    capacity: "400 Öğrenci",
    image: "/images/bcn/dining-hall.jpg",
    highlights: ["Özel beslenme (alerjen/çölyak) takibi", "Günde 3 öğün taze üretim", "Sıfır atık kompost entegrasyonu"]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    slug: "uluslararasi-olimpiyatlarda-dunya-sampiyonuyuz",
    title: "Uluslararası STEM Olimpiyatları'nda Dünya Şampiyonuyuz",
    category: "Akademik Başarı",
    date: "28 Şubat 2026",
    readTime: "3 dk",
    summary: "BCN Eğitim Kurumları öğrencileri, 48 ülkeden 1.200'ü aşkın seçkin okulun yarıştığı Dünya STEM Olimpiyatları Finalleri'nde 4 Dünya Derecesi ve 23 Madalya kazanarak büyük bir zafere imza attı.",
    image: "/images/bcn/fll-trophy-champions.jpg",
    author: "BCN Akademik İletişim",
    featured: true,
    content: [
      "Dünyanın en prestijli bilim ve teknoloji yarışmalarından biri olarak kabul edilen Uluslararası STEM Olimpiyatları Finalleri bu yıl büyük bir rekabete sahne oldu.",
      "BCN College Fen ve Anadolu Lisesi öğrencilerimiz; Yapay Zekâ, Biyomimikri ve Yenilenebilir Enerji kategorilerinde hazırladıkları özgün projelerle jürinin tam notunu aldı.",
      "Okulumuz toplamda 4 Dünya Derecesi, 8 Altın Madalya, 9 Gümüş Madalya ve 6 Bronz Madalya ile genel klasmanda şampiyonluk kupasını Türkiye'ye getirdi.",
      "Kurucumuz Adem Bican, 'Öğrencilerimize kazandırdığımız matematiksel disiplin ve bilimsel metodoloji, küresel sahnede göğsümüzü kabartan sonuçlar üretmeye devam ediyor' dedi."
    ]
  },
  {
    id: "news-2",
    slug: "first-lego-leaguede-turkiye-sampiyonuyuz",
    title: "First Lego League'de Türkiye Şampiyonu ve Marmara Şampiyonu BCN Robotics",
    category: "Robotik & Teknoloji",
    date: "14 Mart 2026",
    readTime: "4 dk",
    summary: "BCN Robotics takımı, FLL Türkiye Finalinde hem 'Robot Performans' hem de 'Öz Değerler' kategorisinde birincilik ödülünü alarak Türkiye'yi dünya şampiyonasında temsil etme hakkı kazandı.",
    image: "/images/bcn/fll-robotics-team.jpg",
    author: "Robotik Kulübü Mentorluğu",
    featured: false,
    content: [
      "Aylarca süren algoritma tasarımı, otonom sürüş testleri ve inovatif proje sunumları meyvesini verdi.",
      "First Lego League Marmara ve Türkiye finallerinde yarışan ortaokul robotik ekibimiz, karmaşık görevleri sıfır hata ile tamamlayarak rekor puan topladı.",
      "Takımımız, jürinin en çok önem verdiği iş birliği, duyarlı profesyonellik ve takım ruhu alanlarında da tam puan alarak Öz Değerler Şampiyonu seçildi."
    ]
  },
  {
    id: "news-3",
    slug: "ogrencilerimiz-trt-worldde",
    title: "Öğrencilerimiz TRT World Ekranlarında: Geleceğin Global Gazetecileri Yetişiyor",
    category: "Medya & Proje",
    date: "22 Nisan 2026",
    readTime: "2 dk",
    summary: "Lise öğrencilerimiz, küresel çevre krizleri ve yapay zekâ etiği üzerine İngilizce hazırladıkları araştırma belgeseli ile TRT World ekranlarında canlı yayında projelerini anlattı.",
    image: "/images/bcn/press-hurriyet.jpg",
    author: "İngilizce Zümre Başkanlığı",
    featured: false,
    content: [
      "Genç nesillerin dünya meselelerine duyarsız kalmaması vizyonuyla yürüttüğümüz ThinkGlobal projesi ulusal ve uluslararası basında ses getirdi.",
      "TRT World özel yayınında konuşan öğrencilerimiz, akıcı İngilizceleri ve derin analizleriyle izleyenlerin takdirini kazandı."
    ]
  },
  {
    id: "news-4",
    slug: "bursluluk-sinavimiz-yerel-basinda",
    title: "2026 Giriş & Bursluluk Sınavımıza Yoğun İlgi: 100 Öğrenciye %100'e Varan Burs",
    category: "Kayıt & Kabul",
    date: "18 Mayıs 2026",
    readTime: "3 dk",
    summary: "Madenler Kampüsümüzde gerçekleşen 2026 Bursluluk Sınavına İstanbul genelinden binlerce öğrenci başvurdu. Başarılı öğrencilere potansiyel odaklı Yetenek Bursu takdim edildi.",
    image: "/images/bcn/classroom-interactive.jpg",
    author: "Öğrenci İşleri & Kabul",
    featured: false,
    content: [
      "BCN Eğitim Kurumları olarak, maddi imkânlardan bağımsız olarak parlayan zihinlere kapılarımızı açmayı kurumsal bir görev biliyoruz.",
      "Sadece test başarısını değil; analitik muhakeme, yaratıcı düşünme ve mülakat performansını da puanlayan 'Yetenek Haritası' modelimiz büyük takdir topladı."
    ]
  }
];

export const FOUNDER_INFO = {
  name: "Adem Bican",
  title: "Kurucu & Eğitim Vizyoneri",
  quote: "Eğitimi yalnızca akademik bir müfredat aktarımı değil; zihinsel bir disiplin inşası ve rasyonel akıl ortaklığı olarak tanımlıyoruz.",
  bio: `BCN Eğitim Kurumları'nın kurucu vizyonu, matematiksel disiplinin rasyonel düşünceyle birleştiği, sorgulayan ve analiz eden bireyler yetiştirme tutkusuna dayanır. Kurucumuz Adem Bican liderliğinde kurumumuz; ezberci kalıpları yıkarak çocukların doğuştan gelen merakını küresel bir yetkinliğe dönüştüren çağdaş bir ekol inşa etmiştir.

Adem Bican'ın öncülük ettiği 'Zihinsel Disiplin' felsefesi; bir öğrencinin yalnızca formülleri bilmesini değil, hayatın karmaşık problemlerini analitik süzgeçten geçirerek etik, dengeli ve cesur çözümler üretebilmesini hedefler.`,
  principles: [
    { title: "Matematiksel Zihin İnşası", desc: "Soyut kavramları rasyonel kararlara dönüştüren analitik düşünce omurgası." },
    { title: "Dijital Etik ve Yapay Zekâ", desc: "Teknolojiyi tüketen değil, insanlık yararına yöneten ahlaki sorumluluk." },
    { title: "Okul-Aile Ortak Akıl Birliği", desc: "Öğrenci gelişiminin kampüs duvarlarının ötesinde, aileyle kurulan bilinçli rehberlik ortaklığı." },
    { title: "Köklerden Küresele Vizyon", desc: "Kendi milli kültür ve değerlerine sımsıkı bağlı, dünya sahnesinde özgüvenle konuşan bireyler." }
  ]
};

export interface LeaderMember {
  id: string;
  name: string;
  role: string;
  category: "Kurucu" | "Genel Yönetim" | "Okul Müdürleri" | "Müdür Yardımcıları ve Koordinatörler";
  focus: string;
  image: string;
  bio: string;
}

export const LEADERSHIP_TEAM: LeaderMember[] = [
  {
    id: "adem-bican",
    name: "Adem Bican",
    role: "Kurucu",
    category: "Kurucu",
    focus: "Kurucu Vizyonu, Eğitim Felsefesi & Matematiksel Disiplin",
    image: "/images/bcn/founder-adem-bican.png",
    bio: "BCN Eğitim Kurumları'nın kurucusu Adem Bican; eğitimin yalnızca akademik bir müfredat aktarımı değil, zihinsel bir disiplin, karakter ve gelecek bilinci inşası olduğunu savunur. Atatürk'ün akıl ve bilim vizyonu ışığında, çocukların analitik muhakeme ve rasyonel düşünme yetilerini geliştiren Bold Challenger eğitim modelini hayata geçirmiştir."
  },
  {
    id: "ahmet-taskin-aydin",
    name: "Ahmet Taşkın Aydın",
    role: "Genel Müdür",
    category: "Genel Yönetim",
    focus: "Kurumsal Yönetişim, Okul İklimi & Operasyonel Mükemmeliyet",
    image: "/images/bcn/leaders/ahmet-taskin-aydin.png",
    bio: "BCN Koleji'nin genel işleyişini, kurumsal standartlarını ve öğrenci odaklı okul iklimini yönetir. Eğitimde kalite güvencesi ve tüm kademeler arasındaki akademik uyumun sürdürülebilirliğini sağlar."
  },
  {
    id: "ali-haydar-baytekin",
    name: "Ali Haydar Baytekin",
    role: "Genel Müdür Yardımcısı",
    category: "Genel Yönetim",
    focus: "Akademik Koordinasyon, Müfredat Geliştirme & Öğretmen Gelişimi",
    image: "/images/bcn/leaders/ali-haydar-baytekin.png",
    bio: "Ulusal müfredat ile uluslararası programların (IB PYP, OSSD) entegrasyonunu koordine eder. Pedagojik süreçlerin ve öğretmen mesleki gelişim programlarının liderliğini yürütür."
  },
  {
    id: "begum-gulsah-gul",
    name: "Begüm Gülşah Gül",
    role: "Genel Müdür Yardımcısı (Kurumsal İletişim)",
    category: "Genel Yönetim",
    focus: "Kurumsal İletişim, Veli İlişkileri & Marka Stratejisi",
    image: "/images/bcn/leaders/begum-gulsah-gul.png",
    bio: "BCN'nin şeffaf, güven veren ve sürdürülebilir veli-okul iletişim ekosistemini yönetir. Kurumsal etkinliklerin, halkla ilişkilerin ve dijital iletişimin stratejik planlamasını yürütür."
  },
  {
    id: "hilal-demirlioglu",
    name: "Hilal Demirlioğlu",
    role: "İlkokul Müdürü",
    category: "Okul Müdürleri",
    focus: "IB PYP Yaklaşımı, Erken Dönem Sorgulama & İlkokul Pedagojisi",
    image: "/images/bcn/leaders/hilal-demirlioglu.png",
    bio: "İlkokul kademesinde kavram temelli, disiplinler arası sorgulama kültürünü ve IB PYP felsefesini hayata geçirir. Öğrencilerin merakını, keşfetme arzusunu ve yaşam boyu öğrenme tutkusunu destekler."
  },
  {
    id: "mahmut-erkut-cetintas",
    name: "Mahmut Erkut Çetintaş",
    role: "Lise Müdürü",
    category: "Okul Müdürleri",
    focus: "Anadolu & Fen Lisesi Yönetimi, OSSD Kanada & YKS Başarı Stratejisi",
    image: "/images/bcn/leaders/mahmut-erkut-cetintas.png",
    bio: "Lise kademesinde akademik derinlik, üniversiteye hazırlık, OSSD Kanada Çift Diploması ve AP programlarının operasyonel yönetimini üstlenir. Gençlerin küresel hedeflerine rehberlik eder."
  },
  {
    id: "yunus-emre-ayaz",
    name: "Yunus Emre Ayaz",
    role: "Ortaokul Müdür Yardımcısı",
    category: "Müdür Yardımcıları ve Koordinatörler",
    focus: "LGS Akademik Takip, Öğrenci Rehberliği & Disiplin Süreçleri",
    image: "/images/bcn/leaders/yunus-emre-ayaz.png",
    bio: "Ortaokul öğrencilerinin ergenlik dönemi gelişim süreçlerini, LGS hazırlık etütlerini ve bireysel akademik hedeflerini sistemli biçimde takip eder."
  },
  {
    id: "fatma-akhan",
    name: "Fatma Akhan",
    role: "Ortaokul Müdür Yardımcısı",
    category: "Müdür Yardımcıları ve Koordinatörler",
    focus: "STEM & Robotik Entegrasyonu, Ortaokul Etkinlikleri & Veli İletişimi",
    image: "/images/bcn/leaders/fatma-akhan.png",
    bio: "Ortaokul düzeyinde bilimsel yarışmalar, FLL robotik çalışmaları ve disiplinler arası proje süreçlerinin koordinasyonunu sağlar."
  },
  {
    id: "ebru-salman",
    name: "Ebru Salman",
    role: "Uluslararası Programlar ve Projeler Koordinatörü",
    category: "Müdür Yardımcıları ve Koordinatörler",
    focus: "IB PYP, Kanada OSSD, Erasmus+, MUN & Global Schools",
    image: "/images/bcn/leaders/ebru-salman.png",
    bio: "Dünya çapındaki eğitim ağlarıyla partnerlikleri, öğrenci değişim programlarını, uluslararası akreditasyon süreçlerini ve küresel sürdürülebilirlik projelerini yürütür."
  },
  {
    id: "gulcan-dortyol",
    name: "Gülcan Dörtyol",
    role: "Ölçme Değerlendirme Koordinatörü",
    category: "Müdür Yardımcıları ve Koordinatörler",
    focus: "Veri Analitiği, Bireysel Yetenek Haritası & Sınav Değerlendirme",
    image: "/images/bcn/leaders/gulcan-dortyol.png",
    bio: "Öğrencilerin akademik kazanımlarını bilimsel ölçme araçlarıyla analiz eder, kazanım eksikliklerini tespit ederek kişiye özel gelişim haritaları oluşturur."
  },
  {
    id: "sukriye-zorlu-yilmazturk",
    name: "Şükriye Zorlu Yılmaztürk",
    role: "İlkokul Müdür Yardımcısı",
    category: "Müdür Yardımcıları ve Koordinatörler",
    focus: "İlkokul Öğrenci İşleri, Sosyal-Duygusal Gelişim & Okul Düzeni",
    image: "/images/bcn/leaders/sukriye-zorlu-yilmazturk.png",
    bio: "İlkokul kademesinde günlük eğitim akışını, çocukların sosyal uyumunu ve güvenli öğrenme ortamını titizlikle koordine eder."
  },
  {
    id: "rabia-kubra-cosar",
    name: "Rabia Kübra Coşar",
    role: "Lise Müdür Yardımcısı",
    category: "Müdür Yardımcıları ve Koordinatörler",
    focus: "Lise Akademik Takvimi, Kulüp Faaliyetleri & Yurt Dışı Kabul Danışmanlığı",
    image: "/images/bcn/leaders/rabia-kubra-cosar.png",
    bio: "Lise öğrencilerinin ulusal ve uluslararası akademik portfolyolarını, kulüp ve sosyal sorumluluk projelerini koordine eder."
  },
  {
    id: "ezgi-findik",
    name: "Ezgi Fındık",
    role: "İlkokul Müdür Yardımcısı",
    category: "Müdür Yardımcıları ve Koordinatörler",
    focus: "İlkokul Müfredat Takibi, Farklılaştırılmış Öğretim & Rehberlik",
    image: "/images/bcn/leaders/ezgi-findik.png",
    bio: "Öğrencilerin bireysel öğrenme hızlarına göre farklılaştırılmış eğitim süreçlerini ve gelişim basamaklarını yakından izler."
  },
  {
    id: "feyza-celik",
    name: "Feyza Çelik",
    role: "İlkokul Müdür Yardımcısı",
    category: "Müdür Yardımcıları ve Koordinatörler",
    focus: "Erken Okuryazarlık, Sanat-Kültür Faaliyetleri & Masal Zamanı",
    image: "/images/bcn/leaders/feyza-celik.png",
    bio: "İlkokulda çocukların dil ve ifade becerilerini, sanatsal yaratıcılıklarını ve okuma kültürünü zenginleştiren etkinlikleri yönetir."
  }
];

export const PARENTS_ACADEMY = {
  title: "BCN Ebeveyn Akademisi",
  subtitle: "Eğitim Evde Başlar, BCN ile Geleceğe Uzanır",
  description: "Bir çocuğun başarısı sadece okul duvarları arasında değil; okul ile ailenin kurduğu rasyonel ve duygusal ortaklıkta gizlidir. Ebeveynliği bir görev değil, bir 'rehberlik sanatı' olarak gören bilimsel gelişim merkezimiz.",
  pillars: [
    {
      title: "Duygusal Sağlamlık ve Bağlanma",
      desc: "Çocuğun üzüntü ve öfkesini bastırmadan sağlıklı ifade etmesini sağlama ve güvenli bağlanma yöntemleri."
    },
    {
      title: "Dijital Çağda Sınır Koyma",
      desc: "Sosyal medyanın erken yetişkinleşme baskısına karşı çocukluğu koruma ve yasakçı değil bilinçli teknoloji rehberliği."
    },
    {
      title: "MOXO Dikkat Testi & Akademik Destek",
      desc: "Odaklanma ve dürtüsellik alanlarında bilimsel testlerle evde verimli çalışma alışkanlığı kazandırma."
    }
  ]
};

export const FAQ_ITEMS = [
  {
    q: "BCN Koleji hangi eğitim programlarını uygulamaktadır?",
    a: "BCN Eğitim Kurumları; okul öncesinde Yale RULER ve çok dilli yaklaşım, ilkokulda IB Primary Years Programme (PYP) aday okulu müfredatı, ortaokulda LGS odaklı başarı tasarımı ve STEM programı, lisede ise Kanada Çift Diploması (OSSD), AP (Advanced Placement) ve YKS derece koçluğu uygulamaktadır."
  },
  {
    q: "Kanada Çift Diploma (OSSD) programı nedir ve ne avantaj sağlar?",
    a: "Ontario Secondary School Diploma (OSSD), Ontario Eğitim Bakanlığı onaylı lise diplomasıdır. Öğrencilerimiz okulumuzda mezun olurken hem Türk hem Kanada lise diploması alarak Kanada, İngiltere, ABD ve Avrupa üniversitelerine sınavsız ve 'yerel öğrenci' avantajıyla doğrudan kabul alma şansı yakalar."
  },
  {
    q: "Okulunuzun yabancı dil eğitim yaklaşımı nasıldır?",
    a: "Okulumuzda erken çocukluktan itibaren İngilizce anadili gibi edinilen immersion (yaşayarak öğrenme) modeliyle sunulur. İlkokuldan itibaren ikinci yabancı dil olarak Almanca eğitimi başlar. Ortaokul ve lisede öğrencilerimiz MUN, Erasmus+ ve uluslararası münazaralarda aktif rol alır."
  },
  {
    q: "Kampüsünüz nerede ve ulaşım imkânları nelerdir?",
    a: "Kampüsümüz Ümraniye / Çekmeköy sınırında, Madenler Mahallesi İdealist Kent Caddesi No:5/A adresindedir. Çekmeköy Metro İstasyonu'na yürüme mesafesinde olup İstanbul Anadolu yakasının tüm ilçelerine modern, çift hostesli okul servis filomuz hizmet vermektedir."
  },
  {
    q: "Kayıt ve kabul süreci nasıl işlemektedir?",
    a: "Kayıt kabul sürecimiz; ön başvuru formunun doldurulması, öğrenci tanıma mülakatı, kademeye göre bursluluk/düzey belirleme değerlendirmesi ve veli tanışma randevusu adımlarından oluşur. Kontenjanlarımız sınıf mevcudu (azami 18-20 öğrenci) ile sınırlıdır."
  }
];
