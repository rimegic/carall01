export interface MetricCardData {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

export interface RecentActivity {
  date: string;
  visitors: number;
  registrations: number;
  inquiries: number;
}

export const metricCards: MetricCardData[] = [
  { title: '총 등록 차량', value: '1,234' },
  { title: '총 회원 수', value: '5,678' },
  { title: '신규 문의 (오늘)', value: '42', change: '+5', changeType: 'increase' },
  { title: '승인 대기 리뷰', value: '15' },
];

export const recentActivities: RecentActivity[] = [
  { date: '7일 전', visitors: 1200, registrations: 15, inquiries: 30 },
  { date: '6일 전', visitors: 1500, registrations: 20, inquiries: 35 },
  { date: '5일 전', visitors: 1400, registrations: 18, inquiries: 40 },
  { date: '4일 전', visitors: 1600, registrations: 25, inquiries: 45 },
  { date: '3일 전', visitors: 1800, registrations: 22, inquiries: 50 },
  { date: '2일 전', visitors: 1750, registrations: 28, inquiries: 55 },
  { date: '어제', visitors: 2100, registrations: 30, inquiries: 60 },
]; 