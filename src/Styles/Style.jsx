import styled from "styled-components";

// pc => max-width:950px;
// ipadpro => max-width:1024px;
// ipad => max-width:768px;
// iphon => 896px
// メディアクエリなし 【スマートフォン縦】
// @media screen and (min-width: 481px) { } 【スマートフォン横】
// @media screen and (min-width: 769px) { } 【タブレット縦以上】
// また、最大を示す「max-width」でななく、最少の「min-width」を指定する
// さらには、最小と最大を厳密に指定する書き方もある
// @media screen and (min-width: 481px) and (max-width: 768px) { }

export const Mian = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;g
`;
export const Middle = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 100vh;
  background: #f5f5f5;
  padding: 40px 0;
  @media (min-width: 481px) {
    width: 90%;
  }
`;
export const Pagetitle = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.6;
  color: #707070;
  font-weight: bold;
  border-left: solid #42c38b 5px;
  padding-left: 10px;
`;
export const SubPagetitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.6;
  color: #42c38b;
  font-weight: bold;
`;
export const FormFlex = styled.form`
  width: 100%;
  display: inline-grid;
`;
