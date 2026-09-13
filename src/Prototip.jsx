// EBYS Gereksinimleri Referans Modeli - Tam Prototip
// Bölüm 5'teki 6 Katman:
// 1. Kullanıcı Deneyimi
// 2. İş Süreçleri ve Görev Yönetimi
// 3. Yapay Zeka ve Otomasyon
// 4. Entegrasyon ve İletişim
// 5. Güvenlik ve Gizlilik
// 6. Sürdürülebilirlik ve Arşiv

import React, { useState } from 'react';
import {
  Search, Bell, FileText, Calendar, Filter, Brain, Settings, Users, Shield,
  Link2, Archive, Activity, Database, Sparkles, Send, X, PlusCircle,
  ChevronLeft, ChevronRight, Reply, Layout, Trash2, Eye, Workflow,
  GitBranch, MessageSquare, Clock, CheckCircle, AlertTriangle, BarChart3,
  TrendingUp, Server, Lock, FileSearch, FormInput, Download, Upload,
  Edit3, RefreshCw, Globe, HardDrive, Share2, XCircle, Info, Folder,
  FolderOpen, Gauge, Network, ShieldCheck, FileKey, FileLock, History,
  Clipboard, MoreVertical, Building, Mail, Home
} from 'lucide-react';

// ==================== ANA BİLEŞEN ====================
export default function EBYSReferansModelPrototipi() {
  const [activeRole, setActiveRole] = useState('user');

  return (
    <div className="h-screen bg-gray-100 flex flex-col overflow-hidden">
      {/* Rol Seçici Header */}
      <div className="bg-white border-b border-gray-300 p-3 flex items-center justify-center gap-4 shadow-sm">
        <div className="text-sm text-gray-500 mr-4">EBYS Referans Modeli Prototipi</div>
        <button
          onClick={() => setActiveRole('user')}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
            activeRole === 'user'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          👤 Son Kullanıcı (User)
        </button>
        <button
          onClick={() => setActiveRole('admin')}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
            activeRole === 'admin'
              ? 'bg-emerald-600 text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          ⚙️ Sistem Yöneticisi (Admin)
        </button>
      </div>

      {/* Ana İçerik */}
      <div className="flex-1 overflow-hidden">
        {activeRole === 'user' ? <UserInterface /> : <AdminInterface />}
      </div>
    </div>
  );
}

// ==================== VERİ TANIMLARI ====================
const GOREVLER = {
  '13': [{ id: 1, baslik: 'Personel İzin Onayı', oncelik: 'Normal', durum: 'Gecikmiş', departman: 'İK', gonderen: 'Kullanıcı B' }],
  '14': [
    { id: 2, baslik: 'Bakanlık Yazısı Cevabı', oncelik: 'Acil', durum: 'Bugün', departman: 'Dış İlişkiler', gonderen: 'Müdür' },
    { id: 3, baslik: 'Aylık Faaliyet Raporu', oncelik: 'Normal', durum: 'Bugün', departman: 'Planlama', gonderen: 'Sistem' }
  ],
  '15': [{ id: 4, baslik: 'Bütçe Revizyon Talebi', oncelik: 'Yüksek', durum: 'Bekliyor', departman: 'Mali İşler', gonderen: 'Muhasebe Şefi' }],
  '16': [{ id: 5, baslik: 'Tedarikçi Sözleşmesi', oncelik: 'Normal', durum: 'Bekliyor', departman: 'Satınalma', gonderen: 'Kullanıcı C' }],
  '17': [
    { id: 6, baslik: 'Denetim Raporu İnceleme', oncelik: 'Acil', durum: 'Bekliyor', departman: 'İç Denetim', gonderen: 'Denetçi' },
    { id: 7, baslik: 'Personel Değerlendirme', oncelik: 'Normal', durum: 'Bekliyor', departman: 'İK', gonderen: 'İK Müdürü' }
  ]
};

const BELGELER = [
  { id: 1, iconType: 'FileText', tip: 'Dilekçe', kod: '01', baslik: 'Personel İzin Talebi - Kullanıcı B', tarih: '14.10.2035 09:30', durum: 'Onay Bekliyor', departman: 'İK', yorumSayisi: 2, versiyonSayisi: 3, isAkisi: 'Başlayan -> Birim Amiri -> Müdür', gizlilik: 'Kurumsal' },
  { id: 2, iconType: 'BarChart3', tip: 'Rapor', kod: '02', baslik: 'Q3 Faaliyet Raporu 2035', tarih: '13.10.2035 16:45', durum: 'Onaylandı', departman: 'Planlama', yorumSayisi: 8, versiyonSayisi: 12, isAkisi: 'Tamamlandı', gizlilik: 'Kurumsal' },
  { id: 3, iconType: 'MessageSquare', tip: 'Görüş', kod: '03', baslik: 'Yeni Organizasyon Yapısı Önerisi', tarih: '12.10.2035 14:20', durum: 'İnceleniyor', departman: 'Strateji', yorumSayisi: 5, versiyonSayisi: 4, isAkisi: 'Başlayan -> Genel Müdür', gizlilik: 'Gizli' },
  { id: 4, iconType: 'Bell', tip: 'Genelge', kod: '04', baslik: 'Uzaktan Çalışma Politikası', tarih: '11.10.2035 10:00', durum: 'Onaylandı', departman: 'İdari', yorumSayisi: 15, versiyonSayisi: 6, isAkisi: 'Tamamlandı', gizlilik: 'Kurumsal' },
  { id: 5, iconType: 'CheckCircle', tip: 'Karar', kod: '05', baslik: 'Yönetim Kurulu Kararı 2035/42', tarih: '10.10.2035 15:30', durum: 'Onaylandı', departman: 'Yönetim', yorumSayisi: 3, versiyonSayisi: 2, isAkisi: 'Tamamlandı', gizlilik: 'Gizli' },
  { id: 6, iconType: 'Clipboard', tip: 'Tutanak', kod: '06', baslik: 'Haftalık Koordinasyon Toplantısı', tarih: '09.10.2035 11:00', durum: 'Taslak', departman: 'Koordinasyon', yorumSayisi: 1, versiyonSayisi: 1, isAkisi: 'Hazırlık Aşamasında', gizlilik: 'Kurumsal' },
  { id: 7, iconType: 'FileKey', tip: 'Sözleşme', kod: '07', baslik: 'Yazılım Lisans Sözleşmesi', tarih: '08.10.2035 09:15', durum: 'Onay Bekliyor', departman: 'BT', yorumSayisi: 4, versiyonSayisi: 5, isAkisi: 'Başlayan -> Hukuk -> Mali İşler', gizlilik: 'Kısıtlı' },
  { id: 8, iconType: 'FileText', tip: 'Fatura', kod: '08', baslik: 'Ekim 2035 Elektrik Faturası', tarih: '07.10.2035 14:00', durum: 'Onaylandı', departman: 'Muhasebe', yorumSayisi: 0, versiyonSayisi: 1, isAkisi: 'Tamamlandı', gizlilik: 'Kurumsal' },
  { id: 9, iconType: 'FileText', tip: 'Dilekçe', kod: '01', baslik: 'Eğitim İzni Talebi', tarih: '06.10.2035 10:30', durum: 'Onaylandı', departman: 'İK', yorumSayisi: 1, versiyonSayisi: 2, isAkisi: 'Tamamlandı', gizlilik: 'Kurumsal' },
  { id: 10, iconType: 'BarChart3', tip: 'Rapor', kod: '02', baslik: 'Siber Güvenlik Değerlendirmesi', tarih: '05.10.2035 16:00', durum: 'Onaylandı', departman: 'BT', yorumSayisi: 12, versiyonSayisi: 8, isAkisi: 'Tamamlandı', gizlilik: 'Gizli' },
  { id: 11, iconType: 'MessageSquare', tip: 'Görüş', kod: '03', baslik: 'Yeni Şube Açılışı Fizibilite', tarih: '04.10.2035 11:45', durum: 'İnceleniyor', departman: 'Planlama', yorumSayisi: 7, versiyonSayisi: 3, isAkisi: 'Başlayan -> Mali İşler', gizlilik: 'Kısıtlı' },
  { id: 12, iconType: 'Bell', tip: 'Genelge', kod: '04', baslik: 'Kış Dönemi Çalışma Saatleri', tarih: '03.10.2035 09:00', durum: 'Onaylandı', departman: 'İdari', yorumSayisi: 2, versiyonSayisi: 1, isAkisi: 'Tamamlandı', gizlilik: 'Kurumsal' },
];

// İkon mapping fonksiyonu
const getIconComponent = (iconType) => {
  const icons = {
    FileText, BarChart3, MessageSquare, Bell, CheckCircle, Clipboard, FileKey
  };
  return icons[iconType] || FileText;
};

const KULLANICILAR = [
  { id: 1, ad: 'Ahmet Yılmaz', sicil: 'A12345', email: 'ahmet.yilmaz@kurum.gov.tr', departman: 'Bilgi İşlem', unvan: 'Daire Başkanı', rol: 'Admin', durum: 'Aktif', sonGiris: '14.10.2035 08:30', mfaAktif: true },
  { id: 2, ad: 'Ayşe Demir', sicil: 'A12346', email: 'ayse.demir@kurum.gov.tr', departman: 'İnsan Kaynakları', unvan: 'Şube Müdürü', rol: 'Müdür', durum: 'Aktif', sonGiris: '14.10.2035 09:15', mfaAktif: true },
  { id: 3, ad: 'Mehmet Kaya', sicil: 'A12347', email: 'mehmet.kaya@kurum.gov.tr', departman: 'Mali İşler', unvan: 'Şef', rol: 'Şef', durum: 'Aktif', sonGiris: '14.10.2035 08:45', mfaAktif: true },
  { id: 4, ad: 'Fatma Özkan', sicil: 'A12348', email: 'fatma.ozkan@kurum.gov.tr', departman: 'Hukuk', unvan: 'Uzman', rol: 'Memur', durum: 'İzinli', sonGiris: '12.10.2035 17:00', mfaAktif: false },
  { id: 5, ad: 'Ali Çelik', sicil: 'A12349', email: 'ali.celik@kurum.gov.tr', departman: 'Planlama', unvan: 'Memur', rol: 'Memur', durum: 'Aktif', sonGiris: '14.10.2035 09:00', mfaAktif: true },
];

const ROLLER = [
  { id: 1, ad: 'Admin', kullaniciSayisi: 3, yetkiler: ['Tüm Sistem Yetkileri', 'Kullanıcı Yönetimi', 'Güvenlik Ayarları', 'Sistem Konfigürasyonu', 'Audit Log Erişimi'] },
  { id: 2, ad: 'Müdür', kullaniciSayisi: 12, yetkiler: ['Belge Onaylama', 'Görev Atama', 'Rapor Oluşturma', 'Birim Yönetimi', 'İş Akışı Başlatma'] },
  { id: 3, ad: 'Şef', kullaniciSayisi: 45, yetkiler: ['Belge Oluşturma', 'Belge Düzenleme', 'Görev Takibi', 'Rapor Görüntüleme'] },
  { id: 4, ad: 'Memur', kullaniciSayisi: 180, yetkiler: ['Belge Görüntüleme', 'Form Doldurma', 'Görev Tamamlama', 'Yorum Ekleme'] },
  { id: 5, ad: 'Stajyer', kullaniciSayisi: 25, yetkiler: ['Salt Okunur Erişim', 'Eğitim Modülleri'] },
];

const SDP_BELGE_TIPLERI = [
  { id: 1, kod: '01', ad: 'Dilekçe', tanim: 'Personel ve vatandaş başvuru belgeleri', aktifVersiyon: 'V2', belgeSayisi: 1250, saklamaSuresi: '10 Yıl' },
  { id: 2, kod: '02', ad: 'Rapor', tanim: 'Faaliyet, performans ve analiz raporları', aktifVersiyon: 'V3', belgeSayisi: 890, saklamaSuresi: '15 Yıl' },
  { id: 3, kod: '03', ad: 'Görüş', tanim: 'Birim görüş ve değerlendirme belgeleri', aktifVersiyon: 'V1', belgeSayisi: 456, saklamaSuresi: '10 Yıl' },
  { id: 4, kod: '04', ad: 'Genelge', tanim: 'Kurum geneli bilgilendirme yazıları', aktifVersiyon: 'V2', belgeSayisi: 234, saklamaSuresi: 'Süresiz' },
  { id: 5, kod: '05', ad: 'Karar', tanim: 'Yönetim ve kurul kararları', aktifVersiyon: 'V1', belgeSayisi: 567, saklamaSuresi: 'Süresiz' },
  { id: 6, kod: '06', ad: 'Tutanak', tanim: 'Toplantı ve işlem tutanakları', aktifVersiyon: 'V2', belgeSayisi: 789, saklamaSuresi: '10 Yıl' },
  { id: 7, kod: '07', ad: 'Sözleşme', tanim: 'İş ve hizmet sözleşmeleri', aktifVersiyon: 'V1', belgeSayisi: 345, saklamaSuresi: '20 Yıl' },
  { id: 8, kod: '08', ad: 'Fatura', tanim: 'Mali işlem faturaları', aktifVersiyon: 'V3', belgeSayisi: 2340, saklamaSuresi: '10 Yıl' },
];

