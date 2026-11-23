export type CampusId = 'guui' | 'lynn'

export const weekdays = {
  Monday: '월',
  Tuesday: '화',
  Wednesday: '수',
  Thursday: '목',
  Friday: '금',
  Saturday: '토',
  Sunday: '일',
} as const

export type OpeningHours = {
  days: readonly (keyof typeof weekdays)[]
  opens: string
  closes: string
}

// 사용자가 정한 운영 시간: 월~금 10시~7시. 바뀌면 여기만 고쳐요.
export const openingHours: OpeningHours = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '10:00',
  closes: '19:00',
}

export type Campus = {
  id: CampusId
  path: `/${CampusId}`
  name: string
  title: string
  description: string
  intro: string
  license: string
  owner: string
  phone: string
  kakao?: string
  area: string
  landmark: string
  address: string
  street: string
  postalCode: string
  hours: OpeningHours
  instagram?: string
  geo?: { lat: number; lng: number }
  map: { image: string; href: string; label: string; credit: string }
  schools: readonly string[]
}

export type Program = {
  id: string
  tag: string
  title: string
  body: string
  photo?: string
}

export type Story = {
  date: string
  title: string
  body: string
  href: string
  photo?: string
}

export type Note = {
  title: string
  body: string
}

export const blog = 'https://blog.naver.com/lovelynpf'

export const site = {
  url: 'https://lovelynpf.vercel.app',
  title: '린피아노 & 구의음악학원 | 광진구 구의동·자양동 피아노학원',
  description:
    '광진구 구의동 구의음악학원(아차산역 3번 출구)과 자양동 린피아노예요. 엄마와 딸이 함께 운영하는 피아노 전문 음악학원으로 어린이·성인 피아노, 통기타, 1인 1연습실 레슨을 해요.',
  keywords: [
    '구의음악학원',
    '린피아노',
    '린음악교습소',
    '피아노학원',
    '음악학원',
    '자양동음악학원',
    '자양동피아노학원',
    '구의동음악학원',
    '구의동피아노학원',
    '광진구피아노학원',
    '광진구음악학원',
    '아차산역피아노학원',
    '성인피아노',
    '통기타레슨',
  ],
  image: '/photos/practice-room.jpg',
  updated: '2026-11-23',
  googleVerification: 'KTR6EME1fvmmFI2fcaWDR2UCuAjxcWSgnQFUQ1nRDdc',
}

export const brand = {
  name: '린피아노 & 구의음악학원',
  mark: 'GUUI & LYN MUSIC',
  line: '엄마와 딸이 함께하는 음악학원',
}

export const ui = {
  lessonsCta: '수업 보기',
  contactCta: '상담 문의',
  call: '전화하기',
  kakao: '카카오톡 상담',
  place: '위치',
  hours: '운영 시간',
  fees: '강습비',
  feesCta: '강습비 참고',
  schools: '가까운 학교',
  home: '두 학원 함께 보기',
  sibling: '함께 운영하는 학원',
  more: '자세히 보기',
  blog: '블로그 보기',
  blogAll: '블로그 전체',
  blogFooter: '네이버 블로그',
  menuOpen: '메뉴 열기',
  scroll: '아래로',
}

export const nav = [
  { id: 'about', label: '학원 소개' },
  { id: 'lessons', label: '수업' },
  { id: 'stories', label: '학원 소식' },
  { id: 'contact', label: '상담' },
] as const

export type SectionId = (typeof nav)[number]['id']

export const hero = {
  eyebrow: '광진구 구의동·자양동 피아노 음악학원',
  title: ['처음 누른 건반이', '평생의 음악이 되도록'],
  photo: '/photos/practice-room.jpg',
  alt: '린피아노 개인 연습실의 업라이트 피아노와 이론 책상',
}

export const about = {
  eyebrow: '우리 학원',
  title: '두 학원, 한 가족',
  body: '구의음악학원은 엄마가, 린피아노는 딸이 맡고 있어요. 같은 교재, 같은 방식으로 가르치고 콩쿨도 연말 파티도 두 학원이 함께 준비해요.',
  photo: '/photos/room-tree.jpg',
  alt: '크리스마스 트리로 꾸민 학원 복도와 레슨실',
  caption: '연말이 되면 트리를 세우고, 하루는 레슨 대신 학원을 작은 영화관으로 꾸며요.',
}

