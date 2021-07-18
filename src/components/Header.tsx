import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

import { HeaderItems } from '../data/HeaderItems';
import { ItemType } from '../types/headerItemType';
import { socialLinks } from '../data/SocialLinks';
import { socialLinksType } from '../types/socialLinksType';

interface Props {
  children: ReactNode;
}

const Header: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <div>
        <div className="sticky top-0 h-16 flex justify-between items-center bg-white pt-10 md:p-10">
          <div className="flex items-center font-bold text-2xl cursor-pointer">
            <Link href="/">
              <Image
                src="/proken_logo.png"
                alt="proken logo"
                width={60}
                height={60}
              />
            </Link>
            <Link href="/">
              <div className="text-gray">プロ研216</div>
            </Link>
          </div>
          <div className="flex justify-around items-center p-4 w-48">
            {socialLinks.map((socialLink: socialLinksType) => (
              <div className="flex">
                <a
                  href={socialLink.url}
                  /*外部リンクを別タブで開く*/ target="_blank"
                  /*target="_blank"の脆弱性回避*/ rel="noopener">
                  <FontAwesomeIcon
                    icon={socialLink.iconClass}
                    size="2x"
                    color={socialLink.color}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="sticky top-0 h-16 flex justify-around items-center border-b-2 bg-white border-gray-200 px-4">
          {HeaderItems.map((HeaderItem: ItemType) => (
            <h1>{HeaderItem.title}</h1>
          ))}
          <div className="border-white"></div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Header;