// TSE 13298 / MoReq2 Uyumlu Standart Dosya Planı (Ağaç Yapısı)
const STANDART_DOSYA_PLANI = [
  {
    id: '100',
    kod: '100',
    ad: 'Genel Yönetim',
    tip: 'klasor',
    acik: true,
    children: [
      {
        id: '100.01',
        kod: '100.01',
        ad: 'Yönetim Kurulu Kararları',
        tip: 'klasor',
        belgeSayisi: 145,
        children: [
          { id: '100.01.001', kod: '100.01.001', ad: 'YK Kararı 2035/42 - Organizasyon Değişikliği', tip: 'belge', tarih: '10.10.2035', durum: 'Onaylı', metaveri: { olusturan: 'Genel Müdür', gizlilik: 'Gizli', saklamaSuresi: 'Süresiz', format: 'PDF/A' } },
          { id: '100.01.002', kod: '100.01.002', ad: 'YK Kararı 2035/41 - Bütçe Revizyonu', tip: 'belge', tarih: '05.10.2035', durum: 'Onaylı', metaveri: { olusturan: 'Mali İşler Müdürü', gizlilik: 'Kısıtlı', saklamaSuresi: 'Süresiz', format: 'PDF/A' } },
        ]
      },
      {
        id: '100.02',
        kod: '100.02',
        ad: 'Genelgeler ve Duyurular',
        tip: 'klasor',
        belgeSayisi: 234,
        children: [
          { id: '100.02.001', kod: '100.02.001', ad: 'Uzaktan Çalışma Politikası', tip: 'belge', tarih: '11.10.2035', durum: 'Yürürlükte', metaveri: { olusturan: 'İK Müdürü', gizlilik: 'Kurumsal', saklamaSuresi: '10 Yıl', format: 'PDF/A' } },
        ]
      },
    ]
  },
  {
    id: '200',
    kod: '200',
    ad: 'İnsan Kaynakları',
    tip: 'klasor',
    acik: false,
    children: [
      {
        id: '200.01',
        kod: '200.01',
        ad: 'Personel Özlük Dosyaları',
        tip: 'klasor',
        belgeSayisi: 1250,
        children: [
          { id: '200.01.001', kod: '200.01.001', ad: 'İzin Talepleri 2035', tip: 'klasor', belgeSayisi: 456 },
          { id: '200.01.002', kod: '200.01.002', ad: 'Performans Değerlendirmeleri', tip: 'klasor', belgeSayisi: 180 },
        ]
      },
      {
        id: '200.02',
        kod: '200.02',
        ad: 'Eğitim Kayıtları',
        tip: 'klasor',
        belgeSayisi: 320,
        children: []
      },
    ]
  },
  {
    id: '300',
    kod: '300',
    ad: 'Mali İşler',
    tip: 'klasor',
    acik: false,
    children: [
      {
        id: '300.01',
        kod: '300.01',
        ad: 'Bütçe ve Finans',
        tip: 'klasor',
        belgeSayisi: 890,
        children: [
          { id: '300.01.001', kod: '300.01.001', ad: 'Q3 Faaliyet Raporu 2035', tip: 'belge', tarih: '13.10.2035', durum: 'Onaylı', metaveri: { olusturan: 'Planlama Uzmanı', gizlilik: 'Kurumsal', saklamaSuresi: '15 Yıl', format: 'PDF/A' } },
        ]
      },
      {
        id: '300.02',
        kod: '300.02',
        ad: 'Faturalar ve Ödemeler',
        tip: 'klasor',
        belgeSayisi: 2340,
        children: []
      },
    ]
  },
  {
    id: '400',
    kod: '400',
    ad: 'Hukuk İşleri',
    tip: 'klasor',
    acik: false,
    children: [
      {
        id: '400.01',
        kod: '400.01',
        ad: 'Sözleşmeler',
        tip: 'klasor',
        belgeSayisi: 345,
        children: [
          { id: '400.01.001', kod: '400.01.001', ad: 'Yazılım Lisans Sözleşmesi', tip: 'belge', tarih: '08.10.2035', durum: 'Onay Bekliyor', metaveri: { olusturan: 'BT Müdürü', gizlilik: 'Kısıtlı', saklamaSuresi: '20 Yıl', format: 'PDF/A' } },
        ]
      },
      {
        id: '400.02',
        kod: '400.02',
        ad: 'Davalar ve İhtilaflar',
        tip: 'klasor',
        belgeSayisi: 78,
        children: []
      },
    ]
  },
  {
    id: '500',
    kod: '500',
    ad: 'Bilgi Teknolojileri',
    tip: 'klasor',
    acik: false,
    children: [
      {
        id: '500.01',
        kod: '500.01',
        ad: 'Sistem Raporları',
        tip: 'klasor',
        belgeSayisi: 456,
        children: [
          { id: '500.01.001', kod: '500.01.001', ad: 'Siber Güvenlik Değerlendirmesi', tip: 'belge', tarih: '05.10.2035', durum: 'Onaylı', metaveri: { olusturan: 'Güvenlik Uzmanı', gizlilik: 'Gizli', saklamaSuresi: '10 Yıl', format: 'PDF/A' } },
        ]
      },
    ]
  },
];

// Benim Arşivim - Kullanıcının Kendi Belgeleri
const BENIM_ARSIVIM = [
  { id: 'ba-001', ad: 'İzin Taleplerim', tip: 'klasor', belgeSayisi: 12, children: [
    { id: 'ba-001-001', ad: '2035 Yıllık İzin Talebi', tip: 'belge', tarih: '14.10.2035', durum: 'Onay Bekliyor', metaveri: { gizlilik: 'Kişisel', saklamaSuresi: '5 Yıl' } },
    { id: 'ba-001-002', ad: '2035 Mazeret İzni', tip: 'belge', tarih: '02.09.2035', durum: 'Onaylı', metaveri: { gizlilik: 'Kişisel', saklamaSuresi: '5 Yıl' } },
  ]},
  { id: 'ba-002', ad: 'Hazırladığım Raporlar', tip: 'klasor', belgeSayisi: 8, children: [
    { id: 'ba-002-001', ad: 'Haftalık Durum Raporu - Ekim W2', tip: 'belge', tarih: '11.10.2035', durum: 'Gönderildi', metaveri: { gizlilik: 'Kurumsal', saklamaSuresi: '5 Yıl' } },
  ]},
  { id: 'ba-003', ad: 'Taslak Belgelerim', tip: 'klasor', belgeSayisi: 3, children: [] },
];

// Semantik Arama Sonuçları - "izin" araması için örnek
const ARSIV_ARAMA_SONUCLARI = {
  'izin': [
    { id: 'as-001', ad: 'Personel İzin Talebi - Kullanıcı B', kod: '200.01.001', eslesme: 98, tarih: '14.10.2035', konum: 'İnsan Kaynakları / Personel Özlük / İzin Talepleri', tip: 'Dilekçe', durum: 'Onay Bekliyor' },
    { id: 'as-002', ad: '2035 Yıllık İzin Talebi', kod: 'BA-001-001', eslesme: 95, tarih: '14.10.2035', konum: 'Benim Arşivim / İzin Taleplerim', tip: 'Dilekçe', durum: 'Onay Bekliyor' },
    { id: 'as-003', ad: 'Eğitim İzni Talebi', kod: '200.01.002', eslesme: 92, tarih: '06.10.2035', konum: 'İnsan Kaynakları / Personel Özlük / İzin Talepleri', tip: 'Dilekçe', durum: 'Onaylı' },
    { id: 'as-004', ad: '2035 Mazeret İzni', kod: 'BA-001-002', eslesme: 89, tarih: '02.09.2035', konum: 'Benim Arşivim / İzin Taleplerim', tip: 'Dilekçe', durum: 'Onaylı' },
    { id: 'as-005', ad: 'İzin Yönetmeliği Güncellemesi', kod: '100.02.015', eslesme: 85, tarih: '15.08.2035', konum: 'Genel Yönetim / Genelgeler', tip: 'Genelge', durum: 'Yürürlükte' },
    { id: 'as-006', ad: 'Yıllık İzin Kullanım Raporu Q3', kod: '200.02.008', eslesme: 78, tarih: '01.10.2035', konum: 'İnsan Kaynakları / Raporlar', tip: 'Rapor', durum: 'Onaylı' },
    { id: 'as-007', ad: 'Uzaktan Çalışma ve İzin Politikası', kod: '100.02.001', eslesme: 72, tarih: '11.10.2035', konum: 'Genel Yönetim / Genelgeler', tip: 'Genelge', durum: 'Yürürlükte' },
  ]
};

// Belge Önizleme İçerikleri (Mockup)
const BELGE_ONIZLEME = {
  'ba-001-001': {
    baslik: 'YILLIK İZİN TALEBİ',
    icerik: `T.C.
KURUM ADI
İnsan Kaynakları Müdürlüğü

Sayı   : 2035/İK-1247
Konu   : Yıllık İzin Talebi

                                                    14.10.2035

MÜDÜRLÜK MAKAMINA

15-20 Ekim 2035 tarihleri arasında 5 (beş) iş günü yıllık izin kullanmak istiyorum.

İzin süresince yerime vekâlet edecek kişi: Kullanıcı C

İzin dönüşümde bekleyen işlerimi öncelikli olarak tamamlayacağımı belirtmek isterim.

Gereğini arz ederim.

                                                    Kullanıcı A
                                                    Müdür Yardımcısı
                                                    İdari İşler Birimi`,
    sayfa: '1/1',
    format: 'PDF/A-3'
  },
  'ba-001-002': {
    baslik: 'MAZERET İZNİ TALEBİ',
    icerik: `T.C.
KURUM ADI
İnsan Kaynakları Müdürlüğü

Sayı   : 2035/İK-0892
Konu   : Mazeret İzni Talebi

                                                    02.09.2035

MÜDÜRLÜK MAKAMINA

02.09.2035 tarihinde ailevi nedenlerden dolayı 1 (bir) gün mazeret izni kullanmak istiyorum.

Gereğini arz ederim.

                                                    Kullanıcı A
                                                    Müdür Yardımcısı

[✓] ONAYLANDI - 02.09.2035
İmza: Birim Müdürü`,
    sayfa: '1/1',
    format: 'PDF/A-3'
  },
  '100.01.001': {
    baslik: 'YÖNETİM KURULU KARARI',
    icerik: `T.C.
KURUM ADI
Yönetim Kurulu Başkanlığı

KARAR NO    : 2035/42
KARAR TARİHİ: 10.10.2035
TOPLANTI NO : 2035/15

KONU: Organizasyon Yapısı Değişikliği

Yönetim Kurulumuzun 10.10.2035 tarihli toplantısında;

1. Bilgi Teknolojileri Dairesi Başkanlığı'nın
   yeniden yapılandırılmasına,
2. Dijital Dönüşüm Birimi'nin kurulmasına,
3. Değişikliklerin 01.11.2035 tarihinde
   yürürlüğe girmesine,

OY BİRLİĞİ İLE KARAR VERİLMİŞTİR.

                                    Genel Müdür
                                    [İmza]`,
    sayfa: '1/2',
    format: 'PDF/A-3'
  },
  '100.02.001': {
    baslik: 'UZAKTAN ÇALIŞMA POLİTİKASI',
    icerik: `T.C.
KURUM ADI
İnsan Kaynakları Müdürlüğü

GENELGE NO: 2035/15
TARİH     : 11.10.2035

KONU: Uzaktan Çalışma Politikası

Tüm Birimlere,

1. AMAÇ
Bu genelge, kurumumuzda uzaktan çalışma
uygulamalarının esaslarını belirler.

2. KAPSAM
Tüm idari personeli kapsar.

3. UYGULAMA ESASLARI
a) Haftada en fazla 2 gün uzaktan çalışılabilir
b) Uzaktan çalışma günleri birim amiri onayı
   ile belirlenir
c) VPN bağlantısı zorunludur

Bilgilerinize rica olunur.

                                    İK Müdürü`,
    sayfa: '1/3',
    format: 'PDF/A-3'
  },
  'as-001': {
    baslik: 'PERSONEL İZİN TALEBİ',
    icerik: `T.C.
KURUM ADI
İnsan Kaynakları Müdürlüğü

Sayı   : 2035/İK-1248
Konu   : Yıllık İzin Talebi

                                                    14.10.2035

BİRİM AMİRLİĞİNE

21-25 Ekim 2035 tarihleri arasında 5 (beş)
iş günü yıllık izin kullanmak istiyorum.

Kalan yıllık izin hakkım: 15 gün

İzin süresince iletişim bilgilerim:
Tel: 0532 XXX XX XX

Gereğini arz ederim.

                                                    Kullanıcı B
                                                    Uzman
                                                    İK Birimi

[ONAY BEKLİYOR]
Birim Amiri -> Müdür`,
    sayfa: '1/1',
    format: 'PDF/A-3'
  },
  'as-003': {
    baslik: 'EĞİTİM İZNİ TALEBİ',
    icerik: `T.C.
KURUM ADI
İnsan Kaynakları Müdürlüğü

Sayı   : 2035/İK-0956
Konu   : Eğitim İzni Talebi

                                                    06.10.2035

MÜDÜRLÜK MAKAMINA

10-12 Ekim 2035 tarihlerinde düzenlenecek
"Dijital Dönüşüm ve EBYS" eğitimine
katılmak üzere 3 (üç) gün eğitim izni
talep ediyorum.

Eğitim Yeri: Ankara
Eğitim Kuruluşu: TÜBİTAK

Ek: Eğitim davetiyesi

Gereğini arz ederim.

                                                    Kullanıcı D
                                                    Sistem Uzmanı

[✓] ONAYLANDI - 07.10.2035`,
    sayfa: '1/1',
    format: 'PDF/A-3'
  },
  'default': {
    baslik: 'BELGE ÖNİZLEME',
    icerik: `Bu belgenin önizlemesi görüntülenmektedir.

Belge Bilgileri:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Detaylı içerik için sağ taraftaki
"Metaveri" sekmesini inceleyebilirsiniz.

Belgeyi tam ekran görüntülemek için
aşağıdaki "Tam Ekran Aç" butonunu
kullanın.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Elektronik İmza ile İmzalanmıştır]
Doğrulama Kodu: XXXX-XXXX-XXXX`,
    sayfa: '1/1',
    format: 'PDF/A'
  }
};

