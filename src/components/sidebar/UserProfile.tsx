import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { userProfile, profileMenuItems } from "../../data/mockData";
import { useTheme } from "../../context/ThemeContext";
import MoonIcon from "@/assets/icons/menu/moon.svg?react";
import SettingsIcon from "@/assets/icons/menu/settings.svg?react";
import UpgradeIcon from "@/assets/icons/menu/upgrade.svg?react";
import HelpIcon from "@/assets/icons/menu/help.svg?react";
import FeedbackIcon from "@/assets/icons/sidebar/chat.svg?react";
import LogoutIcon from "@/assets/icons/menu/logout.svg?react";

const menuIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  moon: MoonIcon,
  settings: SettingsIcon,
  upgrade: UpgradeIcon,
  help: HelpIcon,
  feedback: FeedbackIcon,
  logout: LogoutIcon,
};

interface Props {
  isCollapsed?: boolean;
}

export const UserProfile = ({ isCollapsed = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleMenuAction = (action: string) => {
    if (action === "toggle-dark") {
      toggleTheme();
    } else {
      console.log(action);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-14 flex items-center gap-3 rounded-xl hover:bg-[#F9FAFB] dark:hover:bg-gray-700 transition-colors ${
          isCollapsed ? "px-4 justify-center" : "px-4"
        }`}>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-[#D1D5DC] dark:bg-gray-600 flex-shrink-0">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-full h-full object-cover"
          />
        </div>
        {!isCollapsed && (
          <div className="flex-1 text-left">
            <p className="text-sm leading-5 tracking-[-0.15px] text-text-primary dark:text-white">
              {userProfile.name}
            </p>
            <p className="text-xs leading-4 text-text-secondary dark:text-gray-400">
              {userProfile.email}
            </p>
          </div>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-8 mb-2 w-[224px] bg-white dark:bg-gray-800 rounded-lg border border-black/10 dark:border-gray-700 z-50"
              style={{
                boxShadow:
                  "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)",
              }}>
              <div className="px-[13px] py-[11px]">
                <p className="text-sm leading-5 font-medium tracking-[-0.15px] text-[#0A0A0A] dark:text-white">
                  {userProfile.name}
                </p>
                <p className="text-xs leading-4 font-medium text-[#6A7282] dark:text-gray-400">
                  {userProfile.email}
                </p>
              </div>

              <div className="h-px bg-black/10 dark:bg-gray-700" />

              <div className="py-1">
                {profileMenuItems.map((item, index) => (
                  <div key={item.id}>
                    <button
                      className="w-full px-[13px] py-2 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-md"
                      onClick={() => handleMenuAction(item.action)}>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 flex items-center justify-center">
                          {(() => {
                            const Icon = menuIcons[item.icon];
                            return (
                              <Icon
                                width={16}
                                height={16}
                                stroke={item.isDanger ? "#E7000B" : "#717182"}
                              />
                            );
                          })()}
                        </div>
                        <span
                          className={`text-sm leading-5 tracking-[-0.15px] ${
                            item.isDanger ? "text-[#E7000B]" : "text-[#0A0A0A] dark:text-white"
                          }`}>
                          {item.label}
                        </span>
                      </div>
                      {item.action === "toggle-dark" && (
                        <div
                          className={`w-9 h-5 rounded-full transition-colors ${
                            isDark ? "bg-primary" : "bg-gray-300"
                          } relative`}>
                          <div
                            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                              isDark ? "translate-x-4" : "translate-x-0.5"
                            }`}
                          />
                        </div>
                      )}
                    </button>

                    {(index === 0 || index === 4) && (
                      <div className="h-px bg-black/10 dark:bg-gray-700 my-1" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};