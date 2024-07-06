import axios from 'axios'
import {useEffect, useState} from "react"
import {
    Button,
    Table
} from "react-bootstrap"

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

    const onDelete = (id) =>{
        axios({
            url : server+"category/"+id, //url api
            method : "delete",
        }).then(res=>{// api response
            var data = res.data
            //setList(data.list)
            // alert(data.total)
            // alert(data.list)
            getlist()
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div style={{padding:20}}>
            {/* <div><h1>List Category</h1></div> */}
            <Table striped bordered hover size='md'>
                <thead>
                    <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>STATUS</th>
                    <th>CREATE AT</th>
                    <th>ACTION</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {list.map((item,index)=>{
                        return(
                        <tr key={index}>
                            <td>{item.category_id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                            <td>{item.create_at}</td>
                            <td>
                                <Button variant='primary'>Edit</Button>
                                <Button onClick={()=>onDelete(item.category_id)} variant='danger'>Delete</Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            {/* {list.map((item,index)=>{
                return(
                    <div key={index}>
                        <div>{index+1}.{item.name}</div>
                        <div>{item.description}</div>
                    </div>
                )
            })} */}
        </div>
    )
}
export default CategoryPage;
