# Görkem Uçar - Portfolio Website

Bu proje modern **React 19**, **Vite**, **TypeScript** ve **Tailwind CSS v4** ile geliştirilmiş bir Single Page Application (SPA) portfolyo sitesidir.

---

## 🌐 GitHub Pages Otomatik Yayına Alma (1 Kez Yapılacak Ayar)

Projenize **GitHub Actions ile otomatik derleme ve yayınlama** iş akışı (`.github/workflows/deploy.yml`) eklendi.

GitHub reponuza değişiklikleri **commit edip push ettikten sonra**, sadece bir defaya mahsus şu ayarı yapmanız yeterlidir:

1. GitHub'da reponuzu açın: `https://github.com/Gorkem97/Gorkem-Ucar---Portfolio`
2. Üst menüden **Settings** sekmesine tıklayın.
3. Sol menüden **Pages** bölümüne tıklayın.
4. **Build and deployment > Source** kısmında `Deploy from a branch` yerine **`GitHub Actions`** seçeneğini seçin.
5. Sayfayı kaydedin.

Artık her `git push` yaptığınızda GitHub projenizi otomatik olarak derleyip **`https://gorkem97.github.io/Gorkem-Ucar---Portfolio/`** adresinde anında yayına alacaktır! 🎉

---

## 🚀 Bilgisayarınızda Çalıştırma Adımları

Projeyi ZIP olarak indirdiğinizde doğrudan `index.html` dosyasına çift tıklayarak açamazsınız, çünkü modern React/TypeScript projelerinde tarayıcılar `.tsx` dosyalarını doğrudan çalıştıramaz. Projeyi bilgisayarınızda çalıştırmak için aşağıdaki 2 basit adımı uygulayabilirsiniz:

### 1. Gereksinim
Bilgisayarınızda [Node.js](https://nodejs.org/) kurulu olmalıdır.

### 2. Geliştirme Ortamında Çalıştırma (Önerilen)
Proje klasörünü bir terminalde (veya VS Code terminalinde) açın ve şu komutları sırasıyla çalıştırın:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev
```
Terminalde çıkan adrese (`http://localhost:3000` veya `http://localhost:5173`) tarayıcınızdan girerek sitenizi canlı olarak görüntüleyebilir ve düzenleyebilirsiniz.

---

## 📦 Statik Site Olarak Derleme (Build & Dağıtım)

Siteyi GitHub Pages, Vercel, Netlify veya herhangi bir sunucuda yayınlamak ya da derlenmiş HTML/JS/CSS dosyalarını almak için:

```bash
# Projeyi derleyin
npm run build
```

Bu komut `dist/` klasörü içinde yayınlanmaya hazır optimize edilmiş statik dosyaları oluşturur.

Derlenen siteyi yerel sunucuyla test etmek için:
```bash
npm run preview
```

---

## 🛠️ Kullanılan Teknolojiler
- **React 19 & TypeScript**
- **Vite 6**
- **Tailwind CSS v4**
- **Motion (Framer Motion)**
- **Lucide Icons**
