/*

00. ./ -> 현재 폴더
00. ./././  현재폴더의 현재폴더의 현재폴더의 

000. ../ -> 상위 폴더 
000. ../../ -> 상위 폴더의 상위 폴더
000. ../../../../ 상위 폴더의 상위 폴더의 상위 폴더의 상위 폴더

0000. / -> 루트폴더 

1. pwd(print working directory) -> 현재 터미널이 위치한 디렉토리 경로
2. ls (list) -> 현재 디렉토리의 파일/폴더 목록 보기
2.1 ls 폴더명 -> 폴더명의 파일/폴더 목록 모기
2.2 ls -l (d는 폴더, - 파일)
drwxr-xr-x@ 3 suya  staff   96 Aug  6 10:10 00
drwxr-xr-x@ 8 suya  staff  256 Aug  5 15:42 01
drwxr-xr-x@ 3 suya  staff   96 Aug  6 10:06 02
-rw-r--r--@ 1 suya  staff    0 Aug  6 10:26 test.js
2.3 ls -a 숨긴 폴더나 파일도 볼 수 있다.

3. rm (remove) -> 폴더나 파일을 지울 수 있음
3.1 rm 파일명
3.1.1 rm -rf 파일명/폴더명 
3.1.2 rm -rf ./03 
3.1.3 rm -rf 03 
3.1.4 rm -rf 03/1.js  
3.1.5 rm -rf 03/*(asterisk)
3.1.6 rm -rf ./*  주의!!!!!!!!
3.1.7 rm -rf /*   주의!!!!!!!!!!

4. cd (change directory) 
4.2 cd 폴더명 
4.3 cd .. 상위 폴더로 이동해라
4.4. cd ../../.. 상위 폴더의 상위 폴더의 상위 폴더로 이동해라
4.4 cd ../01 -> 상위 폴더의 01 폴더로 이동해라
4.5 cd ../../01 -> 상위 폴더의 상위 폴더에 있는 01 폴더로 이동해라

5. mkdir (make directory) 폴더를 만들기
5.1 mkdir test  -> test 폴더가 만들어짐

6. touch 파일 만들기
6.1 touch test.ts

7. clear -> 터미널 명령어를 정리하는 것

8. 화살표 위/아래 
9. 일부분만 입력하고 tab키를 누른다 -> 자동완성됨
*/
