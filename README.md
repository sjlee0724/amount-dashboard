# 가계부 앱

새해맞이 기념으로 지출 계획을 잡고자 만든 가계부 앱(v.1)입니다.<br><br>

## 설치(Installation) 및 사용 방법(How to use)

---

### 설치 방법(How to install)

```bash
npm install
or
yarn install

npm datePickerInstall
// datePicker lib css를 직접 수정한 부분이 있기 때문에 따로 패치파일을 생성해야함

npm start
or
yarn start
```

### 사용 방법(How to use)

매우 간단합니다. 차트, 등록 2가지 페이지가 존재하는데(첨부 사진 참조) 등록으로 이동한 뒤 <br>

지출한 날짜 시간 타입 금액 간단한 설명을 덧붙여서 등록 버튼을 누르면 등록이 됩니다.<br>

타입은 지출별로 타입을 지정했습니다(소득, 꾸밈비, 고정비, 생활비, 차량비, 친목비, 적금)<br>

총 8가지 타입이 존재하며 자신의 지출의 맞는 타입을 골라주면 됩니다<br>

등록을 완료하면, 차트 페이지로 이동한 뒤 자신의 지출 현황을 파악하면 됩니다.<br>

(현재 v1에서는 삭제 기능이 없습니다. 추후 업데이트나 v2에서 다시 기획할 계획입니다.)

## 차트 화면

<img width="400" alt="스크린샷 2021-03-01 오전 12 45 20" src="https://user-images.githubusercontent.com/25473208/109424632-b392fd00-7a27-11eb-8a78-eb3173360baf.png">

## 등록 화면

 <img width="400" alt="스크린샷 2021-03-01 오전 12 45 25" src="https://user-images.githubusercontent.com/25473208/109424661-d02f3500-7a27-11eb-9d26-928bb853797f.png">

---

## Brower Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last versions                                                                                                                                                                                                 | last versions                                                                                                                                                                                                 |

<br>
사파리에서는 문제 없이 사용이 가능하나 약간의 레이아웃 틀어짐 이슈가 있습니다. 가급적이면 크롬을 이용해 주세요.
