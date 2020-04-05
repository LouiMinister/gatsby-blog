---
templateKey: blog-post
id: 20200405-1643
title: [알고리즘-JS] 다리를 지나는 트럭
slug: /algorithm-js-truck-on-bridge
date: 2020-04-05T16:45:00.125Z
description: "js언어로 풀은 알고리즘 문제 풀이입니다."
headerImage: https://b.allthepics.net/firewatch-game-graphics-2560x1600.jpg
tags:
- Alogorithm
- JavaScript
---

# 다리를 지나는 트럭

## 문제 설명 

트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
 ※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

| 경과 시간 | 다리를 지난 트럭 | 다리를 건너는 트럭 | 대기 트럭  |
| --------- | ---------------- | ------------------ | ---------- |
| 0         | []               | []                 | [7,4,5,6,] |
| 1~2       | []               | [7]                | [4,5,6]    |
| 3         | [7]              | [4]                | [5,6]      |
| 4         | [7]              | [4,5]              | [6]        |
| 5         | [7,4]            | [5]                | [6]        |
| 6~7       | [7,4,5]          | [6]                | []         |
| 8         | [7,4,5,6]        | []                 | []         |


따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

##### 제한 조건
bridge_length는 1 이상 10,000 이하입니다.
weight는 1 이상 10,000 이하입니다.
truck_weights의 길이는 1 이상 10,000 이하입니다.
모든 트럭의 무게는 1 이상 weight 이하입니다.





## 문제 풀이



### 의사 코드 작성

현재 흐름을 코드를 나타내 보면 먼저 시간의 흐름을 loop로 표현해야 합니다.
이 때 loop가 언제 끝나는지는 시간이 기준이 아니라 모든 트럭이 도착할 때 이므로 무한 루프를 사용하고, 탈출 조건문을 걸어줍니다.

```javascript
무한 loop {
  만약 ${도착한 자동차의 수} == 출발한 자동차의 수 { 탈출 }
}
```



차가 다리에 올라올 수 있는 조건, 차가 도착해서 내려올 수 있는 조건을 조건문으로 표현해 줍니다.

```javascript
무한 loop {
  만약 ${도착한 자동차의 수} == 출발한 자동차의 수 { 탈출 }
  
  만약 ${도로가 견딜 수 있는 무게} <= ${도로 위의 차의 무게합} + ${올라갈 차의 무게} {
    도로에 차가 올라옴
  }
  
  만약 차가 다리 끝에 도달하면 {
    차 도착
  }
}
```





### 결과 코드 

```js
function solution(bridge_length, weight, truck_weights) {

    const max_weight = weight;
    const arrived_trucks = [];
    const bridge_trucks = new Array(bridge_length).fill(0);
    let bridge_weight = 0;
    const ready_trucks = [...truck_weights];
    let time = 0;

		// #1
    while(true){
        if(arrived_trucks.length == truck_weights.length){
            break;
        }
        time++;
      
    // #2  
        let start_truck =undefined;
       //const bridge_weight = bridge_trucks.reduce((accumulate, current) => accumulate + current); 오답노트
        if(bridge_weight + ready_trucks[0] - bridge_trucks[bridge_trucks.length-1]  <= max_weight){
            start_truck = ready_trucks.shift();
        } else {
            start_truck = 0;
        }
        bridge_trucks.unshift(start_truck);
        bridge_weight += start_truck;	// 오답노트
      
      // #3
        const arrived_truck = bridge_trucks.pop();
        if(arrived_truck !=0){
            arrived_trucks.push(arrived_truck);
            bridge_weight -= arrived_truck;	// 오답노트
        }
    }

    return time;
}
```

#### 추가 주석

​	**#1 ** 의사코드와 마찬가지로 무한 loop의 탈출조건입니다. 시간의 흐름을 `time` 으로 표현했습니다.

​	**#2**  다리에 올라갈 수 있는 조건은 문제의 조건에 따라서 `현재 다리 무게 + 다음에 올라올 트럭 무게 - 현시간에 내려갈 트럭 <= 다리가 견딜 수 있는 무게` 입니다.





## 오답노트

처음엔 다리 위의 차 무게 합을
`bridge_trucks.reduce((accumulate, current) => accumulate + current)` 를 사용하여 구했습니다.

결과적으로 테스트에서 시간 초과가 났는데, 메인루프 안에서 reduce를 통한 순회를 하니 리소스를 제곱으로 잡아먹을 수 밖에 없었습니다.

이후 차가 오르고 내릴 때 `bridge_weight` 로 다리 위 무게를 관리하여 해결하였습니다.











부족함이 있는 글이지만 도움이 되셨으면 좋겠습니다. 감사합니다.