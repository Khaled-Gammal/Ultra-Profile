import React ,{ Component}from 'react'
import { Span, WorkSection,FirstCard, CardTitle, Line, CardDesc, WorkTitle, Icon } from './style'
import axios from 'axios'

  
class Work extends Component  {
  state={
    works:[]
  }
  componentDidMount(){
  axios.get(`js/data.json`)
  .then((res)=>this.setState({works:res.data.works}))
  }
      render(){
        const {works}=this.state
        const worksList=works.map((workItem)=>{
          return(
          <FirstCard key={workItem.id}>
            <Icon className={workItem.icon_name}/>
            <CardTitle>{workItem.title}</CardTitle>
            <Line />
            <CardDesc>{workItem.body}</CardDesc>
          </FirstCard>
          )
        })
        return(
          <WorkSection>
            <div className='container'>
              <WorkTitle> <Span>My</Span>Work</WorkTitle>
              {worksList}
              
            </div>
          </WorkSection>
        )
      }
       
 
}

export default Work
