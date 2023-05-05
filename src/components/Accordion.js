import styles from "@/styles/accordion.module.scss"
import { useEffect, useState } from "react"

export default function Accordion(props) {
  const [accList, setAccList] = useState([]);

  useEffect(() => {
    const getAccordionData = async () => {
      const resp = await fetch(`/api/accordion?id=ac${props.accId}`);
      const data = await resp.json();
      setAccList(data);
    }
    getAccordionData()
  }, [])

  const openAcc = (e) => {
    const idx = e.target.dataset.idx
    let parentIdx = ''
    let temp = [...accList]
    
    if (e.target.dataset.parentIdx) {
      parentIdx = e.target.dataset.parentIdx;
      temp[parentIdx].body[idx].opened = !temp[parentIdx].body[idx].opened
    } 
    else {
      temp[idx].opened = !temp[idx].opened
    }
    setAccList(temp)
  }

  return (
    <>
      <div className={`accordionWrapper ${props.singleLevel === 'false' ? "muiltiLevel" : ''}`}>
        {accList.map((acc, idx) => {
          return (
              <div className='ac' key={idx}>
                <div className='acHeader' >
                  <div 
                    className='accHeaderTitle'
                    data-idx={idx} 
                    onClick={(e) => openAcc(e)} 
                  >{acc.header}</div>
                  <div 
                    data-idx={idx} 
                    onClick={(e) => openAcc(e)} 
                    className="accOpenBtn"
                  >
                      {acc.opened ? '-' : '+'}
                  </div>
                </div>

                <div className={`acPanel ${acc.opened ? 'opened' : ''}`}>
                  { 
                  !acc.hasInnerChildren ? acc.body : acc.body.map((item, index)=> {
                    return (
                      <div className='ac' key={index}>
                        <div className='acHeader'>
                          <div 
                            className='accHeaderTitle'
                            data-idx={index}
                            data-parent-idx={idx}
                            onClick={(e) => openAcc(e)} 
                          >{item.header}</div>
                          <div 
                            data-idx={index}
                            data-parent-idx={idx}
                            onClick={(e) => openAcc(e)} 
                            className='accOpenBtn'
                          >
                              {item.opened ? '-' : '+'}
                          </div>
                        </div>
                        <div className={`acPanel ${item.opened ? 'opened' : ''}`}>
                          {item.body}
                        </div>
                      </div> 
                    )
                  }) 
                  }
                </div>
              </div>            
          )
        })}
      </div>
    </>
  )
}