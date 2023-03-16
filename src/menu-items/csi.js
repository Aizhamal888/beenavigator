// assets
import { IconArrowBigTop } from '@tabler/icons';

// constant
const icons = {
    IconArrowBigTop
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
            title: 'CSI ',
            type: 'collapse',
            icon: icons.IconArrowBigTop,

            children: [
                {
                    id: 'login3',
                    title: 'CSI КЦ',
                    type: 'item',
                    url: '/csi-cc',
                    target: false
                },
                {
                    id: 'register3',
                    title: 'CSI ОПиО',
                    type: 'item',
                    url: '/csi-opio',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
