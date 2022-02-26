import {decode} from 'html-entities';
import moment from 'moment';

export const stripHtmlTags = (html: string) => {
  const regex = /(<([^>]+)>)/gi;
  return decode(html).replace(regex, '');
};

export const wordSafeTruncate = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  const words = str.split(' ');
  let result = '';
  let currentLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;
    if (currentLength + wordLength + 1 > maxLength) {
      break;
    }
    result += word + ' ';
    currentLength += wordLength + 1;
  }
  return result.trim();
};

export const truncateAndStripHtmlTags = (html: string, maxLength: number) => {
  const stripped = stripHtmlTags(html);
  if (stripped.length <= maxLength) {
    return stripped;
  }
  return wordSafeTruncate(stripped, maxLength) + '...';
};

export const formatDateLong = (date: string) => {
  if (!date) {
    return '';
  }
  // use moment
  return moment(date).format('D MMMM YYYY');
};
