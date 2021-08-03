import React, {useState, useReducer} from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info = () => {
  // const [name, setName] = useState('');
  // const [nicName, setNicname] = useState('');

  // useEffect(() => {
  //   console.log("렌더링 완료되었습니다.");
  //   console.log({
  //     name,
  //     nicName
  //   })
  // });
  //
  // useEffect(() => {
  //   console.log("마운트 될때만 실행");
  // }, []);
  //
  // useEffect(() => {
  //   console.log("name : ", name);
  // }, [name]);
  //
  // useEffect(() => {
  //   console.log("name : ", name);
  //   return () => {
  //     console.log("cleanup")
  //     console.log(name + "_cleanup");
  //   }
  // }, [name]);
  //
  // useEffect(() => {
  //   console.log("effect");
  //   return () => {
  //     console.log("unmount");
  //   }
  // }, []);

  // const onChangeName = e => {
  //   setName(e.target.value);
  // };
  //
  // const onChangeNicname = e => {
  //   setNicname(e.target.value);
  // }

  const [state, dispatch] = useReducer(reducer, {
    name:"",
    nicName:""
  });

  const {name, nicName} = state;
  const onChange = e => {
    dispatch(e.target);
  }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nicName" value={nicName} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nicName}
        </div>
      </div>
    </div>
  )
}

export default Info;