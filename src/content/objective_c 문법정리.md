---
templateKey: blog-post
category : iOS
id: 20200307-1441
title: Objective - C 문법정리
slug: /20200307-1441
date: 2020-03-07T14:51:00.125Z
description: ""
headerImage: https://b.allthepics.net/firewatch-game-graphics-2560x1600.jpg
tags:
- Objective-C
- iOS
- App
---

# Objective - C 문법 정리

## 1. 메소드의 호출

#### 함수선언

```ts
import { redirect } from '@/utils/historyUtils'

export function* testSaga() {
  const isDone = yield select(app.state)

  if (isDone) {
    yield call(redirect, '/home')
  }
  yield put(testAction.foo())
}
```

```objectivec
// 인스턴스 메소드 정의 
-(void) SampleMethod;
// 파라미터를 받는 메서드 정의
-(void) SampleMethodParam : (NSString*)str;
// 라벨을 단 메서드 정의. 라벨은 파라미터라기 보단 함수명을 나눠 적는것이다.
-(void) SampleMethodParam : (NSString*)str returnValue:(int) value;
// 클래스 메소드(static 메소드) +기호로 선언한다
+(void) SampleClassMethod; 
```



#### Output

```objectivec
	Output = [object method]; 
     -> output = object.method
	Output = [object methodWithInput:input];
	 -> output = object.methodWithInput(input);
```



#### 클래스 메소드 (static method)

​	`id myObject = [NSString string];`

* id : myObject가 아무 오브젝트의 참조가 될 수 있다.
* 컴파일 할 때에도 클래스 타입을 알지 못한다.

* 지금은 NSString이란걸 알 수 있기에 `NSString* myString = [NSString string];` 과 같이도 쓸 수 있다.
* 모든 object c의 오브젝트 변수들은 포인터 타입이다.
* id 타입은 이미 포인터 타입으로 정의되어 있어 *을 붙힐 필요가 없다.



#### 다중 파라미터를 가지는 메소드 

**objective C 에서는 두번째 파라미터부터 라벨을 붙어 메소드 명을 여러 조각으로 나누어 사용한다.**

```objectivec
-(void) setCoordinatesX: (float)x y:(float)y z:(float)z;	// 선언
[myCoordinates setCoordinatesX:1.0 y:3.0 z:7.0]; 			//호출
```

​		 	

 y, z는 파라미터라기 보다 여러 조각으로 나눠진 함수명이라고 생각하는게 이해하기 쉽다.

```objectivec
(BOOL)writeToFile:(NSString *)path atomically:(BOOL)useAuxiliaryFile;
// objective c 에서는 함수명을 나눠서 사용한다.   함수명 : writeToFile : atomically;
```



## 2. 접근자



​	**objective - c의 모든 인스턴스 변수들은 private -> getter setter 이용해야함.**

#### 일반적인 문법 

```objectivec
[photo setCaption:@“Day at the Beach”];
output = [photo caption];	

// caption이라는 메소드를 호출하여 인스턴스 변수를 읽는다.
// Objective c의 getter는 변수명getter()가 아니라 변수명()으로 쓴다.
```



#### .(dot)을 이용한 문법

```objectivec
photo.caption =@“Day at the Beach”; // @는 literally 라는 의미를 갖는다. (String 이 됨)
output = photo.caption;		// 2.0 에 새로 추가된 문법
```



## 3. 오브젝트의 생성



#### 자동 할당 

```objectivec
NSString *myString = [NSString string];
// 자동으로 생성하여 할당해주는 방법. 특수한 몇 가지 경우에만 사용 가능
```

#### 수동 할당

```objectivec
NSSString *myString = [[NSString alloc] init];
// Nested 호출방식. 호출시 이루어지는 과정은 다음과 같다.
// 1. NSString의 alloc메소드 호출 ->low level 호출 : 메모리 확보, 인스턴스화
// 2. 생성된 인스턴스의 init 메소드 호출 : 초기화 작업.

NSNumber* value = [[NSNumber alloc]initWithFloat:1.0] 
// 값을 가지는 다른 버전의 init 호출
```



## 4. 기본 메모리 관리법



**만약 Mac OS X 에서 돌아가는 어플리케이션을 개발한다면 garbage collection을 사용할 수 있다.**

하지만 항상 garbage colloection을 제공하는 환경에서 작업하는 것이 아니다.



#### 기본개념 

**수동 init -> 수동 release, 자동 init -> 자동 release**

```objectivec
// string1 는 자동으로 release 될 것이다.
NSString* string1 = [NSString string];


// string2 는 사용이 끝난후 수동으로 release 해주어야 한다.
NSString* string2 = [[NSString alloc] init];
[string2 release];
```

string1은 함수 끝에서 자동으로 release 된다. 



## 5. 클래스 Interface (.h)

**인스턴스 변수와 퍼블릭 메소드의 인터페이스를 정의한다.**

```objectivec
<.h 파일의 예>
#import <Cocoa/Cocoa.h>		//하나의 파일을 여러번 읽어들이는 것을 방지
    
@interface Photo : NSObject {
    NSString* caption;
    NSString* photographer;
}

//getters - 일반적으로 getter에 get을 붙이지 않는다는것은 위에서 언급한바 있다.
- (NSString*) caption;
- (NSString*) photographer;

 

//setters - setter에서 리턴값이 필요없다면 void로 지정한다.
- (void) setCaption: (NSString*)input;
- (void) setPhotographer: (NSString*)input;
@end
```



## 6. 클래스 Implementation (.m)



```objectivec
#import "Photo.h"


@implementation Photo

// getter
- (NSString*) caption {
  return caption;
}
- (NSString*) photographer {
  return photographer;
}
```



#### # setter

