import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Ftab } from './ApiFetch/api';

function TableP1() {
    const [Tabd, setTabd] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try {
              const Atab = await Ftab();
              setTabd(Atab);
            } catch (err) {
              console.error('Error fetching data:', err);
            }
        }
        fetchData()
    }, [])
    return (
        <div style={{height:'150px'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {Tabd.map((tv) => (
                        <tr key={tv.id}>
                            <td>{tv.id}</td>
                            <td>{tv.name}</td>
                            <td>{tv.quantity}</td>
                            <td>{tv.price}</td>
                        </tr>

                    ))}


                </tbody>
            </Table>
        </div>

    )
}

export default TableP1
