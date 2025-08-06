const MAX_LEVEL = 10;
// MAX_LEVEL = 20;

/*

1. pwd(print working directory) -> 현재 터미널이 위치한 디렉토리 경로
2. ls(list) -> 현재 디렉토리의 파일/폴더 목록 보기
2.1 ls 폴더명 -> 폴더명의 파일/폴더 목록 보기
2.2 ls -l -> 파일/폴더 리스트 목록으로 보임
2.3 ls -a -> 숨긴 폴더나 파일도 볼 수 있다.

../ 상위 폴더
./ 현재 폴더

3. rm(remove) -> 폴더나 파일을 지울 수 있음
3.1 rm 파일명
3.1.1 rm -rf 파일명/폴더명
3.1.2 rm -rf ./03
3.1.4 rm -rf 03/1.js
3.1.5 rm -rf 03/*
3.1.6 rm -rf ./*
3.1.7 rm -rf /*

4. cd(change directory)
4.1 cd 폴더명
4.2 cd .. 상위 폴더로 이동
4.3 cd ../../.. 상위 폴더의 상위 폴더의 상위 폴더로 이동
4.4 cd ../폴더명 -> 상위 폴더의 폴더명으로 이동

5. mkdir(make directory)
5.1 mkdir test -> test 폴더 생성

6. touch 파일 만들기
6.1 touch test.ts

7. clear -> 터미널 명령어 정리

npm init -y
npm install eslint --save-dev
*/