import { dashboards } from "../../data/mockData";
import GridIcon from "@/assets/icons/sidebar/dashboard-grid.svg?react";
import ChartIcon from "@/assets/icons/sidebar/dashboard-chart.svg?react";
import TrendingIcon from "@/assets/icons/sidebar/dashboard-trending.svg?react";
import PlusIcon from "@/assets/icons/sidebar/plus.svg?react";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  grid: GridIcon,
  chart: ChartIcon,
  trending: TrendingIcon,
};

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
  isCollapsed?: boolean;
}

export const DashboardsSection = ({
  selectedId,
  onSelect,
  isCollapsed = false,
}: Props) => {
  return (
    <div className="px-4 bg-white dark:bg-transparent">
      {!isCollapsed && (
        <div className="flex items-center justify-between h-5 px-3 mb-4">
          <span className="text-xs leading-4 tracking-[0.6px] uppercase text-text-secondary dark:text-gray-400">
            Dashboards
          </span>
          <button className="w-5 h-5 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <PlusIcon width={16} height={16} />
          </button>
        </div>
      )}

      <div className="space-y-2">
        {dashboards.map((dashboard) => {
          const isSelected = selectedId === dashboard.id;
          return (
            <button
              key={dashboard.id}
              onClick={() => onSelect(dashboard.id)}
              className={`
                w-full h-9 px-3 flex items-center gap-3 rounded-xl
                transition-colors duration-200
                ${isSelected ? "bg-[#F9FAFB] dark:bg-gray-700" : "hover:bg-[#F9FAFB] dark:hover:bg-gray-700"}
                ${isCollapsed ? "justify-center" : ""}
              `}>
              <div className="flex-shrink-0">
                {(() => {
                  const Icon = iconMap[dashboard.icon];
                  return (
                    <Icon
                      width={20}
                      height={20}
                      stroke={isSelected ? "#364153" : "#6A7282"}
                    />
                  );
                })()}
              </div>
              {!isCollapsed && (
                <>
                  <span
                    className={`text-sm leading-5 tracking-[-0.15px] ${
                      isSelected ? "text-[#364153] dark:text-white" : "text-text-secondary dark:text-gray-400"
                    }`}>
                    {dashboard.name}
                  </span>

                  <div className="ml-auto opacity-0 hover:opacity-100 transition-opacity">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="4.67" cy="6.42" r="0.58" fill="#9810FA" />
                      <circle cx="4.67" cy="2.33" r="0.58" fill="#9810FA" />
                      <circle cx="4.67" cy="10.5" r="0.58" fill="#9810FA" />
                      <circle cx="8.17" cy="6.42" r="0.58" fill="#9810FA" />
                      <circle cx="8.17" cy="2.33" r="0.58" fill="#9810FA" />
                      <circle cx="8.17" cy="10.5" r="0.58" fill="#9810FA" />
                    </svg>
                  </div>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};