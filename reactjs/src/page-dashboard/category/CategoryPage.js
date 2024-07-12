import axios from 'axios'
import {useEffect, useState} from "react"
import {
    Button,
    Table,
    Modal,
    Form
} from "react-bootstrap"

function CategoryPage(){

  
    const [show,setShow] = useState(false)
    const [showForm,setShowForm] = useState(false)
    const [list,setList] = useState([])
    const [item,setItem] = useState({})

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [status,setStatus] = useState("")

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

    const onDelete = () =>{
        setShow(false)
        var category_id = item.category_id
        axios({
            url : server+"category/"+category_id, //url api
            method : "delete",
            data : { // json body
            }
        }).then(res=>{// api response
            // remove a record in client
            var tmp_data = list.filter((item)=>item.category_id != category_id);
            setList(tmp_data)
        }).catch(err=>{
            console.log(err)
        })
    }

    const onClickBtnDelete = (param) =>{
        setShow(param)
        setItem(true)
    }

    const onHideMadal = () =>{
        setShow(false)
        setItem(null)
    }

    const onHideMadalForm = () =>{
        setShowForm(false)
        setItem({})
        clearform()
    }
    const clearform= () => {
        setName("")
        setDescription("")
        setStatus("")
    }

    const onSave =() =>{
        onHideMadalForm()
        var param ={
            "name": name,
            "description": description,
            "parent_id": null,
            "status": status
        }
        var url = server+"category"
        var method = "post"
        // caase update
        if(item.category_id != null){
            param.category_id = item.category_id // add new key
            method = "put"
        }
        axios({
            url:url,
            method:method,
            data:param
        }).then(res=>{
           if(res){
            getlist();
            clearform();
           }
        })
    }
    const onShowModalForm = () => {
        setShowForm(true)
    } 

    const onClickEdit = (item) =>{
        setItem(item)
        setName(item.name)
        setDescription(item.description)
        setStatus(item.status)
        setShowForm(true)
    }

    return(
        <div style={{padding:10}}>
            {/* <div><h1>List Category</h1></div> */}
            <div style={{padding:10,display:'flex',justifyContent:'space-between'}}>
                <div>Categoty</div>
                <div>
                    <Button  variant='primary' onClick={onShowModalForm}>New</Button>
                </div>
            </div>
            <Table striped bordered hover size='sm'>
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
                                    <Button onClick={()=>onClickEdit(item)} variant='primary'>Edit</Button>
                                    <Button onClick={()=>onClickBtnDelete(item)} variant='danger'>Delete</Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            {/* Modal */}
            <div className='modal show' style={{display: 'block',position: 'initial'}}>
                <Modal show={show} onHide={onHideMadal} >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure to remove?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='sencodary' onClick={onHideMadal}>No</Button>
                        <Button variant='primary' onClick={onDelete}>Yes</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* Block Modal form insert/update */}
            <div className='modal show' style={{display: 'block',position: 'initial'}}>
                <Modal show={showForm} onHide={onHideMadalForm} >
                    <Modal.Header closeButton>
                        <Modal.Title>{item.category_id == null ? "Create" : "Update"}{item.category_id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        {/* <label>{name},{description},{status}</label>  */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name{item.category_id}</Form.Label>
                            <Form.Control 
                                value={name} // state name
                                type="input" 
                                placeholder="name" 
                               onChange={(event)=>{
                                    setName(event.target.value) // get value from user onchange => set value to name state
                               }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            value={description}
                                as="textarea" 
                                rows={3} 
                                onChange={(event)=>{
                                        setDescription(event.target.value)
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Status</Form.Label>
                            <Form.Control 
                                value={status}
                                type="input" 
                                placeholder="status" 
                                onChange={(event)=>{
                                    setStatus(event.target.value)
                                }}
                            />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='sencodary' onClick={onHideMadalForm}>Cancel</Button>
                        <Button variant='secondary' onClick={clearform}>Clear</Button>
                        <Button variant='primary' onClick={onSave}>{item.category_id == null ? "Save" : "Update"}</Button>
                    </Modal.Footer>
                </Modal>
            </div>


        </div>
    )
}
export default CategoryPage;
