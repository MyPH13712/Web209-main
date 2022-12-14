import { Table, Space, Switch, Image, Button, message, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
  SearchOutlined
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleAdmin from "../../../components/TitleAdmin";
import styled from "styled-components";
import { remove, list, update, updateStt } from "../../../api/product";
import { getAllCate } from "../../../api/category";
import { ProductType } from "../../../types/product";
import { CategoryType } from "../../../types/category";
import type { ColumnsType, TableProps } from 'antd/es/table';
interface DataType {
  status: number;
  id:number;
  name: string;
  originalPrice: number;
  saleOffPrice: number;
  image: string;
  feature: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
interface FilterDropdownProps {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: string[]) => void;
  selectedKeys: string[];
  confirm: (closeDropdown?: any) => void;
  clearFilters: () => void;
}
const ProductAdminPage: React.FC = () => {
  const [dataTable, setDataTable] = useState<ProductType[]>([]);
  const [cate, setCate] = useState<CategoryType[]>([]);


  // const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await list();
      setDataTable(data);
    };
    const fetchCate = async () => {
      const { data } = await getAllCate();
      setCate(data);
    };
    fetchCate();
    fetchData();
  }, []);
  let filters = cate.map((item) => {
    return {
      text: item.name,
      value: item.id
    }
  });
  const data = dataTable.map((item, index) => {
    return {
      key: index + 1,
      _id: item.id,
      name: item.name,
      originalPrice: item.originalPrice,
      saleOffPrice: item.saleOffPrice,
      image: item.image,
      feature: item.feature,
      category: item.category,
    };
  });
  const columns: any = [
    {
      title: "???nh",
      key: "image",
      dataIndex: "image",
      render: (text: string) => <Image width={100} src={text} />,
    },
    {
      title: "T??n s???n ph???m",
      dataIndex: "name",
      key: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }: FilterDropdownProps) => {
        return (
          <div style={{ padding: "10px" }}>
            <Input
              autoFocus
              placeholder="Nh???p t??n s???n ph???m"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
            ></Input>
            <Space style={{ marginTop: "20px" }}>
              <Button
                onClick={() => {
                  confirm();
                }}
                type="primary"
              >
                Search
              </Button>

              <Button
                onClick={() => {
                  clearFilters();
                }}
                type="dashed"
              >
                Reset
              </Button>
            </Space>
          </div>
        );
      },
      onFilter: (value: any, record: any) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
    },
    {
      title: "Gi?? ni??m y???t (?????ng)",
      dataIndex: "originalPrice",
      key: "originalPrice",
    },
    {
      title: "Danh m???c",
      dataIndex: "category",
      key: "category",
      filters: filters,
      onFilter: (value: string, record: any) => record.category.indexOf(value) === 0,
      render: (text: number) => {
        let name;
        cate.map((item) => {
          if (item.id == text) {
            name = item.name;
          }
        });
        return <span>{name}</span>;
      },
    },
    {
      title: "???n/Hi???n",
      key: "status",
      dataIndex: "status",
      render: (text: number, record: any) => {
        return (
          <Switch
            defaultChecked={text == 0 ? true : false}
            onChange={() => {
              onChangeStt(text == 0 ? false : true, record._id);
            }}
          />
        );
      },
    },
    {
      title: "Thao t??c",
      key: "action",
      dataIndex: "_id",
      render: (text: string) => (
        <Space size="middle">
          <Link to={`/admin/product/edit/${text}`}>
            <EditOutlined />
          </Link>
          <Button
            style={{ border: "none" }}
            onClick={async () => {
              const confirm = window.confirm(
                "B???n c?? ch???c ch???n mu???n x??a kh??ng?"
              );
              if (confirm) {
                const { data } = await remove(text);
                data &&
                  setDataTable(dataTable.filter((item) => item.id !== text));
                message.success("X??a th??nh c??ng")
              }

            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  const onChangeStt = async (checked: boolean, id: number) => {
    console.log(id);
    const status = checked ? 0 : 1;
    const { data } = await updateStt({ status: status }, id);
    setDataTable(dataTable.map((item) => (item.id == id ? data : item)));
    message.success("?????i tr???ng th??i th??nh c??ng");
  };
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Top>
        <TitleAdmin name={"S???n ph???m"} />
        <Link className="text-4xl" to="/admin/product/add">
          <PlusSquareOutlined />
        </Link>
      </Top>
      <Table
        /*rowSelection={rowSelection}*/ columns={columns}
        dataSource={data}
      />
    </div>
  );
};

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default ProductAdminPage;