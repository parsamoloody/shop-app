import { BiLogIn } from "react-icons/bi";


export default function RegisterButton({ styling }: { styling: string }) {
  return (
    <div className={`register h-full flex items-center ${styling}`}>
    <BiLogIn className="text-4xl text-gray-500" />
  </div>
  );
}
