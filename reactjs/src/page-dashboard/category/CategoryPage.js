import axios from 'axios'
import {useEffect, useState} from "react"

function CategoryPage(){

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const [list,setList] = useState([])

    useEffect(()=>{
       getlist();
    },[])

    const server = "http://localhost:2004/api/"
    const getlist = ()=>{ // arrow function
        axios({
            url : server+"category", //url api
            method : "get",
            data : { // json body

            }
        }).then(res=>{// api response
            var data = res.data
            setList(data.list)
            // alert(data.total)
            // alert(data.list)
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div style={{padding:20}}>
            <div>List Category</div>
            {list.map((item,index)=>{
                return(
                    <div key={index}>
                        <div>{index+1}.{item.name}</div>
                        <div>{item.description}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default CategoryPage;
