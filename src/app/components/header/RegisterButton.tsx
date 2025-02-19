import { BiLogIn } from "react-icons/bi";


export default function RegisterButton({ styling }: { styling: string }) {
  return (
    <div className={`register h-full flex items-center ${styling}`}>
      <BiLogIn className="text-4xl text-gray-500 lg:hidden" />
      <div className="hidden lg:flex justify-center items-center rounded-lg border border-gray-700 h-10">
        <button className="px-3 flex justify-center text-sm items-center space-x-4">
          <span className="text-gray-500">
          ورود
          </span>
          <span className="bg-gray-600 w-[2.3px] h-full">&nbsp;</span>
          <span className="text-gray-500">
          ثبت نام
          </span>
        </button>
      </div>
  </div>
  );
}
