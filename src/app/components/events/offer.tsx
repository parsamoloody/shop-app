"use client";
import { BiChevronLeft } from "react-icons/bi";
import TechnoOff from "../off-events/TechnoOff";


const OfferEvent = () => {
    return (
    <div className="w-full text-white md:p-2">
            <div className="flex items-center justify-between bg-red-800 md:rounded-lg py-[.610rem] px-2 md:px-3 lg:px-4">
        <div className="view_all flex items-center">
                <BiChevronLeft />
                <p>تمایش همه</p>
                </div>
                <p>
                    تکنوآف
                </p>
            </div>
            <TechnoOff />
        </div>
    )
}   

export default OfferEvent;
