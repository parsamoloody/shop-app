"use client";
import { BiChevronLeft } from "react-icons/bi";


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
        </div>
    )
}   

export default OfferEvent;
