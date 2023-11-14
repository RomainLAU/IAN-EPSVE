import { AccordionItem as Item } from '@szhsin/react-accordion';
import { useState } from 'react';

export default function AccordionItem({ header, ...rest }) {
    const [checked, setChecked] = useState(false);

    return (
        <Item
            {...rest}
            className={`transition-all duration-200 ease-out border-b bg-[#EEEEEE] rounded-xl w-full overflow-hidden drop-shadow-md`}
            header={({ state: { isEnter } }) => (
                <div className={`transition-all duration-200 ease-out  flex items-center justify-between w-4/5`}>
                    <input
                        type="radio"
                        checked={checked}
                        onClick={(event) => {
                            event.stopPropagation();
                            setChecked(!checked);
                        }}
                        onChange={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <h3 className={`text-2xl text-center`}>{header}</h3>
                </div>
            )}
            buttonProps={{
                className: ({ isEnter }) =>
                    `transition-all duration-200 ease-out flex w-full p-4 text-center justify-center ${
                        checked ? 'bg-[#eaffbf]' : ''
                    }]`,
            }}
            headingProps={{
                className: `text-2xl text-center ${checked ? 'bg-[#eaffbf]' : ''}`,
            }}
            contentProps={{
                className: 'transition-all duration-200 ease-out bg-[#EEEEEE] rounded-xl w-full',
            }}
            panelProps={{ className: `transition-all duration-200 ease-out p-4 ${checked ? 'bg-[#eaffbf]' : ''}` }}
        />
    );
}
