import React, { useEffect, useState } from 'react';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoComplete as AutoCompleteAnt, Input } from 'antd';

import { getAllCate } from '../../api/category'
import { ProductType } from '../../types/product';



const AutoComplete: React.FC = () => {
    const [dataTable, setDataTable] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllCate();
      setDataTable(data);
    };
    fetchData();
  }, []);
  const options = dataTable.map((item) => {
    return {
      value: item.name,
    };
  });
  return (
    <AutoCompleteAnt
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{ width: 500 }}
      options={options}
    >
      <Input size="large" className="rounded-md" placeholder="Nhập tên sản phẩm cần tìm kiếm" />
    </AutoCompleteAnt>
  );
};


export default AutoComplete;