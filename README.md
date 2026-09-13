# EBYS Gereksinimleri Referans Modeli Prototipi

Claude artifact olarak geliştirilen prototipin Vercel üzerinde yayınlanabilir
sürümü. Yapı: Vite + React 18 + Tailwind CSS 3. Prototip kodu
`src/Prototip.jsx` içinde, çalışır durumda.

## 1. Yerelde çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

Üretim derlemesi:

```bash
npm run build
npm run preview
```

## 2. Vercel'e yükleme

### Seçenek A: GitHub üzerinden (önerilen)

```bash
git init
git add .
git commit -m "EBYS prototip ilk surum"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/DEPO_ADI.git
git push -u origin main
```

Ardından vercel.com adresinde **Add New > Project** ile depoyu içe aktarın.
Vercel Vite'ı otomatik tanır, ayar değiştirmenize gerek yoktur.

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Seçenek B: Vercel CLI ile

```bash
npm i -g vercel
vercel
vercel --prod
```

## 3. Artifact sürümüne göre yapılan düzeltmeler

Artifact ortamı Tailwind'in tamamını hazır yüklediği için orada çalışan bazı
kalıplar gerçek bir derlemede çalışmaz. Görsel çıktı aynı kalacak şekilde şunlar
düzeltildi:

- **Dinamik Tailwind sınıfları sabitlendi.** `bg-${renk}-500`,
  `from-${stat.color}-500`, `bg-${paket.renk}-50` gibi çalışma anında kurulan
  sınıf adları Tailwind tarayıcısı tarafından görülemez ve derlemede CSS'leri
  üretilmez. Sistem İzleme kartları, OAIS paket kutuları, depolama katmanı
  çubukları ve işlem geçmişi ikonları tam sınıf adlarıyla yeniden yazıldı.
- **Bozuk karakterler düzeltildi.** AI panelindeki `âœ“` işaretleri `✓` oldu.
- **`onKeyPress` yerine `onKeyDown`** kullanıldı (React 18'de `onKeyPress`
  kullanımdan kaldırıldı).
- Kullanılmayan lucide-react importları temizlendi.

## 4. Artifact ile Vercel arasındaki diğer farklar

- **localStorage / sessionStorage**: Artifact içinde engelli, Vercel'de
  çalışır. Prototipte veri kalıcılığı istiyorsanız burada ekleyebilirsiniz.
  Şu anda tüm veriler bellekte tutulan sabit dizilerdir.
- **Anthropic API çağrıları**: Bu prototipte API çağrısı yok, sohbet yanıtları
  `setTimeout` ile simüle ediliyor. Gerçek bir model bağlamak isterseniz
  `api/` klasöründe bir Vercel Serverless Function yazıp anahtarı ortam
  değişkeninde saklamanız gerekir, tarayıcıdan doğrudan çağrı çalışmaz.
- **shadcn/ui**: Kullanılmıyor, ek kurulum gerekmez.

## 5. Tezde kullanım için not

Vercel adresi kalıcı bir erişim bağlantısı sunar. Tez metninde prototip
bölümünde (3.2.4.3 Prototip Geliştirme ve 6.2.1.3 Prototip Değerlendirmesi)
artifact bağlantısı yerine bu adresi kullanmanız jüri erişimi açısından daha
güvenli olur. Erişim tarihini de belirtin.
