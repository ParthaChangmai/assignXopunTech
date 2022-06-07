import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const columns = [
	{
		title: 'Package Name',
		dataIndex: 'packageName',
		key: 'packageName',
		align: 'center',
	},

	{
		title: 'Operator',
		dataIndex: 'providerOperatorCommissionInfos',
		key: 'providerOperatorCommissionInfos',
		render: (operatorInfo) => {
			return operatorInfo.map(({ operatorCategory, operatorName }) => (
				<div className="row">
					<p>{operatorName}</p>
					<p>{`(${operatorCategory})`}</p>
				</div>
			));
		},
		align: 'center',
	},

	{
		title: 'API Slab',
		dataIndex: 'providerOperatorCommissionInfos',
		key: 'providerOperatorCommissionInfos',
		render: (operatorInfo) => {
			return operatorInfo.map(({ apiSlabs }) =>
				apiSlabs.map(({ min, max }) => (
					<div className="row">{`[${min}-${max}]`}</div>
				))
			);
		},
		align: 'center',
	},
	{
		title: 'Commission',
		children: [
			{
				title: 'Amount',
				dataIndex: 'providerOperatorCommissionInfos',
				key: 'providerOperatorCommissionInfos',
				render: (operatorInfo) => {
					return operatorInfo.map(({ apiSlabs }) =>
						apiSlabs.map(({ commission, amountType }) => (
							<div className="row">
								{commission}{' '}
								{(amountType === 'FIXED' && '₹') ||
									(amountType === 'PERCENT' && '%')}
							</div>
						))
					);
				},
				align: 'center',
			},
			{
				title: 'C/S',
				dataIndex: 'providerOperatorCommissionInfos',
				key: 'providerOperatorCommissionInfos',
				render: (operatorInfo) => {
					return operatorInfo.map(({ apiSlabs }) =>
						apiSlabs.map(({ commissionType }) => (
							<div className="row">{commissionType[0]}</div>
						))
					);
				},
				align: 'center',
			},
		],
	},
	{
		title: 'GST',
		dataIndex: 'providerOperatorCommissionInfos',
		key: 'providerOperatorCommissionInfos',
		render: (operatorInfo) => {
			return operatorInfo.map(({ apiSlabs }) =>
				apiSlabs.map(({ gst }) => <div className="row">{gst}</div>)
			);
		},
		align: 'center',
	},
	{
		title: 'TDS',
		dataIndex: 'providerOperatorCommissionInfos',
		key: 'providerOperatorCommissionInfos',
		render: (operatorInfo) => {
			return operatorInfo.map(({ apiSlabs }) =>
				apiSlabs.map(({ tds }) => <div className="row">{tds}</div>)
			);
		},
		align: 'center',
	},
	{
		title: 'Actions',
		dataIndex: 'packageName',
		key: 'packageName',
		render: (packageName) => (
			<div>
				<EditOutlined />
				<DeleteOutlined style={{ marginLeft: 15 }} />
			</div>
		),
		align: 'center',
	},
];
