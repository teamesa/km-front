import Image from 'next/image';

import apple from 'assets/mypage/apple.png';
import logo from 'assets/mypage/logo.png';
import naver from 'assets/mypage/naver.png';
import { Box } from 'components/Atoms';

interface MyPageImageAssetProps {
  type: 'apple' | 'logo' | 'naver';
  marginBottom?: number;
  width: number | string;
  height: number | string;
}

export function MyPageImageAsset({
  type,
  marginBottom,
  width,
  height,
}: MyPageImageAssetProps) {
  return (
    <Box marginBottom={marginBottom ?? 0} width={width} height={height}>
      <Image
        objectFit="contain"
        src={type === 'apple' ? apple : type === 'naver' ? naver : logo}
        alt=""
      ></Image>
    </Box>
  );
}
