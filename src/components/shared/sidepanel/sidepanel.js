import React from 'react';
import { Grid, Link, Drawer } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { FiHome, FiList, FiBarChart2, FiCpu, FiEdit } from 'react-icons/fi';

import Logo from '../logo/logo';

const useStyles = makeStyles()((theme) => {
	return {
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			'&&': {
				width: drawerWidth,
				backgroundColor: theme.palette.background.default,
			},
		},
		logo: {
			padding: 20,
			marginLeft: 20,
		},
		titleSidebar: {
			display: 'inline-block',
			marginLeft: 10,
			fontSize: 24,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},

		textSidebar: {
			display: 'inline-block',
			marginLeft: 10,
			fontSize: 20,
			fontWeight: 'bold',
			color: theme.palette.primary.main,
		},
		icon: {
			marginLeft: 20,
			color: theme.palette.primary.main,
		},
		loginButton: {
			fontSize: '14px',
			marginTop: 10,
			marginLeft: 20,
			borderColor: theme.palette.primary.main,
			color: theme.palette.primary.main,
			fontWeight: 'bold',
			borderRadius: 15,
			borderWidth: 2,
			'&:hover': {
				borderWidth: 2,
			},
		},
	};
});

const drawerWidth = 240;

const SideBar = () => {
	const { classes } = useStyles();
	//TODO : Gestion state page actuelle
	return (
		<>
			<Drawer
				sx={{
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
			>
				<Grid
					container
					spacing={2}
					sx={{ marginTop: 3, marginBottom: 5, marginLeft: 2 }}
				>
					<Logo
						// @ts-ignore
						className={classes.logo}
					/>
					<span className={classes.titleSidebar}>
						Protools <br />
						Dashboard
					</span>
				</Grid>

				<Grid container direction='column' spacing={3} sx={{ marginLeft: 2 }}>
					<Link href='/' underline='none'>
						<Grid sx={{ marginTop: 2 }}>
							<FiHome className={classes.icon} />
							<span className={classes.textSidebar}>Home</span>
						</Grid>
					</Link>

					<Link href='/process' underline='none'>
						<Grid spacing={1} sx={{ marginTop: 2 }}>
							<FiList className={classes.icon} />
							<span className={classes.textSidebar}>Workflows</span>
						</Grid>
					</Link>
					<Link href='/logs' underline='none'>
						<Grid spacing={1} sx={{ marginTop: 2 }}>
							<FiBarChart2 className={classes.icon} />
							<span className={classes.textSidebar}>Logs</span>
						</Grid>
					</Link>
					<Link href='/admin' underline='none'>
						<Grid spacing={1} sx={{ marginTop: 2 }}>
							<FiCpu className={classes.icon} />
							<span className={classes.textSidebar}>Admin</span>
						</Grid>
					</Link>
					<Link href='/design' underline='none'>
						<Grid spacing={1} sx={{ marginTop: 2 }}>
							<FiEdit className={classes.icon} />
							<span className={classes.textSidebar}>Design</span>
						</Grid>
					</Link>
					{/* <Grid spacing={1} sx={{ marginTop: 2 }}>
						<Button
							variant='outlined'
							href='/login'
							className={classes.loginButton}
						>
							Connexion
						</Button>
					</Grid> */}
				</Grid>
			</Drawer>
		</>
	);
};

export default SideBar;
