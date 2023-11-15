import { useEffect } from 'react';

export default function InteractiveMap({ activeElement, setActiveElement }) {
    const interphones = [
        {
            id: 0,
            title: 'Interphone 1',
            code: 1234,
            distance: '200m',
            time: '3min',
        },
        {
            id: 1,
            title: 'Interphone 2',
            code: 3851,
            distance: '800',
            time: '7min',
        },
        {
            id: 2,
            title: 'Interphone 3',
            code: 1395,
            distance: '600',
            time: '6min',
        },
    ];
    useEffect(() => {
        document.querySelector('#scroll-container').scroll(450, 1200);
        document.onclick = () => {
            setActiveElement(null);
        };
    }, [setActiveElement]);

    return (
        <div id="scroll-container" className="w-screen overflow-scroll pb-52">
            <div className={`relative h-[1500px] w-[1200px] bg-[url('/src/assets/map.png')]`}>
                <input
                    type="radio"
                    name="first"
                    radioGroup="interphones"
                    checked={activeElement && activeElement.id === 0}
                    onChange={(e) => {
                        e.stopPropagation();
                        setActiveElement(interphones[0]);
                    }}
                    className={`absolute top-[1000px] left-[720px]`}
                />
                <input
                    type="radio"
                    name="second"
                    radioGroup="interphones"
                    checked={activeElement && activeElement.id === 1}
                    onChange={(e) => {
                        e.stopPropagation();
                        setActiveElement(interphones[1]);
                    }}
                    className={`absolute top-[1230px] left-[690px]`}
                />
                <input
                    type="radio"
                    id="third"
                    name="third"
                    radioGroup="interphones"
                    checked={activeElement && activeElement.id === 2}
                    onChange={(e) => {
                        e.stopPropagation();
                        setActiveElement(interphones[2]);
                    }}
                    className={`absolute top-[1345px] left-[660px]`}
                />
            </div>
        </div>
    );
}
