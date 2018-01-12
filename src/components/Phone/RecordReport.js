import React from 'react';
import { Row, Col } from 'antd';
import Report from '../../components/Phone/Report';
import moment from 'moment'; 

const Eck = () => (
  <div>
   <Report code="Xs" 
      scroll={{x:800}}
      drillLevel={['P','C']}
      defaultParams={{
          branch: '610000',
          begin_date: '2017-07-01',
          end_date: moment().format('YYYY-MM-DD'),
      }}/>
	</div>
)

export default Eck;