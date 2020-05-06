import React from "react"
import dvaDyncmic from "dva/dynamic"
function dynamic (options){
    return class View extends React.Component{
         state={
             isIdentity:"",
             Com:null
         }
          componentDidMount() {
            const {route}=this.props;
            const userViewsData=sessionStorage.getItem("userViewsData")?JSON.parse(sessionStorage.getItem("userViewsData")):[]
            const {viewid,path}=route;
            if(/^\/main\//.test(path)){
                if(userViewsData.length&&userViewsData.find(val=>val.view_id===viewid)){
                    this.setState({
                        isIdentity:"succes",
                        Com:dvaDyncmic(options) 
                    })  
                    return;            
                }
            //无权限
            this.setState({
                isIdentity:"fail",
                Com:()=><div>您没有该视图权限</div>   
              })
              return;
            }
            // 不需要判断权限的视图原因输出
            this.setState({
                isIdentity:"initval",
                Com:dvaDyncmic(options) 
            })
         }
        render(){
            const {Com}=this.state
            return <React.Fragment>
                {
                    Com&&<Com
                    match={this.props.match}
                    location={this.props.location}
                    history={this.props.history}
                    route={this.props.route}
                    staticContext={this.props.staticContext}        
                    />
                }
            </React.Fragment>
        }
    }
}
export default dynamic