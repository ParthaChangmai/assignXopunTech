import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const columns = [
	{
		title: 'Package Name',
		dataIndex: 'packageName',
		key: 'packageName',
	},

	{
		title: 'Operator',
		dataIndex: 'providerOperatorCommissionInfos',
		key: 'providerOperatorCommissionInfos',
		render: (operatorInfo) => {
			return operatorInfo.map(({ operatorCategory, operatorName }) => (
				<div>
					<p>{operatorName}</p>
					<p>{`(${operatorCategory})`}</p>
				</div>
			));
		},
		// onCell: (operatorInfo) => {
		// 	if (operatorInfo.length > 1) {
		// 		return {
		// 			// colSpan: 2,
		// 			rowSpan: 2,
		// 		};
		// 	}
		// },
	},

	{
		title: 'API Slab',
		dataIndex: 'providerOperatorCommissionInfos',
		key: 'providerOperatorCommissionInfos',
		render: (operatorInfo) => {
			return operatorInfo.map(({ apiSlabs }) =>
				apiSlabs.map(({ min, max }) => <p>{`[${min}-${max}]`}</p>)
			);
		},
		onCell: (operatorInfo) => {
			return {
				colSpan: operatorInfo.length,
				rowSpan: 1,
				style: {
					textAlign: 'center',
				},
			};
		},
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
							<p>{`${commission} ${amountType === 'FIXED' ? '₹' : '%'}`}</p>
						))
					);
				},
				onCell: () => {
					return {
						style: {
							textAlign: 'center',
							borderRight: '1px solid #e8e8e8',
						},
					};
				},
			},
			{
				title: 'C/S',
				dataIndex: 'providerOperatorCommissionInfos',
				key: 'providerOperatorCommissionInfos',
				render: (operatorInfo) => {
					return operatorInfo.map(({ apiSlabs }) =>
						apiSlabs.map(({ commissionType }) => <p>{commissionType[0]}</p>)
					);
				},
				onCell: () => {
					return {
						style: {
							textAlign: 'center',
						},
					};
				},
			},
		],
	},
	{
		title: 'GST',
		dataIndex: 'providerOperatorCommissionInfos',
		key: 'providerOperatorCommissionInfos',
		render: (operatorInfo) => {
			return operatorInfo.map(({ apiSlabs }) =>
				apiSlabs.map(({ gst }) => <p>{gst}</p>)
			);
		},
	},
	{
		title: 'TDS',
		dataIndex: 'providerOperatorCommissionInfos',
		key: 'providerOperatorCommissionInfos',
		render: (operatorInfo) => {
			return operatorInfo.map(({ apiSlabs }) =>
				apiSlabs.map(({ tds }) => <p>{tds}</p>)
			);
		},
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
		onCell: () => {
			return {
				style: {
					textAlign: 'center',
				},
			};
		},
	},
];
