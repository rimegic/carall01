# Cloudflare 배포 문제 해결 체크리스트

배포된 웹페이지에 아무것도 표시되지 않는 문제를 해결하기 위한 단계별 체크리스트입니다.

- [x] **1단계: 문제의 근본 원인 파악 - 최소 기능 테스트**
    - [x] `src/app/page.tsx`의 내용을 `<h1>Hello World</h1>`와 같이 아주 단순한 코드로 변경하여 배포합니다.
    - [x] **결과**: 실패. 문제는 `layout.tsx` 또는 프로젝트 설정/빌드 과정에 있음.

- [ ] **2단계: 페이지 컴포넌트 점진적 활성화**
    - [ ] (보류)

- [x] **3단계: 레이아웃 및 전역 설정 점검**
    - [x] `src/app/layout.tsx`에서 `runtime = 'edge'` 설정을 다시 제거 → **실패**
    - [x] `layout.tsx`에서 커스텀 폰트(`Noto_Sans_KR`) 및 전역 CSS(`globals.css`) 로드를 주석 처리 → **실패**
    - [x] **결론**: 코드 수준의 문제가 아닐 가능성이 매우 높음.

- [x] **4단계: Cloudflare 프로젝트 재생성**
    - [x] 코드의 문제가 아닌, Cloudflare 프로젝트 설정 자체의 오류로 판단.
    - [x] Cloudflare 대시보드에서 기존 프로젝트를 삭제합니다.
    - [x] 동일한 GitHub 리포지토리를 사용하여 Cloudflare Pages 프로젝트를 새로 생성하고 배포합니다.
    - [x] **결과**: `runtime = 'edge'`가 없는 동적 라우트(/admin/news/[id])로 인해 빌드 실패.

- [x] **5단계: 동적 라우트에 Edge 런타임 적용**
    - [x] Cloudflare의 요구사항에 따라 `/admin/news/[id]/page.tsx`에 `export const runtime = 'edge';` 추가. → **(진행중)**
    - [ ] **목표**: Cloudflare 배포 빌드 오류를 해결합니다.

- [ ] **6단계: 최종 코드 원복 및 배포**
    - [ ] 프로젝트가 정상적으로 배포되면, 디버깅을 위해 수정했던 모든 코드(`page.tsx`, `layout.tsx`)를 원래 상태로 되돌리고 최종 배포를 진행합니다. 