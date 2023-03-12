import React, { ReactNode, useState } from 'react';
import {
    Tabs as ChakraTabs,
    Box as ChakraBox,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TabsProps as ChakraTabsProps,
    TabProps,
    TabPanelProps,
} from '@chakra-ui/react';

export interface TabsProps extends Omit<ChakraTabsProps, 'children'> {
    tabs: Array<string>;
    tabPanels: Array<ReactNode>;
    tabProps?: TabProps;
    tabPanelProps?: TabPanelProps;
}

function Tabs(props: TabsProps) {
    const { tabs, tabPanels, tabProps, tabPanelProps } = props;
    const [activeTabIndex, setActiveTabIndex] = useState<number>();

    const onChangeActiveTabIndex = (index: number) => {
        setActiveTabIndex(index);
    };

    return (
        <ChakraTabs
            {...props}
            variant={{ base: 'line', md: 'wider' }}
            onChange={onChangeActiveTabIndex}
        >
            <TabList>
                {tabs.map((tab) => (
                    <Tab {...tabProps} key={tab}>
                        {tab}
                    </Tab>
                ))}
                <ChakraBox
                    className="tab-border"
                    transform={{
                        base: `translateX(calc(${activeTabIndex} * 158px))`,
                        md: `translateY(calc(${activeTabIndex} * 42px))`,
                    }}
                />
            </TabList>
            <TabPanels>
                {tabPanels.map((TabContent, index) => (
                    <TabPanel {...tabPanelProps} key={String(index)}>
                        {TabContent}
                    </TabPanel>
                ))}
            </TabPanels>
        </ChakraTabs>
    );
}

export { Tabs };
