// assets
import { IconDashboard, IconChartBar, IconChartLine, IconChartPie } from '@tabler/icons';

// constant
const icons = { IconDashboard,IconChartBar, IconChartLine, IconChartPie};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const alphadata = {
    id:'alphadata',
    title:'ALPHADATA',
    type:'group',
    children: [
        {
            id:'chart4',
            title:'Bar Chart',
            type:'item',
            url:'/dashboard/chart4',
            icon: icons.IconChartBar,
            breadcrumbs: false,  
        },
        {
            id:'chart5',
            title:'Bar Chart',
            type:'item',
            url:'/dashboard/chart5',
            icon: icons.IconChartBar,
            breadcrumbs: false,
        },
        {
            id:'chart6',
            title:'Bar Chart',
            type:'item',
            url:'/dashboard/chart6',
            icon: icons.IconChartBar,
            breadcrumbs: false,
        }
    ]
};

export default alphadata;
