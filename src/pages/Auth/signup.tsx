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
} from "antd";
import { useNavigate } from "react-router-dom";
import Img2 from "../../assets/images/logo.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Faceboook from "../../assets/images/icon-face.png";
import Google from "../../assets/images/icon-google.png";
import { signup } from "../../api/auth"
import { authenticate } from "../../utils/localStorage";

const SignupPage: React.FC = () => {
	const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const {data: user} = await signup(values);
      message.success("Đăng ký thành công");
      navigate('/signin')
    } catch (err) {
      message.error("Có lỗi xảy ra");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

	return (
		<div>
			<Header />
			<Container2>
				<Form
					initialValues={{}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					layout="vertical"
				>
					<Row>
						<Col>
							<Form.Item
								name="name"
								labelCol={{ span: 24 }}
								label="Email"
								rules={[{ required: true, message: "Email không được trống" }]}
							>
								<Input size="large" style={{ width: "400px" }} />
							</Form.Item>
							<Form.Item
								name="sdt"
								labelCol={{ span: 24 }}
								label="Số điện thoại"
								rules={[{ required: true, message: "Số điện thoại không được trống" }]}
							>
								<Input size="large" style={{ width: "400px" }} />
							</Form.Item>
							<Form.Item
								name="password"
								labelCol={{ span: 24 }}
								label="Mật khẩu"
								rules={[
									{ required: true, message: "Mật khẩu không được trống" },
								]}
							>
								<Input size="large" />
							</Form.Item>
							<Form.Item>
								<Button type="primary" danger htmlType="submit" style={{ width: "400px" }} >
									Đăng ký
								</Button>
							</Form.Item>
							<ContainerT>
								<span>Hoặc đăng nhập bằng</span>
								<Facebook>
									<Items2>
										<Items src={Faceboook} />
									</Items2>
									<div>
										<Items src={Google} />
									</div>
								</Facebook>
							</ContainerT>
						</Col>
					</Row>
				</Form>
				<div>
					<UploadWrapper>
						<Img src={Img2} />
					</UploadWrapper>
				</div>
			</Container2>
			<Footer />
		</div>
	);
};

const ContainerT = styled.div`
  /* width: 980px;
  margin:  auto; */
  text-align: center;
`;
const Items2 = styled.div`
  margin-right: 20px;
`;

const Facebook = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 15px;
`;

const Items = styled.img``;
const Container2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 75px;
  background-color: #f8f8f8f8;
  margin-left: 75px;
`;
const Img = styled.img`
  padding-top: 70px;
  padding-bottom: 70px;
`;
const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 250px;
  height: 50%;
`;
export default SignupPage;