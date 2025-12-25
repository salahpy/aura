import { useState } from "react";
import { Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { AssistantSelector } from "./AssistantSelector";
import SparkleIcon from "@/assets/icons/input/sparkle.svg?react";
import SendDisabledIcon from "@/assets/icons/input/send-disabled.svg?react";

export const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedAssistant, setSelectedAssistant] = useState("Analytics Pro");

  return (
    <div className="w-full max-w-[720px] mb-8">
      <motion.div
        className="relative bg-white dark:bg-gray-800 rounded-2xl border transition-all duration-300 flex flex-col"
        animate={{
          height: isFocused ? "201px" : "58px",
        }}
        transition={{ duration: 0.3 }}
        style={{
          borderColor: isFocused ? "#F7DCFF" : "#E5E7EB",
          boxShadow: isFocused
            ? "0px 1px 14px 2px rgba(199, 91, 225, 0.2), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)"
            : "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
        }}>
        <div className="flex items-center gap-3 px-[17px] py-[17px]">
          <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
            <SparkleIcon width={16} height={16} />
          </div>

          <input
            type="text"
            placeholder="Ask AI a question or make a request..."
            className="flex-1 text-base leading-6 tracking-[-0.3125px] text-[#0A0A0A] dark:text-white placeholder:text-[#99A1AF] dark:placeholder:text-gray-500 outline-none bg-transparent"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
        </div>

        {isFocused && <div className="flex-1" />}

        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: isFocused ? 0.35 : 0 
              }}
              className="border-t border-[#F3F4F6] dark:border-gray-700 overflow-visible h-[63px]"
              onMouseDown={(e) => e.preventDefault()}>
              <div className="flex items-center justify-between px-6 h-full">
                <AssistantSelector
                  selected={selectedAssistant}
                  onSelect={setSelectedAssistant}
                />
                <Button
                  isIconOnly
                  className="w-8 h-8 min-w-8 rounded-full bg-[#D4D4D8] dark:bg-gray-700 opacity-50 flex items-center justify-center"
                  disabled>
                  <SendDisabledIcon width={16} height={16} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};