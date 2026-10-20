import { useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { LoginPage } from './pages/LoginPage';
import { StoriesPage } from './pages/StoriesPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const { currentPath } = useShop();

  const renderCurrentRoute = () => {
    const url = new URL(currentPath, window.location.origin);
    const pathname = url.pathname;

    if (pathname.startsWith('/product/')) {
      const slug = pathname.replace('/product/', '').split('/')[0];
      return <ProductDetailPage productId={slug} />;
    }

    if (pathname.startsWith('/shop')) {
      return <ShopPage />;
    }

    if (pathname.startsWith('/stories') || pathname.startsWith('/heroes')) {
      return <StoriesPage />;
    }

    if (pathname.startsWith('/about')) {
      return <AboutPage />;
    }

    if (pathname.startsWith('/login')) {
      return <LoginPage />;
    }

    return <HomePage />;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="site-container" style={{ flex: 1, width: '100%' }}>
        {renderCurrentRoute()}
      </main>
      <CartDrawer />
      <Footer />
    </div>
  );
}
