// assets
import { IconDashboard, IconChartBar, IconChartLine, IconChartPie, IconChartTreemap,IconChartAreaLine,IconChartGridDots } from '@tabler/icons';

// constant
const icons = { IconDashboard,IconChartBar, IconChartLine, IconChartPie, IconChartTreemap,IconChartAreaLine,IconChartGridDots};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const aequitasdata = {
    id:'aequitasdata',
    title:'AEQUITAS',
    type:'group',
    children: [
        {
            id:'chart7',
            title:'Tree Map',
            type:'item',
            url:'/dashboard/chart7',
            icon: icons.IconChartTreemap,
            breadcrumbs: false,  
        },
        {
            id:'chart8',
            title:'Live Market Analysis',
            type:'item',
            url:'/dashboard/chart8',
            icon: icons.IconChartAreaLine,
            breadcrumbs: false,
        },
        {
            id:'chart9',
            title:'Stock Flow',
            type:'item',
            url:'/dashboard/chart9',
            icon: icons.IconChartGridDots,
            breadcrumbs: false,
        }
    ]
};

export default aequitasdata;
