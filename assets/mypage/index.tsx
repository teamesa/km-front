import Image from 'next/image';

import apple from 'assets/mypage/apple.png';
import logo from 'assets/mypage/logo.svg';
import naver from 'assets/mypage/naver.png';
import { Profile } from 'assets/mypage/Profile';
import { Photo } from 'assets/mypage/Photo';
import { Box } from 'components/Atoms';
import { Pointer } from './Pointer';
import { Folder } from './Folder';

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
export { MyPageImageAsset, Profile, Photo, Pointer, Folder };
