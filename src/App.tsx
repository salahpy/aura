import { HeroUIProvider } from '@heroui/react';
import { Sidebar } from './components/layout/Sidebar';
import { MainContent } from './components/layout/MainContent';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <HeroUIProvider>
        <div className="flex h-screen w-screen overflow-hidden bg-background dark:bg-gray-900">
          <Sidebar />
          <MainContent />
        </div>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default App;