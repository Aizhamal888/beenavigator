// assets
import { IconScript } from '@tabler/icons';

// constant
const icons = {
    IconScript
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'Scripts',
    // title: 'Скрипты',
    caption: 'интернет, фрод, 106',
    type: 'group',
    children: [
        {
            id: 'wsqw',
            title: 'Скрипты',
            type: 'collapse',
            icon: icons.IconScript,

            children: [
                {
                    id: 'calls',
                    title: 'Нет дозвона',
                    type: 'item',
                    url: '/net-dozvona',
                    target: false
                },
                {
                    id: 'internet1',
                    title: 'Нет интернета',
                    type: 'item',
                    url: '/net-interneta',
                    target: false
                },
                {
                    id: 'internet2',
                    title: 'Скорость интернета',
                    type: 'item',
                    url: '/skorost-interneta',
                    target: false
                },
                {
                    id: 'fraud',
                    title: 'Блокировка по фроду',
                    type: 'item',
                    url: '/block-fraud',
                    target: false
                },
                {
                    id: '106',
                    title: 'Переброс 106',
                    type: 'item',
                    url: '/perebros',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
