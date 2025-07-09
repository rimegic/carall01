export interface News {
  id: string;
  title: string;
  content: string; // HTML content from the rich text editor
  createdAt: string;
  status: 'published' | 'draft';
}

export const news: News[] = [
  { 
    id: 'n001', 
    title: '카올(Car All), 2024년 최고의 중고차 플랫폼으로 선정', 
    content: '<p><strong>카올(Car All)</strong>이 소비자가 선정한 2024년 최고의 중고차 거래 플랫폼으로 선정되었습니다. 투명한 정보 제공과 편리한 서비스로 높은 평가를 받았습니다.</p>',
    createdAt: '2023-10-20',
    status: 'published',
  },
  { 
    id: 'n002', 
    title: '추석 연휴 고객센터 운영 안내', 
    content: '<p>추석 연휴 기간 동안 고객센터가 단축 운영됩니다. 자세한 내용은 공지사항을 확인해주세요. 풍성한 한가위 되세요!</p>',
    createdAt: '2023-09-15',
    status: 'published',
  },
  { 
    id: 'n003', 
    title: '새로운 파트너십 체결: OOO 캐피탈', 
    content: '<p>더욱 편리한 금융 서비스를 위해 OOO 캐피탈과 새로운 파트너십을 체결했습니다. (내부 검토용 초안)</p>',
    createdAt: '2023-11-01',
    status: 'draft',
  },
]; 