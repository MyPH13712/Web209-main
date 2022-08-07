import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Col,
  Row,
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Image,
} from "antd";
import { parsePath, useNavigate, useParams } from "react-router-dom";

import { upload } from "../../../api/images";
import { PlusCircleOutlined } from "@ant-design/icons";
import { CategoryType } from "../../../types/category";
import { read, update } from "../../../api/product";
import { getAllCate } from "../../../api/category";


const { TextArea } = Input;
const { Option } = Select;
const ProductEdit: React.FC = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [base64Image, setBase64Image] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState("");
  // categories
  const [cate, setCate] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCate = async () => {
      const { data } = await getAllCate();
      setCate(data);
    };
    getCate();
  }, []);
  // console.log(cate);
  // Products
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      form.setFieldsValue(data);
      // console.log(data);
    };
    getProduct();
  }, []);
  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    // previewFile(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result as string);
    };
  };

  const uploadImage = async (base64Image: string) => {
    try {
      const res = await upload(base64Image);
      const data = res.data;
      // console.log(data);
      setUploadedImage(data.url);
    } catch (err) {
      console.log(err);
    }
  };
  const onFinish = async (values: any) => {
    const product = {
      id: id,
      name: values.name,
      originalPrice: values.originalPrice,
      saleOffPrice: values.saleOffPrice,
      feature: values.feature,
      description: values.description,
      shortDesc: values.shortDesc,
      image: values.image,
      categories: values.categories
    }
    if (values.img) {
      product.image = uploadedImage
    }
    // console.log("Success:", values);
    try {
      const data = await update(product);
      message.success("Cập nhật thành công");
      navigate(-1);

    } catch (err) {
      message.error("Có lỗi xảy ra");
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        // name="product"
        form={form}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        labelCol={{ span: 24 }}
      >
        <Breadcrumb>
          <Typography.Title level={2} style={{ margin: 0 }}>
            Chỉnh sửa
          </Typography.Title>
        </Breadcrumb>
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item valuePropName="src" name="image">
              <Image />
            </Form.Item>
            <Container>
              <Form.Item name="img">
                <UploadWrapper>
                  {uploadedImage ? (
                    <ImagePreview style={{}} src={uploadedImage} alt="Image" />
                  ) : (
                    <UploadIcon>
                      <PlusCircleOutlined style={{ fontSize: 30 }} />
                      <input
                        style={{ display: "none" }}
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        name="image"
                        onChange={handleChangeImage}
                      />
                    </UploadIcon>
                  )}
                </UploadWrapper>
              </Form.Item>
              <Form.Item
                name="shortDesc"
                labelCol={{ span: 24 }}
                label="Mô tả ngắn"
                rules={[{ required: true, message: "Mô tả ngắn" }]}
              >
                <TextArea name="shortDesc" />
              </Form.Item>
            </Container>
          </Col>
          <Col span={14}>
            <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên sản phẩm"
              rules={[
                { required: true, message: "Tên sản phẩm không được trống" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="originalPrice"
                  label="Giá gốc"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Giá sản phẩm không được trống",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá khuyến mãi"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Giá sản phẩm không được trống",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phân loại"
                  name="categories"
                  rules={[{ required: true }]}
                >
                  <Select
                    style={{ width: "100%" }}
                    size="large"
                  >
                    <option>Chon danh mục</option>
                    {cate &&
                      cate.map((item) => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="feature"
              labelCol={{ span: 24 }}
              label="Đặc điểm nổi bật"
              rules={[
                {
                  required: true,
                  message: "Đặc điểm sản phẩm không được bỏ trống",
                },
              ]}
            >
              <TextArea name="feature" />
            </Form.Item>
            <Form.Item
              name="description"
              labelCol={{ span: 24 }}
              label="Mô tả sản phẩm"
              rules={[
                {
                  required: true,
                  message: "Mô tả sản phẩm không được bỏ trống",
                },
              ]}
            >
              <TextArea name="description" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
               Cập nhật sản phẩm
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Label = styled.div`
  font-size: 13px;
`;
const Container = styled.div``;

const Label2 = styled.div`
  font-weight: bold;
  font-size: 13px;
  text-align: left;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;

const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
`;
export default ProductEdit;