```objectivec
// setter 
- (void) setCaption: (NSString*)input
{
    [caption autorelease];
    caption = [input retain];
}

- (void) setPhotographer: (NSString*)input
{
    [photographer autorelease];			// 기존 변수를 할당 해제한다.
    photographer = [input retain];		// parameter로 받은 변수
    
    // garbage collection 환경일 경우
    caption = input;
}
@end
```



#### # Init

```objectivec
- (id) init
{
    if ( self = [super init] )	// [super init]의 결과를 self에 대입
    {							// 결과에 문제가 없다면 변수에 기본값 세팅
        [self setCaption:@"Default Caption"];	
        [self setPhotographer:@"Default Photographer"];
    }
    return self;
}
```



#### # Dealloc

```objectivec
- (void) dealloc		// 오브젝트가 메모리에서 삭제될 때 불려진다.
{						//	-> 자신이 가지고 있는 인스턴스 변수들의 참조를 relaese
    
    [caption release];			// 멤버변수 release
    [photographer release];
    [super dealloc];			// super의 dealloc
}
```

dealloc 메서드는 garbage collection 이 이용되고 있는 환경에서는 불려지지 않으며 대신 finalize 메소드를 정의한다.



## Ownership Policy

|                   |                               |
| ----------------- | ----------------------------- |
| 생성, 소유권 획득 | alloc, new, copy, mutableCopy |
| 소유권 획득       | retain                        |
| 소유권 포기       | release                       |
| 소멸              | dealloc                       |

#### release

* release : 오브젝트 참조를 바로 삭제
* autorelease : 현재 실행되고 있는 함수 끝난 후 삭제.

setter 에서는 auto release 사용할 것을 권고.

​	-> 새 오브젝트와 기존 오브젝트가 같은 것을 가르키는 경우도 있기 때문.

[Objective C의 Memory Management](https://www.holaxprogramming.com/2015/03/04/ios-memory-management/)



## 7. 메모리 관리법 좀 더 살펴보기







## 카테고리

[카테코리 설명 블로그](https://soooprmx.com/archives/2436)



#### What : 카테고리
----

클래스들의 교집합을 구현



**EXAMPLE)**

	* SomeClassA : 클래스 A의 기본
	* SomeClassA+Network : 클래스 A에 네트워크 관련 메서드 추가
	* SomeClass+String : 클래스 A에 문자열 관련 메서드 추가
	* SomeClass+Math : 클래스 A에 수학 계산 관련 메서드 추가



#### How : 카테고리
----

**헤더파일**

```objectivec
//NSString+Reorder
#import <Foundation/NSString.h>
@interface NSString (Reorder)
    -(NSString *)reversedString;
@end
```



**구현파일**

```objectivec
#import "NSString+Reorder.h"
#import "NSString+PathComp.h"

@implementation NSString
-(NSString *)reversedString
{
    ...
}
@end
```





## 프로토콜



#### What : 프로토콜

Java에서의 인터페이스와 비슷한 역활



#### How : 프로토콜

**정의방법**

```objectivec
@protocol 프로토콜이름 : 상속받을 프로토콜
- 메소드 이름
@end
```



**예시**

```objectivec
@protocol MyProtocol : NSObject // 프로토콜은 다른 프로토콜을 상속할 수 있다.
-(void)requiredMethod;
@optional
-(void)anOptionalMethod;
-(void)anotherOptionalMethod;
@required
-(void)anotherRequiredMethod;
@end;
```

**@optional** 키워드 다음에 나온 메소드 : 선택적으로 구현하면 되는 메서드

**이외** : 필수적으로 구현해야 하는 메서드



**프로토콜 따르기**

```objectivec
@interface Formatter : NSObject <Formatting, Prettifying>
<# 인터페이스 선언 #>
@end
```





## 프로퍼티



#### 프로퍼티 처리자

**@property** - getter / setter 에 대한 헤더 코드를 자동으로 생성

**@synthesize** - @implementation에 구현되는 getter/setter를 자동으로 생성

**@dynamic** - @synthesize 대신 사용 가능. Getter / setter 가 클래스 자신에 의해서 구현되지 않고 (슈퍼클래스같은) 다른 어딘가에 구현되어 있다고 알려주어 getter / setter 가 구현되어 있지 않아도 컴파일러 경고를 받지 않도록 해줌.



#### 프로퍼티 속성

* **retain** : setter가 객체를 소유하도록 한다. ( 포인터 ) 해당 객체의 라이프타임동안 유지된다.

* **assign** : setter가 인스턴스 변수에 값을 대입한다. 해당 객체의 라이프타임동안 유지 안될 수 있다.

* **copy** = : stter가 값을 복사해서 세팅한다. 원본 객체가 중간에 바뀌어도 프로펄티는 영향을 받지 않는다. 

* **strong** = : retain과 유사

* **weak** = : assign과 유사. 객체가 해제되면 자동으로 nil 로 바꿈

  

* **readwrite** : setter, getter을 만든다. (디폴트)

* **readonly** : getter만 만든다.

* **getter** = : getter 메서드의 이름을 직접 지정한다.

* **setter** = : setter 메서드의 이름을 직접 지정한다.

  

* **atomic** : 해당 프로퍼티를 변경 시에  lock을 걸어  thread safe하게 한다.
* **nonatomic** : 스레드 동시접근을 막지 않는다. 성능 향상 이유로 사용한다.



[참고자료](http://blog.naver.com/PostView.nhn?blogId=sokm83&logNo=220970051211&parentCategoryNo=&categoryNo=12&viewDate=&isShowPopularPosts=false&from=postView)









[옵씨 개념 정리](https://asfirstalways.tistory.com/285?category=682352)



http://egloos.zum.com/printf/v/1920481

Symbol
https://content.pivotal.io/blog/rails-to-ios-what-the-are-these-symbols-in-my-code