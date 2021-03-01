const React = require('react');
const {useState, useRef} = React;

// hooks 사용
const Gugudan = () => {
   const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
   const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
   const [value, setValue] = useState('');
   const [result, setResult] = useState('');
   const inputRef = useRef(null);

   const onSubmitForm = (e) => {
      e.preventDefault();
      if (parseInt(value) === first * second) {
         setResult('정답' + value);
         setFirst(Math.ceil(Math.random() * 9));
         setSecond(Math.ceil(Math.random() * 9));
         setValue('');
         inputRef.current.focus();
      } else {
         setResult('땡' + value);
         setValue('');
         inputRef.current.focus();
      }
   }

   const onChangeInput = (e) => {
      setValue(e.target.value);
   }
   console.log('렌더링');
   return (
      <>
         <div>{first} 곱하기 {second} 는?</div>
         <form onSubmit={onSubmitForm}>
            <input ref={inputRef} onChange={onChangeInput} value={value} />
            <button id="button" className="">입력!</button>
         </form>
         <div id="result">{result}</div>
      </>

   );
}



/* 클래스 방식
class Gugudan extends Component{
   constructor(props){
      super(props);
      this.state={
         first: Math.ceil(Math.random() *9),
         second: Math.ceil(Math.random() *9),
         value:'',
         result:'',
      }
   }
   onSubmit = (e) => {
      e.preventDefault();
      if (parseInt(this.state.value) === this.state.first * this.state.second) {
         this.setState({
            result: `${this.state.value} : 정답`,
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
         })
      } else {
         this.setState({
            result: `${this.state.value} : 땡`,
            value: '',
         });
      }
   }
   onChange = (e) => this.setState({ value: e.target.value })

   render(){
      return(
         <>
            <div>{this.state.first}곱하기{this.state.second} =</div>
            <form onSubmit={this.onSubmit}>
               <input type="number" value={this.state.value} onChange={this.onChange}></input>
               <button>클릭!</button>
            </form>
            <div>
               {this.state.result}
            </div>
         </>
      );
   }
}
*/
module.exports = Gugudan