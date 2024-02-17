FROM node:18.17.1

WORKDIR /usr/src/app

# 패키지 파일 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install

# PM2 전역 설치
RUN yarn global add pm2

# 애플리케이션 파일 복사
COPY ./ ./

# 빌드 실행
RUN yarn build

# 애플리케이션 실행
CMD ["yarn", "server"]

# 포트 8000번 열기
EXPOSE 8000
