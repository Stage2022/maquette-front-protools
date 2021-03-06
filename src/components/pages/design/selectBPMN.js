import React, { useState } from 'react';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SelectBPMN = () => {
	//const classes = useStyles();
	const [selected, setSelected] = useState('empty');
	const navigate = useNavigate();
	const getUrl = (selected, callback) => {
		switch (selected) {
			case 'empty':
				return 'https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/master/modeler/resources/newDiagram.bpmn';
			case 'camunda':
				return 'https://raw.githubusercontent.com/Stage2022/ProtoolsCamundaTest/main/src/main/resources/process.bpmn';
			case 'flowable':
				return 'https://raw.githubusercontent.com/Stage2022/Protools-Flowable/main/src/main/resources/processes/casUsageTest.bpmn20.xml';
			default:
				console.log('Error: BPMN file not found');
		}
		callback();
	};
	const hasFinished = () => {
		console.log('finished');
	};
	const handleChange = (event) => {
		console.log('event: ' + event.target.value);
		setSelected(event.target.value);
	};

	const navigationHandler = () => {
		console.log('Navigate to bpmn file');
		navigate('/display', {
			state: { selected: getUrl(selected, hasFinished) },
		});
	};

	return (
		<Stack spacing={3}>
			<FormControl size='small' fullWidth sx={{ marginTop: 3 }}>
				<InputLabel>Select BPMN</InputLabel>
				<Select value={selected} label='Select BPMN' onChange={handleChange}>
					<MenuItem value={'camunda'}>Camunda POC</MenuItem>
					<MenuItem value={'flowable'}>Flowable POC</MenuItem>
					<MenuItem value={'empty'}>Empty File</MenuItem>
				</Select>
				<Button
					variant='contained'
					sx={{ marginTop: 3 }}
					onClick={navigationHandler}
				>
					Valider
				</Button>
			</FormControl>
		</Stack>
	);
};

export default SelectBPMN;
