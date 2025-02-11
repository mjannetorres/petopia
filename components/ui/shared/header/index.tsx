import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className=''>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
          </Link>
          <span className='hidden lg-block font-bold text-2ml ml-3'>
            {APP_NAME}
          </span>
        </div>
        <div className='space-x-2'>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
