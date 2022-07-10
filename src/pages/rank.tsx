import { TabPanel } from '@chakra-ui/react';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import TopItemWrapper from '../components/Rank/TopItemWrapper';
import BottomItemWrapper from '../components/Rank/BottomItemWrapper';
import { DUMMY1, DUMMY2, DUMMY3 } from '../constants/rank';
import TabsWrapper from '../components/Rank/TabsWrapper';
import { ELEMENT_COLOR } from '../styles/colors';
const DUMMYTAP = [{ name: 'dyno' }, { name: 'memory' }, { name: 'snake' }];
const Rank = () => {
  const [data, setData] = useState([DUMMY1, DUMMY2, DUMMY3]);
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };
  return (
    <Wrapper>
      <TabsWrapper tabIndex={tabIndex} handleTabsChange={handleTabsChange} data={DUMMYTAP}>
        {data.map((item, idx) => (
          <TabPanel key={idx} marginX={'auto'} maxWidth={'768px'}>
            <TopItemWrapper data={item.slice(0, 3)} idx={idx} />
            <BottomItemWrapper data={item.slice(3)} idx={idx} />
          </TabPanel>
        ))}
      </TabsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Rank;
