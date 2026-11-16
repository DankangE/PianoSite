# 린피아노 & 구의음악학원

작업을 시작하기 전에 `/Users/user/.claude/skills/poteto-mode/SKILL.md` 전문을 읽는다. 그 파일 앞의 로컬 오버라이드가 본문보다 우선한다.

서브에이전트는 만들지 않는다. 설계와 수정은 현재 세션이 직접 한다. PR 머지와 `main` 푸시는 하지 않는다. 배포는 사용자가 요청할 때만 한다. 커밋은 사용자가 요청할 때만 한다. 비밀값은 출력하거나 커밋하지 않는다.

사용자에게는 한국어로 답한다.

내용의 출처는 네이버 블로그 `https://blog.naver.com/lovelynpf`다. 블로그에 없는 사실은 문안에 쓰지 않는다. 스타일 참고는 Awwwards의 Ethos Music Academy다. 어두운 배경 `#0f0e07`, 강조색 `#ffed40`, 둥근 대형 카드, 알약 버튼을 따른다.

메인 디자인은 `src/styles/playful.tsx`(B 건반 놀이)이고 주소에 아무것도 없을 때 열린다. 다른 시안은 `src/styles/`의 `base.tsx`(첫 버전), `editorial.tsx`(A), `calm.tsx`(C)이며 개발 서버에서만 `?style=base|a|c`와 화면 아래 전환 막대로 본다. 운영 주소는 https://lovelynpf.vercel.app 이다(Vercel 팀 Mulplay's projects, 옛 주소 pianosite.vercel.app은 `vercel.json`에서 308로 넘긴다). 배포는 사용자가 그때그때 요청할 때만 한다.

`npm run build`는 B 화면을 HTML로 미리 그린다(`src/entry-server.tsx`, `scripts/prerender.mjs`). 검색용 제목·설명·키워드·구조화 데이터·sitemap.xml·robots.txt는 `src/model.ts`의 `site`와 `campuses`에서 나온다. 네이버 로봇은 자바스크립트를 잘 실행하지 않으므로 이 미리 그리기를 없애지 않는다. 검색 노출은 구글 위주로 한다(네이버 플레이스 등록은 하지 않기로 함). 구글 서치콘솔 소유확인 코드는 `site.googleVerification`에 넣는다. 린피아노 지도는 네이버 플레이스, 구의음악학원 지도는 카카오맵을 쓴다. 각 섹션은 `Screen`으로 감싸 데스크톱에서 한 화면(100svh)에 맞춘다. 문구는 해요체로 쓴다.

문안, 사진 경로, 학원 연락처는 `src/model.ts`에만 둔다. UI는 `src/components/ui`의 shadcn 컴포넌트를 쓴다. 사진은 `public/photos`에 두고, 학생 얼굴이나 이름이 보이는 사진과 방송 캡처는 쓰지 않는다.

화면은 `npm run dev`로 연다. 메뉴, 스크롤, 전화와 카카오톡, 지도 링크는 브라우저에서 데스크톱 폭과 좁은 폭으로 확인한다. `npm run verify`는 타입과 `src/model.ts`의 연락처 형식, 소식 순서, 사진과 지도 파일 존재를 검사한다. 그 명령이 브라우저 확인을 대신하지 않는다.
