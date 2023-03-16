// assets
import { IconSection } from '@tabler/icons';

// constant
const icons = {
    IconSection
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'ыус',
    // title: 'Скрипты',
    caption: 'интернет, фрод, 106',
    type: 'group',
    children: [
        {
            id: 'wsqw',
            title: 'Разделы ',
            type: 'collapse',
            icon: icons.IconSection,

            children: [
                {
                    id: 'map',
                    title: 'Карта',
                    type: 'item',
                    url: '/map',
                    target: false
                },
                {
                    id: 'privet',
                    title: 'Привет+',
                    type: 'item',
                    url: '/privet',
                    target: false
                },
                {
                    id: 'providers',
                    title: 'Провайдеры',
                    type: 'item',
                    url: '/providers',
                    target: false
                },
                {
                    id: 'notification',
                    title: 'Нотификации',
                    type: 'item',
                    url: '/notification',
                    target: false
                },
                {
                    id: 'vipnumbers',
                    title: 'VIP номера',
                    type: 'item',
                    url: '/vipnumbers',
                    target: false
                },
                {
                    id: 'sms',
                    title: 'SMS',
                    type: 'item',
                    url: '/sms',
                    target: false
                },
                {
                    id: 'pulnumbers',
                    title: 'Пулы',
                    type: 'item',
                    url: '/pulnumbers',
                    target: false
                },
                {
                    id: 'officces',
                    title: 'Офисы',
                    type: 'item',
                    url: '/officces',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
