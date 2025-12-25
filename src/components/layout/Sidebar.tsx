import { useState } from "react";
import { Button } from "@heroui/react";
import { HistorySection } from "../sidebar/HistorySection";
import { DashboardsSection } from "../sidebar/DashboardsSection";
import { UserProfile } from "../sidebar/UserProfile";
import CollapseIcon from "@/assets/logo/collapse.svg?react";
import PlusWhiteIcon from "@/assets/icons/sidebar/plus-white.svg?react";
import SearchIcon from "@/assets/icons/sidebar/search.svg?react";
import AuraMiniLogo from "@/assets/logo/aura-mini.png";

type SelectedItem = {
  type: "history" | "dashboard";
  id: string;
} | null;

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    type: "dashboard",
    id: "2",
  });
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSelectHistory = (id: string) => {
    setSelectedItem({ type: "history", id });
  };

  const handleSelectDashboard = (id: string) => {
    setSelectedItem({ type: "dashboard", id });
  };

  return (
    <aside
      className={`h-screen bg-sidebar dark:bg-gray-800 border-r border-border dark:border-gray-700 flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-[72px]" : "w-60 max-[768px]:w-52"
      }`}>
      <div
        className={`px-4 py-4 flex items-center ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}>
        {isCollapsed ? (
          <button
            onClick={() => setIsCollapsed(false)}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
            <CollapseIcon
              width={16}
              height={16}
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
        ) : (
          <>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={AuraMiniLogo}
                alt="Aura"
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={() => setIsCollapsed(true)}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <CollapseIcon width={16} height={16} />
            </button>
          </>
        )}
      </div>

      <div className="px-4 mt-4">
        <Button
          className={`w-full min-w-0 h-9 bg-primary hover:bg-primary-dark text-white rounded-xl ${
            isCollapsed ? "px-0 justify-center" : ""
          }`}>
          <div
            className={`flex items-center gap-3 ${
              isCollapsed ? "justify-center" : "justify-start w-full px-0"
            }`}>
            <PlusWhiteIcon width={20} height={20} className="flex-shrink-0" />
            {!isCollapsed && (
              <span className="text-sm tracking-[-0.15px] leading-none">
                New Thread
              </span>
            )}
          </div>
        </Button>

        <Button
          className={`w-full min-w-0 h-9 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-text-secondary dark:text-gray-400 rounded-xl mt-2 ${
            isCollapsed ? "px-0 justify-center" : ""
          }`}>
          <div
            className={`flex items-center gap-3 ${
              isCollapsed ? "justify-center" : "justify-start w-full px-0"
            }`}>
            <SearchIcon width={20} height={20} className="flex-shrink-0" />
            {!isCollapsed && (
              <span className="text-sm tracking-[-0.15px] leading-none">
                Search Threads
              </span>
            )}
          </div>
        </Button>
      </div>

      <div className="mt-4">
        <HistorySection
          selectedId={selectedItem?.type === "history" ? selectedItem.id : null}
          onSelect={handleSelectHistory}
          isCollapsed={isCollapsed}
        />
      </div>

      <div className="h-px bg-border dark:bg-gray-700 mx-4 mb-2" />

      <div className="mt-6">
        <DashboardsSection
          selectedId={
            selectedItem?.type === "dashboard" ? selectedItem.id : null
          }
          onSelect={handleSelectDashboard}
          isCollapsed={isCollapsed}
        />
      </div>

      <div className="flex-1" />

      <div className="mt-auto mb-4">
        <UserProfile isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
};