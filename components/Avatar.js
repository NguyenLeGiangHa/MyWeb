//next image
import Image from 'next/image';

const Avatar = () => {
  return (
      <div className='hidden xl:flex xl:max-w-none'>
          <Image src={'/ava.png'}
                 width={1280}
                 height={1495}
                 alt=' '

                 className='translate-z-0 w-full h-full'
          />

      </div>);
};

export default Avatar;