const FORMLAR = [
  { id: 1, ad: 'İzin Talep Formu', kategori: 'İnsan Kaynakları', aktifVersiyon: 'V3', kullanimSayisi: 1250 },
  { id: 2, ad: 'Harcama Talebi Formu', kategori: 'Mali İşler', aktifVersiyon: 'V2', kullanimSayisi: 890 },
  { id: 3, ad: 'Seyahat Talebi Formu', kategori: 'İdari İşler', aktifVersiyon: 'V2', kullanimSayisi: 456 },
  { id: 4, ad: 'Malzeme Talep Formu', kategori: 'Satınalma', aktifVersiyon: 'V1', kullanimSayisi: 678 },
  { id: 5, ad: 'Eğitim Başvuru Formu', kategori: 'Eğitim', aktifVersiyon: 'V2', kullanimSayisi: 234 },
  { id: 6, ad: 'Araç Talep Formu', kategori: 'İdari İşler', aktifVersiyon: 'V1', kullanimSayisi: 123 },
  { id: 7, ad: 'Bilgi Güvenliği İhlal Bildirimi', kategori: 'Güvenlik', aktifVersiyon: 'V1', kullanimSayisi: 45 },
  { id: 8, ad: 'Risk Değerlendirme Formu', kategori: 'Kalite', aktifVersiyon: 'V2', kullanimSayisi: 89 },
];

const ENTEGRASYONLAR = [
  { id: 1, ad: 'e-Devlet Kapısı', tip: 'Dış Sistem', durum: 'Aktif', sonSenkron: '14.10.2035 09:30', icon: Globe },
  { id: 2, ad: 'KEP (Kayıtlı E-Posta)', tip: 'Dış Sistem', durum: 'Aktif', sonSenkron: '14.10.2035 09:28', icon: Mail },
  { id: 3, ad: 'UETS (Tebligat)', tip: 'Dış Sistem', durum: 'Aktif', sonSenkron: '14.10.2035 09:25', icon: Send },
  { id: 4, ad: 'SAP ERP', tip: 'Kurumsal', durum: 'Aktif', sonSenkron: '14.10.2035 09:30', icon: Server },
  { id: 5, ad: 'İKYS (İnsan Kaynakları)', tip: 'Kurumsal', durum: 'Aktif', sonSenkron: '14.10.2035 09:15', icon: Users },
  { id: 6, ad: 'Muhasebe Sistemi', tip: 'Kurumsal', durum: 'Aktif', sonSenkron: '14.10.2035 09:20', icon: BarChart3 },
  { id: 7, ad: 'E-İmza Sağlayıcı', tip: 'Güvenlik', durum: 'Aktif', sonSenkron: '14.10.2035 09:30', icon: FileKey },
  { id: 8, ad: 'Zaman Damgası Servisi', tip: 'Güvenlik', durum: 'Aktif', sonSenkron: '14.10.2035 09:30', icon: Clock },
];

const AUDIT_LOG = [
  { id: 1, islem: 'Belge Görüntüleme', kullanici: 'Ahmet Yılmaz', belge: 'Q3 Faaliyet Raporu', zaman: '14.10.2035 09:45', ip: '192.168.1.45', sonuc: 'Başarılı', seviye: 'info' },
  { id: 2, islem: 'Belge Onaylama', kullanici: 'Ayşe Demir', belge: 'Personel İzin Talebi', zaman: '14.10.2035 09:30', ip: '192.168.1.67', sonuc: 'Başarılı', seviye: 'success' },
  { id: 3, islem: 'Başarısız Giriş', kullanici: 'bilinmeyen', belge: '-', zaman: '14.10.2035 09:15', ip: '85.124.56.78', sonuc: 'Başarısız', seviye: 'error' },
  { id: 4, islem: 'Rol Değişikliği', kullanici: 'Sistem Admin', belge: 'Kullanıcı: Mehmet Kaya', zaman: '14.10.2035 08:45', ip: '192.168.1.10', sonuc: 'Başarılı', seviye: 'warning' },
  { id: 5, islem: 'Toplu İndirme', kullanici: 'Ali Çelik', belge: '15 belge', zaman: '14.10.2035 08:30', ip: '192.168.1.89', sonuc: 'Başarılı', seviye: 'warning' },
  { id: 6, islem: 'MFA Doğrulama', kullanici: 'Fatma Özkan', belge: '-', zaman: '13.10.2035 17:00', ip: '192.168.1.34', sonuc: 'Başarılı', seviye: 'success' },
];

