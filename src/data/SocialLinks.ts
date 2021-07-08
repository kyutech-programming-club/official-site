import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { socialLinksType } from '../types/socialLinksType';

export const socialLinks: socialLinksType[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/kyutech_proken',
    color: '#1DA1F2',
    iconClass: faTwitter,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kyutech-programming-club',
    color: '171515',
    iconClass: faGithub,
  },
];
