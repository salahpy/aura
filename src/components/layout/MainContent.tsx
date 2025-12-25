import { Button } from "@heroui/react";
import { WelcomeSection } from "../home/WelcomeSection";
import { SearchInput } from "../home/SearchInput";
import { ExampleCards } from "../home/ExampleCards";
import ShareIcon from "@/assets/icons/header/share.svg?react";

export const MainContent = () => {
  return (
    <main className="flex-1 bg-background dark:bg-gray-900 h-screen overflow-auto">
      <header className="h-[65px] border-b border-border dark:border-gray-700 flex items-center justify-end px-6">
        <Button className="h-8 px-3 gap-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl flex items-center">
          <ShareIcon width={16} height={16} />
          <span className="text-sm tracking-[-0.15px] text-[#4A5565] dark:text-gray-400">
            Share
          </span>
        </Button>
      </header>

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-65px)] px-6 py-12 max-[768px]:px-4">
        <WelcomeSection />
        <SearchInput />
        <ExampleCards />
      </div>
    </main>
  );
};