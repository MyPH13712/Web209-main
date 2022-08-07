import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import Pro1 from "../../assets/images/Pro1.png";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <Container>
      <NamePro>
        
        <h2>Samsung Galaxy A73 (5G) 256GB</h2>
      </NamePro>
      <Main>
       
        <div>
          <div>
            <Img1 src={Pro1} />
          </div>
        </div>
       
        <div>
          <Price>
            <OriginalPrice>11.690.000 ₫</OriginalPrice>
            <SaleOff>12.990.000 ₫</SaleOff>
          </Price>
          <ShortDesc>
            Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng
            cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73,
            Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm
            giác sang trọng và tinh tế.
          </ShortDesc>
          <AllBtn>
            <div>
              <Button style={btn} shape="round" type="primary" danger>
                Mua ngay
              </Button>
            </div>

            <CartItems>
              <div>
                <ShoppingCartOutlined style={{ width: "50px" }} />
              </div>
              <div>Thêm vào giỏ hàng</div>
            </CartItems>
          </AllBtn>
        </div>
      </Main>

      {/* đặc điểm nổi bật */}
      <div>
        <Color>
          <Item>
            <Name>Đặc điểm nổi bật</Name>
            <div>
              <SpanN>
                Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
                cảm biến chính lên đến 108 MP
              </SpanN>{" "}
              <br />
              <SpanN>
                Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch,
                độ phân giải Full HD+, 120Hz mượt mà
              </SpanN>{" "}
              <br />
              <SpanN>
                Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon
                778G, RAM lên đến 8 GB
              </SpanN>{" "}
              <br />
              <SpanN>
                Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh,
                hỗ trợ sạc nhanh 25 W
              </SpanN>{" "}
              <br />
            </div>
          </Item>
        </Color>
        <br />
      </div>
      {/* docs */}
      <LongDesc>
      <div>
        Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là
        fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra
        mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong
        đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ
        trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua
        không? Tìm hiểu ngay nhé!
      </div>
      <div >
        <span>
          Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
        </span>
        <div>
          Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp
          đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc
          biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc
        </div>
      </div>
      <div >
        <span>Thiết kế sang trọng, màn hình Super AMOLED</span>
        <p>
          Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm
          đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một
          chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
          Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng
          mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo
          chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.Kích thước và
          trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không
          chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.
        </p>
      </div>
      </LongDesc>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const NamePro = styled.div`
float: left;
margin-bottom: 5px;
`
const Main = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 15px;
  margin-top: 20px;
`;

const Img1 = styled.img`
  width: 350px;
  height: 350px;
`;
const Price = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const OriginalPrice = styled.div`
  color: red;
  font-size: 16px;
`;
const SaleOff = styled.div`
  font-size: 12px;
  margin-left: 10px;
  margin-top: 6px;
`;
const ShortDesc = styled.div`
font-size: 15px;
float: left;
`
const btn = {
  width: "220px",
  height: "40px",
}
const AllBtn = styled.div`
  display: flex;
  margin-top: 200px;
`;
const CartItems = styled.div`
  display: flex;
`;
const Color = styled.div`
background: #F2F2F2;
height: 170px;
border-radius: 5px;
`
const Item = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 0;
`;
const Name = styled.div`

  text-align: center;
  color: #D70018;
  font-size: 18px;
`;
const SpanN = styled.span`

  padding-left: 20px;
  float: left;
  font-size: 14px;
  padding-bottom: 10px;

`;
const LongDesc = styled.div`

`
export default ProductDetail;