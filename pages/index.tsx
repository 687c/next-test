import Image from 'next/image'
import styled from 'styled-components';

import { ClockSVGIcon, EthereumSVGIcon, here } from '../utils/icons';
import avatar from '../utils/image-avatar.png';

const Wrapper = styled.div`
  /* border: 2px solid black; */
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2px;
  text-align: center;
`;

const CardWrapper = styled.div`
  border: 1px solid black;
  width: 300px;
`

const ImageWrapper = styled.div``;

const ContentWrapper = styled.div`
  margin: 0 8px;
  text-align: left;
`;

const Heading = styled.h3`
  margin: 1px 0;
`

const Description = styled.p`
  margin: 10px 0;
`;

const PriceTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreatorContainer = styled.div`
  display: flex;
  margin-bottom: 18px; 
`;

const AvatarContainer = styled.div`
  margin-right: 12px;
`;




export default function Home() {
  return (
    <Wrapper>
      <CardWrapper>

        <ImageWrapper>
          <Image
            style={{
              margin: "8px 0"
            }}
            src="https://i.seadn.io/gae/wfTzs4q-MoAkzsjcLwBHbG5CoaJL5lpIapph99lhGYnJh2AmZTwDAAfXZkx2tpatL0n4LpGiti87R8GeB6fqW5quu047Fj8nG8aU?auto=format&w=2048"
            alt="Card Picture"
            width={280}
            height={300}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Heading>
            Equilibrium #3429
          </Heading>
          <Description>
            Our equilibrium collection promotes balance and calm.
          </Description>
          <PriceTimeContainer>
            <div style={{ display: "flex" }}>
              <div>
                <EthereumSVGIcon />
              </div>
              <div style={{ marginLeft: "8px" }}>
                0.14 ETH
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <ClockSVGIcon />
              </div>
              <div style={{ marginLeft: "8px" }}>
                3 days left
              </div>
            </div>
          </PriceTimeContainer>
          <hr />
          <CreatorContainer>
            <AvatarContainer>
              <Image
                src={avatar}
                alt="avatar of creator"
                height={40}
                width={40}
              />
            </AvatarContainer>

            <div style={{margin: "auto 0"}}>
              Creation of Jules Wyvern
            </div>
          </CreatorContainer>
        </ContentWrapper>

      </CardWrapper>
    </Wrapper>
  )
}
