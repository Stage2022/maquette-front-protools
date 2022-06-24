/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
	FiMoon,
	FiBook,
	FiMenu,
	FiHome,
	FiList,
	FiEdit,
	FiCpu,
	FiBarChart2,
} from 'react-icons/fi';
import { makeStyles } from 'tss-react/mui';
import {
	Box,
	Stack,
	AppBar,
	Toolbar,
	Typography,
	Drawer,
	Link,
	Grid,
	List,
	IconButton,
	ListItem,
} from '@mui/material';

const APPBAR_MOBILE = 50;
const APPBAR_DESKTOP = 60;

const useStyles = makeStyles()((theme) => {
	return {
		gridContainer: {
			display: 'flex',
			alignItems: 'center',
		},

		textHeader: {
			flex: 1,
			fontWeight: 'normal', //margin: 5,
			color: theme.palette.primary.main,
		},
		iconsHeader: {
			flex: 1,
			color: theme.palette.primary.main,
			margin: 5,
		},
		iconMenu: {
			color: theme.palette.primary.main,
			[theme.breakpoints.down('md')]: {
				fontSize: 19,
			},
		},
		drawer: {
			width: '15%',

			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
	};
});

// TODO : Refactor inside styles instead
const RootStyle = styled(AppBar)(({ theme }) => ({
	boxShadow: 'none',
	backgroundColor: 'transparent',
	position: 'sticky',
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	minHeight: APPBAR_MOBILE,
	[theme.breakpoints.up('md')]: {
		minHeight: APPBAR_DESKTOP,
		padding: theme.spacing(0, 5),
	},
}));

const NavigationHeader = () => {
	const { classes } = useStyles();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<RootStyle>
			<ToolbarStyle>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='menu'
					onClick={() => setIsDrawerOpen(true)}
				>
					<FiMenu className={classes.iconMenu} />
				</IconButton>
				<Drawer
					open={isDrawerOpen}
					onClose={() => setIsDrawerOpen(false)}
					sx={{
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: '20%',
							boxSizing: 'border-box',
						},
					}}
				>
					<List className={classes.drawer}>
						<ListItem>
							<Link href='/' underline='none'>
								<Typography variant='subtitle2' className={classes.textSidebar}>
									Home
								</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/process' underline='none'>
								<Box className={classes.boxBreakpoint}>
									<Typography
										variant='subtitle2'
										className={classes.textSidebar}
									>
										Workflows
									</Typography>
								</Box>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/logs' underline='none'>
								<Box className={classes.boxBreakpoint}>
									<Typography
										variant='subtitle2'
										className={classes.textSidebar}
									>
										Logs
									</Typography>
								</Box>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/admin' underline='none'>
								<Box className={classes.boxBreakpoint}>
									<Typography
										variant='subtitle2'
										className={classes.textSidebar}
									>
										Admin
									</Typography>
								</Box>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='/design' underline='none'>
								<Box className={classes.boxBreakpoint}>
									<Typography
										variant='subtitle2'
										className={classes.textSidebar}
									>
										Design
									</Typography>
								</Box>
							</Link>
						</ListItem>
					</List>
				</Drawer>
				<Box sx={{ flexGrow: 1 }} />

				<Stack
					direction='row'
					alignItems='center'
					spacing={{ xs: 0.5, sm: 1.5 }}
				>
					<Box className={classes.gridContainer}>
						<FiMoon className={classes.iconsHeader} />
						<Typography variant='caption' className={classes.textHeader}>
							DarkMode
						</Typography>
					</Box>
					<Box className={classes.gridContainer}>
						<FiBook className={classes.iconsHeader} />
						<Typography variant='caption' className={classes.textHeader}>
							Documentation
						</Typography>
					</Box>
				</Stack>
			</ToolbarStyle>
		</RootStyle>
	);
};

export default NavigationHeader;