import React,{useEffect,useState} from "react"
import { gql, useQuery,useMutation } from "@apollo/client"
import DeleteComp from "./DeleteComp";
import UpdateUser from "./UpdateUser";


const ViewComp= () => {

    const GET_USER = gql`
        query getUsers{
            getUsers {
                id
                name
            }
        }
    `;
    const DELETE_USER = gql`
    mutation deleteUser($id: String!){
        deleteUser(id: $id){
            client{
                id
            }
        }
    }
`
    const { data, loading, error } = useQuery(GET_USER)
    const [deleteUser] = useMutation(DELETE_USER )
    const [storeData, setStoreData] = useState([])

    // console.log(data?.getUsers)
    const deleteData = (id: string) => {
        deleteUser({variables: {id: id}})
    }
    useEffect(() => {
        if (data) {
            setStoreData(data?.getUsers)
        }
    }, [data])

    if (loading) {
        return <div>Loading...</div>
    }
    
    // console.log(props.id);

 
    return (
        <div>
            <h1>View Data</h1>
            <div >
                {
                    storeData.map((props: any) => (
                        <div key={ props.id } style={ {  border: "1px solid gray", margin: "5px" } }>
                            <div>{ props.name }</div>
                            
                            <div>
                                <DeleteComp props={ props } />
                                <div onClick={ () => deleteData(props.id) }>del2</div>
                                <UpdateUser props={ props} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )   
}

export default ViewComp