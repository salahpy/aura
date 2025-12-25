import { motion } from "framer-motion";
import { type ChatHistoryItem as ChatItem } from "../../data/mockData";
import ChatIcon from "@/assets/icons/sidebar/chat.svg?react";
import ChatSelectedIcon from "@/assets/icons/sidebar/chat-selected.svg?react";

interface Props {
  item: ChatItem;
  isExpanded: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

export const ChatHistoryItem = ({
  item,
  isExpanded,
  isSelected,
  onSelect,
}: Props) => {
  return (
    <motion.div
      initial={false}
      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden">
      <button
        onClick={onSelect}
        className={`
          w-full h-[47px] pl-3 rounded-lg flex items-start gap-3
          transition-colors duration-200
          ${isSelected ? "bg-[#FAF5FF] dark:bg-purple-900/30" : "hover:bg-[#F9FAFB] dark:hover:bg-gray-700"}
        `}>
        <div className="mt-2.5 flex-shrink-0">
          {isSelected ? (
            <ChatSelectedIcon width={16} height={16} />
          ) : (
            <ChatIcon width={16} height={16} stroke="#364153" />
          )}
        </div>

        <div className="flex-1 flex flex-col items-start py-2 min-w-0">
          <p
            className={`
              text-xs leading-4 overflow-hidden whitespace-nowrap text-left
              ${isSelected ? "text-[#8200DB] dark:text-purple-400" : "text-[#364153] dark:text-gray-300"}
            `}>
            {item.title}
          </p>
          <p className="text-[10px] leading-[15px] tracking-[0.117px] text-text-secondary dark:text-gray-500">
            {item.timestamp}
          </p>
        </div>
      </button>
    </motion.div>
  );
};