import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Chart1 = Loadable(lazy(() => import('views/dashboard/Default/Chart1')));
const Chart2 = Loadable(lazy(() => import('views/dashboard/Default/Chart2')));
const Chart3 = Loadable(lazy(() => import('views/dashboard/Default/Chart3')));
const Chart4 = Loadable(lazy(() => import('views/dashboard/Default/Chart4')));
const Chart5 = Loadable(lazy(() => import('views/dashboard/Default/Chart5')));
const Chart6 = Loadable(lazy(() => import('views/dashboard/Default/Chart6')));
const Chart7 = Loadable(lazy(() => import('views/dashboard/Default/Chart7')));
const Chart8 = Loadable(lazy(() => import('views/dashboard/Default/Chart8')));
const Chart9 = Loadable(lazy(() => import('views/dashboard/Default/Chart9')));
const Chart10 = Loadable(lazy(() => import('views/dashboard/Default/Chart10')));





// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

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
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                },
                {
                    path: 'chart1',
                    element: <Chart1 />
                },
                {
                    path: 'chart2',
                    element: <Chart2 />
                },
                {
                    path: 'chart3',
                    element: <Chart3 />
                },
                {
                    path: 'chart4',
                    element: <Chart4 />
                },
                {
                    path: 'chart5',
                    element: <Chart5 />
                },
                {
                    path: 'chart6',
                    element: <Chart6 />
                },
                {
                    path: 'chart7',
                    element: <Chart7 />
                },
                {
                    path: 'chart8',
                    element: <Chart8 />
                },
                {
                    path: 'chart9',
                    element: <Chart9 />
                },
                {
                    path: 'chart10',
                    element: <Chart10 />
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
