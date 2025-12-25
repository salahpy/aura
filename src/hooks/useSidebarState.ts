import { useMemo, useState } from "react";

export function useSidebarState(initialOpen = true) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
      setIsOpen,
    }),
    [isOpen]
  );
}
