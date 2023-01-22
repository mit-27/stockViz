import { useEffect, useState } from 'react';
// material-ui
import { Grid, Container, Button, Box} from '@mui/material';
// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';

import TopOrderCard from './TopOrderCard';
import BottomOrderCard from './BottomOrderCard';
import TopEarningCard from './TopEarningCard';
import BottomEarningCard from './BottomEarningCard';

import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import TableauGraph from '../../../GraphComponents/graph1'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Chart8 = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Box mt={3}>
            <Container>
                <TableauGraph sourceURL="https://public.tableau.com/views/Insights_for__Aequitas_Data_/Sheet5?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link"/>
            </Container>
        </Box>
        
    );
};

export default Chart8;
