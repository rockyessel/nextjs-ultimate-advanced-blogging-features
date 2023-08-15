
import { BsFillCollectionFill, BsFillSuitHeartFill } from 'react-icons/bs';

export const userCardList = {
  user: [{ name: 'My Profile', slug: '/dashboard/profile' }],
    pages: [
        { name: 'Stories', slug: '/dashboard/stories' , icon: < BsFillSuitHeartFill/>},
        { name: 'Post', slug: '/dashboard/blog', icon: < BsFillCollectionFill /> }
    ],
  singOut: [{ name: 'Sign out', slug: '' }],
};