// ==================== ARŞİV AĞAÇ YAPISI BİLEŞENİ ====================
// TSE 13298 / MoReq2 uyumlu hiyerarşik dosya planı görünümü
function ArsivAgacDugumu({ item, seviye, seciliKlasor, onSelect, acikKlasorler, onToggle }) {
  const acik = acikKlasorler.includes(item.id);
  const secili = seciliKlasor?.id === item.id;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div
        className={`flex items-center gap-1 px-2 py-1.5 rounded cursor-pointer text-sm transition-all ${
          secili ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
        }`}
        style={{ paddingLeft: `${seviye * 12 + 8}px` }}
        onClick={() => {
          if (item.tip === 'klasor') {
            onToggle(item.id);
            onSelect(item);
          } else {
            onSelect(item);
          }
        }}
      >
        {item.tip === 'klasor' && hasChildren && (
          <ChevronRight
            size={14}
            className={`text-gray-400 transition-transform flex-shrink-0 ${acik ? 'rotate-90' : ''}`}
          />
        )}
        {item.tip === 'klasor' && !hasChildren && <span className="w-3.5 flex-shrink-0" />}

        {item.tip === 'klasor' ? (
          <Folder size={16} className={`flex-shrink-0 ${acik ? 'text-amber-500' : 'text-amber-400'}`} />
        ) : (
          <FileText size={16} className="text-blue-500 flex-shrink-0" />
        )}

        {item.kod && (
          <span className="text-xs font-mono bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded flex-shrink-0">
            {item.kod}
          </span>
        )}

        <span className="truncate flex-1 ml-1">{item.ad}</span>

        {item.belgeSayisi !== undefined && (
          <span className="text-xs text-gray-400 ml-1 flex-shrink-0">{item.belgeSayisi}</span>
        )}
      </div>

      {acik && hasChildren && (
        <div>
          {item.children.map(child => (
            <ArsivAgacDugumu
              key={child.id}
              item={child}
              seviye={seviye + 1}
              seciliKlasor={seciliKlasor}
              onSelect={onSelect}
              acikKlasorler={acikKlasorler}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ==================== KULLANICI ARAYÜZÜ ====================
function UserInterface() {
  const [selectedTab, setSelectedTab] = useState('gorevler');
  const [showChatbot, setShowChatbot] = useState(false);
  const [showBildirimler, setShowBildirimler] = useState(false);
  const [selectedGorev, setSelectedGorev] = useState(null);
  const [selectedBelge, setSelectedBelge] = useState(null);
  const [showBelgeDetay, setShowBelgeDetay] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Merhaba! Size nasıl yardımcı olabilirim? Belge arama, form doldurma veya mevzuat sorguları için buradayım.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [aramaMetni, setAramaMetni] = useState('');
  const [belgeDetayTab, setBelgeDetayTab] = useState('onizleme');

  // E-posta state'leri
  const [selectedMailAccount, setSelectedMailAccount] = useState('kurumA');
  const [selectedMailFolder, setSelectedMailFolder] = useState('gelen');
  const [selectedMail, setSelectedMail] = useState(null);
  const [showComposeMail, setShowComposeMail] = useState(false);
  const [composeMailData, setComposeMailData] = useState({ to: '', cc: '', subject: '', body: '', replyTo: null });

  // Arşiv state'leri
  const [arsivSecimi, setArsivSecimi] = useState('benim');
  const [seciliArsivKlasor, setSeciliArsivKlasor] = useState(null);
  const [seciliArsivBelge, setSeciliArsivBelge] = useState(null);
  const [acikArsivKlasorler, setAcikArsivKlasorler] = useState(['100']);
  const [arsivArama, setArsivArama] = useState('');
  const [arsivDetayTab, setArsivDetayTab] = useState('onizleme');

  // E-posta verileri
  const epostaVerileri = {
    kurumA: {
      email: 'kullanici@kurumA.gov.tr',
      varsayilan: true,
      gelen: [
        { id: 1, from: 'Ahmet Yılmaz', fromEmail: 'ahmet.yilmaz@bakanlık.gov.tr', to: 'kullanici@kurumA.gov.tr', subject: 'Koordinasyon Toplantısı Hakkında', body: 'Merhaba,\n\nYarın saat 14:00\'te gerçekleştirilecek koordinasyon toplantısının gündemini ekte bulabilirsiniz.\n\nKatılımcı listesini de paylaşır mısınız?\n\nSaygılarımla,\nAhmet Yılmaz\nBilgi İşlem Müdürü', date: '14.10.2035 14:24', read: false, hasAttachment: true, external: true, important: true },
        { id: 2, from: 'Ayşe Demir', fromEmail: 'ayse.demir@kurumA.gov.tr', to: 'kullanici@kurumA.gov.tr', subject: 'FW: Acil - Sistem Güncellemesi', body: 'Bu konuyla ilgili yarın bilgi verebilir misiniz?\n\n---\nİletilen mesaj aşağıda...', date: '14.10.2035 12:12', read: false, hasAttachment: false, external: false, important: false },
        { id: 3, from: 'Mehmet Kaya', fromEmail: 'mehmet.kaya@kurumD.gov.tr', to: 'kullanici@kurumA.gov.tr', subject: 'Re: Lisans Yenileme Durumu', body: 'Merhaba,\n\nLisans yenileme sürecini tamamladım. Yeni dönem lisanslarını alabilirsiniz.\n\nİyi çalışmalar,\nMehmet Kaya', date: '13.10.2035 17:19', read: true, hasAttachment: true, external: true, important: false },
        { id: 4, from: 'Fatma Özkan', fromEmail: 'fatma.ozkan@kurumA.gov.tr', to: 'kullanici@kurumA.gov.tr', subject: 'RE: Haftalık Rapor', body: 'Ekte gönderdiğim raporu kontrol ettim, onaylıyorum.', date: '13.10.2035 11:35', read: true, hasAttachment: false, external: false, important: false },
        { id: 5, from: 'Ali Çelik', fromEmail: 'ali.celik@kurumA.gov.tr', to: 'kullanici@kurumA.gov.tr', subject: 'Haftalık Durum Raporu', body: 'Haftalık durum raporunu ekte bulabilirsiniz. Herhangi bir sorunuz olursa bildiriniz.', date: '12.10.2035 16:00', read: true, hasAttachment: true, external: false, important: false }
      ],
      taslak: [
        { id: 101, from: 'Ben', fromEmail: 'kullanici@kurumA.gov.tr', to: 'mudur@kurumA.gov.tr', subject: 'İzin Talebi Hakkında', body: 'Sayın Müdürüm,\n\n15-20 Ekim tarihleri arasında yıllık izin kullanmak istiyorum...', date: '14.10.2035 10:00', read: true, hasAttachment: false, external: false, important: false }
      ],
      gonderilen: [],
      silinen: []
    },
    kurumB: {
      email: 'kullanici@kurumB.gov.tr',
      varsayilan: false,
      gelen: [
        { id: 201, from: 'Zeynep Aksoy', fromEmail: 'zeynep.aksoy@kurumE.gov.tr', to: 'kullanici@kurumB.gov.tr', subject: 'Eğitim Programı Hakkında', body: 'Merhaba,\n\nGelecek ay düzenlenecek eğitim programı ile ilgili detayları paylaşıyorum...', date: '14.10.2035 11:30', read: false, hasAttachment: true, external: true, important: true },
        { id: 202, from: 'Hasan Yıldız', fromEmail: 'hasan.yildiz@kurumB.gov.tr', to: 'kullanici@kurumB.gov.tr', subject: 'Toplantı Notları', body: 'Dünkü toplantının notlarını ekte bulabilirsiniz.', date: '13.10.2035 15:45', read: false, hasAttachment: true, external: false, important: false },
        { id: 203, from: 'Elif Şahin', fromEmail: 'elif.sahin@kurumB.gov.tr', to: 'kullanici@kurumB.gov.tr', subject: 'Belge İnceleme Talebi', body: 'Merhaba,\n\nEkte gönderdiğim belgeyi incelemenizi rica ederim.', date: '12.10.2035 09:20', read: true, hasAttachment: true, external: false, important: false }
      ],
      taslak: [],
      gonderilen: [],
      silinen: []
    }
  };

  const bildirimler = [
    { id: 1, tip: 'gorev', baslik: 'Yeni görev atandı', mesaj: 'Bakanlık Yazısı Cevabı - Acil', zaman: '5 dakika önce', okundu: false },
    { id: 2, tip: 'onay', baslik: 'Belge onaylandı', mesaj: 'İzin Talebiniz onaylandı', zaman: '1 saat önce', okundu: false },
    { id: 3, tip: 'yorum', baslik: 'Yeni yorum', mesaj: 'Kullanıcı B bir yorum ekledi', zaman: '2 saat önce', okundu: true },
    { id: 4, tip: 'hatirlatma', baslik: 'Görev hatırlatması', mesaj: 'Personel İzin Onayı yarın sona eriyor', zaman: '3 saat önce', okundu: true },
  ];

  const versiyonlar = [
    { id: 1, versiyon: 'v3.2', tarih: '14.10.2035 10:30', kullanici: 'Kullanıcı A', degisiklik: 'Bütçe tablosu güncellendi', aktif: true },
    { id: 2, versiyon: 'v3.1', tarih: '13.10.2035 16:45', kullanici: 'Kullanıcı B', degisiklik: 'Özet bölümü eklendi', aktif: false },
    { id: 3, versiyon: 'v3.0', tarih: '13.10.2035 09:15', kullanici: 'Kullanıcı A', degisiklik: 'İlk taslak oluşturuldu', aktif: false },
  ];

  const yorumlar = [
    { id: 1, kullanici: 'Kullanıcı B', avatar: 'KB', mesaj: 'Bütçe kısmını gözden geçirdim, onaylıyorum.', zaman: '10 dakika önce' },
    { id: 2, kullanici: 'Kullanıcı C', avatar: 'KC', mesaj: 'Tablo 3\'te bir hata var gibi, kontrol eder misiniz?', zaman: '1 saat önce' },
  ];

  const calisilanDokumanlar = [
    { id: 1, baslik: 'Q3 Faaliyet Raporu 2035', aktifKullanicilar: ['KA', 'KB', 'KC'], sonDegisiklik: '2 dakika önce', durum: 'Düzenleniyor' },
    { id: 2, baslik: 'Yıllık Strateji Belgesi', aktifKullanicilar: ['KA', 'KD'], sonDegisiklik: '15 dakika önce', durum: 'İnceleniyor' },
  ];

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;

    setChatMessages(prev => [...prev, { role: 'user', content: chatInput }]);

    setTimeout(() => {
      let response = '';
      if (chatInput.toLowerCase().includes('izin')) {
        response = 'İzin talebi formu için "Formlar" menüsünden İzin Talep Formu\'nu seçebilirsiniz. Size yardımcı olmamı ister misiniz?';
      } else if (chatInput.toLowerCase().includes('rapor')) {
        response = 'Sistemde 890 adet rapor bulunmaktadır. Hangi döneme veya departmana ait raporları arıyorsunuz?';
      } else if (chatInput.toLowerCase().includes('mevzuat')) {
        response = 'mevzuat.gov.tr üzerinden ilgili düzenlemeleri tarayabilirim. Hangi konuda bilgi almak istiyorsunuz?';
      } else {
        response = 'Anladım. Bu konuda size yardımcı olmak için daha fazla bilgiye ihtiyacım var. Lütfen detayları paylaşır mısınız?';
      }
      setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);

    setChatInput('');
  };

  return (
    <div className="flex h-full bg-gray-50 relative">
      {/* Sol Menü */}
      <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white flex flex-col shadow-xl overflow-hidden">
        <div className="p-5 border-b border-blue-700 flex-shrink-0">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FileText size={28} />
            EBYS
          </h1>
          <p className="text-blue-200 text-sm mt-1">Elektronik Belge Yönetim Sistemi</p>
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="p-4 space-y-1 flex-shrink-0">
          <button
            onClick={() => setSelectedTab('gorevler')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              selectedTab === 'gorevler' ? 'bg-blue-700 shadow-md' : 'hover:bg-blue-700/50'
            }`}
          >
            <Calendar size={20} />
            <span>Görevlerim</span>
            <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full font-bold">7</span>
          </button>

          <button
            onClick={() => setSelectedTab('belgeler')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              selectedTab === 'belgeler' ? 'bg-blue-700 shadow-md' : 'hover:bg-blue-700/50'
            }`}
          >
            <FileText size={20} />
            <span>Belgelerim</span>
            <span className="ml-auto bg-blue-500 text-xs px-2 py-1 rounded-full">30</span>
          </button>

          <button
            onClick={() => setSelectedTab('calisilan')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              selectedTab === 'calisilan' ? 'bg-blue-700 shadow-md' : 'hover:bg-blue-700/50'
            }`}
          >
            <Edit3 size={20} />
            <span>Üzerinde Çalışılan</span>
            <span className="ml-auto bg-green-500 text-xs px-2 py-1 rounded-full">2</span>
          </button>

          <button
            onClick={() => setSelectedTab('arama')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              selectedTab === 'arama' ? 'bg-blue-700 shadow-md' : 'hover:bg-blue-700/50'
            }`}
          >
            <Search size={20} />
            <span>Gelişmiş Arama</span>
          </button>

          <button
            onClick={() => setSelectedTab('eposta')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              selectedTab === 'eposta' ? 'bg-blue-700 shadow-md' : 'hover:bg-blue-700/50'
            }`}
          >
            <Mail size={20} />
            <span>E-Posta</span>
            <span className="ml-auto bg-orange-500 text-xs px-2 py-1 rounded-full font-bold">8</span>
          </button>

          <button
            onClick={() => setSelectedTab('arsiv')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              selectedTab === 'arsiv' ? 'bg-blue-700 shadow-md' : 'hover:bg-blue-700/50'
            }`}
          >
            <Archive size={20} />
            <span>Arşiv</span>
          </button>

          <div className="pt-4 border-t border-blue-700 mt-4">
            <p className="text-xs text-blue-300 px-4 mb-2 uppercase tracking-wider">Hızlı Erişim</p>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700/50 text-sm">
              <PlusCircle size={18} />
              <span>Yeni Belge</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700/50 text-sm">
              <FormInput size={18} />
              <span>Form Doldur</span>
            </button>
            <button
              onClick={() => { setSelectedTab('eposta'); setShowComposeMail(true); setComposeMailData({ to: '', cc: '', subject: '', body: '', replyTo: null }); }}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700/50 text-sm"
            >
              <Mail size={18} />
              <span>Posta Oluştur</span>
            </button>
          </div>
        </nav>

        {/* Bugünün Ajandası */}
        <div className="p-3 border-t border-blue-700">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Bugün</span>
              <span className="text-xs text-blue-300">14 Ekim, Salı</span>
            </div>

            <div className="space-y-2">
              <div className="bg-blue-600/50 rounded-lg p-2 border-l-4 border-purple-400">
                <div className="flex items-center gap-2 text-xs text-blue-200 mb-1">
                  <Clock size={12} />
                  <span>09:00</span>
                </div>
                <p className="text-sm font-medium text-white truncate">Birim Koordinasyon Toplantısı</p>
                <div className="flex items-center gap-2 mt-1">
                  <Users size={12} className="text-blue-300" />
                  <span className="text-xs text-blue-300">Teams Meeting - 5 katılımcı</span>
                </div>
              </div>

              <div className="bg-blue-600/50 rounded-lg p-2 border-l-4 border-green-400">
                <div className="flex items-center gap-2 text-xs text-blue-200 mb-1">
                  <Clock size={12} />
                  <span>09:05</span>
                </div>
                <p className="text-sm font-medium text-white truncate">Günlük Standup</p>
                <div className="flex items-center gap-2 mt-1">
                  <Users size={12} className="text-blue-300" />
                  <span className="text-xs text-blue-300">Teams Meeting</span>
                </div>
              </div>

              <div className="bg-blue-600/50 rounded-lg p-2 border-l-4 border-yellow-400">
                <div className="flex items-center gap-2 text-xs text-yellow-300 mb-1">
                  <CheckCircle size={12} />
                  <span>13:00</span>
                </div>
                <p className="text-sm font-medium text-white truncate">Timesheet Onayları</p>
                <span className="text-xs text-yellow-300">3 onay bekliyor</span>
              </div>

              <div className="bg-blue-600/50 rounded-lg p-2 border-l-4 border-red-400">
                <div className="flex items-center gap-2 text-xs text-red-300 mb-1">
                  <AlertTriangle size={12} />
                  <span>15:30</span>
                </div>
                <p className="text-sm font-medium text-white truncate">Yeni Arayüz Sunumu</p>
                <span className="text-xs text-red-300">Yaklaşıyor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bugünkü ve Geciken İşler */}
        <div className="p-3 border-t border-blue-700 flex-shrink-0">
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={14} className="text-red-400" />
                <span className="text-xs font-semibold text-red-300 uppercase tracking-wider">Geciken</span>
              </div>
              <div className="bg-red-900/30 rounded-lg p-2 border-l-4 border-red-500">
                <p className="text-sm font-medium text-white truncate">Personel İzin Onayı</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-red-300">İK - Kullanıcı B</span>
                  <span className="text-xs text-red-400 font-medium">1 gün gecikti</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={14} className="text-blue-300" />
                <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Bugün</span>
                <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-full">2</span>
              </div>
              <div className="space-y-2">
                <div className="bg-blue-600/30 rounded-lg p-2 border-l-4 border-orange-400">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs px-1.5 py-0.5 bg-orange-500 text-white rounded font-medium">Acil</span>
                  </div>
                  <p className="text-sm font-medium text-white truncate">Bakanlık Yazısı Cevabı</p>
                  <span className="text-xs text-blue-300">Dış İlişkiler - Müdür</span>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-2 border-l-4 border-blue-400">
                  <p className="text-sm font-medium text-white truncate">Aylık Faaliyet Raporu</p>
                  <span className="text-xs text-blue-300">Planlama - Sistem</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Durumu */}
        <div className="p-4 border-t border-blue-700 flex-shrink-0">
          <div className="bg-blue-700/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Brain size={18} className="text-purple-300" />
              <span className="text-sm font-semibold">Yapay Zeka Motoru</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-blue-200">Çevrimdışı (On-Premise) • Güvenli</span>
            </div>
            <p className="text-xs text-blue-300 mt-2">Veriler kurum dışına çıkmaz</p>
          </div>
        </div>
        </div>
      </div>

      {/* Ana İçerik Alanı */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Üst Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Belge ara, doğal dilde soru sor... (AI destekli)"
                value={aramaMetni}
                onChange={(e) => setAramaMetni(e.target.value)}
                className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-purple-100 rounded-md hover:bg-purple-200">
                <Brain size={18} className="text-purple-600" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-6">
            <div className="relative">
              <button
                onClick={() => setShowBildirimler(!showBildirimler)}
                className="p-2 hover:bg-gray-100 rounded-lg relative"
              >
                <Bell size={24} className="text-gray-600" />
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">4</span>
              </button>

              {showBildirimler && (
                <div className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-bold text-gray-800">Bildirimler</h3>
                    <button className="text-sm text-blue-600 hover:underline">Tümünü Okundu İşaretle</button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {bildirimler.map(bildirim => (
                      <div key={bildirim.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${!bildirim.okundu ? 'bg-blue-50' : ''}`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            bildirim.tip === 'gorev' ? 'bg-blue-100 text-blue-600' :
                            bildirim.tip === 'onay' ? 'bg-green-100 text-green-600' :
                            bildirim.tip === 'yorum' ? 'bg-purple-100 text-purple-600' :
                            'bg-yellow-100 text-yellow-600'
                          }`}>
                            {bildirim.tip === 'gorev' && <Calendar size={20} />}
                            {bildirim.tip === 'onay' && <CheckCircle size={20} />}
                            {bildirim.tip === 'yorum' && <MessageSquare size={20} />}
                            {bildirim.tip === 'hatirlatma' && <Clock size={20} />}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 text-sm">{bildirim.baslik}</p>
                            <p className="text-gray-600 text-sm">{bildirim.mesaj}</p>
                            <p className="text-xs text-gray-400 mt-1">{bildirim.zaman}</p>
                          </div>
                          {!bildirim.okundu && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                KA
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Kullanıcı A</p>
                <p className="text-xs text-gray-500">Müdür Yardımcısı • İdari İşler</p>
              </div>
            </div>
          </div>
        </div>

        {/* İçerik Alanı */}
        <div className="flex-1 overflow-auto p-6">
          {/* GÖREVLER SEKMESI */}
          {selectedTab === 'gorevler' && (
            <div className="flex gap-6 h-full">
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Home size={16} />
                  <ChevronRight size={14} />
                  <span className="text-gray-800 font-medium">Görevlerim</span>
                </div>

                {/* Haftalık Görev Takvimi */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Bu Hafta (13-17 Ekim 2035)</h3>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg"><ChevronLeft size={20} /></button>
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">Bugün</button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg"><ChevronRight size={20} /></button>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-3">
                    {['13', '14', '15', '16', '17'].map((gun, index) => {
                      const gunler = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
                      const gorevler = GOREVLER[gun] || [];
                      const bugun = gun === '14';

                      return (
                        <div key={gun} className={`border-2 rounded-xl p-3 transition-all ${
                          bugun ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="text-center mb-3 pb-2 border-b border-gray-200">
                            <div className={`text-xs font-semibold uppercase tracking-wider ${bugun ? 'text-blue-600' : 'text-gray-500'}`}>
                              {gunler[index]}
                            </div>
                            <div className={`text-2xl font-bold mt-1 ${bugun ? 'text-blue-600' : 'text-gray-800'}`}>
                              {gun}
                            </div>
                            {bugun && <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Bugün</span>}
                          </div>

                          <div className="space-y-2">
                            {gorevler.map(gorev => (
                              <div
                                key={gorev.id}
                                onClick={() => setSelectedGorev(gorev)}
                                className={`p-2.5 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                                  selectedGorev?.id === gorev.id ? 'border-blue-500 bg-blue-100 shadow-md' :
                                  gorev.durum === 'Gecikmiş' ? 'bg-red-50 border-red-300 hover:border-red-400' :
                                  'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="flex items-start justify-between gap-1 mb-1.5">
                                  <span className={`text-xs px-2 py-0.5 rounded font-semibold ${
                                    gorev.oncelik === 'Acil' ? 'bg-red-500 text-white' :
                                    gorev.oncelik === 'Yüksek' ? 'bg-orange-500 text-white' :
                                    'bg-blue-500 text-white'
                                  }`}>
                                    {gorev.oncelik}
                                  </span>
                                  {gorev.durum === 'Gecikmiş' && <AlertTriangle size={14} className="text-red-500" />}
                                </div>
                                <p className="text-xs font-semibold text-gray-800 line-clamp-2">{gorev.baslik}</p>
                                <p className="text-xs text-gray-500 mt-1">{gorev.departman}</p>
                              </div>
                            ))}
                            {gorevler.length === 0 && (
                              <div className="text-center py-4 text-gray-400 text-xs">
                                Görev yok
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Seçili Görev Detayı */}
                {selectedGorev && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            selectedGorev.oncelik === 'Acil' ? 'bg-red-100 text-red-700' :
                            selectedGorev.oncelik === 'Yüksek' ? 'bg-orange-100 text-orange-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {selectedGorev.oncelik}
                          </span>
                          <span className="text-sm text-gray-500">{selectedGorev.departman}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{selectedGorev.baslik}</h3>
                        <p className="text-sm text-gray-600 mt-1">Gönderen: {selectedGorev.gonderen}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowAIPanel(true)}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 shadow-md"
                        >
                          <Brain size={18} />
                          AI ile Cevapla
                        </button>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 shadow-md">
                          <Reply size={18} />
                          Onayla
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center gap-2">
                          <X size={18} />
                          Reddet
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4 border-b border-gray-200">
                      {[
                        { id: 'onizleme', label: 'Belge Önizleme', icon: Eye },
                        { id: 'versiyonlar', label: 'Versiyonlar', count: 3, icon: GitBranch },
                        { id: 'yorumlar', label: 'Yorumlar', count: 2, icon: MessageSquare },
                        { id: 'tarihce', label: 'İşlem Geçmişi', icon: History }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          onClick={() => setBelgeDetayTab(tab.id)}
                          className={`px-4 py-2 flex items-center gap-2 border-b-2 transition-all ${
                            belgeDetayTab === tab.id
                              ? 'border-blue-600 text-blue-600 font-semibold'
                              : 'border-transparent text-gray-600 hover:text-gray-800'
                          }`}
                        >
                          <tab.icon size={16} />
                          {tab.label}
                          {tab.count && <span className="ml-1 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">{tab.count}</span>}
                        </button>
                      ))}
                    </div>

                    {belgeDetayTab === 'onizleme' && (
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between mb-3">
                          <span className="text-sm text-gray-600">Belge İçeriği</span>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 flex items-center gap-1">
                              <Download size={14} />
                              İndir
                            </button>
                            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 flex items-center gap-1">
                              <Edit3 size={14} />
                              Düzenle
                            </button>
                          </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap h-48 overflow-auto">
{`PERSONEL İZİN TALEBİ

Sayın Yöneticim,

15-20 Ekim 2035 tarihleri arasında 5 iş günü yıllık izin
kullanmak istiyorum.

İzin süresince yerime vekalet edecek kişi: Kullanıcı C

İzin dönüşümde bekleyen işlerimi öncelikli olarak
tamamlayacağımı belirtmek isterim.

Saygılarımla,
Kullanıcı B
İnsan Kaynakları Şefi`}
                        </div>
                      </div>
                    )}

                    {belgeDetayTab === 'versiyonlar' && (
                      <div className="space-y-3">
                        {versiyonlar.map(v => (
                          <div key={v.id} className={`p-4 border-2 rounded-lg flex items-center justify-between ${
                            v.aktif ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'
                          }`}>
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                                v.aktif ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                              }`}>
                                {v.versiyon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-gray-800">{v.degisiklik}</span>
                                  {v.aktif && <span className="text-xs px-2 py-0.5 bg-green-500 text-white rounded-full">Aktif</span>}
                                </div>
                                <p className="text-sm text-gray-600">{v.kullanici} • {v.tarih}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">Görüntüle</button>
                              {!v.aktif && <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">Geri Al</button>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {belgeDetayTab === 'yorumlar' && (
                      <div className="space-y-4">
                        {yorumlar.map(yorum => (
                          <div key={yorum.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {yorum.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-800">{yorum.kullanici}</span>
                                <span className="text-xs text-gray-500">{yorum.zaman}</span>
                              </div>
                              <p className="text-gray-700 mt-1">{yorum.mesaj}</p>
                            </div>
                          </div>
                        ))}
                        <div className="flex gap-3 mt-4">
                          <input
                            type="text"
                            placeholder="Yorum ekleyin..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <Send size={18} />
                          </button>
                        </div>
                      </div>
                    )}

                    {belgeDetayTab === 'tarihce' && (
                      <div className="space-y-2">
                        {[
                          { islem: 'Görüntülendi', kullanici: 'Kullanıcı A', zaman: '14.10.2035 09:45', icon: Eye, renk: 'bg-blue-100 text-blue-600' },
                          { islem: 'Havale Edildi', kullanici: 'Birim Amiri', zaman: '13.10.2035 16:30', icon: Share2, renk: 'bg-purple-100 text-purple-600' },
                          { islem: 'Düzenlendi', kullanici: 'Kullanıcı B', zaman: '13.10.2035 14:00', icon: Edit3, renk: 'bg-orange-100 text-orange-600' },
                          { islem: 'Oluşturuldu', kullanici: 'Kullanıcı B', zaman: '13.10.2035 10:00', icon: PlusCircle, renk: 'bg-green-100 text-green-600' },
                        ].map((kayit, i) => (
                          <div key={i} className="flex items-center gap-4 p-3 border-l-4 border-gray-200 bg-gray-50 rounded-r-lg">
                            <div className={`w-8 h-8 ${kayit.renk} rounded-full flex items-center justify-center`}>
                              <kayit.icon size={16} />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">{kayit.islem}</p>
                              <p className="text-sm text-gray-600">{kayit.kullanici}</p>
                            </div>
                            <span className="text-sm text-gray-500">{kayit.zaman}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sağ Panel - Mini Takvim */}
              <div className="w-72">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-800">Ekim 2035</h3>
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-gray-100 rounded"><ChevronLeft size={18} /></button>
                      <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight size={18} /></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {['P', 'S', 'Ç', 'P', 'C', 'C', 'P'].map((gun, i) => (
                      <div key={i} className="text-xs font-semibold text-gray-500 py-2">{gun}</div>
                    ))}
                    {[...Array(31)].map((_, i) => {
                      const gun = i + 1;
                      const bugun = gun === 14;
                      const gorevVar = GOREVLER[String(gun)]?.length > 0;
                      return (
                        <div
                          key={gun}
                          className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm cursor-pointer transition-all ${
                            bugun ? 'bg-blue-600 text-white font-bold shadow-md' :
                            gorevVar ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' :
                            'hover:bg-gray-100'
                          }`}
                        >
                          {gun}
                          {gorevVar && !bugun && <div className="w-1 h-1 bg-blue-500 rounded-full mt-0.5"></div>}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Bekleyen Görevler</span>
                      <span className="font-bold text-orange-600">7</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Geciken</span>
                      <span className="font-bold text-red-600">1</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Bu Hafta Tamamlanan</span>
                      <span className="font-bold text-green-600">12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BELGELER SEKMESİ */}
          {selectedTab === 'belgeler' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Home size={16} />
                    <ChevronRight size={14} />
                    <span className="text-gray-800 font-medium">Belgelerim</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Belgelerim</h2>
                  <p className="text-gray-600">Toplam 30 belge</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <Filter size={18} />
                    Filtrele
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-md">
                    <PlusCircle size={18} />
                    Yeni Belge
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tip</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Belge Başlığı</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tarih</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Departman</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Durum</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Gizlilik</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">İş Akışı</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {BELGELER.map(belge => (
                      <tr
                        key={belge.id}
                        onClick={() => { setSelectedBelge(belge); setShowBelgeDetay(true); }}
                        className="hover:bg-blue-50 cursor-pointer transition-colors"
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            {(() => { const IconComp = getIconComponent(belge.iconType); return <IconComp size={24} className="text-blue-600" />; })()}
                            <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded">{belge.kod}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-800">{belge.baslik}</p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><MessageSquare size={12} />{belge.yorumSayisi}</span>
                            <span className="flex items-center gap-1"><GitBranch size={12} />v{belge.versiyonSayisi}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{belge.tarih}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{belge.departman}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            belge.durum === 'Onaylandı' ? 'bg-green-100 text-green-700' :
                            belge.durum === 'Onay Bekliyor' ? 'bg-yellow-100 text-yellow-700' :
                            belge.durum === 'İnceleniyor' ? 'bg-blue-100 text-blue-700' :
                            belge.durum === 'Taslak' ? 'bg-gray-100 text-gray-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {belge.durum}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2 py-1 rounded border ${
                            belge.gizlilik === 'Gizli' ? 'bg-red-50 border-red-200 text-red-700' :
                            belge.gizlilik === 'Kısıtlı' ? 'bg-orange-50 border-orange-200 text-orange-700' :
                            'bg-gray-50 border-gray-200 text-gray-700'
                          }`}>
                            {belge.gizlilik}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-600 max-w-xs truncate">{belge.isAkisi}</td>
                        <td className="px-4 py-3">
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <MoreVertical size={18} className="text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ÜZERİNDE ÇALIŞILAN DÖKÜMANLAR */}
          {selectedTab === 'calisilan' && (
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Home size={16} />
                <ChevronRight size={14} />
                <span className="text-gray-800 font-medium">Üzerinde Çalışılan Dokümanlar</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Üzerinde Çalışılan Dokümanlar</h2>
              <p className="text-gray-600 mb-6">Eşzamanlı düzenleme ve işbirliği</p>

              <div className="grid grid-cols-2 gap-6">
                {calisilanDokumanlar.map(doc => (
                  <div key={doc.id} className="bg-white rounded-xl shadow-sm border-2 border-blue-300 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{doc.baslik}</h3>
                        <p className="text-sm text-gray-600 mt-1">Son değişiklik: {doc.sonDegisiklik}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        doc.durum === 'Düzenleniyor' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {doc.durum}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm text-gray-600">Aktif Kullanıcılar:</span>
                      <div className="flex -space-x-2">
                        {doc.aktifKullanicilar.map((user, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                            style={{ backgroundColor: ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'][i] }}
                          >
                            {user}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{doc.aktifKullanicilar.length} kişi çalışıyor</span>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                        <Edit3 size={18} />
                        Editöre Git
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <History size={20} />
                  Gerçek Zamanlı Değişiklikler
                </h3>
                <div className="space-y-3">
                  {[
                    { kullanici: 'KA', isim: 'Kullanıcı A', islem: 'Tablo 2 güncellendi', zaman: '2 dakika önce', renk: '#3B82F6' },
                    { kullanici: 'KB', isim: 'Kullanıcı B', islem: 'Grafik eklendi', zaman: '5 dakika önce', renk: '#10B981' },
                    { kullanici: 'KC', isim: 'Kullanıcı C', islem: 'Özet bölümü düzenlendi', zaman: '12 dakika önce', renk: '#8B5CF6' },
                  ].map((degisiklik, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border-l-4" style={{ borderColor: degisiklik.renk }}>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: degisiklik.renk }}
                      >
                        {degisiklik.kullanici}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{degisiklik.isim}</p>
                        <p className="text-sm text-gray-600">{degisiklik.islem}</p>
                      </div>
                      <span className="text-sm text-gray-500">{degisiklik.zaman}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* GELİŞMİŞ ARAMA */}
          {selectedTab === 'arama' && (
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Home size={16} />
                <ChevronRight size={14} />
                <span className="text-gray-800 font-medium">Gelişmiş Arama</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Gelişmiş Arama & Semantik Sorgulama</h2>
              <p className="text-gray-600 mb-6">Yapay zeka destekli akıllı belge arama</p>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Akıllı Arama (NLP Destekli)</label>
                  <div className="relative">
                    <Brain className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500" size={24} />
                    <input
                      type="text"
                      placeholder="Doğal dilde soru sorun... Örn: 'Geçen ay onaylanan izin talepleri'"
                      className="w-full pl-14 pr-4 py-4 border-2 border-purple-300 rounded-xl bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <Sparkles size={14} className="text-purple-500" />
                    AI, doğal dil sorgularını anlayarak en uygun belgeleri bulur
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Belge Tipi</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Tümü</option>
                      <option>Dilekçe</option>
                      <option>Rapor</option>
                      <option>Genelge</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Başlangıç Tarihi</label>
                    <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Bitiş Tarihi</label>
                    <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Departman</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Tümü</option>
                      <option>İnsan Kaynakları</option>
                      <option>Mali İşler</option>
                      <option>Bilgi İşlem</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 flex items-center justify-center gap-2 font-semibold shadow-md">
                    <FileSearch size={20} />
                    Akıllı Ara
                  </button>
                  <button className="px-6 py-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 flex items-center justify-center gap-2 font-semibold">
                    <Sparkles size={20} />
                    Benzer Belgeleri Bul
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Search size={20} />
                  Arama Sonuçları
                  <span className="text-sm font-normal text-gray-500">(8 sonuç bulundu)</span>
                </h3>
                <div className="space-y-3">
                  {BELGELER.slice(0, 5).map(belge => (
                    <div key={belge.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                      {(() => { const IconComp = getIconComponent(belge.iconType); return <IconComp size={28} className="text-blue-600" />; })()}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{belge.baslik}</p>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>{belge.tarih}</span>
                          <span>•</span>
                          <span>{belge.departman}</span>
                          <span>•</span>
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            belge.durum === 'Onaylandı' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>{belge.durum}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-purple-600 font-medium">%94 eşleşme</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* E-POSTA SEKMESİ */}
          {selectedTab === 'eposta' && (
            <div className="flex h-full gap-0 -m-6">
              <div className="w-56 bg-gray-100 border-r border-gray-300 p-3 flex flex-col">
                <button
                  onClick={() => { setShowComposeMail(true); setComposeMailData({ to: '', cc: '', subject: '', body: '', replyTo: null }); }}
                  className="w-full mb-4 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 font-medium shadow-md"
                >
                  <PlusCircle size={18} />
                  Yeni Posta
                </button>

                {Object.entries(epostaVerileri).map(([hesapKey, hesap]) => (
                  <div key={hesapKey} className="mb-4">
                    <div
                      onClick={() => setSelectedMailAccount(hesapKey)}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer ${
                        selectedMailAccount === hesapKey ? 'bg-blue-100' : 'hover:bg-gray-200'
                      }`}
                    >
                      <Mail size={16} className="text-blue-600" />
                      <span className="text-sm font-medium text-gray-800 truncate">{hesap.email}</span>
                      {hesap.varsayilan && <span className="text-xs text-blue-600">(Varsayılan)</span>}
                    </div>

                    {selectedMailAccount === hesapKey && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {[
                          { key: 'gelen', label: 'Gelen Kutusu', count: hesap.gelen.filter(m => !m.read).length },
                          { key: 'taslak', label: 'Taslaklar', count: hesap.taslak.length },
                          { key: 'gonderilen', label: 'Gönderilenler', count: 0 },
                          { key: 'silinen', label: 'Silinenler', count: 0 }
                        ].map(folder => (
                          <div
                            key={folder.key}
                            onClick={() => { setSelectedMailFolder(folder.key); setSelectedMail(null); }}
                            className={`flex items-center justify-between px-2 py-1.5 rounded cursor-pointer text-sm ${
                              selectedMailFolder === folder.key ? 'bg-blue-200 text-blue-800' : 'text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            <span>{folder.label}</span>
                            {folder.count > 0 && (
                              <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full font-medium">
                                {folder.count}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-3 border-b border-gray-200">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Postada ara..."
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {(epostaVerileri[selectedMailAccount]?.[selectedMailFolder] || []).map(mail => (
                    <div
                      key={mail.id}
                      onClick={() => setSelectedMail(mail)}
                      className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                        selectedMail?.id === mail.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : 'hover:bg-gray-50'
                      } ${!mail.read ? 'bg-blue-50/50' : ''}`}
                    >
                      <div className="flex items-start gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${
                          mail.external ? 'bg-orange-500' : 'bg-blue-500'
                        }`}>
                          {mail.from.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-sm truncate ${!mail.read ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                              {mail.from}
                            </span>
                            <span className="text-xs text-gray-500 flex-shrink-0">{mail.date.split(' ')[0]}</span>
                          </div>
                          <p className={`text-sm truncate ${!mail.read ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
                            {mail.subject}
                          </p>
                          <p className="text-xs text-gray-500 truncate mt-0.5">{mail.body.split('\n')[0]}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {mail.external && <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">Harici</span>}
                            {mail.important && <span className="text-xs text-red-500">⭐</span>}
                            {mail.hasAttachment && <span className="text-xs text-gray-500">📎</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {(epostaVerileri[selectedMailAccount]?.[selectedMailFolder] || []).length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                      <Mail size={48} className="mx-auto mb-2 text-gray-300" />
                      <p>Bu klasör boş</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 bg-white flex flex-col">
                {selectedMail ? (
                  <>
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <button
                          onClick={() => { setShowComposeMail(true); setComposeMailData({ to: selectedMail.fromEmail, cc: '', subject: 'RE: ' + selectedMail.subject, body: '\n\n---\n' + selectedMail.body, replyTo: selectedMail }); }}
                          className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm flex items-center gap-1"
                        >
                          <Reply size={14} /> Yanıtla
                        </button>
                        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm flex items-center gap-1">
                          <Users size={14} /> Tümünü Yanıtla
                        </button>
                        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm flex items-center gap-1">
                          <Share2 size={14} /> İlet
                        </button>
                        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm flex items-center gap-1">
                          <Trash2 size={14} /> Sil
                        </button>
                      </div>

                      <h2 className="text-xl font-bold text-gray-800 mb-3">{selectedMail.subject}</h2>

                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                          selectedMail.external ? 'bg-orange-500' : 'bg-blue-500'
                        }`}>
                          {selectedMail.from.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{selectedMail.from}</p>
                          <p className="text-sm text-gray-600">{selectedMail.fromEmail}</p>
                          <p className="text-xs text-gray-500 mt-1">Kime: {selectedMail.to} • {selectedMail.date}</p>
                        </div>
                      </div>

                      {selectedMail.external && (
                        <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
                          <AlertTriangle size={16} className="text-yellow-600" />
                          <span className="text-sm text-yellow-800">Bu e-posta kurum dışından gönderilmiştir. Dikkatli olun.</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto">
                      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{selectedMail.body}</div>

                      {selectedMail.hasAttachment && (
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Ekler</p>
                          <div className="flex gap-2">
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg border border-gray-200">
                              <FileText size={20} className="text-blue-600" />
                              <span className="text-sm text-gray-700">belge.pdf</span>
                              <button className="text-blue-600 hover:text-blue-800">
                                <Download size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <Mail size={64} className="mx-auto mb-4" />
                      <p className="text-lg">Görüntülemek için bir e-posta seçin</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ARŞİV SEKMESİ - TSE 13298 / MoReq2 Uyumlu */}
          {selectedTab === 'arsiv' && (
            <div className="flex h-full gap-0 -m-6">
              {/* Sol Panel - Arşiv Ağacı */}
              <div className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Archive size={20} className="text-amber-600" />
                    <span className="font-bold text-gray-800">Arşiv Yönetimi</span>
                  </div>
                  <p className="text-xs text-gray-500">TSE 13298 / MoReq2 Uyumlu</p>
                </div>

                <div className="p-3 space-y-1">
                  <div className="mb-4">
                    <div
                      onClick={() => setArsivSecimi('benim')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                        arsivSecimi === 'benim' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      <FolderOpen size={18} className="text-amber-600" />
                      <span className="font-medium">Benim Arşivim</span>
                      <span className="ml-auto text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">23</span>
                    </div>

                    {arsivSecimi === 'benim' && (
                      <div className="ml-4 mt-2 space-y-1">
                        {BENIM_ARSIVIM.map(item => (
                          <div
                            key={item.id}
                            onClick={() => setSeciliArsivKlasor(item)}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm ${
                              seciliArsivKlasor?.id === item.id ? 'bg-amber-50 text-amber-700' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            <Folder size={14} />
                            <span className="truncate">{item.ad}</span>
                            <span className="ml-auto text-xs text-gray-400">{item.belgeSayisi}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <div
                      onClick={() => setArsivSecimi('kurum')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                        arsivSecimi === 'kurum' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                      }`}
                    >
                      <Building size={18} className="text-blue-600" />
                      <span className="font-medium">Kurum Arşivi</span>
                    </div>

                    {arsivSecimi === 'kurum' && (
                      <div className="ml-2 mt-2">
                        {STANDART_DOSYA_PLANI.map(ana => (
                          <ArsivAgacDugumu
                            key={ana.id}
                            item={ana}
                            seviye={0}
                            seciliKlasor={seciliArsivKlasor}
                            onSelect={setSeciliArsivKlasor}
                            acikKlasorler={acikArsivKlasorler}
                            onToggle={(id) => setAcikArsivKlasorler(prev =>
                              prev.includes(id) ? prev.filter(k => k !== id) : [...prev, id]
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-600">
                      <History size={16} />
                      <span className="text-sm font-medium">Son Görüntülenen</span>
                    </div>
                    <div className="space-y-1">
                      {[
                        { ad: 'Personel İzin Talebi', tarih: '5 dk önce' },
                        { ad: 'YK Kararı 2035/42', tarih: '1 saat önce' },
                        { ad: 'Q3 Faaliyet Raporu', tarih: '3 saat önce' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-500 hover:bg-gray-100 rounded cursor-pointer">
                          <FileText size={12} />
                          <span className="truncate flex-1">{item.ad}</span>
                          <span className="text-gray-400">{item.tarih}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200 px-3">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-200">
                      <p className="text-xs font-semibold text-amber-800 mb-2">Arşiv Özeti</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-gray-500">Toplam Belge</p>
                          <p className="font-bold text-gray-800">8,456</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Klasör</p>
                          <p className="font-bold text-gray-800">234</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Bu Ay Eklenen</p>
                          <p className="font-bold text-green-600">+127</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Depolama</p>
                          <p className="font-bold text-gray-800">12.4 GB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orta Panel - Belge Listesi */}
              <div className="flex-1 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={arsivArama}
                      onChange={(e) => setArsivArama(e.target.value)}
                      placeholder="Arşivde ara... (örn: izin, rapor, sözleşme)"
                      className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-purple-100 rounded-md hover:bg-purple-200" title="AI Destekli Arama">
                      <Brain size={16} className="text-purple-600" />
                    </button>
                  </div>
                  {arsivArama && (
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-purple-600 flex items-center gap-1">
                        <Sparkles size={12} />
                        Semantik arama aktif - içerik ve metaveri taranıyor
                      </p>
                      <button
                        onClick={() => setArsivArama('')}
                        className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
                      >
                        <X size={12} />
                        Temizle
                      </button>
                    </div>
                  )}

                  {!arsivArama && (
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-xs text-gray-500">Filtre:</span>
                      <button className="px-2 py-1 text-xs bg-amber-100 text-amber-700 rounded-full">Tümü</button>
                      <button className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">Belgeler</button>
                      <button className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">Klasörler</button>
                      <button className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">Son 7 Gün</button>
                    </div>
                  )}
                </div>

                {seciliArsivKlasor && (
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Archive size={14} />
                      <span>{arsivSecimi === 'benim' ? 'Benim Arşivim' : 'Kurum Arşivi'}</span>
                      <ChevronRight size={14} />
                      <span className="font-medium text-gray-800">{seciliArsivKlasor.ad}</span>
                    </div>
                    {seciliArsivKlasor.kod && (
                      <p className="text-xs text-gray-400 mt-1">Dosya Kodu: {seciliArsivKlasor.kod}</p>
                    )}
                  </div>
                )}

                <div className="flex-1 overflow-y-auto p-4">
                  {arsivArama.toLowerCase().includes('izin') ? (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Search size={16} className="text-purple-600" />
                          <span className="font-medium text-gray-800">"{arsivArama}" için sonuçlar</span>
                        </div>
                        <span className="text-sm text-gray-500">{ARSIV_ARAMA_SONUCLARI['izin'].length} belge bulundu</span>
                      </div>
                      <div className="space-y-2">
                        {ARSIV_ARAMA_SONUCLARI['izin'].map(sonuc => (
                          <div
                            key={sonuc.id}
                            onClick={() => setSeciliArsivBelge({
                              id: sonuc.id,
                              ad: sonuc.ad,
                              kod: sonuc.kod,
                              tarih: sonuc.tarih,
                              durum: sonuc.durum,
                              tip: 'belge',
                              metaveri: { gizlilik: 'Kurumsal', saklamaSuresi: '10 Yıl', format: 'PDF/A' }
                            })}
                            className={`p-3 border rounded-lg cursor-pointer transition-all ${
                              seciliArsivBelge?.id === sonuc.id
                                ? 'border-purple-400 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <FileText size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="font-medium text-gray-800 truncate">{sonuc.ad}</p>
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0 ${
                                    sonuc.eslesme >= 90 ? 'bg-green-100 text-green-700' :
                                    sonuc.eslesme >= 75 ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-gray-100 text-gray-600'
                                  }`}>
                                    %{sonuc.eslesme}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded">{sonuc.kod}</span>
                                  <span>•</span>
                                  <span>{sonuc.tip}</span>
                                  <span>•</span>
                                  <span>{sonuc.tarih}</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-1 truncate">{sonuc.konum}</p>
                              </div>
                              <span className={`px-2 py-0.5 rounded-full text-xs flex-shrink-0 ${
                                sonuc.durum === 'Onaylı' || sonuc.durum === 'Yürürlükte' ? 'bg-green-100 text-green-700' :
                                sonuc.durum === 'Onay Bekliyor' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {sonuc.durum}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : arsivArama ? (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                      <Search size={48} className="mb-3 opacity-50" />
                      <p>"{arsivArama}" için arama yapılıyor...</p>
                      <p className="text-sm mt-2">Sonuç bulunamadı</p>
                    </div>
                  ) : seciliArsivKlasor?.children?.length > 0 ? (
                    <div className="space-y-2">
                      {seciliArsivKlasor.children.map(item => (
                        <div
                          key={item.id}
                          onClick={() => item.tip === 'belge' && setSeciliArsivBelge(item)}
                          className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                            item.tip === 'belge'
                              ? seciliArsivBelge?.id === item.id
                                ? 'border-amber-400 bg-amber-50'
                                : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/50'
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {item.tip === 'klasor' ? (
                            <Folder size={20} className="text-amber-500" />
                          ) : (
                            <FileText size={20} className="text-blue-500" />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              {item.kod && (
                                <span className="text-xs font-mono bg-gray-100 px-1.5 py-0.5 rounded">{item.kod}</span>
                              )}
                              <p className="font-medium text-gray-800 truncate">{item.ad}</p>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                              {item.tarih && <span>{item.tarih}</span>}
                              {item.belgeSayisi !== undefined && <span>{item.belgeSayisi} belge</span>}
                              {item.durum && (
                                <span className={`px-2 py-0.5 rounded-full ${
                                  item.durum === 'Onaylı' || item.durum === 'Yürürlükte' ? 'bg-green-100 text-green-700' :
                                  item.durum === 'Onay Bekliyor' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-gray-100 text-gray-700'
                                }`}>
                                  {item.durum}
                                </span>
                              )}
                            </div>
                          </div>
                          <ChevronRight size={16} className="text-gray-400" />
                        </div>
                      ))}
                    </div>
                  ) : seciliArsivKlasor ? (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                      <FolderOpen size={48} className="mb-3 opacity-50" />
                      <p>Bu klasör boş</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                      <Archive size={48} className="mb-3 opacity-50" />
                      <p>Görüntülemek için bir klasör seçin</p>
                      <p className="text-sm mt-2">veya arama yapın</p>
                    </div>
                  )}
                </div>

                {arsivSecimi === 'benim' && seciliArsivKlasor && (
                  <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <button className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 flex items-center justify-center gap-2">
                      <PlusCircle size={18} />
                      Bu Klasöre Belge Ekle
                    </button>
                  </div>
                )}
              </div>

              {/* Sağ Panel - Belge Önizleme ve Metaveri */}
              <div className="w-96 bg-gray-50 flex flex-col">
                {seciliArsivBelge ? (
                  <>
                    <div className="p-4 bg-white border-b border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText size={24} className="text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-800 text-sm leading-tight">{seciliArsivBelge.ad}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            {seciliArsivBelge.kod && (
                              <span className="text-xs font-mono bg-gray-100 px-1.5 py-0.5 rounded">{seciliArsivBelge.kod}</span>
                            )}
                            <span className="text-xs text-gray-500">{seciliArsivBelge.tarih}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 border-b border-gray-200 -mb-4 -mx-4 px-4">
                        <button
                          onClick={() => setArsivDetayTab('onizleme')}
                          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                            arsivDetayTab === 'onizleme'
                              ? 'border-blue-600 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          <Eye size={14} className="inline mr-1" />
                          Önizleme
                        </button>
                        <button
                          onClick={() => setArsivDetayTab('metaveri')}
                          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                            arsivDetayTab === 'metaveri'
                              ? 'border-blue-600 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          <Database size={14} className="inline mr-1" />
                          Metaveri
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                      {arsivDetayTab === 'onizleme' && (
                        <div className="p-4">
                          <div className="bg-white border border-gray-300 rounded-lg shadow-inner">
                            <div className="flex items-center justify-between px-3 py-2 bg-gray-100 border-b border-gray-300 rounded-t-lg">
                              <div className="flex items-center gap-2">
                                <FileText size={14} className="text-red-500" />
                                <span className="text-xs font-medium text-gray-600">
                                  {(BELGE_ONIZLEME[seciliArsivBelge.id] || BELGE_ONIZLEME['default']).format}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                {(BELGE_ONIZLEME[seciliArsivBelge.id] || BELGE_ONIZLEME['default']).sayfa}
                              </span>
                            </div>
                            <div className="p-4 min-h-[300px] bg-white">
                              <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
                                {(BELGE_ONIZLEME[seciliArsivBelge.id] || BELGE_ONIZLEME['default']).icerik}
                              </pre>
                            </div>
                          </div>

                          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-start gap-2">
                              <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                              <div className="text-xs text-blue-700">
                                <p className="font-medium">Belge Önizleme</p>
                                <p className="mt-1">Bu bir önizleme görünümüdür. Tam belgeyi görüntülemek için "Tam Ekran Aç" butonunu kullanın.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {arsivDetayTab === 'metaveri' && (
                        <div className="p-4">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Belge Metaverisi</h4>

                          {seciliArsivBelge.metaveri && (
                            <div className="space-y-3">
                              {seciliArsivBelge.metaveri.olusturan && (
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <p className="text-xs text-gray-500">Oluşturan</p>
                                  <p className="font-medium text-gray-800">{seciliArsivBelge.metaveri.olusturan}</p>
                                </div>
                              )}
                              <div className="bg-white p-3 rounded-lg border border-gray-200">
                                <p className="text-xs text-gray-500">Gizlilik Seviyesi</p>
                                <p className={`font-medium ${
                                  seciliArsivBelge.metaveri.gizlilik === 'Gizli' ? 'text-red-600' :
                                  seciliArsivBelge.metaveri.gizlilik === 'Kısıtlı' ? 'text-orange-600' :
                                  'text-gray-800'
                                }`}>
                                  {seciliArsivBelge.metaveri.gizlilik}
                                </p>
                              </div>
                              <div className="bg-white p-3 rounded-lg border border-gray-200">
                                <p className="text-xs text-gray-500">Saklama Süresi</p>
                                <p className="font-medium text-gray-800">{seciliArsivBelge.metaveri.saklamaSuresi}</p>
                              </div>
                              {seciliArsivBelge.metaveri.format && (
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <p className="text-xs text-gray-500">Dosya Formatı</p>
                                  <p className="font-medium text-gray-800">{seciliArsivBelge.metaveri.format}</p>
                                </div>
                              )}
                              {seciliArsivBelge.kod && (
                                <div className="bg-white p-3 rounded-lg border border-gray-200">
                                  <p className="text-xs text-gray-500">Dosya Plan Kodu</p>
                                  <p className="font-medium text-gray-800 font-mono">{seciliArsivBelge.kod}</p>
                                </div>
                              )}
                            </div>
                          )}

                          <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                            <p className="text-xs text-gray-500 mb-2">Belge Durumu</p>
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                              seciliArsivBelge.durum === 'Onaylı' || seciliArsivBelge.durum === 'Yürürlükte' ? 'bg-green-100 text-green-700' :
                              seciliArsivBelge.durum === 'Onay Bekliyor' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {(seciliArsivBelge.durum === 'Onaylı' || seciliArsivBelge.durum === 'Yürürlükte') && <CheckCircle size={14} />}
                              {seciliArsivBelge.durum}
                            </span>
                          </div>

                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-3">Sistem Bilgileri</h4>
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded-lg border border-gray-200">
                              <p className="text-xs text-gray-500">Oluşturma Tarihi</p>
                              <p className="font-medium text-gray-800">{seciliArsivBelge.tarih}</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-gray-200">
                              <p className="text-xs text-gray-500">Son Değişiklik</p>
                              <p className="font-medium text-gray-800">{seciliArsivBelge.tarih}</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-gray-200">
                              <p className="text-xs text-gray-500">Versiyon</p>
                              <p className="font-medium text-gray-800">v1.0</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-gray-200">
                              <p className="text-xs text-gray-500">Hash (SHA-256)</p>
                              <p className="font-mono text-xs text-gray-600 break-all">a7f3e2d1c4b5...</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 border-t border-gray-200 bg-white space-y-2">
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                        <Eye size={16} />
                        Tam Ekran Aç
                      </button>
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2">
                          <Download size={16} />
                          İndir
                        </button>
                        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2">
                          <Share2 size={16} />
                          Paylaş
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-6">
                    <FileText size={48} className="mb-3 opacity-50" />
                    <p className="text-center">Önizleme için bir belge seçin</p>
                    <p className="text-sm text-center mt-2">Belge seçtiğinizde içerik ve metaveri bilgileri burada görünecek</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Posta Oluştur Modal */}
          {showComposeMail && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-2xl w-[700px] max-h-[80vh] flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800">
                    {composeMailData.replyTo ? 'Yanıtla' : 'Yeni Posta'}
                  </h3>
                  <button onClick={() => setShowComposeMail(false)} className="p-1 hover:bg-gray-100 rounded">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <label className="w-16 text-sm text-gray-600">Kimden:</label>
                    <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      {Object.entries(epostaVerileri).map(([key, hesap]) => (
                        <option key={key} value={hesap.email}>{hesap.email}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="w-16 text-sm text-gray-600">Kime:</label>
                    <input
                      type="text"
                      value={composeMailData.to}
                      onChange={(e) => setComposeMailData({...composeMailData, to: e.target.value})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="alici@kurum.gov.tr"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="w-16 text-sm text-gray-600">Bilgi:</label>
                    <input
                      type="text"
                      value={composeMailData.cc}
                      onChange={(e) => setComposeMailData({...composeMailData, cc: e.target.value})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="bilgi@kurum.gov.tr"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="w-16 text-sm text-gray-600">Konu:</label>
                    <input
                      type="text"
                      value={composeMailData.subject}
                      onChange={(e) => setComposeMailData({...composeMailData, subject: e.target.value})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Konu başlığı"
                    />
                  </div>
                  <div>
                    <textarea
                      value={composeMailData.body}
                      onChange={(e) => setComposeMailData({...composeMailData, body: e.target.value})}
                      className="w-full h-64 px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none"
                      placeholder="Mesajınızı yazın..."
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-200 rounded-lg" title="Dosya Ekle">
                      <Upload size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg" title="Bağlantı Ekle">
                      <Link2 size={20} className="text-gray-600" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowComposeMail(false)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg text-sm"
                    >
                      Taslak Kaydet
                    </button>
                    <button
                      onClick={() => setShowComposeMail(false)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg text-sm"
                    >
                      İptal
                    </button>
                    <button
                      onClick={() => setShowComposeMail(false)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center gap-2"
                    >
                      <Send size={16} />
                      Gönder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FLOATING AI CHATBOT */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChatbot && (
          <div className="mb-4 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Brain className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">EBYS Dijital Asistan</h3>
                  <p className="text-white/70 text-xs">Çevrimdışı AI • 7/24 Destek</p>
                </div>
              </div>
              <button onClick={() => setShowChatbot(false)} className="text-white hover:bg-white/20 p-1 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-4">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleChatSubmit()}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleChatSubmit}
                  className="p-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">İzin formu</button>
                <button className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">Rapor ara</button>
                <button className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">Mevzuat</button>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          {showChatbot ? <X size={24} /> : <Brain size={24} />}
        </button>
      </div>

      {/* AI Panel Modal */}
      {showAIPanel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[800px] max-h-[80vh] overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Brain className="text-purple-600" size={28} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Yapay Zeka ile Belge Oluştur</h3>
                  <p className="text-white/70">Mevzuat ve geçmiş belgeler analiz ediliyor...</p>
                </div>
              </div>
              <button onClick={() => setShowAIPanel(false)} className="text-white hover:bg-white/20 p-2 rounded-lg">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="text-purple-600" size={18} />
                  <span className="font-semibold text-purple-800">AI Analizi Tamamlandı</span>
                </div>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>✓ mevzuat.gov.tr tarandı - 3 ilgili düzenleme bulundu</li>
                  <li>✓ Geçmiş benzer belgeler analiz edildi - 12 referans</li>
                  <li>✓ Kurumsal şablon uygulandı</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-800">Oluşturulan Taslak</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm hover:bg-gray-200 flex items-center gap-1">
                      <RefreshCw size={14} />
                      Yeniden Oluştur
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 flex items-center gap-1">
                      <Edit3 size={14} />
                      Düzenle
                    </button>
                  </div>
                </div>
                <textarea
                  className="w-full h-48 p-3 border border-gray-200 rounded-lg font-mono text-sm"
                  defaultValue={`Sayın İlgili,

İlgi: ${selectedGorev?.baslik || 'Belge'}

Yukarıda ilgi tutulan yazınız incelenmiştir.

5070 Sayılı Elektronik İmza Kanunu ve ilgili mevzuat hükümleri
çerçevesinde talebiniz değerlendirilmiş olup, aşağıdaki
hususların dikkate alınması gerekmektedir:

1. [AI tarafından analiz edilen mevzuat maddesi]
2. [Kurumsal prosedür gereksinimleri]
3. [Önceki emsal kararlar]

Bilgilerinize arz ederim.

[İmza]`}
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowAIPanel(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  İptal
                </button>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
                  <Share2 size={18} />
                  İşbirliğine Aç
                </button>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                  <Send size={18} />
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== ADMİN ARAYÜZÜ ====================
function AdminInterface() {
  const [selectedTab, setSelectedTab] = useState('izleme');
  const [selectedSubTab, setSelectedSubTab] = useState('kullanici');
  const [selectedBelgeTipi, setSelectedBelgeTipi] = useState(null);

  const menuItems = [
    { id: 'is-akisi', label: 'İş Akışı Tasarımı', icon: Workflow },
    { id: 'belge-yonetimi', label: 'Belge Yönetimi', icon: FileText },
    { id: 'form-yonetimi', label: 'Form Yönetimi', icon: Layout },
    { id: 'entegrasyon', label: 'Entegrasyon', icon: Link2 },
    { id: 'guvenlik', label: 'Güvenlik', icon: Shield },
    { id: 'yetkilendirme', label: 'Yetkilendirme', icon: Users },
    { id: 'arsiv', label: 'Arşiv Yönetimi', icon: Archive },
    { id: 'izleme', label: 'Sistem İzleme', icon: Activity },
  ];

  return (
    <div className="flex h-full bg-gray-50">
      {/* Sol Menü */}
      <div className="w-64 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white flex flex-col shadow-xl">
        <div className="p-5 border-b border-emerald-700">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Settings size={28} />
            EBYS
          </h1>
          <p className="text-emerald-200 text-sm mt-1">Yönetim Paneli</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="text-xs text-emerald-400 uppercase tracking-wider px-4 mb-2">8 Ana Modül</p>
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                selectedTab === item.id ? 'bg-emerald-700 shadow-md' : 'hover:bg-emerald-700/50'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-emerald-700">
          <div className="bg-emerald-700/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Server size={18} />
              <span className="text-sm font-semibold">Sistem Durumu</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-200">Tüm sistemler çalışıyor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            {menuItems.find(m => m.id === selectedTab)?.label}
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold shadow-md">YK</div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Yönetici K</p>
              <p className="text-xs text-gray-500">Bilgi İşlem Daire Başkanı</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          {/* SİSTEM İZLEME */}
          {selectedTab === 'izleme' && (
            <div>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Toplam Kullanıcı', value: '265', icon: Users, renk: 'from-blue-500 to-blue-600', trend: '+12 bu ay' },
                  { label: 'Aktif Oturum', value: '84', icon: Activity, renk: 'from-green-500 to-green-600', trend: 'Şu an' },
                  { label: 'Günlük Belge', value: '342', icon: FileText, renk: 'from-purple-500 to-purple-600', trend: '+23% dün' },
                  { label: 'Sistem Yükü', value: '67%', icon: Gauge, renk: 'from-orange-500 to-orange-600', trend: 'Normal' },
                ].map((stat, i) => (
                  <div key={i} className={`bg-gradient-to-br ${stat.renk} rounded-xl p-5 text-white shadow-lg`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm opacity-90">{stat.label}</span>
                      <stat.icon size={24} className="opacity-80" />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs opacity-75 mt-1">{stat.trend}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <BarChart3 size={20} />
                    Son 7 Gün Belge Aktivitesi
                  </h3>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {[234, 289, 312, 267, 341, 358, 342].map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <span className="text-xs font-bold text-gray-600 mb-1">{val}</span>
                        <div
                          className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all hover:from-blue-600 hover:to-blue-500"
                          style={{height: `${(val/400)*100}%`}}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 text-xs text-gray-500">
                    {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((g, i) => (
                      <span key={i} className="flex-1 text-center">{g}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <TrendingUp size={20} />
                    Departman Performansı
                  </h3>
                  <div className="space-y-4">
                    {[
                      { ad: 'İnsan Kaynakları', tamamlanan: 89, bekleyen: 12 },
                      { ad: 'Mali İşler', tamamlanan: 76, bekleyen: 24 },
                      { ad: 'Bilgi İşlem', tamamlanan: 95, bekleyen: 5 },
                      { ad: 'Hukuk', tamamlanan: 68, bekleyen: 32 },
                    ].map((dept, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">{dept.ad}</span>
                          <span className="text-gray-500">{dept.tamamlanan}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all"
                            style={{width: `${dept.tamamlanan}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* İŞ AKIŞI TASARIMI */}
          {selectedTab === 'is-akisi' && (
            <div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8 text-center mb-6">
                <Workflow size={64} className="mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">BPMN 2.0 Görsel İş Akışı Editörü</h3>
                <p className="text-gray-600 mb-4">Sürükle-bırak ile iş akışları tasarlayın</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md">
                  Yeni İş Akışı Oluştur
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { ad: 'Dilekçe Onay Akışı', adimlar: 'Şef -> Müdür Yrd. -> Müdür', aktif: true },
                  { ad: 'Rapor Hazırlama', adimlar: 'Hazırla -> Gözden Geçir -> Onayla', aktif: true },
                  { ad: 'Satınalma Talebi', adimlar: 'Talep -> Bütçe -> Onay -> Satınalma', aktif: true },
                  { ad: 'İzin Onay Akışı', adimlar: 'Çalışan -> Şef -> İK', aktif: false },
                ].map((akis, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-gray-800">{akis.ad}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${akis.aktif ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {akis.aktif ? 'Aktif' : 'Taslak'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{akis.adimlar}</p>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Düzenle</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BELGE YÖNETİMİ */}
          {selectedTab === 'belge-yonetimi' && !selectedBelgeTipi && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Standart Dosya Planı (SDP) belge tipleri</p>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2">
                  <PlusCircle size={18} />
                  Yeni Belge Tipi
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">KOD</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">BELGE ADI</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">TANIM</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">VERSİYON</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">BELGE SAYISI</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">SAKLAMA</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {SDP_BELGE_TIPLERI.map(belge => (
                      <tr key={belge.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-mono font-bold text-blue-600">{belge.kod}</td>
                        <td className="px-4 py-3 font-semibold text-gray-800">{belge.ad}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{belge.tanim}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">{belge.aktifVersiyon}</span>
                        </td>
                        <td className="px-4 py-3 text-sm">{belge.belgeSayisi.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{belge.saklamaSuresi}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => setSelectedBelgeTipi(belge)}
                            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                          >
                            Yönet
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedTab === 'belge-yonetimi' && selectedBelgeTipi && (
            <div>
              <button onClick={() => setSelectedBelgeTipi(null)} className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center gap-2">
                <ChevronLeft size={18} />
                Geri
              </button>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{selectedBelgeTipi.ad} - Versiyon Yönetimi</h3>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold">V1</span>
                        <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded text-xs">Yürürlükten Kaldırıldı</span>
                      </div>
                      <span className="text-sm text-gray-500">124 belge</span>
                    </div>
                  </div>
                  <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold">{selectedBelgeTipi.aktifVersiyon}</span>
                        <span className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-xs">Yürürlükte</span>
                      </div>
                      <span className="text-sm text-gray-600">{selectedBelgeTipi.belgeSayisi} belge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FORM YÖNETİMİ */}
          {selectedTab === 'form-yonetimi' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Elektronik form şablonları (Sürükle-Bırak Tasarım)</p>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2">
                  <PlusCircle size={18} />
                  Yeni Form Oluştur
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {FORMLAR.map(form => (
                  <div key={form.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800">{form.ad}</h4>
                        <p className="text-sm text-gray-600">{form.kategori}</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{form.aktifVersiyon}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{form.kullanimSayisi.toLocaleString()} kez kullanıldı</p>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Düzenle</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ENTEGRASYON */}
          {selectedTab === 'entegrasyon' && (
            <div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
                  <Globe size={32} className="mb-2" />
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm opacity-80">Dış Sistem</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white">
                  <Server size={32} className="mb-2" />
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm opacity-80">Kurumsal Sistem</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white">
                  <Shield size={32} className="mb-2" />
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm opacity-80">Güvenlik Servisi</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-800 mb-4">Aktif Entegrasyonlar</h3>
                <div className="space-y-3">
                  {ENTEGRASYONLAR.map(ent => (
                    <div key={ent.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <ent.icon size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{ent.ad}</p>
                          <p className="text-sm text-gray-600">{ent.tip}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">{ent.durum}</span>
                          <p className="text-xs text-gray-500 mt-1">Son: {ent.sonSenkron}</p>
                        </div>
                        <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Ayarlar</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* GÜVENLİK */}
          {selectedTab === 'guvenlik' && (
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Lock size={20} className="text-red-600" />
                  Kimlik Doğrulama (CIA Triad)
                </h3>
                <div className="space-y-3">
                  {[
                    { ad: 'MFA (FIDO2/WebAuthn)', durum: true },
                    { ad: 'SSO (OAuth 2.1 / OIDC)', durum: true },
                    { ad: 'LDAP/Active Directory', durum: true },
                    { ad: 'VPN Zorunluluğu', durum: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">{item.ad}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${item.durum ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {item.durum ? 'Aktif' : 'Pasif'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Eye size={20} className="text-blue-600" />
                  Audit Log (Son İşlemler)
                </h3>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {AUDIT_LOG.map(log => (
                    <div key={log.id} className={`p-3 border-l-4 rounded-r-lg ${
                      log.seviye === 'error' ? 'border-red-500 bg-red-50' :
                      log.seviye === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                      log.seviye === 'success' ? 'border-green-500 bg-green-50' :
                      'border-blue-500 bg-blue-50'
                    }`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{log.islem}</p>
                          <p className="text-xs text-gray-600">{log.kullanici} • {log.belge}</p>
                        </div>
                        <span className="text-xs text-gray-500">{log.zaman}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-purple-600" />
                  Şifreleme ve Veri Koruma
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { baslik: 'At-Rest', deger: 'AES-256 + TDE', icon: HardDrive },
                    { baslik: 'In-Transit', deger: 'TLS 1.3', icon: Network },
                    { baslik: 'Hash', deger: 'SHA-256 + Merkle Tree', icon: FileKey },
                    { baslik: 'E-İmza', deger: 'CAdES / XML Sig', icon: FileLock },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <item.icon size={24} className="text-purple-600 mb-2" />
                      <p className="font-semibold text-gray-800">{item.baslik}</p>
                      <p className="text-sm text-gray-600">{item.deger}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* YETKİLENDİRME */}
          {selectedTab === 'yetkilendirme' && (
            <div>
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setSelectedSubTab('kullanici')}
                  className={`px-6 py-3 rounded-lg font-semibold ${selectedSubTab === 'kullanici' ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Kullanıcı Yönetimi
                </button>
                <button
                  onClick={() => setSelectedSubTab('rol')}
                  className={`px-6 py-3 rounded-lg font-semibold ${selectedSubTab === 'rol' ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Rol Yönetimi (RBAC/ABAC)
                </button>
              </div>

              {selectedSubTab === 'kullanici' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">KULLANICI</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">DEPARTMAN</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">ROL</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">DURUM</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">MFA</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">SON GİRİŞ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {KULLANICILAR.map(user => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                                {user.ad.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">{user.ad}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">{user.departman}</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{user.rol}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${user.durum === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                              {user.durum}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {user.mfaAktif ? <CheckCircle size={18} className="text-green-500" /> : <XCircle size={18} className="text-red-500" />}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">{user.sonGiris}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {selectedSubTab === 'rol' && (
                <div className="space-y-4">
                  {ROLLER.map(rol => (
                    <div key={rol.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{rol.ad}</h4>
                          <p className="text-sm text-gray-600">{rol.kullaniciSayisi} kullanıcı</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Düzenle</button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {rol.yetkiler.map((yetki, i) => (
                          <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">{yetki}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ARŞİV YÖNETİMİ - OAIS */}
          {selectedTab === 'arsiv' && (
            <div>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Archive size={40} className="text-amber-600" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">OAIS Referans Modeli (ISO 14721)</h3>
                    <p className="text-gray-600">SIP -&gt; AIP -&gt; DIP Bilgi Paketleri Akışı</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { ad: 'SIP', aciklama: 'Submission Information Package', renk: 'bg-blue-50 border-blue-200' },
                    { ad: 'AIP', aciklama: 'Archival Information Package', renk: 'bg-green-50 border-green-200' },
                    { ad: 'DIP', aciklama: 'Dissemination Information Package', renk: 'bg-purple-50 border-purple-200' },
                  ].map((paket, i) => (
                    <div key={i} className={`p-4 border rounded-lg ${paket.renk}`}>
                      <p className="font-bold text-gray-800">{paket.ad}</p>
                      <p className="text-sm text-gray-600">{paket.aciklama}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mb-4">Saklama Planı Yönetimi</h3>
              <div className="grid grid-cols-2 gap-4">
                {SDP_BELGE_TIPLERI.slice(0, 4).map(tip => (
                  <div key={tip.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-gray-800">{tip.ad}</h4>
                        <p className="text-sm text-gray-600">{tip.belgeSayisi} belge</p>
                      </div>
                      <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm" defaultValue={tip.saklamaSuresi}>
                        <option>5 Yıl</option>
                        <option>10 Yıl</option>
                        <option>15 Yıl</option>
                        <option>20 Yıl</option>
                        <option>Süresiz</option>
                      </select>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Aktif Dönem</span>
                        <span className="font-medium">2 Yıl</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-600">Yarı-Aktif</span>
                        <span className="font-medium">5 Yıl</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-600">Arşiv</span>
                        <span className="font-medium">{tip.saklamaSuresi}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <HardDrive size={20} />
                  Depolama Katmanları (ILM)
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { ad: 'Sıcak Depolama', kapasite: '2 TB', kullanim: 78, renk: 'bg-red-500' },
                    { ad: 'Ilık Depolama', kapasite: '10 TB', kullanim: 45, renk: 'bg-yellow-500' },
                    { ad: 'Soğuk Arşiv', kapasite: '50 TB', kullanim: 23, renk: 'bg-blue-500' },
                  ].map((katman, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{katman.ad}</span>
                        <span className="text-sm text-gray-600">{katman.kapasite}</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full ${katman.renk}`} style={{width: `${katman.kullanim}%`}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">%{katman.kullanim} kullanımda</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
