import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Switch, Space, message } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  SearchOutlined,
  PlusOutlined,
  FormOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
const { Paragraph } = Typography;
import type { ColumnsType } from "antd/es/table";
import { CategoryType } from "../../../types/category";
import { getAllCate, removeCate } from "../../../api/category";


type ManagerCategory = {
  data: CategoryType[];
  onRemove: (id: number) => void;
};


const handleChangeRouter = (el: any) => {
  console.log("element: ", el);
};

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const CategoryAdminPage = () => {
  const columns: ColumnsType<CategoryType> = [

    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "id",
      render: (text:string) => {
        return (
          <Space size="middle">
              <Link to={`/admin/category/edit/${text}`}>
                <FormOutlined />
              </Link>
              <Button
            style={{ border: "none" }}
            onClick={async () => {
              const confirm = window.confirm(
                "Bạn có chắc chắn muốn xóa không?"
              );
              if (confirm) {
                const { data } = await removeCate(text);
              data &&
                setDataTable(dataTable.filter((item) => item.id !== text));
                message.success("Xóa thành công")
              }
              
            }}
          >
            <DeleteOutlined />
          </Button>
          </Space>
        );
      },
    },
    {
      title: "Xóa",
      key: "hidden",
      dataIndex: "id",
      render: (text: number) => (
        <Space size="middle">
          <Button onClick={async () => {
            const confirm=window.confirm("Bạn có chắc chắn muốn xóa không?");
            if(confirm){
              const { data } = await removeCate(text);
              data &&
                setDataTable(dataTable.filter((item) =>
                  item.id !== text
                ))
                message.success("Xóa thành công")
            }

            console.log(text);

          }}>
            <IconsItems2>
              <DeleteOutlined />
            </IconsItems2>
          </Button>
        </Space>
      ),
    },
  ];
  const [dataTable, setDataTable] = useState([]);
  console.log("dataTable", dataTable);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCate();
        setDataTable(data.data);
      } catch (err) { }
    };
    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Danh mục
        </Typography.Title>
        <Link to="/admin/category/add">
        <Button type="default" shape="default" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns} dataSource={dataTable} />
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px
`;
const IconsItems = styled.div`
  color: #00b0d7;
`;
const IconsItems2 = styled.button`
  color: #00b0d7;
  border: none;
  background-color:#fff;
`;

export default CategoryAdminPage;