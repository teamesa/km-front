import { useState } from 'react';

import NavWish from 'assets/common/bottomTabNavigator/NavWish';
import { Tag, Span, Button } from 'components/Atoms';
import theme from 'styles/theme';

export default function ArchiveHeart({
  heart,
  heartCount,
}: {
  heart: { heartClicked: boolean; link: string };
  heartCount: number;
}) {
  const [heartState, setHeartState] = useState(heartCount);
  const [click, setClick] = useState(heart.heartClicked);

  const setToPick = () => {
    // TODO
  };

  return (
    <Button onClick={setToPick}>
      <Tag
        display="flex !important"
        alignItems="center"
        padding="0px 10px !important"
        margin="0px !important"
        color={click ? theme.colors.lime : theme.colors.black}
        background={click ? theme.colors.black : theme.colors.white}
        boxShadow="0 0 8px 0 rgba(0, 0, 0, 0.08)"
      >
        <NavWish
          fill={click ? theme.colors.lime : theme.colors.white}
          width="13px"
          height="12px"
          viewBox="3 4 23 22"
        />
        <Span marginLeft="4px">{heartState}</Span>
      </Tag>
    </Button>
  );
}
