import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const CsiCC = Loadable(lazy(() => import('views/CSI/csiCC')));
const CsiOPIO = Loadable(lazy(() => import('views/CSI/csiOPiO')));
const Netdozvona = Loadable(lazy(() => import('views/Scripts/NetDozvona')));
const Netinterneta = Loadable(lazy(() => import('views/Scripts/NetInterneta')));
const Skorostint = Loadable(lazy(() => import('views/Scripts/SkorostInterneta')));
const BlockFraud = Loadable(lazy(() => import('views/Scripts/BlockFraud')));
const Perebros = Loadable(lazy(() => import('views/Scripts/Perebros106')));
const Map = Loadable(lazy(() => import('views/Sections/Map')));
const Privet = Loadable(lazy(() => import('views/Sections/Privet+')));
const Providers = Loadable(lazy(() => import('views/Sections/Providers')));
const Notification = Loadable(lazy(() => import('views/Sections/Notification')));
const Vipnumbers = Loadable(lazy(() => import('views/Sections/Vipnumbers')));
const SMS = Loadable(lazy(() => import('views/Sections/SMS')));
const Pulnumbers = Loadable(lazy(() => import('views/Sections/Pulnumbers')));
const Officces = Loadable(lazy(() => import('views/Sections/Officces')));
const Prepaid = Loadable(lazy(() => import('views/Interactions/Prepaid')));
const Postpaid = Loadable(lazy(() => import('views/Interactions/Postpaid')));
const Roumingpre = Loadable(lazy(() => import('views/Rouming/Roumingpre')));
const Roumingpost = Loadable(lazy(() => import('views/Rouming/Roumingpost')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/csi-cc',
            element: <CsiCC />
        },
        {
            path: '/csi-opio',
            element: <CsiOPIO />
        },
        {
            path: '/net-dozvona',
            element: <Netdozvona />
        },
        {
            path: '/net-interneta',
            element: <Netinterneta />
        },
        {
            path: '/skorost-interneta',
            element: <Skorostint />
        },
        {
            path: '/block-fraud',
            element: <BlockFraud />
        },
        {
            path: '/perebros',
            element: <Perebros />
        },
        {
            path: '/map',
            element: <Map />
        },
        {
            path: '/privet',
            element: <Privet />
        },
        {
            path: '/providers',
            element: <Providers />
        },
        {
            path: '/notification',
            element: <Notification />
        },
        {
            path: '/vipnumbers',
            element: <Vipnumbers />
        },
        {
            path: '/sms',
            element: <SMS />
        },
        {
            path: '/pulnumbers',
            element: <Pulnumbers />
        },
        {
            path: '/officces',
            element: <Officces />
        },
        {
            path: '/prepaid',
            element: <Prepaid />
        },
        {
            path: '/postpaid',
            element: <Postpaid />
        },
        {
            path: '/roumingpre',
            element: <Roumingpre />
        },
        {
            path: '/roumingpost',
            element: <Roumingpost />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
