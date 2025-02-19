import { BiLogIn } from "react-icons/bi";


export default function RegisterButton({ styling }: { styling: string }) {
  return (
    <div className={`register h-full flex items-center ${styling}`}>
      <BiLogIn className="text-4xl text-gray-500 lg:hidden" />
      <div className="hidden lg:flex items-center rounded-lg border-2 border-gray-700 h-12">
        <button className="px-4 py-2 flex justify-center items-center space-x-4">
          <span>
          ورود
          </span>
          <span className="bg-gray-700 w-[2.5px] h-full">&nbsp;</span>
          <span>
          ثبت نام
          </span>
        </button>
      </div>
  </div>
  );
}
