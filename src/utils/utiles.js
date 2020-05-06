//注册全局模块
export const registerModules=function(app){
    const modelsFiles=require.context("@/modules",true,/\.js$/)
    modelsFiles.keys().forEach(item=>{
        const Models=modelsFiles(item).default
        
        if(Models&&Models.allregistry){
            app.model(Models)
        }
    })

}