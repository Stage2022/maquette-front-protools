import React, { useState } from 'react';
import {
	FormControl,
	Select,
	MenuItem,
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	DialogContentText,
	Stack,
	InputLabel,
	Typography,
} from '@mui/material';
import { startProcess } from 'utils/dataProcess/processExecution';
import { useNavigate } from 'react-router-dom';

const SelectProcess = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState('flowable');
	const [selectedKey, setSelectedKey] = useState('IDK');
	const [open, setOpen] = useState(false);
	const [processParams, setProcessParams] = useState([]);

	const getUrl = (selected, callback) => {
		switch (selected) {
			case 'flowable':
				return 'CasUtilisationPOC';
			case 'sample':
				return 'BpmnSample';
			default:
				console.log('Error: BPMN file not found');
		}
		callback();
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		navigate(
			'/process/' + processParams[0].processKey + '/' + processParams[0].id,
			{
				state: {
					doc: 'Not available yet',
					date: processParams[0].startTime,
					key: processParams[0].processKey,
					state: true,
				},
			}
		);
	};

	//const [url, setUrl] = useState(getUrl(selected));
	const handleChange = (event) => {
		console.log('event: ' + event.target.value);
		setSelected(event.target.value);
	};
	const handleChangeKey = (event) => {
		console.log('event: ' + event.target.value);
		setSelectedKey(event.target.value);
	};

	const navigationHandler = () => {
		console.log('Navigate to bpmn file');
		setProcessParams(startProcess(getUrl(selected), selectedKey));
		console.log('processParams: ' + processParams);
		handleClickOpen();
	};

	return (
		<>
			<Stack spacing={3}>
				<FormControl size='small' fullWidth sx={{ marginTop: 3 }}>
					<InputLabel color='primary'> Processus :</InputLabel>
					<Select
						color='primary'
						labelId='SelectBPMN'
						value={selected}
						label='Select BPMN'
						onChange={handleChange}
					>
						<MenuItem value={'flowable'}>Flowable POC</MenuItem>
						<MenuItem value={'sample'}>Cas Simple POC</MenuItem>
					</Select>
				</FormControl>
				<FormControl size='small' fullWidth sx={{ marginTop: 3 }}>
					<InputLabel color='primary'>Business Key :</InputLabel>
					<Select
						color='primary'
						labelId='SelectBusinessKey'
						value={selectedKey}
						label='Select BusinessKey'
						onChange={handleChangeKey}
					>
						<MenuItem value={'TirageEnqu??te'}>Tirage Enqu??te</MenuItem>
						<MenuItem value={'TestPOC'}>TestPOC</MenuItem>
						<MenuItem value={'UnPandaRouxDors'}>Un Panda Roux Dors</MenuItem>
						<MenuItem value={'IDK'}>IDK</MenuItem>
					</Select>
				</FormControl>
				<Button variant='contained' onClick={navigationHandler}>
					Valider
				</Button>
			</Stack>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>
					<Typography variant='h4'>Process Service</Typography>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Processus lanc?? avec succ??s, redirection vers la page de suivi du
						processus.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant='outlined' onClick={handleClose} autoFocus>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default SelectProcess;
