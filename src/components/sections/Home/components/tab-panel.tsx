"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

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

export function TabPanel({ tabs, defaultTab }: TabPanelProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
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

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tabs Container */}
      <div className="relative bg-lightground rounded-2xl p-2">
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
                "flex-1 flex items-center gap-3 px-5 py-4 rounded-xl transition-colors duration-200 z-10",
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

      {/* Content */}
      <div className="mt-6">{activeContent}</div>
    </div>
  );
}
