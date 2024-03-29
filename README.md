## 12.28

- git은 항상 새롭다

## 1.28

- 구조분해 할당
- 배열이나 객체의 속성을 해체해 그 값을 개별변수에 담는것

### 배열 구조 분해 할당

const [변수] = 배열;
- 각 변수에 배열의 인덱스 순으로 값 대응
- 구조분해 시 변수의 값이 undefined 일 때 기본값 할당 가능
- 구조분해 없이 두 변수의 값 교환도 가능

### 객체 구조 분해 할당
const { 변수 } = 객체;
- 객체 안의 속성을 변수명으로 사용
- 콜론(:)이용햇 새 변수명을 선언하고, 원래의 값을 새 변수명에 할당 가능

## 1.30

### Promise
- 비동기 함수를 동기 처리하기 위해 만들어진 객체
- 성공과 실패를 분리하여 반환
- 비동기 작업이 완료된 이후에 다음 작업을 연결시켜 진행할 수 있는 기능을 가짐

### Promise의 상태
- Pending(대기) : Promise를 수행 중인 상태
- Fulfilled(이행): Promise가 Resolve된 상태 (성공)
- Rejected(거부): Promise가 지켜지지 못한 상태 Reject 된 상태 (실패)
- Settled: fulfilled 혹은 rejected로 결론이 난 상태

### Promise는 두 가지 콜백 함수를 가짐
resolve(value): 작업이 성공(fulfilled)한 경우, 그 결과를 value와 함께 호출
reject(error): 에러 (rejected) 발생 시 에러 객체를 나타내는 error와 함께 호출

#### resolve() -> then 메서드 실행
#### reject() -> catch 메서드 실행