
// 1、父组件传递数据 子组件标签身上绑定属性
// 2、子组件接受数据 props的参数
// props：对象里包含了父组件传过来的所有的数据
// {name:'父组件中的数据'}
function Son(props) {
  console.log(props);
  return <div>this is son,{props.name}</div>
}
function App() {
  const name = 'this is app name'
  return (
    <div className="App">
      <Son name = {name} />
    </div>
  )
}

export default App;