export const programs: readonly Program[] = [
  {
    id: 'kids',
    tag: '어린이',
    title: '피아노 어드벤처',
    body: '바이엘, 체르니 대신 피아노 어드벤처 교재로 배워요. 곡 옆에 적힌 짧은 이야기를 읽고, 셈여림을 아이가 직접 정해서 쳐 봐요.',
    photo: '/photos/adventure.jpg',
  },
  {
    id: 'adult',
    tag: '성인',
    title: '성인 피아노',
    body: '어른은 치고 싶은 곡으로 시작해요. 존 필드의 녹턴 5번을 직접 골라 오신 분도 있었어요.',
    photo: '/photos/nocturne.jpg',
  },
  {
    id: 'room',
    tag: '1인 1연습실',
    title: '내 연습실',
    body: '정해진 시간에 와서 연습실 하나를 혼자 써요. 피아노 옆 작은 책상에서 이론 공부까지 마치고 가요.',
    photo: '/photos/practice-desk.jpg',
  },
  {
    id: 'guitar',
    tag: '통기타',
    title: '통기타',
    body: '통기타도 가르쳐요. 배우고 싶은 노래를 골라 오면 선생님이 먼저 쳐 보고 하나씩 같이 짚어 가요.',
  },
]

export const lessons = {
  eyebrow: '수업',
  title: '이렇게 배워요',
  body: '두 학원 모두 피아노 전문이에요. 아이는 교재 속 이야기로, 어른은 치고 싶은 곡으로 시작해요.',
}

export const storiesIntro = {
  eyebrow: '학원 소식',
  title: '학원에서 있었던 일',
}

export const notes: readonly Note[] = [
  {
    title: '계절에 맞는 곡',
    body: '겨울엔 류이치 사카모토의 메리 크리스마스 미스터 로렌스처럼, 계절에 어울리는 곡을 골라 연습해요.',
  },
  {
    title: '쓰고 나면 소독',
    body: '연습실을 쓰고 나면 건반, 의자, 손잡이를 소독하고 환기한 뒤에 다음 친구가 들어가요.',
  },
  {
    title: '교육청 자율정화위원',
    body: '성동광진교육청 자율정화위원으로 다른 학원 안전 점검도 다녀왔어요. 우리 학원에도 안전관리 매뉴얼과 대피도를 늘 두고 있어요.',
  },
]

export const stories: readonly Story[] = [
  {
    date: '2026-04-17',
    title: '앤드류 최의 사인',
    body: '케데헌 진우의 노래를 부른 앤드류 최에게 학원 이름으로 사인을 받았어요. 액자에 넣어 잘 걸어 뒀어요.',
    href: `${blog}/224256078871`,
  },
  {
    date: '2026-01-03',
    title: '크리스마스 영화파티',
    body: '코로나 이후 오랜만에 영화파티를 다시 열었어요. 아이들이 일주일 동안 투표해서 영화를 골랐어요.',
    href: `${blog}/224132621603`,
    photo: '/photos/party-poster.jpg',
  },
  {
    date: '2022-11-23',
    title: '경복초 피아노 콩쿨 금상',
    body: '경복초등학교 교내 피아노 콩쿨에서 우리 원생이 금상을 받았어요.',
    href: `${blog}/222936542600`,
  },
  {
    date: '2022-09-17',
    title: '은석초 콩쿨 금상과 은상',
    body: '은석초등학교 교내 콩쿨에서 1학년 친구가 금상, 4학년 친구가 은상을 받았어요. 1학년 금상은 딱 한 명이었대요.',
    href: `${blog}/222877042114`,
  },
  {
    date: '2021-12-03',
    title: '미디작곡과 합격',
    body: '고등학생 원생이 서초문화예술정보학교 실용음악 미디작곡과에 합격했어요.',
    href: `${blog}/222585799881`,
  },
  {
    date: '2020-10-19',
    title: '드라마 연주 장면 촬영',
    body: '우리 원생이 드라마 도도솔솔라라솔 3회에 바흐를 치는 장면으로 나왔어요.',
    href: `${blog}/222120312308`,
  },
  {
    date: '2020-07-14',
    title: '군인이 된 제자',
    body: '중고등학생 때 다니던 제자가 휴가 나와서 학원에 들렀어요. 해마다 모카항 카페 연주회에도 나오던 친구예요.',
    href: `${blog}/222030560589`,
  },
  {
    date: '2019-11-14',
    title: 'AKAS 뮤직 콩쿨',
    body: '콩쿨 상장과 베토벤 흉상 트로피가 도착했어요. 아이들이 축하 문구를 한 글자씩 색칠했어요.',
    href: `${blog}/221707520501`,
    photo: '/photos/trophies.jpg',
  },
]

