import React, { useContext, useEffect } from 'react'
import { MContext } from '../App'


const Reestr = props => {




  const { state, dispatch } = useContext(MContext)

  let addName = e => {
    if (e.key === 'Enter') {
      console.log('hi')
      dispatch({ type: 'addName' })
    }
  }




  let newarry = state.array.map(el =>
    <div className={`block${el.checkedki & el.checkedDM & el.checkedFSSP & el.checkedNDFL & el.checkedTK & el.checkedPP & el.checkedAK &  el.checkedref==el.refadd ? ' active' : ''}`}>

      <div><span>   {el.name} </span> </div>
      <div className='wrapper'>
        <div onClick={() => dispatch({ type: 'setScoring', id: el.id })} className={`scoring${el.toggle ? '-active' : ''}`}  >{el.scoring}
          <div onClick={() => dispatch({ type: 'changeScoring', value: el.fps, id: el.id })} className={`unscoring${el.toggle ? '-active' : ''}`}> {el.fps} </div>
          <div onClick={() => dispatch({ type: 'changeScoring', value: el.qcc, id: el.id })} className={`unscoring${el.toggle ? '-active' : ''}`}> {el.qcc} </div>
          <div onClick={() => dispatch({ type: 'changeScoring', value: el.ki, id: el.id })} className={`unscoring${el.toggle ? '-active' : ''}`}> {el.ki} </div>
          <div onClick={() => dispatch({ type: 'changeScoring', value: el.ok, id: el.id })} className={`unscoring${el.toggle ? '-active' : ''}`}> {el.ok} </div>
        </div>
      </div>

      <div className='wrapper'>
        <div onClick={() => dispatch({ type: 'setProgram', id: el.id })} className={`program${el.toggle2 ? '-active' : ''}`}  >{el.program}

          <div onClick={() => dispatch({ type: 'changeProgram', value: el.refinance, id: el.id, toggle:true  })} className={`unscoring${el.toggle2 ? '-active' : ''}`}> {el.refinance} </div>
          <div onClick={() => dispatch({ type: 'changeProgram', value: el.ok2, id: el.id, toggle:false })} className={`unscoring${el.toggle2 ? '-active' : ''}`}> {el.ok2} </div>
        </div>



      </div>



      <div>
        <input type="checkbox" className="filled-in" checked={el.checkedki} />
        <span className={`inputSpan${el.checkedki ? '-active' : ''}`} onClick={() => dispatch({ type: 'changeCheckedKI', id: el.id })} >КИ</span>
      </div>
      <div>


        <input type="checkbox" class="filled-in" checked={el.checkedFSSP} />
        <span className={`inputSpan${el.checkedFSSP ? '-active' : ''}`} onClick={() => dispatch({ type: 'changeCheckedFSSP', id: el.id })}>ФССП</span>
      </div>
      <div>

        <input type="checkbox" class="filled-in" checked={el.checkedAK} />
        <span className={`inputSpan${el.checkedAK ? '-active' : ''}`} onClick={() => dispatch({ type: 'changeCheckedAK', id: el.id })}>Анкета</span>
      </div>

      <div>

        <input type="checkbox" class="filled-in" checked={el.checkedDM} />
        <span className={`inputSpan${el.checkedDM ? '-active' : ''}`} onClick={() => dispatch({ type: 'changeCheckedDM', id: el.id })}>DM</span>
      </div>




      <div>

        <input type="checkbox" class="filled-in" checked={el.checkedPP} />
        <span className={`inputSpan${el.checkedPP ? '-active' : ''}`} onClick={() => dispatch({ type: 'changeCheckedPP', id: el.id })}>Паспорт</span>
      </div>
      <div>
        <input type="checkbox" class="filled-in" checked={el.checkedNDFL} />
        <span className={`inputSpan${el.checkedNDFL ? '-active' : ''}`} onClick={() => dispatch({ type: 'changeCheckedNDFL', id: el.id })}>НДФЛ</span>
      </div>
      {el.refadd && <div>

        <input type="checkbox" class="filled-in" checked={el.checkedref} />
        <span className={`inputSpan${el.checkedref ? '-active' : ''}`} onClick={() => dispatch({ type: 'changeCheckedRef', id: el.id })}>Кр.Дог.</span>
      </div>}

      <div>
        <input type="checkbox" class="filled-in" checked={el.checkedTK} />
        <span className={`inputSpan${el.checkedTK ? '-active' : ''}`} onClick={() => dispatch({ type: 'changeCheckedTK', id: el.id })}>ТК</span>
      </div>

      <div> <a onClick={() => dispatch({ type: 'deleteName', value: el.id })} class="waves-effect waves-light btn">X</a>
      </div>

    </div>)
  console.log(state)
  return (
    <div className='container'>
      <input onKeyPress={addName} onChange={e => dispatch({ type: 'insertInputValue', value: e.target.value })} placeholder='Введите ФИО заемщика' value={state.inputValue} />

    <div className='reverse'>
      {newarry}
      </div>
    </div>
  )
}



export default Reestr
