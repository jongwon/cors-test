# cors-test

이 프로젝트는 spring security 가 적용된 서버에 nextjs 클라이언트가 직접 file 을 업로드 하는 것을 테스트한 예제이다.

## cors

- spring server
- jwt token
- spring security allow cors

# client/corsclient

- nextjs 14
- next-auth 로그인
- jwt 로그인
- multi file upload cors

## 테스트 내용

1. spring 서버를 설정해 파일을 업로드 받는다...

2. 멀티 파일을 업로드 받아본다.

3. spring security 를 설정해서 파일을 받아본다.

4. token 기반으로 로그인 처리하고 업로드를 받는다.
