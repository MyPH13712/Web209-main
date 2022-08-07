import { Button, Checkbox, Form, Input, message } from 'antd';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { addCate } from '../../../api/category';

const CategoryAdd: React.FC = () => {
    const navigate = useNavigate();
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
        const data = await addCate(values);
        message.success("Tạo mới thành công");
        navigate(-1);
      } catch (err) {
        message.error("Có lỗi xảy ra");
      }
  };
  

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
     <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên danh mục"
              rules={[
                { required: true, message: "Tên sản phẩm không được trống" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

      <Form.Item wrapperCol={{ span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryAdd;