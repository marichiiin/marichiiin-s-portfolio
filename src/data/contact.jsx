import { FaPhoneAlt, FaShareAlt } from 'react-icons/fa';
import { Socials } from '../components/Socials/Socials';

export const contactInfo = [
  {
    id: 1,
    icon: FaPhoneAlt,
    description: 'Call Me',
    child: (
      <a
        style={{
          textDecoration: 'none',
          color: '#000000',
          fontSize: '20px',
        }}
        href="tel:+817093798035"
      >
        + 817093798035
      </a>
    ),
  },

  {
    id: 2,
    icon: FaShareAlt,
    description: 'Social Profiles',
    child: <Socials />,
  },
];