export const campuses: readonly Campus[] = [
  {
    id: 'guui',
    path: '/guui',
    name: '구의음악학원',
    title: '구의음악학원 | 광진구 구의동 피아노학원 (아차산역)',
    description:
      '광진구 구의동 아차산역 3번 출구 가까이 있는 구의음악학원이에요. 엄마가 운영하는 피아노 전문 음악학원으로 어린이와 성인 피아노를 가르쳐요. 광진초, 경복초와 가까워요.',
    intro:
      '아차산역 3번 출구 가까이 있는 구의동 피아노 전문 음악학원이에요. 엄마가 운영하고, 자양동 린피아노와 같은 교재, 같은 방식으로 가르쳐요.',
    license: '제714호',
    owner: '엄마가 운영해요',
    phone: '02-447-6523',
    area: '광진구 구의동',
    landmark: '아차산역 3번 출구',
    address: '서울특별시 광진구 자양로41길 7, 2층 (구의동)',
    street: '자양로41길 7, 2층 (구의동)',
    postalCode: '04992',
    hours: openingHours,
    map: {
      image: '/maps/guui.jpg',
      href: 'https://place.map.kakao.com/13604791',
      label: '카카오맵에서 보기',
      credit: '지도 © Kakao',
    },
    schools: ['광진초', '경복초'],
  },
  {
    id: 'lynn',
    path: '/lynn',
    name: '린피아노',
    title: '린피아노 | 광진구 자양동 피아노학원',
    description:
      '광진구 자양동 자양골목시장 부근 린피아노예요. 딸이 운영하는 피아노 전문 음악학원으로 어린이·성인 피아노와 1인 1연습실 레슨을 해요. 자양초, 성자초와 가까워요. 카카오톡 상담도 돼요.',
    intro:
      '자양골목시장 부근 자양동 피아노 전문 음악학원이에요. 딸이 운영하고, 구의동 구의음악학원과 같은 교재, 같은 방식으로 가르쳐요. 카카오톡으로도 상담할 수 있어요.',
    license: '신고 제89호',
    owner: '딸이 운영해요',
    phone: '02-2201-4079',
    kakao: 'https://pf.kakao.com/_AmxexcT',
    area: '광진구 자양동',
    landmark: '자양골목시장 부근',
    address: '서울특별시 광진구 자양로13길 87-1, 2층 (자양동)',
    street: '자양로13길 87-1, 2층 (자양동)',
    postalCode: '05061',
    hours: openingHours,
    instagram: 'https://www.instagram.com/guuimusic_lynpiano',
    geo: { lat: 37.5328541, lng: 127.0803811 },
    map: {
      image: '/maps/lynn.jpg',
      href: 'https://map.naver.com/p/entry/place/1081849010',
      label: '네이버 지도에서 보기',
      credit: '지도 © NAVER',
    },
    schools: ['자양초', '성자초'],
  },
]

export const contact = {
  eyebrow: '상담',
  title: '가까운 학원으로 연락 주세요',
  body: '전화로 편하게 물어보세요. 린피아노는 카카오톡으로도 상담할 수 있어요.',
}

export type Fee = { course: string; hours: string; fee: string }

