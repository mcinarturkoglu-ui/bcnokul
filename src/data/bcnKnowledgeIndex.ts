import {
  INSTITUTION_INFO,
  LEVELS,
  INTERNATIONAL_PROGRAMS,
  FACILITIES,
  LEADERSHIP_TEAM,
  FOUNDER_INFO,
  FAQ_ITEMS,
  PARENTS_ACADEMY,
} from "./bcnData";

export interface KnowledgeDoc {
  id: string;
  title: string;
  route: string;
  category:
    | "institution"
    | "level"
    | "program"
    | "admission"
    | "leadership"
    | "facility"
    | "achievement"
    | "contact"
    | "faq";
  keywords: string[];
  summary: string;
  content: string;
  actionType?: "NAVIGATE" | "OPEN_ADMISSION_MODAL" | "CALL_PHONE";
  actionLabel?: string;
  actionPayload?: string;
}

export const BCN_KNOWLEDGE_INDEX: KnowledgeDoc[] = [
  // --- İLETİŞİM & LOKASYON ---
  {
    id: "contact-main",
    title: "İletişim Bilgileri ve Kampüs Ulaşımı",
    route: "/iletisim",
    category: "contact",
    keywords: [
      "iletişim",
      "nerede",
      "adres",
      "telefon",
      "kampüs nerede",
      "ulaşım",
      "metro",
      "numara",
      "ara",
      "e-posta",
      "mail",
      "çalışma saatleri",
      "saatler",
      "konum",
      "harita",
      "çekmeköy",
      "ümraniye",
      "madenler",
    ],
    summary:
      "BCN Eğitim Kurumları Çekmeköy/Ümraniye sınırında Madenler Mahallesi'nde bulunmaktadır. Telefon: 0552 051 23 36, E-posta: info@bcnegitimkurumlari.k12.tr.",
    content: `BCN Eğitim Kurumları İletişim Bilgileri:
• Adres: Madenler Mahallesi, İdealist Kent Caddesi No:5/A, 34776 Ümraniye / Çekmeköy, İstanbul
• Telefon: 0552 051 23 36 (+90 552 051 23 36)
• E-posta: info@bcnegitimkurumlari.k12.tr
• Çalışma Saatleri: Pazartesi - Cuma: 08:00 - 18:00 | Cumartesi: 09:00 - 15:00
• Ulaşım: Çekmeköy Metro İstasyonu'na yürüme mesafesinde olup İstanbul Anadolu yakasının tüm ilçelerine modern, çift hostesli okul servis filosu hizmet vermektedir.`,
    actionType: "NAVIGATE",
    actionLabel: "İletişim Sayfasını Aç",
    actionPayload: "/iletisim",
  },

  // --- KAYIT & KABUL & RANDEVU ---
  {
    id: "admission-appointment",
    title: "Kayıt & Kabul ve Kampüs Ziyaret Randevusu",
    route: "/kayit-ve-kabul",
    category: "admission",
    keywords: [
      "kayıt",
      "kabul",
      "başvuru",
      "randevu",
      "ziyaret",
      "form",
      "ön kayıt",
      "başvuru yap",
      "kontenjan",
      "ücret",
      "fiyat",
      "burs",
      "bursluluk",
      "sınav",
      "giriş sınavı",
      "görüşme",
    ],
    summary:
      "BCN Eğitim Kurumları kayıt kabul süreci; ön başvuru formu, öğrenci tanıma mülakatı ve veli randevusu adımlarından oluşur. Sınıf mevcutları azami 18-20 öğrencidir.",
    content: `BCN Kayıt ve Kabul Süreci:
1. Ön Başvuru: Web sitemizdeki randevu formunun veya kayıt sayfasının doldurulması.
2. Öğrenci Tanıma & Düzey Belirleme: Kademeye göre akademik değerlendirme ve yetenek haritası mülakatı.
3. Veli Görüşmesi: Eğitim felsefemiz, okul ortamımız ve öğrenci hedeflerinin birebir değerlendirilmesi.
4. Kesin Kayıt: Kontenjan dahilinde (sınıf başına azami 18-20 öğrenci) kesin kayıt protokolünün imzalanması.
Bursluluk ve kayıt şartları hakkında detaylı bilgilendirme birebir veli randevusunda yapılmaktadır.`,
    actionType: "OPEN_ADMISSION_MODAL",
    actionLabel: "Hızlı Randevu Formunu Aç",
    actionPayload: "randevu",
  },

  // --- KURUCU ADEM BİCAN & FELSEFE ---
  {
    id: "founder-adem-bican",
    title: "Kurucu Adem Bican ve Eğitim Felsefesi",
    route: "/lider-ekibimiz",
    category: "leadership",
    keywords: [
      "adem bican",
      "kurucu",
      "felsefe",
      "vizyon",
      "matematiksel disiplin",
      "rasyonel akıl",
      "bold challenger",
      "neden bcn",
      "kurumsal",
      "kim kurdu",
    ],
    summary:
      "BCN Eğitim Kurumları'nın kurucusu Adem Bican; eğitimin yalnızca müfredat aktarımı değil, zihinsel bir disiplin ve rasyonel akıl ortaklığı olduğunu savunur.",
    content: `Kurucumuz Adem Bican'ın Vizyonu:
"Eğitimi yalnızca akademik bir müfredat aktarımı değil; zihinsel bir disiplin inşası ve rasyonel akıl ortaklığı olarak tanımlıyoruz."
Temel İlkelerimiz:
• Matematiksel Zihin İnşası: Soyut kavramları rasyonel kararlara dönüştüren analitik düşünce omurgası.
• Dijital Etik ve Yapay Zekâ: Teknolojiyi tüketen değil, insanlık yararına yöneten ahlaki sorumluluk.
• Okul-Aile Ortak Akıl Birliği: Öğrenci gelişiminin kampüs duvarlarının ötesinde veliyle kurulan bilinçli rehberlik ortaklığı.
• Köklerden Küresele Vizyon: Kendi milli kültürüne bağlı, dünya sahnesinde özgüvenle konuşan bireyler.`,
    actionType: "NAVIGATE",
    actionLabel: "Lider Ekibimizi İncele",
    actionPayload: "/lider-ekibimiz",
  },

  // --- GENEL MÜDÜR VE YÖNETİM EKİBİ ---
  {
    id: "leadership-team",
    title: "Liderlik ve Yönetim Ekibimiz",
    route: "/lider-ekibimiz",
    category: "leadership",
    keywords: [
      "yönetim",
      "müdür",
      "genel müdür",
      "ahmet taşkın aydın",
      "ali haydar baytekin",
      "begüm gülşah gül",
      "hilal demirlioğlu",
      "mahmut erkut çetintaş",
      "yunus emre ayaz",
      "fatma akhan",
      "ebru salman",
      "gülcan dörtyol",
      "koordinatör",
      "kadro",
      "öğretmenler",
    ],
    summary:
      "BCN Koleji Genel Müdürü Ahmet Taşkın Aydın, Genel Müdür Yardımcıları Ali Haydar Baytekin ve Begüm Gülşah Gül liderliğinde deneyimli bir akademik yönetime sahiptir.",
    content: `BCN Eğitim Kurumları Yönetim Kadrosu:
• Kurucu: Adem Bican
• Genel Müdür: Ahmet Taşkın Aydın (Kurumsal Yönetişim & Operasyonel Mükemmeliyet)
• Genel Müdür Yardımcısı: Ali Haydar Baytekin (Akademik Koordinasyon & Öğretmen Gelişimi)
• Genel Müdür Yardımcısı (Kurumsal İletişim): Begüm Gülşah Gül (Veli İlişkileri & İletişim)
• İlkokul Müdürü: Hilal Demirlioğlu (IB PYP Yaklaşımı & İlkokul Pedagojisi)
• Lise Müdürü: Mahmut Erkut Çetintaş (Anadolu & Fen Lisesi, OSSD & YKS)
• Ortaokul Müdür Yardımcıları: Yunus Emre Ayaz, Fatma Akhan
• Uluslararası Programlar Koordinatörü: Ebru Salman (IB PYP, OSSD, Erasmus+, MUN)
• Ölçme Değerlendirme Koordinatörü: Gülcan Dörtyol`,
    actionType: "NAVIGATE",
    actionLabel: "Tüm Yönetim Ekibini Gör",
    actionPayload: "/lider-ekibimiz",
  },

  // --- KADEMELER: AURELIA PRESCHOOL ---
  {
    id: "level-preschool",
    title: "Aurelia Preschool (Erken Çocukluk & Anaokulu)",
    route: "/kademeler/aurelia-preschool",
    category: "level",
    keywords: [
      "anaokulu",
      "okul öncesi",
      "preschool",
      "aurelia",
      "3 yaş",
      "4 yaş",
      "5 yaş",
      "6 yaş",
      "erken çocukluk",
      "yale ruler",
      "ruler",
      "duygusal zeka",
      "çift dilli",
      "ingilizce",
      "almanca",
      "oyun",
      "kreş",
    ],
    summary:
      "Aurelia Preschool (3-6 yaş); Yale Üniversitesi RULER duygusal zekâ modeli, doğal çift dilli immersion eğitimi (İngilizce & Almanca) ve yapay zekâ destekli bireysel gelişim takibi sunar.",
    content: `Aurelia Preschool (3 - 6 Yaş):
• Felsefe: "Baskı yerine alan, ezber yerine keşif ve güvenli bağlanma."
• Yale RULER Yaklaşımı: Yale Üniversitesi Çocuk Çalışmaları Merkezi tarafından geliştirilen duygusal zekâ, empati ve öz-düzenleme modeli.
• Doğal Çift Dillilik: Günün her anında yaşayan İngilizce ve Almanca daldırma (immersion) yaklaşımı.
• Nöro-Gelişimsel Oyunlar: Zihinsel esneklik, problem çözme ve ince motor beceri inşası.
• Yapay Zekâ Destekli Gelişim Haritası: Her çocuğa özgü bilimsel pedagojik gözlem.
• Müfredat: Yale RULER, Montessori & Reggio Emilia İlhamı, Erken STEM & Kodlama, Doğa Atölyesi, Orff Müzik.`,
    actionType: "NAVIGATE",
    actionLabel: "Preschool Sayfasına Git",
    actionPayload: "/kademeler/aurelia-preschool",
  },

  // --- KADEMELER: İLKOKUL ---
  {
    id: "level-primary",
    title: "İlkokul (Primary School - 1-4. Sınıf)",
    route: "/kademeler/ilkokul",
    category: "level",
    keywords: [
      "ilkokul",
      "primary",
      "1. sınıf",
      "2. sınıf",
      "3. sınıf",
      "4. sınıf",
      "ib pyp",
      "pyp",
      "bakalorya",
      "moxo",
      "dikkat testi",
      "cambridge",
      "sorgulama",
      "okuma kültürü",
    ],
    summary:
      "BCN İlkokulu; IB Primary Years Programme (PYP) aday okulu olarak kavramsal sorgulama temelli eğitim, MOXO Sürekli Dikkat Testi desteği ve Cambridge English eğitimi uygular.",
    content: `BCN İlkokulu (1 - 4. Sınıf):
• Felsefe: "Yalnızca bilgi edinmek değil; anlam kurmak, bağlantı kurmak ve dünyayı sorgulamak."
• IB PYP Yaklaşımı: Disiplinlerarası küresel temalar ve sorgulama üniteleri.
• MOXO Sürekli Dikkat Testi: Bilişsel odaklanma ve kişisel öğrenme stratejileri haritası.
• Okuma Kültürü ve Münazara: Yılda 30+ seçkin eser incelemesi ve ifade zenginliği.
• STEM & Maker Atölyesi: Erken yaşta robotik kodlama ve algoritma mantığı.
• Çift Yabancı Dil: Cambridge Primary destekli yoğun İngilizce ve ikinci yabancı dil Almanca.`,
    actionType: "NAVIGATE",
    actionLabel: "İlkokul Sayfasına Git",
    actionPayload: "/kademeler/ilkokul",
  },

  // --- KADEMELER: ORTAOKUL ---
  {
    id: "level-middle",
    title: "Ortaokul (Middle School - 5-8. Sınıf)",
    route: "/kademeler/ortaokul",
    category: "level",
    keywords: [
      "ortaokul",
      "middle school",
      "5. sınıf",
      "6. sınıf",
      "7. sınıf",
      "8. sınıf",
      "lgs",
      "lgs hazırlık",
      "fll",
      "robotik",
      "robot",
      "mun",
      "marmara şampiyonu",
      "türkiye şampiyonu",
      "deneme sınavı",
    ],
    summary:
      "BCN Ortaokulu; 7. sınıftan başlayan yoğunlaştırılmış LGS hazırlık sistemi, FLL Türkiye ve Marmara Şampiyonu robotik takımı ve Model United Nations (MUN) kulübü ile öne çıkar.",
    content: `BCN Ortaokulu (5 - 8. Sınıf):
• LGS Başarı Tasarımı: 7. sınıftan itibaren başlayan yoğunlaştırılmış akademik mentorluk, haftalık deneme analizleri ve birebir etüt sistemi.
• Şampiyon Robotik Kulübü: First Lego League (FLL) Türkiye ve Marmara Şampiyonu mentor kadrosu rehberliğinde ileri robotik ve kodlama.
• MUN Diplomasisi: Model United Nations kulübü ile uluslararası komitelerde İngilizce savunma ve delege deneyimi.
• Akademik Koçluk: Haftalık veri odaklı bireysel gelişim takibi.
• İkinci Yabancı Dil: Almanca eğitimi ile çok dilli küresel iletişim.`,
    actionType: "NAVIGATE",
    actionLabel: "Ortaokul Sayfasına Git",
    actionPayload: "/kademeler/ortaokul",
  },

  // --- KADEMELER: ANADOLU LİSESİ ---
  {
    id: "level-anadolu-lisesi",
    title: "Anadolu Lisesi (9-12. Sınıf)",
    route: "/kademeler/anadolu-lisesi",
    category: "level",
    keywords: [
      "anadolu lisesi",
      "lise",
      "9. sınıf",
      "10. sınıf",
      "11. sınıf",
      "12. sınıf",
      "ossd",
      "kanada",
      "çift diploma",
      "ap",
      "advanced placement",
      "yks",
      "üniversite hazırlık",
    ],
    summary:
      "BCN Anadolu Lisesi; Kanada Çift Diploması (OSSD), College Board AP (Advanced Placement) dersleri ve YKS başarı koçluğunu bir arada sunar.",
    content: `BCN Anadolu Lisesi (9 - 12. Sınıf):
• OSSD Kanada Çift Diploma: Mezuniyetle birlikte Türk diplomasının yanında Kanada Ontario Lise Diploması kazanma imkânı. Kanada ve dünya üniversitelerine sınavsız başvuru avantajı.
• AP (Advanced Placement): Üniversite düzeyinde ders tamamlama ve yurt içi/dışı üniversitelerde kredi/burs muafiyeti.
• YKS Başarı Stratejisi: 11 ve 12. sınıfta hedef odaklı koçluk, branş denemeleri ve etüt takibi.
• MUN & Erasmus+: Uluslararası diplomasi konferansları ve Avrupa Birliği gençlik projeleri.`,
    actionType: "NAVIGATE",
    actionLabel: "Anadolu Lisesi Sayfasına Git",
    actionPayload: "/kademeler/anadolu-lisesi",
  },

  // --- KADEMELER: FEN LİSESİ ---
  {
    id: "level-fen-lisesi",
    title: "Fen Lisesi (9-12. Sınıf - Dünya Şampiyonu)",
    route: "/kademeler/fen-lisesi",
    category: "level",
    keywords: [
      "fen lisesi",
      "bilim",
      "stem",
      "dünya şampiyonu",
      "madalya",
      "laboratuvar",
      "ar-ge",
      "sayısal",
      "tıp",
      "mühendislik",
      "ap science",
      "fizik",
      "kimya",
      "biyoloji",
      "yapay zeka",
    ],
    summary:
      "BCN Fen Lisesi; Dünya STEM Olimpiyatları'nda 4 Dünya Derecesi ve 23 Madalya kazanan araştırma kültürü, AP Science dersleri ve YKS Sayısal Derece Kampı uygular.",
    content: `BCN Fen Lisesi (9 - 12. Sınıf):
• Bilimsel Prestij: Dünya STEM Olimpiyatları Finalleri'nde 4 Dünya Derecesi ve 23 Madalya kazanan uluslararası yarışma kültürü.
• İleri Ar-Ge & Laboratuvarlar: Fizik, Kimya, Moleküler Biyoloji ve Yapay Zekâ laboratuvarları.
• AP Science: AP Calculus, AP Physics, AP Chemistry ve AP Biology ile üniversite eşdeğeri bilim dersleri.
• YKS Sayısal Derece Koçluğu: Tıp, mühendislik ve temel bilimler hedefleyen öğrenciler için yoğunlaştırılmış birebir soru analizi ve kamplar.`,
    actionType: "NAVIGATE",
    actionLabel: "Fen Lisesi Sayfasına Git",
    actionPayload: "/kademeler/fen-lisesi",
  },

  // --- ULUSLARARASI PROGRAM: KANADA OSSD ---
  {
    id: "prog-ossd",
    title: "Kanada Çift Diploma Programı (OSSD)",
    route: "/uluslararasi-programlar",
    category: "program",
    keywords: [
      "kanada",
      "ossd",
      "ontario",
      "çift diploma",
      "yurt dışı üniversite",
      "sınavsız kabul",
      "ielts",
      "toefl",
      "kanada diploması",
      "lise diploması",
    ],
    summary:
      "Ontario Secondary School Diploma (OSSD); Ontario Eğitim Bakanlığı onaylı resmi Kanada lise diplomasıdır. Öğrenciler mezun olurken hem Türk hem Kanada diploması alır.",
    content: `Kanada Çift Diploma Programı (OSSD):
• Tanım: Ontario Secondary School Diploma (OSSD), Kanada Eğitim Bakanlığı tarafından verilen ve dünyadaki tüm saygın üniversitelerce tanınan resmi bir lise diplomasıdır.
• Nasıl İşler?: Öğrenciler okulumuzda MEB derslerine devam ederken çevrim içi ve yüz yüze modüllerle OSSD kredilerini tamamlar.
• Avantajları:
  1. Kanada, İngiltere, ABD, Avrupa ve Avustralya üniversitelerine 'Kanadalı yerel öğrenci' statüsünde başvuru imkânı.
  2. Dünya genelinde ilk 100 üniversiteye sınavsız ve doğrudan kabul kapısı.
  3. Kolaylaştırılmış IELTS / TOEFL muafiyet ve burs avantajı.`,
    actionType: "NAVIGATE",
    actionLabel: "Uluslararası Programları İncele",
    actionPayload: "/uluslararasi-programlar",
  },

  // --- ULUSLARARASI PROGRAM: AP ---
  {
    id: "prog-ap",
    title: "Advanced Placement (AP) Programı",
    route: "/uluslararasi-programlar",
    category: "program",
    keywords: [
      "ap",
      "advanced placement",
      "college board",
      "üniversite kredisi",
      "ap calculus",
      "ap physics",
      "ap chemistry",
      "yurt dışı kabul",
      "vakıf üniversitesi burs",
    ],
    summary:
      "College Board AP programı, lise öğrencilerine üniversite seviyesinde ders alma ve bu derslerle hem yurt içi hem yurt dışı üniversitelerde ders muafiyeti ile burs kazanma imkânı sağlar.",
    content: `Advanced Placement (AP) Programı:
• Lise öğrencilerine üniversite düzeyinde ders alma ve kredilendirme olanağı.
• Dersler: AP Calculus, AP Physics, AP Chemistry, AP Biology, AP Microeconomics.
• Faydaları:
  1. Üniversiteye başladığında birinci sınıf derslerinden muafiyet kazanma.
  2. Türkiye'deki saygın vakıf üniversitelerinde doğrudan başarı bursu avantajı.
  3. Dünya üniversitelerine başvurularda akademik profil üstünlüğü.`,
    actionType: "NAVIGATE",
    actionLabel: "Program Detaylarını Gör",
    actionPayload: "/uluslararasi-programlar",
  },

  // --- BAŞARILAR: STEM ŞAMPİYONLUĞU & FLL ---
  {
    id: "achievements-stem-fll",
    title: "Uluslararası STEM Şampiyonlukları ve Ödüllerimiz",
    route: "/basarilarimiz",
    category: "achievement",
    keywords: [
      "başarılar",
      "şampiyonluk",
      "stem",
      "dünya derecesi",
      "madalya",
      "fll",
      "first lego league",
      "robotik",
      "kupa",
      "ödül",
      "olimpiyat",
      "marmara birincisi",
    ],
    summary:
      "BCN öğrencileri; Dünya STEM Olimpiyatları'nda 4 Dünya Derecesi ve 23 Madalya, First Lego League'de Türkiye ve Marmara Şampiyonluğu kazanmıştır.",
    content: `BCN Eğitim Kurumları Akademik & Robotik Başarıları:
• Dünya STEM Olimpiyatları Finalleri: 48 ülkeden 1.200'ü aşkın okul arasından 4 Dünya Derecesi, 8 Altın, 9 Gümüş, 6 Bronz olmak üzere toplam 23 Madalya ve Dünya Şampiyonluk Kupası.
• First Lego League (FLL): BCN Robotics takımı Robot Performans ve Öz Değerler kategorilerinde Türkiye Şampiyonu ve Marmara Şampiyonu.
• TRT World Yayını: Lise öğrencilerimizin küresel çevre ve yapay zekâ etiği belgeseli TRT World ekranlarında canlı yayınlandı.`,
    actionType: "NAVIGATE",
    actionLabel: "Tüm Başarılarımızı Gör",
    actionPayload: "/basarilarimiz",
  },

  // --- KAMPÜS OLANAKLARI ---
  {
    id: "campus-facilities",
    title: "Kampüs Olanakları ve Laboratuvarlar",
    route: "/kampusumuz",
    category: "facility",
    keywords: [
      "kampüs",
      "tesis",
      "laboratuvar",
      "kütüphane",
      "spor salonu",
      "oditoryum",
      "konferans",
      "yemekhane",
      "yemek",
      "fiba",
      "kapalı spor",
      "ar-ge",
      "3d yazıcı",
      "havalandırma",
      "güvenlik",
    ],
    summary:
      "12.000 m² Madenler Kampüsümüzde; ileri STEM ve bilim labları, 15.000 kaynaklı kütüphane, FIBA onaylı kapalı spor kompleksi, 350 kişilik oditoryum ve organik yemekhane bulunur.",
    content: `BCN Madenler Kampüsü Olanakları (12.000 m²):
• Depreme tam dayanıklı özel mühendislik ve akıllı havalandırma sistemi.
• İleri STEM & Robotik Laboratuvarı: 3D yazıcılar, sensörler ve yapay zekâ iş istasyonları.
• Fizik, Kimya & Biyoloji Laboratuvarı: Uluslararası güvenlik ve moleküler deney donanımı.
• Kütüphane & Araştırma Merkezi: 15.000+ çok dilli kaynak, JSTOR & Britannica dijital erişimi.
• Kapalı Spor Kompleksi: FIBA onaylı parke salon, tırmanma duvarı ve jimnastik stüdyosu.
• Sanat & Müzik Stüdyoları: Seramik fırını, heykel alanı, ses yalıtımlı piyano ve enstrüman odaları.
• 350 Kişilik Konferans & Oditoryum Salonu: Akustik ahşap kaplama ve simultane çeviri altyapısı.
• Organik Yemekhane: Çocuk diyetisyeni denetiminde günde 3 öğün taze ve katkısız üretim.`,
    actionType: "NAVIGATE",
    actionLabel: "Kampüsümüzü İncele",
    actionPayload: "/kampusumuz",
  },

  // --- EBEVEYN AKADEMİSİ ---
  {
    id: "parents-academy",
    title: "BCN Ebeveyn Akademisi",
    route: "/ogrenci-yasami",
    category: "institution",
    keywords: [
      "ebeveyn",
      "anne",
      "baba",
      "aile",
      "veli",
      "ebeveyn akademisi",
      "seminer",
      "rehberlik",
      "bağlanma",
      "sınır koyma",
      "ekran süresi",
      "telefon",
    ],
    summary:
      "BCN Ebeveyn Akademisi; çocukların başarısında okul-aile ortaklığını güçlendirmek için güvenli bağlanma, dijital çağda sınır koyma ve bilimsel odaklanma seminerleri düzenler.",
    content: `BCN Ebeveyn Akademisi:
"Eğitim Evde Başlar, BCN ile Geleceğe Uzanır."
Ana Başlıklar:
1. Duygusal Sağlamlık ve Güvenli Bağlanma: Çocuğun duygularını bastırmadan sağlıklı ifade etme rehberliği.
2. Dijital Çağda Sınır Koyma: Yasakçı değil bilinçli teknoloji rehberliği.
3. MOXO Dikkat Testi & Akademik Destek: Bilimsel verilerle evde verimli çalışma alışkanlıkları kazandırma.`,
    actionType: "NAVIGATE",
    actionLabel: "Öğrenci Yaşamı Sayfasına Git",
    actionPayload: "/ogrenci-yasami",
  },

  // --- SIK SORULAN SORULAR ---
  {
    id: "faq-programs",
    title: "SSS: Hangi Eğitim Programları Uygulanıyor?",
    route: "/egitim-modelimiz",
    category: "faq",
    keywords: [
      "hangi programlar",
      "müfredat",
      "eğitim modeli",
      "hangi eğitimler var",
      "hizmetleriniz nelerdir",
      "kurumunuz hangi hizmetleri sunuyor",
      "hizmetler",
      "hizmet",
      "hizmetleri",
      "neler sunuyorsunuz",
      "eğitim hizmetleri",
      "okulda ne var",
      "kademeler",
      "seçenekler",
    ],
    summary:
      "Okul öncesinde Yale RULER, ilkokulda IB PYP aday okulu, ortaokulda LGS odaklı STEM, lisede ise OSSD Kanada Çift Diploması, AP ve YKS derece koçluğu uygulanmaktadır.",
    content: `BCN Eğitim Programları:
• Okul Öncesi: Yale RULER duygusal zekâ yaklaşımı ve doğal çift dilli immersion modeli.
• İlkokul: IB Primary Years Programme (PYP) kavramsal sorgulama temeli ve MOXO dikkat desteği.
• Ortaokul: 7. sınıftan başlayan LGS hazırlık sistemi, FLL Robotik Türkiye şampiyonu ekosistemi ve MUN.
• Lise (Anadolu & Fen): Kanada Çift Diploması (OSSD), College Board AP (Advanced Placement) ve YKS derece kampları.`,
    actionType: "NAVIGATE",
    actionLabel: "Eğitim Modelimizi İncele",
    actionPayload: "/egitim-modelimiz",
  },
  {
    id: "faq-foreign-language",
    title: "SSS: Yabancı Dil Eğitimi Yaklaşımı",
    route: "/uluslararasi-programlar",
    category: "faq",
    keywords: [
      "yabancı dil",
      "ingilizce",
      "almanca",
      "dil eğitimi",
      "kaç dil",
      "ikinci yabancı dil",
    ],
    summary:
      "Erken çocukluktan itibaren İngilizce daldırma (immersion) yöntemiyle anadil gibi kazandırılır. İlkokuldan itibaren Almanca ikinci yabancı dil olarak başlar.",
    content: `Yabancı Dil Yaklaşımımız:
• Erken çocukluktan itibaren yaşayarak öğrenme (immersion) modeli ile İngilizce edinimi.
• İlkokuldan itibaren ikinci yabancı dil olarak Almanca eğitimi.
• Cambridge English müfredatı ile uluslararası sertifikalandırma.
• Ortaokul ve lisede Model United Nations (MUN) ve Erasmus+ projelerinde akıcı İngilizce savunma pratiği.`,
    actionType: "NAVIGATE",
    actionLabel: "Uluslararası Programları Gör",
    actionPayload: "/uluslararasi-programlar",
  },
];

export const FALLBACK_MESSAGE =
  "Bu konuda web sitemizde doğrulanmış bir bilgi bulamadım. Dilerseniz iletişim sayfamızdan bizimle iletişime geçebilirsiniz.";

export const SUGGESTED_QUESTIONS = [
  "Kurumunuz hangi hizmetleri sunuyor?",
  "Kanada OSSD çift diploma nedir?",
  "Başvuru ve kayıt koşulları nelerdir?",
  "Dünya şampiyonluklarınız nelerdir?",
  "İletişim sayfasını açabilir misin?",
  "Randevu almak istiyorum",
];
