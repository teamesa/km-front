import { css } from '@emotion/react';

import Paragraph from 'components/Atoms/Paragraph';
import SmallHeader from 'components/Atoms/SmallHeader';

export default function PrivacyTerms() {
  return (
    <article>
      <SmallHeader>제1조(목적)</SmallHeader>
      <Paragraph>
        이 약관은 킬로미터(이하 “회사”) 가 온라인으로 제공하는 킬로미터
        서비스(이하 “서비스”)를 이용함에 있어 회사와 회원간의 권리,의무 및
        책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
      </Paragraph>
      <SmallHeader>제2조(정의)</SmallHeader>
      <Paragraph>
        <ol
          css={css`
            list-style-type: decimal;
            padding-left: 20px;
          `}
        >
          <li>
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            <ul
              css={css`
                list-style-type: square;
                padding-left: 4px;
              `}
            >
              <li>
                &quot;회사&quot;라 함은 서비스를 제공하는 주체를 말합니다.
              </li>
              <li>
                “서비스”란 회사가 운영하는 모바일 어플리케이션 및 모바일 웹을
                통해, 회원과 문화생활 컨텐츠 등을 제공하는 서비스를 의미하며, 그
                구체적인 내용은 이 약관에서 정하는 바에따라 별도의 운영정책으로
                정합니다.
              </li>
              <li>
                &quot;회원&quot;이라 함은 이 약관에 동의하고 서비스에 가입하여
                판매자가 제공하는 컨텐츠를 이용하고 아카이브(이하 “게시물”)를
                작성하려는 자를 의미합니다.
              </li>
              <li>
                &quot;비회원&quot;이라 함은 &quot;회원&quot;이 아니면서
                &quot;회사&quot;가 제공하는 서비스를 이용하는 자를 말합니다.
              </li>
              <li>
                &quot;콘텐츠&quot;라 함은 정보통신망이용촉진 및 정보보호 등에
                관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서
                사용되는 부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료
                또는 정보로서, 그 보존 및 이용에 있어서 효용을 높일 수 있도록
                전자적 형태로 제작 또는 처리된 것을 말합니다.
              </li>
              <li>
                “게시물”이란 회원 또는 제3자가 서비스와 관련하여 모바일
                어플리게이션 및 모바일 웹을 통해 서비스에 업로드 또는 전송하는
                대화 텍스트를 포함한 커뮤니케이션, 이미지, 부호, 문자, 음성,
                음향, 사진, 동영상 등의 모든 자료와 정보 및 각종 파일과 링크
                등을 의미합니다.{' '}
              </li>
            </ul>
          </li>
        </ol>
        <ol>
          <li>
            1항에서 정의되지 않은 약관 내 용어의 의미는 일반적인 이용관행에
            의합니다.
          </li>
        </ol>
      </Paragraph>

      <SmallHeader>제 3조(약관 등의 명시와 설명 및 개정)</SmallHeader>
      <Paragraph>
        <ol
          css={css`
            list-style-type: decimal;
            padding-left: 20px;
          `}
        >
          <li>
            회사는 회원이 원할 때 언제든지 이 약관을 열람할 수 있도록 모바일
            어플리케이션 및 모바일 웹을 통해 서비스 내에 게시합니다.
          </li>
          <li>
            비회원이 서비스를 이용할 경우, 이 약관에 동의한 것으로 간주합니다.
          </li>
          <li>
            회사는 회원가입 시 약관 동의를 받지 않으며, 회원이 이에 동의하지
            않은 경우 메일을 통해 이용계약 해지 및 회원탈퇴를 통보함으로써 거부
            의사를 표현할 수 있습니다. 단 30일 내에 거부 의사 표시를 하지 않을
            경우 약관에 동의한 것으로 간주합니다.
          </li>
          <li>
            회사는 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
          </li>
          <li>
            개정 내용이 회원에게 불리할 경우, 적용일자 및 개정사유를 명시하여
            현행약관과 함께 팝업으로 30일간 게시합니다.
          </li>
          <li>
            회사가 전항에 따라 변경된 약관을 공지 또는 통지하면셔, 회원에게
            변경된 약관의 적용일까지 거부의사를 표시하지 않으면 약관의 변경에
            동의한 것으로 간주한다는 내용을 공지 또는 통지하였음에도 회원이
            명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하는 경우 회원이
            변경된 약관에 동의한 것으로 간주합니다.
          </li>
          <li>
            회원이 개정약관에 동의하지 않는 경우, 이용계약을 해지함으로써 거부
            의사를 표현할 수 있습니다. 단, 30일 내에 거부 의사 표시를 하지 않을
            경우 약관에 동의한 것으로 간주합니다.
          </li>
          <li>
            회원은 이 약관 변경에 대하여 주의의무를 다하여야 하며, 변경된 약관의
            부지로 인한 회원의 피해는 회사가 책임지지 않습니다.
          </li>
        </ol>
      </Paragraph>
      <SmallHeader>제 4조(서비스 제공)</SmallHeader>
      <Paragraph>
        <ol
          css={css`
            list-style-type: decimal;
            padding-left: 20px;
          `}
        >
          <li>
            회사는 다음 서비스를 제공합니다.
            <ul
              css={css`
                list-style-type: square;
                padding-left: 4px;
              `}
            >
              <li>문화생활 정보 제공 서비스</li>
              <li>문화생활에 대한 게시물 제공 서비스</li>
              <li>마이페이지 내 게시물 제공 서비스</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </li>
          <li>
            회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수
            있습니다.
          </li>
          <li>
            회사는 이용자의 개인정보 및 서비스 이용 기록에 따라 서비스 이용에
            차이를 둘 수 있습니다.
          </li>
          <li>
            회사는 천재지변, 인터넷 장애, 경영 약화 등으로 서비스를 더 이상
            제공하기 어려울 경우, 서비스를 통보 없이 중단할 수 있습니다.
          </li>
          <li>
            회사는 1항부터 전항까지와 다음 내용으로 발생한 피해에 대해 어떠한
            책임을 지지 않습니다.
            <ul
              css={css`
                list-style-type: square;
                padding-left: 4px;
              `}
            >
              <li>
                모든 서비스, 게시물, 이용 기록의 진본성, 무결성, 신뢰성,
                이용가능성
              </li>
              <li>서비스 이용 중 타인과 상호 간에 합의한 내용</li>
              <li>
                게시물, 광고의 버튼, 하이퍼링크 등 외부로 연결된 서비스와 같이
                회사가 제공하지 않은 서비스에서 발생한 피해
              </li>
              <li>
                이용자의 귀책사유 또는 회사의 귀책 사유가 아닌 사유로 발생한
                이용자의 피해
              </li>
            </ul>
          </li>
        </ol>
      </Paragraph>
      <SmallHeader>제 5조(개인정보의 관리 및 보호)</SmallHeader>
      <Paragraph>
        <ol
          css={css`
            list-style-type: decimal;
            padding-left: 20px;
          `}
        >
          <li>
            회원이 회사와 체결한 서비스 이용계약은 처음 이용계약을 체결한 본인에
            한해 적용됩니다.
          </li>
          <li>
            회원의 아이디, 비밀번호 등 모든 개인정보의 관리책임은 본인에게
            있으므로, 타인에게 양도 및 대여할 수 없으며, 유출되지 않도록
            관리해야 합니다. 만약 본인의 아이디 및 비밀번호를 타인이 사용하고
            있음을 인지했을 경우 바로 서비스 내부의 문의 창구에 알려야 하고,
            안내가 있는 경우 이에 즉시 따라야 합니다.
          </li>
          <li>
            회사는 2항부터 전항까지를 이행하지 않아 발생한 피해에 대해 어떠한
            책임을 지지 않습니다.
          </li>
        </ol>
      </Paragraph>
      <SmallHeader>제 6조(회원탈퇴 및 자격 상실 등)</SmallHeader>
      <Paragraph>
        <ol
          css={css`
            list-style-type: decimal;
            padding-left: 20px;
          `}
        >
          <li>
            &quot;회원&quot;은 &quot;회사&quot;에 메일을 통해 탈퇴를 요청할 수
            있으며 &quot;회사&quot;는 확인 즉시 회원탈퇴를 처리합니다.
          </li>
          <li>
            &quot;회원&quot;이 다음 각호의 사유에 해당하는 경우,
            &quot;회사&quot;는 회원자격을 즉시 제한 및 정지시킬 수 있습니다.
            <ul
              css={css`
                list-style-type: square;
                padding-left: 4px;
              `}
            >
              <li>
                올바르지 않은 게시물을 등록한 경우 (ex.음란물, 욕설, 타인에 대한
                비방 등)
              </li>
              <li>
                다른 사람의 &quot;회사&quot;의 서비스이용을 방해하거나 그 정보를
                도용하는 등 전자상거래 질서를 위협하는 경우
              </li>
              <li>
                &quot;회사&quot;를 이용하여 법령 또는 이 약관이 금지하거나
                공서양속에 반하는 행위를 하는 경우
              </li>
            </ul>
          </li>
          <li>
            &quot;회사&quot;가 회원자격을 상실시키는 경우에는 회원 탈퇴를
            처리합니다. 이 경우 &quot;회원&quot;에게 이메일, 휴대폰 번호 등의
            사전 통지할 수단이 등록되어있는 경우 사전통지하고, 연락할 수단이
            기재되어 있지 않은 경우엔 별도 통지 없이 회원 탈퇴 처리를
            진행합니다.{' '}
          </li>
          <li>
            회사는 유용하고 편리한 서비스를 제공하기 위해, 2022년부터 서비스 및
            서비스 내부의 기능(문화생활 상세 정보, 회원이 등록한 게시물 등)의
            체계와 다양한 기능을 직접 설계 및 운영하고 있는 데이터베이스
            제작자에 해당합니다. 회사는 저작권법에 따라 데이터베이스 제작자는
            복제권 및 전송권을 포함한 데이터베이스 전부에 대한 권리를 가지고
            있으며, 이는 법률에 따라 보호를 받는 대상입니다. 따라서 이용자는
            데이터베이스 제작자인 회사의 승인 없이 데이터베이스의 전부 또는
            일부를 복제,배포,방송 또는 전송할 수 없습니다.
          </li>
          <li>
            회사가 작성한 게시물에 대한 권리는 회사에게 귀속되며, 회원이 작성한
            게시물에 대한 권리는 회원에게 귀속됩니다. 단, 회사는 서비스의 운영,
            확장, 홍보, 데이터 활용 등의 필요한 목적으로 회원의 저작물을
            합리적이고 필요한 범위 내에서 별도의 허락 없이 수정하여 무상으로
            사용하거나 제휴사에게 제공할 수 있습니다. 이 경우, 회원의 개인정보는
            제공하지 않습니다.
          </li>
        </ol>
      </Paragraph>
      <SmallHeader>제 8조(게시물의 게시 중단)</SmallHeader>
      <Paragraph>
        회사는 관련법에 의거하여 회원의 게시물로 인한 법률상 이익 침해를 근거로,
        다른 이용자 또는 제3자가 회원 또는 회사를 대상으로 하여 민형사상의 법적
        조치를 취하거나 관련된 게시물의 게시중단을 요청하는 경우, 회사는 해당
        게시물에 대한 접근을 잠정적으로 제한하거나 삭제할 수 있습니다.
      </Paragraph>
      <SmallHeader>
        제 9조(광고의 게재 발신 및 야간광고전송에 대한 수신)
      </SmallHeader>
      <Paragraph>
        <ol
          css={css`
            list-style-type: decimal;
            padding-left: 20px;
          `}
        >
          <li>
            광고의 게재 및 발신
            <ul
              css={css`
                list-style-type: square;
                padding-left: 4px;
              `}
            >
              <li>
                회사는 서비스의 제공을 위해 서비스 내부에 광고를 게재할 수
                있으며, 회사는 이용자의 이용기록을 활용한 광고를 게재할 수
                있습니다.
              </li>
              <li>
                회사는 회원이 광고성 정보 수신에 동의할 경우, 서비스 내부 알림
                수단과 회원의 이메일, 연락처를 이용하여 광고성 정보를 발신할 수
                있습니다.
              </li>
              <li>
                회사는 광고 게재 및 동의된 광고성 정보의 발신으로 인해 발생한
                피해에 대해 어떠한 책임도 지지 않습니다.
              </li>
            </ul>
          </li>
          <li>
            야간광고전송에 대한 수신
            <ul
              css={css`
                list-style-type: square;
                padding-left: 4px;
              `}
            >
              <li>
                회사는 오후 9시~익일 오전 8시까지 광고 푸시를 전송하는 경우에
                광고성 정보가 시작되는 부분에 (광고), 전송자의 명칭을
                표시합니다.
              </li>
              <li>
                광고성 정보가 끝나는 부분에 수신 거부 또는 수신동의 철회를 할 수
                있는 방식을 명시합니다.
              </li>
              <li>
                수신자로부터 사전 동의, 수신 거부 또는 수신동의 철회 의사표시를
                받은 경우에는 앱에서 팝업을 통해 처리결과를 통지합니다.
              </li>
            </ul>
          </li>
        </ol>
      </Paragraph>
      <SmallHeader>제 10조(저작권)</SmallHeader>
      <Paragraph>
        고객이 작성・게시한 게시물에 관한 저작권은, 해당 게시물을 작성한
        고객에게 귀속합니다.
        <br />
        <br />
        고객은, 당사에 대해서, 당사가 게시물을 다음의 목적으로 이용하는 것
        (복제, 양도, 대여, 번역, 번안 및 제3자에 대하여 재이용의 허락을
        포함합니다)을 허락하는 것으로 합니다.
        <br />
        <br />
        (1) 당사의 웹사이트나 카탈로그, 선전・광고, SNS 등의 판촉매체에의 게재
        <br />
        <br />
        (2) 당사 상품의 개량 및 신상품의 개발 전항의 경우, 고객은 당사
        (당사로부터 사용허락 또는 권리양도를 받은 제3자를 포함합니다)에 대해,
        상품리뷰에 관련된 저작자인격권을 행사하지 않는 것으로 합니다. 고객이
        작성・게시한 게시물 이외의, 본 서비스에 관한 저작권 등 일체의
        지적재산권은, 당사 또는 당사가 사용 허락하거나 당사로부터 권리양도를
        받은 제3자에게 귀속합니다.
        <br />
        <br />
        당사는, 고객이 작성・게시한 게시물에 포함된 아이디어, 디자인 및 노하우
        등 (이하 &quot;아이디어 등&quot;이라고 합니다)을 이용할 수 있고,
        아이디어 등에 관련하여 특허, 실용신안, 의장, 상표를 받는 권리 및 출원할
        수 있는 것으로 합니다. 당사는 아이디어 등을 고객의 승낙을 얻지 않고 이용
        (복제, 양도, 대여, 번역, 번안 및 제3자에 대하여 재이용의 허락을
        포함합니다) 할 수 있는 것으로 합니다.
      </Paragraph>
      <SmallHeader>제 11조(금지행위)</SmallHeader>
      <Paragraph>
        <ol
          css={css`
            list-style-type: decimal;
            padding-left: 20px;
          `}
        >
          <li>
            이용자는 다음과 같은 행위를 해서는 안됩니다.
            <ol
              css={css`
                list-style-type: square;
                padding-left: 4px;
              `}
            >
              <li>개인정보 또는 계정 기만, 침해, 공유 행위</li>
              <li>개인정보를 허위, 누락, 오기, 도용하여 작성하는 행위</li>
              <li>타인의 개인정보 및 계정을 수집, 저장, 공개, 이용하는 행위</li>
              <li>자신과 타인의 개인정보를 제3자에게 공개, 양도하는 행위</li>
              <li>다중 계정을 생성 및 이용하는 행위</li>
              <li>자신의 계정을 이용하여 타인의 요청을 이행하는 행위</li>
              <li>시스템 부정행위</li>
              <li>
                문화생활 컨텐츠에 대한 허위 사실 기재 및 정보를 제공하는 행위
              </li>
              <li>허가하지 않은 방식의 서비스 이용 행위</li>
              <li>회사의 모든 재산에 대한 침해 행위</li>
              <li>업무 방해 행위</li>
              <li>
                서비스 관리자 또는 이에 준하는 자격을 사칭하거나 허가없이
                취득하여 직권을 행사하는 행위
              </li>
              <li>회사 및 타인의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>
                서비스 내부 정보 일체를 허가 없이 이용, 변조, 삭제 및 외부로
                유출하는 행위
              </li>
              <li>
                이 약관, 개인정보 처리방침, 커뮤니티 이용규칙에서 이행 및
                비이행을 명시한 내용에 반하는 행위
              </li>
              <li>기타 현행법에 어긋나거나 부적절하다고 판단되는 행위</li>
            </ol>
          </li>
          <li>
            이용자가 1항에 해당하는 행위를 할 경우, 회사는 다음과 같은 조치를
            영구적으로 취할 수 있습니다.
            <ul
              css={css`
                list-style-type: square;
                padding-left: 4px;
              `}
            >
              <li>이용자의 서비스 이용 권한, 자격, 혜택 제한 및 회수</li>
              <li>회원과 체결된 이용계약을 회원의 동의나 통보 없이 파기</li>
              <li>회원가입, 정보 접근, 게시글 작성 거부</li>
              <li>
                회원의 커뮤니티, 게시물, 이용기록을 임의로 삭제, 중단, 변경
              </li>
              <li>그 외 회사가 필요하다고 판단되는 조치</li>
            </ul>
          </li>
          <li>
            회사는 1항부터 전항까지로 인해 발생한 피해에 대해 어떠한 책임을 지지
            않으며, 이용자는 귀책사유로 인해 발생한 모든 손해를 배상할 책임이
            있습니다.
          </li>
        </ol>
      </Paragraph>
      <SmallHeader>제 12조(기타)</SmallHeader>
      <Paragraph>
        <ol
          css={css`
            list-style-type: decimal;
            padding-left: 20px;
          `}
        >
          <li>이 약관은 2022년 0월 0일에 최신화 되었습니다.</li>
          <li>
            이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관련법
            또는 관례에 따릅니다.
          </li>
          <li>
            이 약관에도 불구하고 다른 약관이나 서비스 이용 중 안내 문구 등으로
            달리 정함이 있는 경우에는 해당 내용을 우선으로 합니다.
          </li>
        </ol>
      </Paragraph>
    </article>
  );
}
