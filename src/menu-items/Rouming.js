// assets
import { IconPhoneCalling } from '@tabler/icons';

// constant
const icons = {
    IconPhoneCalling
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'CSI',
    // title: 'CSI',
    caption: 'jldsfjlksd',
    type: 'group',
    children: [
        {
            id: 'wqsqw',
            title: 'Роуминг ',
            type: 'collapse',
            icon: icons.IconPhoneCalling,

            children: [
                {
                    id: 'roumingpre',
                    title: 'Роуминг PrePaid',
                    type: 'item',
                    url: '/roumingpre',
                    target: false
                },
                {
                    id: 'roumingpost',
                    title: 'Роуминг PostPaid',
                    type: 'item',
                    url: '/roumingpost',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
