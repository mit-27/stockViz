// assets
import { IconDashboard, IconChartBar, IconChartLine, IconChartPie,IconChartAreaLine } from '@tabler/icons';

// constant
const icons = { IconDashboard,IconChartBar, IconChartLine, IconChartPie,IconChartAreaLine};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const alphadata = {
    id:'alphadata',
    title:'ALPHADATA',
    type:'group',
    children: [
        {
            id:'chart4',
            title:'Market Analysis',
            type:'item',
            url:'/dashboard/chart4',
            icon: icons.IconChartAreaLine,
            breadcrumbs: false,  
        },
        {
            id:'chart5',
            title:'Stock Flow',
            type:'item',
            url:'/dashboard/chart5',
            icon: icons.IconChartBar,
            breadcrumbs: false,
        }
    ]
};

export default alphadata;
