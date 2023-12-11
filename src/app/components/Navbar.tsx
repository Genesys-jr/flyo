import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";

export const Navbar = () => {
  return (
    <main className="flex justify-between mb-4 mx-auto px-10 py-7 bg-blue-950 text-white">
      <div className="flex gap-2 ">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Flyo"
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex space-x-5 text-sm hover:underline">
        <Link href={""}>Features</Link>
        <Link href={""}>Team</Link>
        <Link href={""}>Sign In</Link>
      </div>
    </main>
  );
};
