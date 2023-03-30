import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input, Icon, Image } from 'semantic-ui-react'
import rasm from "../rrrr.png"
 function Users() {
    const [APIData, setAPIData] = useState([])
    const [filter, setFilter] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    function searchItems(searchValue) {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilter(filteredData)
        }
        else {
            setFilter(APIData)
        }
    }
    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={4} style={{ marginTop: 20 }}>
                {searchInput.length > 0 ? (
                    filter.map((item, key) => {
                        return (
                            <Card key={key}>
                            <Image src={rasm} wrapped ui={false} />
                             <Card.Content>
                                 <Card.Header>{item.name}</Card.Header>
                                 <Card.Meta>
                                     <span className='date'>{item.email}</span>
                                 </Card.Meta>
                                 <Card.Description>
                                     Matthew is a musician living in Nashville.
                                 </Card.Description>
                             </Card.Content>
                             <Card.Content extra>
                                 <a>
                                     <Icon name='user' />
                                     22 Friends
                                 </a>
                             </Card.Content>
                         </Card>
                        )
                    })
                ) : (
                    APIData.map((item, key) => {
                        return (
                            <Card key={key}>
                               <Image src={rasm} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{item.email}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Friends
                                    </a>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
    )
}

export default Users;