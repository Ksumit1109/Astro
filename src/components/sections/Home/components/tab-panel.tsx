"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTabStore } from "@/lib/store";

interface Tab {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

interface TabPanelProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function TabPanel({ tabs }: TabPanelProps) {
  const activeTab = useTabStore((state) => state.activeTab);
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const activeTabRef = tabRefs.current.get(activeTab);
    if (activeTabRef) {
      setIndicatorStyle({
        left: activeTabRef.offsetLeft + 8,
        width: activeTabRef.offsetWidth,
      });
    }
  }, [activeTab]);

  // Handle hash navigation - Sync store with hash on mount/change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && tabs.some((tab) => tab.id === hash)) {
        setActiveTab(hash);
        // Scroll to the tabs section if needed
        const tabsSection = document.getElementById("services");
        if (tabsSection) {
          const yOffset = -180;
          const y =
            tabsSection.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [tabs, setActiveTab]);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tabs Container */}
      <div className="overflow-x-auto pb-4 -mb-4 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="relative bg-lightground rounded-2xl p-2 min-w-max mx-4 md:mx-0">
          {/* Sliding Indicator */}
          <div
            className="absolute top-1.5 bottom-1.5 left-1.5 bg-hoverground rounded-xl shadow-sm transition-all duration-300 ease-out"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />

          {/* Tabs */}
          <div className="relative flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.id, el);
                }}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 flex items-center gap-3 px-5 py-4 rounded-xl transition-colors duration-200 z-10 whitespace-nowrap",
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200",
                    activeTab === tab.id
                      ? "bg-background text-foreground"
                      : "bg-background text-muted-foreground"
                  )}
                >
                  {tab.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{tab.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {tab.subtitle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">{activeContent}</div>
    </div>
  );
}
