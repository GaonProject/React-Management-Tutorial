import React from 'react';
import './App.css';
import Customer from './Components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961212',
  'gender': '남',
  'job': '대장'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이순신',
  'birthday': '961212',
  'gender': '남',
  'job': '학생'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '임꺽정',
  'birthday': '961212',
  'gender': '남',
  'job': '도둑'
  }  
]

class App extends React.Component {
  render() {
    return (
      <div>
        {
        customers.map(c => {
          console.log(c);
          return (
            <Customer 
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job} />
          );
        })
        }       
      </div>
    );
  }
}

export default App;
