import React from 'react';
import { Grid, CardContent, Typography } from '@mui/material';
import CustomCard from '../../shared/styledComponents/card/card';
import { makeStyles } from 'tss-react/mui';
import { IncidentChartdata } from 'utils/mockData';
import DoughnutChart from './donutChart';

const useStyles = makeStyles()((theme) => {
	return {
		root: {
			body: {
				backgroundColor: theme.palette.background.default,
			},
		},
		card: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '75%',
			marginLeft: '19%',
			marginTop: '4%',
			//paddingLeft: '2%',
		},
		titleCard: {
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		gridItemProcessList: {
			textAlign: 'center',
		},
	};
});

const ProcessOverview = (props) => {
	const pieProcessdata = props.pieProcessdata;
	const pieTaskdata = props.pieTaskdata;
	const { classes } = useStyles();
	return (
		<CustomCard className={classes.card}>
			<CardContent>
				<Grid
					container
					spacing={10}
					justifyContent='space-between'
					alignItems='baseline'
				>
					<Grid item xs={4} className={classes.gridItemProcessList}>
						<Typography variant='h6' className={classes.titleCard}>
							Processus en cours
						</Typography>
						<DoughnutChart data={pieProcessdata} />
					</Grid>
					<Grid item xs={4} className={classes.gridItemProcessList}>
						<Typography variant='h6' className={classes.titleCard}>
							Tâches manuelles
						</Typography>
						<DoughnutChart data={pieTaskdata} />
					</Grid>
					<Grid item xs={4} className={classes.gridItemProcessList}>
						<Typography variant='h6' className={classes.titleCard}>
							Incidents en cours
						</Typography>
						<DoughnutChart data={IncidentChartdata} />
					</Grid>
				</Grid>
			</CardContent>
		</CustomCard>
	);
};

export default ProcessOverview;
