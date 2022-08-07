import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { readCate, updateCate } from '../../../api/category';


const CategoryEdit: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await readCate(id);
      form.setFieldsValue(data);
      // console.log(data);
    };
    getCategory();
  }, []);
    const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const category = {
      id: id,
      name: values.name
    }
    console.log('Success:', values);
    try {
        const {data} = await updateCate(category);
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
      form={form}
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

export default CategoryEdit;