// 학원인(academy.kbizin.com)에 올라온 서울시교육청 신고 교습비를 그대로 옮겼어요.
// 월 교습 시간과 총교습비는 원자료 표기 그대로예요. 숫자를 지어내거나 고치지 않아요.
// 반 이름 '드럼'은 원자료에 '그럼'으로 적혀 있던 것을 사용자 요청으로 고쳤어요(같은 줄: 13시간 39분, 13만원).
export const fees = {
  campusId: 'guui' as CampusId,
  path: '/guui/fees',
  title: '구의음악학원 강습비 (참고용) | 광진구 구의동 피아노학원',
  description:
    '구의음악학원이 서울특별시교육청에 신고한 1개월 과정 교습비를 참고용으로 모았어요. 초급·중급·상급·고급·입시 피아노와 기타, 플룻 반의 월 교습 시간과 총교습비를 볼 수 있어요.',
  eyebrow: '참고용 강습비',
  heading: '구의음악학원 교습비',
  body: '교육청에 신고된 1개월 과정 반의 월 교습 시간과 총교습비예요. 상담 전에 대략 살펴볼 수 있도록 옮겨 두었어요.',
  asOf: '2026-01-01',
  checked: '2026-11-22',
  source: {
    label: '학원인 · 구의음악학원 원비',
    href: 'https://academy.kbizin.com/seoul/academy/1000042456',
  },
  registry: {
    label: '서울특별시교육청 학원 교습비 등 정보공개',
    href: 'https://buseo.sen.go.kr/buseo/bu14/user/bbs/BD_selectBbsList.do?q_bbsSn=1328',
  },
  notes: [
    '참고용이에요. 교습비는 바뀔 수 있으니 등록 전에 학원에 꼭 전화로 확인해 주세요.',
    '반 이름과 금액은 교육청 공개 자료를 따랐어요. 교재비 같은 비용은 따로 들 수 있어요.',
    '린피아노 강습비는 이 표에 없어요. 린피아노에 직접 물어봐 주세요.',
  ],
  labels: { asOf: '교육청 공개 자료', basis: '기준', checked: '학원인 반영', source: '출처', registry: '원자료' },
  columns: { course: '반', hours: '월 교습 시간', fee: '총교습비(월)' },
  rows: [
    { course: '초급피아노', hours: '11시간 12분', fee: '11만원' },
    { course: '초급피아노', hours: '12시간 36분', fee: '12만원' },
    { course: '초급피아노', hours: '21시간', fee: '13만원' },
    { course: '중급피아노', hours: '11시간 54분', fee: '12만원' },
    { course: '중급피아노', hours: '13시간 39분', fee: '13만원' },
    { course: '중급피아노', hours: '21시간', fee: '14만원' },
    { course: '상급피아노', hours: '14시간 42분', fee: '14만원' },
    { course: '상급피아노', hours: '21시간', fee: '15만원' },
    { course: '고급피아노', hours: '21시간', fee: '16만원' },
    { course: '입시피아노', hours: '31시간 30분', fee: '35만원' },
    { course: '입시피아노', hours: '42시간', fee: '45만원' },
    { course: '기타', hours: '13시간 39분', fee: '13만원' },
    { course: '플룻', hours: '13시간 39분', fee: '13만원' },
    { course: '드럼', hours: '13시간 39분', fee: '13만원' },
    { course: '드럼특강', hours: '1시간 24분', fee: '1만원' },
  ] satisfies readonly Fee[],
}

const cleanPath = (path: string) => path.replace(/(\/index\.html)?\/*$/, '')

export function campusByPath(path: string) {
  const clean = cleanPath(path)
  return campuses.find((campus) => campus.path === clean)
}

export function isFeesPath(path: string) {
  return cleanPath(path) === fees.path
}

export function formatHours({ days, opens, closes }: OpeningHours) {
  const week = Object.keys(weekdays)
  const run = days.every((day, i) => i === 0 || week.indexOf(day) === week.indexOf(days[i - 1]) + 1)
  const label =
    run && days.length > 2
      ? `${weekdays[days[0]]}~${weekdays[days[days.length - 1]]}`
      : days.map((day) => weekdays[day]).join('·')
  return `${label} ${opens}~${closes}`
}

export function telHref(phone: string) {
  return `tel:${phone.replaceAll('-', '')}`
}

export function formatDate(iso: string) {
  return iso.replaceAll('-', '.')
}
