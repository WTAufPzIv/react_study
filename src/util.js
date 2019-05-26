//该文件用于指示用户改跳转的下一个页面
export function getRedirectPath({type,avatar}){
    console.log(type)
    console.log(avatar)
    let url = (type === 'teacher')?'/teacher':'/student'
    if(!avatar){
        url += 'info'
    }
    return url
}