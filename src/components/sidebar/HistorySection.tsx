import { useState } from "react";
import { motion } from "framer-motion";
import { ChatHistoryItem } from "./ChatHistoryItem";
import { chatHistory } from "../../data/mockData";
import HistoryIcon from "@/assets/icons/sidebar/history.svg?react";
import ChevronIcon from "@/assets/icons/sidebar/chevron-down.svg?react";

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
  isCollapsed?: boolean;
}

export const HistorySection = ({
  selectedId,
  onSelect,
  isCollapsed = false,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="px-4">
      <button
        onClick={() => !isCollapsed && setIsExpanded(!isExpanded)}
        className={`w-full h-9 flex items-center gap-3 rounded-xl hover:bg-[#F9FAFB] dark:hover:bg-gray-700 transition-colors ${
          isCollapsed ? "justify-center px-0" : "px-3"
        }`}>
        <HistoryIcon width={20} height={20} className="flex-shrink-0" />

        {!isCollapsed && (
          <>
            <span className="flex-1 text-left text-sm leading-5 tracking-[-0.15px] text-text-secondary dark:text-gray-400">
              History
            </span>

            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}>
              <ChevronIcon width={16} height={16} />
            </motion.div>
          </>
        )}
      </button>

      {!isCollapsed && (
        <div className="mt-2 space-y-1">
          {chatHistory.map((item) => (
            <ChatHistoryItem
              key={item.id}
              item={item}
              isExpanded={isExpanded}
              isSelected={selectedId === item.id}
              onSelect={() => onSelect(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
