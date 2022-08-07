import Image from 'next/image';

import { Folder } from './Folder';
import { Pointer } from './Pointer';

import apple from 'assets/mypage/apple.png';
import { CloseBtn } from 'assets/mypage/CloseBtn';
import logo from 'assets/mypage/logo.png';
import naver from 'assets/mypage/naver.png';
import { Photo } from 'assets/mypage/Photo';
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
export { MyPageImageAsset, Profile, Photo, Pointer, Folder, CloseBtn };
