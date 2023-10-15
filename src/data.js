import manProfileIcon from '../src/assets/images/man.png'
import womenProfileIcon from '../src/assets/images/human.png'

import featuredImage1 from '../src/assets/images/blog1.jpg'
import featuredImage2 from '../src/assets/images/blog2.jpg'

export const blogData = [
    {
        id: 1,
        featuredImage: 'url("../src/assets/images/blog1.jpg")',
        title: 'Five Things To Avoid In Cryptocurrency.',
        desc: 'Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute.',
        date: new Date(),
        author: 'Nabil Siddik',
        authorProfileImage: manProfileIcon,
        tag: 'Recent'
    },
    {
        id: 2,
        featuredImage: 'url("../src/assets/images/blog2.jpg")',
        title: 'Things That Make You Love Cryptocurrency.',
        desc: 'Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute2.',
        date: new Date().getTime(),
        author: 'Nabil Siddik',
        authorProfileImage: womenProfileIcon,
        tag: 'Recent'
    },
]