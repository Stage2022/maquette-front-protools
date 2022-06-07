import { FiMoreVertical, FiXCircle, FiCheck } from 'react-icons/fi';
import theme from 'theme';
export const processChartdata = {
	labels: ['Conception', 'Collecte', 'Traitement', 'IDK'],
	datasets: [
		{
			label: 'processus',
			data: [12, 19, 3, 5],
			backgroundColor: ['#FEC89A', '#B56576', '#98C1D9', '#84A98C'],
			borderColor: [theme.palette.background.default],
			borderWidth: 2,
		},
	],
};

export const TaskChartdata = {
	labels: ['Conception', 'Collecte', 'Traitement', 'IDK'],
	datasets: [
		{
			label: 'taches',
			data: [9, 4, 3, 5],
			backgroundColor: ['#FEC89A', '#B56576', '#98C1D9', '#84A98C'],
			borderColor: [theme.palette.background.default],
			borderWidth: 2,
		},
	],
};

export const IncidentChartdata = {
	labels: ['Services', 'Interne', 'Warning'],
	datasets: [
		{
			label: 'incidents',
			data: [3, 3, 2],
			backgroundColor: ['#F25C54', '#F48A66', '#FEDC86', '#84A98C'],
			borderColor: [theme.palette.background.default],
			borderWidth: 2,
		},
	],
};

export const columns = [
	{
		name: 'name',
		label: 'Nom',
		options: {
			filter: true,
			sort: true,
			draggable: true,
			setCellProps: () => ({
				style: { minWidth: '250px' },
			}),
		},
	},
	{
		name: 'id',
		label: 'ID',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '300px' } }),
		},
	},
	{
		name: 'date',
		label: 'Date début',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '200px', fontSize: '16' } }),
		},
	},
	{
		name: 'state',
		label: 'Status',
		options: {
			sort: true,
			draggable: true,
			customBodyRender: (value) =>
				value ? (
					<FiCheck size={20} color='#17C3B2' />
				) : (
					<FiXCircle size={20} color='#F25C54' />
				),
		},
	},
	{
		name: 'Action',
		options: {
			empty: true,
			draggable: true,
			customBodyRender: (value) => <FiMoreVertical />,
		},
	},
];

export const data = [
	{
		id: 'cd97a04e-e314-11ec-ae0a-a2bafca39b64',
		state: true,
		name: 'protools-camunda-test-process',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '01fe0fa7-db70-11ec-9bdf-aa7f141af4d1',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: 'cd97a04e-e314-11ec-ae0a-a2bafca39b64',
		state: true,
		name: 'protools-camunda-test-process',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '01fe0fa7-db70-11ec-9bdf-aa7f141af4d1',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: 'cd97a04e-e314-11ec-ae0a-a2bafca39b64',
		state: true,
		name: 'protools-camunda-test-process',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '01fe0fa7-db70-11ec-9bdf-aa7f141af4d1',
		state: false,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
	{
		id: '[IDProcessus]',
		state: true,
		name: '[NomProcessus]',
		date: '04/02/2022-10:20:45',
	},
];

export const columnsManu = [
	{
		name: 'name',
		label: 'Nom',
		options: {
			filter: true,
			sort: true,
			draggable: true,
			setCellProps: () => ({
				style: { minWidth: '250px' },
			}),
		},
	},
	{
		name: 'id',
		label: 'ID',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '300px' } }),
		},
	},
	{
		name: 'date',
		label: 'Date début',
		options: {
			filter: false,
			sort: true,
			draggable: true,
			setCellProps: () => ({ style: { minWidth: '200px', fontSize: '16' } }),
		},
	},
	{
		name: 'state',
		label: 'Status',
		options: {
			sort: true,
			draggable: true,
			customBodyRender: (value) =>
				value ? (
					<FiCheck size={20} color='#17C3B2' />
				) : (
					<FiXCircle size={20} color='#F25C54' />
				),
		},
	},
	{
		name: 'Action',
		options: {
			empty: true,
			draggable: true,
			customBodyRender: (value) => <FiMoreVertical />,
		},
	},
];

export const dataManu = [
	{
		id: 'TaskID1',
		state: true,
		name: 'Select Sample',
		date: '04/02/2022-10:20:45',
	},
	{
		id: 'TaskID2',
		state: false,
		name: '[nomTacheManu]',
		date: '04/02/2022-10:20:45',
	},
];

export const emptyBPMN =
	'<?xml version="1.0" encoding="UTF-8"?> <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_11nxm0o" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="9.1.0"><bpmn:process id="Process_021yyke" isExecutable="false"><bpmn:startEvent id="StartEvent_12bhofd" /></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_021yyke"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_12bhofd"><dc:Bounds x="156" y="81" width="36" height="36" /></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>';
