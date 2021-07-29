import React from "react";

import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px #dedede solid;
`;


const NewsHeader = ({title}) => {
  return <> <HeaderBlock>{title}</HeaderBlock>; </>
};

export default NewsHeader;
