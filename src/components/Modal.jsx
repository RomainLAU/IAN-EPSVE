import { ReactComponent as Mic } from '../assets/Mic.svg';
import { ReactComponent as Heart } from '../assets/Heart.svg';
import image from '../assets/img_modal.png';

export default function Modal({ activeElement }) {
    return (
        <div className="fixed left-[14vw] bottom-[20vh] mx-[15px] rounded-[20px] bg-[#FFFFFF] flex max-w-[400px] min-w-[360px] shadow-lg">
            <img src={image} alt={activeElement.title} />
            <div className="flex flex-col gap-y-[8px] py-[18px] px-[15px] w-full">
                <p className="text-[25px] text-[#333333]">{activeElement.title}</p>
                <div className="flex items-center gap-x-[6px]">
                    <div className="flex items-center bg-[#D0D2DF] p-[3px] rounded-full">
                        <Mic className="opacity-100 fill-DarkBlue"></Mic>
                    </div>
                    <p className="font-medium text-DarkBlue">{activeElement.code}</p>
                </div>
                <hr className="color-[#000000] opacity-20 h-[6px] mt-3" />
                <div className="flex justify-between items-center shadow-lg-DarkBlue">
                    <p className="font-medium text-DarkBlue">{activeElement.distance}</p>
                    <p className="font-medium text-DarkBlue">{activeElement.time}</p>
                    <div className="h-[24px] w-[24px] flex justify-center items-center">
                        <Heart alt="like"></Heart>
                    </div>
                </div>
            </div>
        </div>
    );
}
