import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import TableP1 from './TableP1'
import Image from 'react-bootstrap/Image';
import Pie3 from './Pie3'
import Button from 'react-bootstrap/Button';
import Graph1 from './Graph1'
import Card from 'react-bootstrap/Card';

function Dashboard() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const isCardHovered = (index) => index === hoveredCard;


    const defaultStyle = {
        backgroundColor: 'rgb(26, 31, 48)',
        zIndex: '1',

        marginLeft: '55px',
        height: '50px',
        width: '200px',
        color: 'white',
        transition: 'background-color 0.3s ease',
    };

    const hoverStyle = {

        backgroundColor: 'white',
        zIndex: '1',

        marginLeft: '55px',
        height: '50px',
        width: '200px',
        color: 'black',
        transition: 'background-color 0.3s ease',

    };




    return (
        <div style={{ display: 'flex' }}>


            <div >
                <div>
                    <div >
                        <Card >
                            <Card.Img variant="top" src="/Rectangle 1.png" style={{ zIndex: '0', marginLeft: '0px', position: 'fixed', width: '260px' }} />
                        </Card>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <Image src="/Briefcase.png" style={{ zIndex: '1', position: 'fixed', marginTop: '10px', marginLeft: '65px' }} />
                    </div>
                    <div>
                        <Image src="/StatBoard.png" style={{ zIndex: '1', position: 'fixed', marginTop: '100px', marginLeft: '60px' }} />
                    </div>
                    <div style={{ marginTop: '300px' }}>
                        <Card style={isCardHovered(0) ? hoverStyle : defaultStyle} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginLeft: '30px', marginTop: '10px' }}>
                                    <Card.Img variant="top" src="/Circled Menu.png" style={{ width: '25px' }} />
                                </div>
                                <div style={{ marginLeft: '30px', marginTop: '12px' }}>
                                    <Card.Text >
                                        Dashboard
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                        <div style={{ marginTop: '30px' }}>
                            <Card style={isCardHovered(1) ? hoverStyle : defaultStyle} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginLeft: '30px', marginTop: '10px' }}>
                                        <Card.Img variant="top" src="/Support.png" style={{ width: '25px' }} />
                                    </div>
                                    <div style={{ marginLeft: '30px', marginTop: '12px' }}>
                                        <Card.Text >
                                            Support
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <Card style={isCardHovered(2) ? hoverStyle : defaultStyle} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginLeft: '30px', marginTop: '10px' }}>
                                        <Card.Img variant="top" src="/Puzzle.png" style={{ width: '25px' }} />

                                    </div>
                                    <div style={{ marginLeft: '30px', marginTop: '12px' }}>
                                        <Card.Text >
                                            Plugins
                                        </Card.Text>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <Card style={isCardHovered(3) ? hoverStyle : defaultStyle} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginLeft: '30px', marginTop: '10px' }}>
                                        <Card.Img variant="top" src="/Help.png" style={{ width: '25px' }} />
                                    </div>
                                    <div style={{ marginLeft: '30px', marginTop: '12px' }}>
                                        <Card.Text >
                                            Help
                                        </Card.Text>
                                    </div>


                                </div>
                            </Card>
                        </div>
                        <div style={{zIndex: '0.5',position:'fixed',marginTop:'143px'}}>
                            
                            <Button variant="light" style={{width:'250px',borderRadius:'0px'}}>Logout<Card.Img variant="top" src="/Shutdown.png" style={{ width: '15px' }} /></Button>
                        </div>


                    </div>

                </div>
            </div>
            <div>




            </div>
            <div style={{ backgroundColor: 'white', marginLeft: '250px', width: '1500px', zIndex: '2', position: 'fixed' }}>
                <div style={{ marginLeft: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ paddingLeft: '60px', paddingTop: '10px', display: 'flex' }}>
                            <h4>Good Morning ! 🌞</h4>

                        </div>
                        <div style={{ marginTop: '10px', marginRight: '50px' }} >
                            <Card style={{ width: '140px', height: '40px' }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginTop: '5px', marginLeft: '4px' }}>
                                        <Card.Img variant="top" style={{ width: '30px' }} src="/Rectangle 10.png" />
                                    </div>
                                    <div style={{ marginLeft: '10px', marginTop: '1.5px', flexDirection: 'column' }}>
                                        <Card.Title style={{ fontSize: '15px' }}>
                                            John Dou
                                        </Card.Title>
                                        <Card.Text style={{ fontSize: '7px', marginTop: '3px' }}>
                                            John@dou.com
                                        </Card.Text>
                                    </div>
                                </div>

                            </Card>
                        </div>
                    </div>

                    <div >
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginLeft: '60px', marginTop: '15px' }}>
                                <Card style={{ width: '850px', height: '340px', boxShadow: "0px 0px 5px grey" }}>
                                    <Graph1 />
                                </Card>

                            </div>
                            <div style={{ width: '350px', marginLeft: '30px', marginTop: '15px' }}>

                                <Card style={{ height: '340px', width: '330px', boxShadow: "0px 0px 5px grey" }}>
                                    <Pie3 />
                                </Card>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '30px' }} >
                            <div>
                                <div style={{ width: '960px', height: '250px', marginLeft: '60px', marginTop: "10px", boxShadow: "0px 0px 5px grey" }}>
                                    <Card style={{}}>
                                        <TableP1 />
                                    </Card>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '32px' }}>

                                    <Pagination size="sm">{items}</Pagination>
                                </div>
                            </div>

                            <div>
                                <Card style={{ width: '220px', height: '300px', marginLeft: '30px', marginTop: '10px', boxShadow: "0px 0px 5px grey" }}>
                                    <Card.Img style={{ height: '190px' }} variant="top" src='/media.png' />
                                    <Card.Body >
                                        <div>
                                            <Card.Title>John Doe</Card.Title>
                                            <Card.Text >CEO</Card.Text>
                                        </div>

                                        <div>
                                            <Card.Img variant="top" src="/facebook.png" style={{ width: '15px', marginRight: '10px' }} />
                                            <Card.Img variant="top" src="/instagram.png" style={{ width: '15px', marginRight: '10px' }} />
                                            <Card.Img variant="top" src="/twitter.png" style={{ width: '15px' }} />
                                        </div>



                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>










        </div>
    )
}

export default Dashboard
