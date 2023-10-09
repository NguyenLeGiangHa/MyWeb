
//links
import Link from 'next/link';

//icons
import {
    RiInstagramLine,
    RiFacebookLine,
    RiMailLine,
    RiGithubLine
    }

from "react-icons/ri";


const Socials = () => {
  return (
      <div className='flex items-center gap-x-4 text-lg'>
          <Link href={''} className='hover:text-accent transition-all duration-300'>
              <RiInstagramLine />
          </Link>
          <Link href={''} className='hover:text-accent transition-all duration-300'>
              <RiFacebookLine />
          </Link>
          <Link href={''} className='hover:text-accent transition-all duration-300'>
              <RiMailLine />
          </Link>
          <Link href={''} className='hover:text-accent transition-all duration-300'>
              <RiGithubLine />
          </Link>
      </div>
  );
};

export default Socials;
