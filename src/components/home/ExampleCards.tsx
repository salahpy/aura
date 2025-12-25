import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { exampleCards } from "../../data/mockData";
import CompareIcon from "@/assets/icons/examples/compare.svg?react";
import ChartIcon from "@/assets/icons/examples/chart.svg?react";
import BellIcon from "@/assets/icons/examples/bell.svg?react";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  compare: CompareIcon,
  chart: ChartIcon,
  report: ChartIcon,
  bell: BellIcon,
};

export const ExampleCards = () => {
  return (
    <div className="w-full max-w-[720px]">
      <p className="text-xs leading-4 tracking-[0.6px] text-center uppercase text-text-secondary dark:text-gray-400 mb-4">
        Get started with an example below
      </p>

      <div className="grid grid-cols-4 max-[768px]:grid-cols-2 gap-3">
        {exampleCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}>
            <Card
              isPressable
              className="h-[150px] border border-border dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md rounded-[14px] dark:bg-gray-800">
              <CardBody className="h-full flex flex-col items-start justify-between p-4 pr-0">
                <p className="text-sm leading-[23px] tracking-[-0.15px] text-[#364153] dark:text-gray-300 pr-4">
                  {card.title}
                </p>

                <div className="w-8 h-8 flex items-center justify-center border border-border dark:border-gray-700 rounded-xl">
                  {(() => {
                    const Icon = iconMap[card.icon];
                    return <Icon width={16} height={16} />;
                  })()}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};