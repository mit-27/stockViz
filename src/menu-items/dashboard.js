// assets
import { IconDashboard, IconChartBar, IconChartLine, IconChartPie } from '@tabler/icons';

// constant
const icons = { IconDashboard,IconChartBar, IconChartLine, IconChartPie};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ],

};

export default dashboard;
