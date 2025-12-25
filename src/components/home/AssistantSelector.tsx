import { useState, useRef } from "react";
import { assistants } from "../../data/mockData";
import { useClickOutside } from "../../hooks/useClickOutside";
import AssistantIcon from "@/assets/icons/input/assistant.svg?react";
import ChevronDownIcon from "@/assets/icons/sidebar/chevron-down.svg?react";
import InfoIcon from "@/assets/icons/input/info.svg?react";
import PlusIcon from "@/assets/icons/sidebar/plus.svg?react";
import SettingsIcon from "@/assets/icons/menu/settings.svg?react";

interface Props {
  selected: string;
  onSelect: (name: string) => void;
}

export const AssistantSelector = ({ selected, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseDown={(e) => e.preventDefault()}
        className={`
          h-[38px] px-3 gap-2 flex items-center justify-center
          rounded-xl border transition-colors
          ${isOpen ? "border-[#E5B0FF] dark:border-purple-500" : "border-[#E5E7EB] dark:border-gray-600"}
          hover:bg-gray-50 dark:hover:bg-gray-700
        `}>
        <AssistantIcon width={16} height={16} />
        <span className="text-sm tracking-[-0.15px] text-[#101828] dark:text-white">
          {selected}
        </span>
        <ChevronDownIcon width={16} height={16} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 w-[288px] bg-white dark:bg-gray-800 rounded-lg border border-black/10 dark:border-gray-700 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] z-50"
          style={{ left: 0 }}>
          <div className="p-[5px]">
            {assistants.map((assistant) => (
              <button
                key={assistant.id}
                onClick={() => {
                  onSelect(assistant.name);
                  setIsOpen(false);
                }}
                className="w-full h-[60px] px-2 flex items-center justify-between rounded-md hover:bg-[#F9FAFB] dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <AssistantIcon width={16} height={16} />
                  <div className="flex flex-col items-start">
                    <p className="text-sm leading-5 tracking-[-0.15px] text-[#0A0A0A] dark:text-white">
                      {assistant.name}
                    </p>
                    <p className="text-xs leading-4 text-[#6A7282] dark:text-gray-400">
                      {assistant.model}
                    </p>
                  </div>
                </div>
                <InfoIcon width={16} height={16} />
              </button>
            ))}
          </div>

          <div className="h-px bg-black/10 dark:bg-gray-700 mx-[1px]" />

          <button className="w-full h-[44px] px-2 pl-[13px] flex items-center gap-3 rounded-md hover:bg-[#F9FAFB] dark:hover:bg-gray-700 transition-colors">
            <PlusIcon width={16} height={16} />
            <span className="text-sm leading-5 tracking-[-0.15px] text-[#9810FA]">
              Create New Assistant
            </span>
          </button>

          <button className="w-full h-[44px] px-2 pl-[13px] flex items-center gap-3 rounded-md hover:bg-[#F9FAFB] dark:hover:bg-gray-700 transition-colors">
            <SettingsIcon width={16} height={16} />
            <span className="text-sm leading-5 tracking-[-0.15px] text-[#0A0A0A] dark:text-white">
              Manage Assistants
            </span>
          </button>
        </div>
      )}
    </div>
  );
};