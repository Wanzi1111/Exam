import React, { Component } from 'react'
import Editor from 'for-editor'
 class EditorMark extends Component {
    state={
        value:this.props.value||""
    }
    change=(value)=>{
        this.props.mdValue(value)
        this.setState({
            value:value
        })
    }
    render() {
    const {value}=this.state
        return <React-Fragment>
            <Editor 
            style={{
                width:"900px",
                height:"300px"
            }}
            value={value}
            onChange={this.change}
            toolbar={{
                h1:true, // h1
                h2: true, // h2
                h3: true, // h3
                h4: true, // h4
                img: true, // 图片
                link: true, // 链接
                code: true, // 代码块
                preview: true, // 预览
                subfield: true, // 单双栏模式
                undo: true, // 撤销
                redo: true, // 重做
                save: true, // 保存
            }}
            />
        </React-Fragment>
    }
}
export default EditorMark
