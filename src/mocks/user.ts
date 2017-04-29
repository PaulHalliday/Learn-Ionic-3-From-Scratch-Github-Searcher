import { User } from '../models/user';

const userList: User[] = [
    {
        name: 'PaulHalliday',
        company: 'PWH',
        location: 'Durham, UK',
        bio: 'I make videos on my favourite technologies. Go Angular!',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: ''
    },
    {
        name: 'JohnDoe',
        company: 'Doe and Co.',
        location: 'London, UK',
        bio: 'I love open source!',
        avatar_url: 'http://i.imgur.com/TzWcihb.png'
    }
]

export const USER_LIST = userList;