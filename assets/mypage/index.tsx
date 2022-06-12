import Image from 'next/image';

import apple from 'assets/mypage/apple.png';
import logo from 'assets/mypage/logo.png';
import naver from 'assets/mypage/naver.png';
import { Profile } from 'assets/mypage/Profile';
import { Box } from 'components/Atoms';

interface MyPageImageAssetProps {
  type: 'apple' | 'logo' | 'naver';
  marginBottom?: number | string;
  width: number | string;
  height: number | string;
}

const MyPageImageAsset = ({
  type,
  marginBottom,
  width,
  height,
}: MyPageImageAssetProps) => {
  return (
    <Box marginBottom={marginBottom ?? 0} width={width} height={height}>
      <Image
        objectFit="contain"
        src={type === 'apple' ? apple : type === 'naver' ? naver : logo}
        alt=""
      ></Image>
    </Box>
  );
};
export { MyPageImageAsset, Profile };
