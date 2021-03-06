import React from 'react';
// import Button from './components/Button/button';
import './styles/index.scss';
import Table from './components/Table/table';

function App() {
  let ds = [
    { col1: '王家', col2: 13, col3: 180 },
    { col1: '王家话', col2: 10, col3: 168 },
    { col1: '王家话', col2: 15, col3: 175 },
    { col1: '王家城', col2: 19, col3: 165 },
    { col1: '王嘉诚', col2: 12, col3: 180 },
    { col1: '湖人', col2: 22, col3: 180 },
    { col1: '王家话', col2: 15, col3: 172 },
    { col1: 'amy', col2: 15, col3: 172 },
    { col1: '湖人', col2: 22, col3: 185 },
    { col1: 'amy', col2: 23, col3: 190 },
  ];
  // 一万行数据js需要303ms的计算时间
  // 4万行数据需要1125ms的计算时间

  for (let i = 0; i < 12; i++) {
    ds.push(...ds);
  }

  return (
    <div
      style={{
        margin: '20px 20px',
        position: 'relative',
        backgroundColor: 'white',
      }}
    >
      <Table
        border
        rowKey="col1"
        rowBorder
        // loading={true}
        rowSelection={{
          type: 'checkbox',
          rowClickSelect: true,
        }}
        virtualScroll={{
          enable: true,
          tableHeight: 700,
        }}
        columns={[
          {
            key: 'col1',
            width: 150,
            title: '列1',
            align: 'left',
            render: record => {
              return '测试render:' + record.col1;
            },
          },
          {
            key: 'col2',
            width: 150,
            title: '列2',
            align: 'center',
          },
          {
            key: 'col3',
            width: 150,
            title: '列3',
            align: 'right',
          },
        ]}
        dataSource={ds}
      />
    </div>
  );
}

export default App;
