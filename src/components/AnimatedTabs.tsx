'use client';

import { createContext, Key, ReactNode, useContext, useState } from 'react';
import { Tab, Tabs, TabsProps } from '@nextui-org/tabs';

export function Hidden({ children }: { children: ReactNode }) {
  const { activeKey } = useTabsContext();
  const { key } = useTabContext();

  return <>{activeKey === key ? children : null}</>;
}

interface RevealingTabContextModel {
  key: Key | null | undefined;
}

const TabContext = createContext<RevealingTabContextModel | null>(null);

function useTabContext(): RevealingTabContextModel {
  return useContext(TabContext)!;
}

export function RevealingTab({
  children,
  key
}: {
  children: ReactNode;
  key: Key;
}) {
  return (
    <TabContext.Provider
      value={{
        key
      }}
    >
      <Tab key={key}>{children}</Tab>
    </TabContext.Provider>
  );
}

interface RevealingTabsContextModel {
  activeKey: Key | undefined;
}

const TabsContext = createContext<RevealingTabsContextModel | null>(null);

function useTabsContext(): RevealingTabsContextModel {
  return useContext(TabsContext)!;
}

export function RevealingTabs(props: TabsProps) {
  const [activeKey, setActiveKey] = useState<Key>();

  function handleSelectionChange(key: Key) {
    setActiveKey(key);
  }

  return (
    <TabsContext.Provider
      value={{
        activeKey
      }}
    >
      <Tabs {...props} onSelectionChange={handleSelectionChange} />
    </TabsContext.Provider>
  );
}
