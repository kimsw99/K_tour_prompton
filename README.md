# K_tour_prompton

플로깅 장소 추천 및 경로 안내 서비스

## 🎥 사용 시연 영상

[![K_tour_prompton 데모](https://img.youtube.com/vi/YZpdy_qJjEM/0.jpg)](https://www.youtube.com/watch?v=YZpdy_qJjEM)

👉 이미지를 클릭하면 YouTube 영상으로 이동합니다.



## 프로젝트 구조

- **Frontend**: Next.js + TypeScript + Tailwind CSS
- **Backend**: FastAPI + Python
- **지도 서비스**: T맵, 네이버 지도 API
- **AI 서비스**: LaaS API(GPT-4o)를 통한 관광지 추천

## 설치 및 실행

### 1. 프론트엔드 설정

```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env.local
# .env.local 파일에서 필요한 값들을 설정
```

#### 프론트엔드 환경변수

`.env.local` 파일에 다음 환경변수들을 설정하세요:

```bash
# T맵 API 키 (필수)
NEXT_PUBLIC_TMAP_KEY=your_tmap_api_key_here

# 네이버 지도 API 키 (필수)
NEXT_PUBLIC_NAVER_MAP_KEY=your_naver_map_key_here
```

```bash
# 개발 서버 실행
npm run dev
```

### 2. 백엔드 설정

```bash
cd backend

# 가상환경 생성 및 활성화
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 의존성 설치
pip install -r requirements.txt

# 환경변수 설정
cp .env.example .env
# .env 파일에서 필요한 값들을 설정
```

#### 백엔드 환경변수

`backend/.env` 파일에 다음 환경변수들을 설정하세요:

```bash
# LaaS API 설정 (필수)
LAAS_API_KEY=your_laas_api_key_here
PROJECT_CODE=your_project_code_here
LAAS_URL=https://api-laas.wanted.co.kr/api/preset/v2/chat/completions

# T맵 API 키 (필수)
TMAP_API_KEY=your_tmap_api_key_here

# 한국관광공사 API 키 (필수)
Tour_API_KEY=your_tour_api_key_here

# LaaS 컬렉션 해시 값들 (필수)
HASH_LOCATION=your_location_hash_here
HASH_PLACE=your_place_hash_here
HASH_ROUTE=your_route_hash_here
HASH_IMAGE=your_image_hash_here
HASH_TRASHBAG=your_trashbag_hash_here
HASH_RAG=your_rag_hash_here
```

```bash
# 백엔드 서버 실행
python main.py
```

## API 키 발급 방법

### 1. T맵 API 키
1. [SK Open API](https://openapi.sk.com/) 회원가입
2. T맵 API 서비스 신청
3. 발급받은 API 키를 환경변수에 설정

### 2. 네이버 지도 API 키
1. [네이버 클라우드 플랫폼](https://www.ncloud.com/) 회원가입
2. AI·Application Service > Maps 서비스 이용 신청
3. 발급받은 Client ID를 환경변수에 설정

### 3. 한국관광공사 API 키
1. [한국관광공사 Tour API](https://www.visitkorea.or.kr/kto/dev/openApiInfo.do) 회원가입
2. 관광정보 서비스 API 키 신청
3. 발급받은 API 키를 환경변수에 설정

### 4. LaaS API 키
1. LaaS 서비스 가입 및 프로젝트 생성
2. API 키 및 프로젝트 코드 발급
3. 각 컬렉션별 해시 값 설정

## 주요 기능

- 🗺️ **지역 기반 플로깅 장소 추천**: 사용자가 입력한 지역의 플로깅 장소 추천
- 🛣️ **경로 안내**: T맵 API를 통한 최적 경로 제공
- 💬 **AI 챗봇**: 관광 관련 질문 답변
- 📸 **이미지 업로드**: 사진을 통한 장소 인식 및 정보 제공
- 🗑️ **쓰레기통 위치 안내**: 관광지 주변 쓰레기통 위치 정보

## 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Radix UI
- **Backend**: FastAPI, Python 3.8+
- **Maps**: T맵 API, 네이버 지도 API
- **AI**: LaaS API, 한국관광공사 API
- **Deployment**: Vercel (Frontend), 기타 클라우드 서비스 (Backend)

## 라이센스

이 프로젝트는 MIT 라이센스로 배포됩니다.
