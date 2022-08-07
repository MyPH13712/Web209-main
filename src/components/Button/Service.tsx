import React from "react";
import styled from 'styled-components'

type Props = {
    image: any,
    title1: string,
}

const ServiceBtn = ({ image, title1 }: Props) => {
    return (
        <Container>
            <Image src={image} />
            <Content>
                <Title>{title1}</Title>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: transparent;
`
const Image = styled.img`
    width: 25px;
    height: auto;
    margin: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const Content = styled.div`
    
`
const Title = styled.div`
    color: white;
    font-size: 12px;
`

export default ServiceBtn