import { AccordionItem as Item } from '@szhsin/react-accordion';

export default function AccordionItem({ header, ...rest }) {
    return (
        <Item
            {...rest}
            className={`transition-all duration-200 ease-out border-b bg-[#EEEEEE] rounded-xl w-5/6 overflow-hidden drop-shadow-md`}
            header={({ state: { isEnter } }) => (
                <div className={`transition-all duration-200 ease-out  flex items-center justify-center w-4/5`}>
                    <h3 className={`text-2xl text-center`}>{header}</h3>
                </div>
            )}
            buttonProps={{
                className: ({ isEnter }) =>
                    `transition-all duration-200 ease-out flex w-full p-4 text-center justify-center`,
            }}
            headingProps={{
                className: `text-2xl text-center`,
            }}
            contentProps={{
                className: 'transition-all duration-200 ease-out bg-[#EEEEEE] rounded-xl w-full',
            }}
            panelProps={{ className: `transition-all duration-200 ease-out p-4` }}
        />
    );
}
