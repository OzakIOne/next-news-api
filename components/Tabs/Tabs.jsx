import * as RXTabs from '@radix-ui/react-tabs';
import { Trigger } from './Tabs.module.css';
import clsx from 'clsx';

const Tabs = ({ tabs }) => (
  <RXTabs.Root
    className="flex flex-col w-full bg-white shadow-sm"
    defaultValue="Feed"
    orientation="horizontal"
  >
    <RXTabs.List className="flex shrink-0" aria-label="tabs navigation">
      {tabs.map((tab) => (
        <RXTabs.Trigger
          key={tab.title}
          className={clsx(
            Trigger,
            'flex items-center justify-center flex-1 px-5 py-2 text-xl text-gray-900 duration-300 cursor-pointer border-b-transparent font-title hover:bg-indigo-300',
          )}
          value={tab.title}
        >
          {tab.title}
        </RXTabs.Trigger>
      ))}
    </RXTabs.List>
    {tabs.map((tab) => (
      <RXTabs.Content
        key={tab.title}
        className="flex-1 p-5 duration-700 bg-gray-100 outline-none rounded-b-md focus:shadow-xl"
        value={tab.title}
      >
        {tab.content}
      </RXTabs.Content>
    ))}
  </RXTabs.Root>
);
export default Tabs;
