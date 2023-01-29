import { ForbiddenWord } from 'constants/ForbiddenWord';

export default function CheckForbiddenWords(checkWord: string) {
  return ForbiddenWord.map((forbidden) => {
    if (checkWord.includes(forbidden)) {
      return true;
    } else {
      return false;
    }
  });
}
