// assets
import { IconDashboard, IconChartBar, IconChartLine, IconChartPie,IconChartTreemap, IconChartAreaLine } from '@tabler/icons';

// constant
const icons = { IconDashboard,IconChartBar, IconChartLine, IconChartPie,IconChartTreemap, IconChartAreaLine};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const tsxdata = {
    id:'tsxdata',
    title:'TSXDATA',
    type:'group',
    children: [
        {
            id:'chart1',
            title:'Tree Map',
            type:'item',
            url:'/dashboard/chart1',
            icon: icons.IconChartTreemap,
            breadcrumbs: false,  
        },
        {
            id:'chart2',
            title:'Market Analysis',
            type:'item',
            url:'/dashboard/chart2',
            icon: icons.IconChartAreaLine,
            breadcrumbs: false,
        },
        {
            id:'chart3',
            title:'Bar Chart',
            type:'item',
            url:'/dashboard/chart3',
            icon: icons.IconChartBar,
            breadcrumbs: false,
        }
    ]
};

export default tsxdata;
