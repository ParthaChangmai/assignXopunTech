import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { columns } from './utils/data.jsx';

import tableDatas from '../data/tabledata.json';

const ViewTable = () => {
	return (
		<div>
			<Table
				pagination={false}
				columns={columns}
				dataSource={tableDatas}
				bordered
				size="middle"
			/>
		</div>
	);
};

export default ViewTable;
