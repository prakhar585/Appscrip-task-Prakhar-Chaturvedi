# Appscrip Task - Product Listing Page

## 👋 Hi, I'm Prakhar Chaturvedi!

This is my implementation of the Appscrip technical assessment - a fully responsive Product Listing Page built with **Next.js** and modern web technologies.

## 🚀 Live Demo

**🌐 [View Live Site](https://68580b03bf93d9df93d905aa--appscrip-task-prakhar-chaturvedi.netlify.app/products)**

**📱 [GitHub Repository](https://github.com/prakhar585/Appscrip-task-Prakhar-Chaturvedi)**

---

## 📋 Project Overview

A modern, responsive e-commerce product listing page that showcases products from the FakeStore API. The application demonstrates proficiency in React.js, Next.js, Server-Side Rendering (SSR), and responsive design principles.

### ✨ Key Features

- **🔄 Server-Side Rendering (SSR)** - Fast initial page loads and SEO optimization
- **📱 Fully Responsive Design** - Seamless experience across desktop, tablet, and mobile
- **🛍️ Dynamic Product Filtering** - Filter by categories with real-time updates
- **🔀 Product Sorting** - Sort by price, popularity, and relevance
- **🎨 Modern UI/UX** - Clean design inspired by contemporary e-commerce platforms
- **⚡ Performance Optimized** - Efficient API calls and optimized rendering
- **♿ Accessibility Ready** - ARIA labels and semantic HTML structure

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with SSR capabilities |
| **React 18** | Frontend library for building UI components |
| **CSS Modules** | Scoped styling and maintainable CSS |
| **FakeStore API** | Mock e-commerce data source |
| **Netlify** | Hosting and deployment platform |

---

## 🏗️ Project Structure

```
Appscrip-task-Prakhar-Chaturvedi/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   ├── TopStrip/
│   │   ├── TopStrip.jsx
│   │   └── TopStrip.module.css
│   ├── ProductGrid/
│   │   ├── ProductGrid.jsx
│   │   └── ProductGrid.module.css
│   ├── ProductCard/
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.module.css
│   ├── FilterSlidebar/
│   │   ├── FilterSlidebar.jsx
│   │   └── FilterSlidebar.module.css
│   ├── FilterTab/
│   │   ├── FilterTab.jsx
│   │   └── FilterTab.module.css
│   ├── SortBar/
│   │   ├── SortBar.jsx
│   │   └── SortBar.module.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.module.css
├── lib/
│   └── fetchProducts.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── products.js
├── public/
│   └── assets/
│       └── images/
├── styles/
│   ├── globals.css
│   └── ProductsPage.module.css
└── next.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/prakhar585/Appscrip-task-Prakhar-Chaturvedi.git
   cd Appscrip-task-Prakhar-Chaturvedi
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 📱 Responsive Design

The application is designed mobile-first and provides optimal viewing experience across all devices:

- **Mobile (< 768px)**: 2-column product grid, collapsible filters, touch-friendly navigation
- **Tablet (768px - 1024px)**: Enhanced layout with better spacing
- **Desktop (> 1024px)**: Full sidebar filters, optimal grid layout

---

## 🎯 Features Implemented

### ✅ Core Requirements

- [x] **HTML & CSS Implementation** - Semantic markup and modern CSS
- [x] **React.js with Next.js** - Component-based architecture
- [x] **Server-Side Rendering** - Using `getServerSideProps` for SEO optimization
- [x] **Responsive Design** - Mobile, tablet, and desktop compatibility
- [x] **FakeStore API Integration** - Dynamic product data fetching

### ✅ Code Quality

- [x] **Clean Code Structure** - Modular components and organized file structure
- [x] **Consistent Naming Convention** - Descriptive and standardized naming
- [x] **Minimal External Dependencies** - Leveraging Next.js built-in features
- [x] **Optimized DOM Size** - Efficient rendering and minimal DOM manipulation

### ✅ SEO Optimization

- [x] **Meta Tags** - Title, description, and viewport configuration
- [x] **Semantic HTML** - Proper heading hierarchy (H1, H2, H3)
- [x] **Image Optimization** - Alt texts and SEO-friendly naming
- [x] **Schema Markup** - Structured data for search engines

---

## 🔧 API Integration

The application integrates with [FakeStore API](https://fakestoreapi.com/) to fetch product data:

```javascript
// lib/fetchProducts.js
export async function fetchProducts({ category, sort }) {
  let url = 'https://fakestoreapi.com/products';
  
  if (category) {
    url += `/category/${category}`;
  }
  
  const res = await fetch(url);
  let products = await res.json();
  
  // Sorting logic
  if (sort === 'price_asc') {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === 'price_desc') {
    products.sort((a, b) => b.price - a.price);
  }
  
  return products;
}
```

---

## 🎨 Design System

### Color Palette
- **Primary**: `#000000` (Black)
- **Secondary**: `#FFFFFF` (White)
- **Accent**: `#252020` (Dark Gray)
- **Border**: `#E5E5E5` (Light Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 600 (Semi-bold), 700 (Bold)

---

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Modules**: Scoped styles to prevent style conflicts
- **Server-Side Rendering**: Faster initial page loads and better SEO

---

## 🌟 Key Achievements

1. **100% Responsive Design** - Works flawlessly on all device sizes
2. **Server-Side Rendering** - Proper SSR implementation for SEO benefits
3. **Modern React Patterns** - Hooks, functional components, and clean architecture
4. **Performance Focused** - Optimized images, minimal re-renders, efficient API calls
5. **Accessibility Conscious** - ARIA labels, semantic HTML, keyboard navigation

---

## 🚀 Deployment

The application is deployed on **Netlify** with the following configuration:

- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Node Version**: 18.x

---

## 🔮 Future Enhancements

- [ ] **Search Functionality** - Add product search with autocomplete
- [ ] **Cart Management** - Shopping cart with local storage
- [ ] **User Authentication** - Login/signup functionality
- [ ] **Product Details Page** - Individual product pages
- [ ] **Wishlist Feature** - Save favorite products
- [ ] **Advanced Filters** - Price range, ratings, brand filters

---

## 🤝 Connect with Me

- **GitHub**: [@prakhar585](https://github.com/prakhar585)
- **LinkedIn**: [Prakhar Chaturvedi](https://linkedin.com/in/your-profile)
- **Email**: your.email@example.com

---

## 📝 License

This project is created for the Appscrip technical assessment and is open source under the MIT License.

---

## 🙏 Acknowledgments

- **Appscrip Team** for providing this challenging and engaging assessment
- **FakeStore API** for the mock e-commerce data
- **Next.js Team** for the amazing framework
- **Vercel** for the excellent developer experience

---

<div align="center">

**Built with ❤️ by Prakhar Chaturvedi**

⭐ **Star this repo if you found it helpful!** ⭐

</div>
