import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
   state = {
      habits: [
         { id: 1, name: 'Reading', count: 0},
         { id: 2, name: 'Running', count: 0},
         { id: 3, name: 'Coding', count: 0},
         //키 값으로 배열 index쓰면 안 된다. 값 바뀔 때 index바뀌면.. 키 값이 또 바뀜...
      ],
   };
   // 데이터를 갖고 있는 장소가 어떻게 수정하면 좋은지 잘 아는 최고의 장소! 여기서 처리해주자.
   handleIncrement = (habit) =>{
      // habit.count++;
      // this.setState(this.state);
      //리액트에서는 State를 직접적으로 바꾸는 거 안 좋다! (...)
      const habits = [...this.state.habits]; //spread Operator라는 연산자
      const index = habits.indexOf(habit);
      habits[index].count++;
      //this.setState({habits: habits});//key와 value동일한 경우 하나로 생략 가능
      this.setState({habits});
   };
   handleDecrement = (habit) =>{
      //직접 접근해서 데이터를 수정한 경우.. 별로 안 좋은 경우라고 한다.
      /*
      console.log(`넘어온 객체 habit: ${habit}`);
      console.log(habit.count);
      habit.count -= 1;
      console.log(habit.count);
      console.log(this.state);
      this.setState(this.state);
      */
      //this.state.habits과 같은 배열을 하나 만들어
      const habits =[...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count -1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({habits});
      // 신기하네.. 왜 이런 식으로 할까?
      // 이건 배열 새로 복사해와서 만들어서 복사해온 배열 값 조절해서 setState한 경우
   };
   handleDelete = (habit) =>{
      /*
      // this.state.habits 배열 복사 [...]
      const habits =[...this.state.habits];
      //위의 배열에서 매개변수값과 똑같은 배열을 찾아.
      const index = habits.indexOf(habit);
      habits.splice(index,1);
      this.setState({habits});
      */
      //우리가 원하는 건 전달 받은 습관을 this.state.habits에서 제외하고 싶어.
      //어떤 특정 배열을 제외하고 반환하거나, 추가해서 반환해주는 유용한 API filter!!!!
      const habits = this.state.habits.filter(item =>item.id !== habit.id);
      this.setState({habits});
      // 새로운 배열 반환받아서 그걸 다시 적용한 거라서, 직접 접근한 게 아니다.
   };

   render() {
      return (
         <ul>
            {
               this.state.habits.map(habit => (
               <Habit
                  key={habit.id}
                  habit={habit}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                  />
               ))
            }
         </ul>
      );
   }
}

export default Habits;