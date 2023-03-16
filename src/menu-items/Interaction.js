// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
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
            title: 'Интеракции ',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'prepaid',
                    title: 'PrePaid',
                    type: 'item',
                    url: '/prepaid',
                    target: false
                },
                {
                    id: 'postpaid',
                    title: 'PostPaid',
                    type: 'item',
                    url: '/postpaid',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
