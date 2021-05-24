import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { PageHeader, Descriptions } from "antd";
// import Chart from "./Chart";
import Chart from "./Chart";

const Revenue = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Doanh thu"
        subTitle="Thống kê doanh thu từ người đăng ký học"
      ></PageHeader>
      <Chart />
    </div>
  );
};

export default Revenue;
// <Descriptions size="small" column={3}>
//           <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
//           <Descriptions.Item label="Association">
//             <a>421421</a>
//           </Descriptions.Item>
//           <Descriptions.Item label="Creation Time">
//             2017-01-10
//           </Descriptions.Item>
//           <Descriptions.Item label="Effective Time">
//             2017-10-10
//           </Descriptions.Item>
//           <Descriptions.Item label="Remarks">
//             Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
//           </Descriptions.Item>
//         </Descriptions>
