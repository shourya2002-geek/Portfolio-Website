import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  padding: 1rem;
  border: none;
`;

export const ImgContainer = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
  font-size: 3rem;
`;

export const Slogan = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.7rem;
  word-spacing: 0.5rem;
`;



