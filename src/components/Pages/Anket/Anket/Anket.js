import React, {useEffect, useState} from 'react';
import food from '../../../../assets/images/food.jpg';
import drink from '../../../../assets/images/drink.jpg';
import BgImage from "../../../../assets/images/u594-hero.jpg";

const Anket = () => {

    const [listFood, setListFood] = useState([])
    const [listDrink, setListDrink] = useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/food_drinks`)
            .then(res => res.json())
            .then(data => {
                    setListFood(data.filter(item => item.type === "food"))
                    setListDrink(data.filter(item => item.type === "drink"))
                }
            )


    }, [])


    const [clickedIndices, setClickedIndices] = useState([]);
    const [clickedIndicesDrink, setClickedIndicesDrink] = useState([]);


    const [hoveredIndexFood, setHoveredIndexFood] = useState(null);
    const [hoveredIndexDrink, setHoveredIndexDrink] = useState(null);
    const handleClick = (index) => {
        setClickedIndices((prevClickedIndices) => {
            if (prevClickedIndices.includes(index)) {
                return prevClickedIndices.filter((i) => i !== index);
            } else {
                return [...prevClickedIndices, index];
            }
        });
    };

    const handleClickDrink = (index) => {
        setClickedIndicesDrink((prevClickedIndices) => {
            if (prevClickedIndices.includes(index)) {
                return prevClickedIndices.filter((i) => i !== index);
            } else {
                return [...prevClickedIndices, index];
            }
        });
    };

    const submit = () => {
        const fav = [...clickedIndicesDrink, ...clickedIndices]
        const postData = {
            favourites: fav
        }
        try {
            fetch('http://127.0.0.1:8000/api/users/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'user-id': '1',
                },
                body: JSON.stringify(postData),
            })
                .then(res => res.json())
                .then(data => {
                        console.log('data', data)
                    }
                )
        } catch (error) {
        }

    }

    return (<div style={{marginBottom: 150, backgroundColor: 'white'}}>
        <div className="hero" style={{backgroundImage: `url("${BgImage}")`}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="my-12">
                    <h1 className="mb-5 text-5xl font-bold">Chọn món ăn và đồ uống bạn yêu thích</h1>
                    <div className="form-control flex flex-row">
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginTop: 40, display: 'flex'}}>
            <div>
                <img
                    style={{height: 120, marginLeft: 80, flexShrink: 0}}
                    src={food}
                    alt={"food"}
                />
            </div>
            <div style={{marginLeft: 80, flexGrow: 1}}>
                <div
                    style={{display: 'flex', gap: 10, flexWrap: 'wrap', marginLeft: 80}}
                >
                    {listFood.map(({name, id}) => {
                            const isClicked = clickedIndices.includes(id);
                            const isHovered = hoveredIndexFood === id;
                            return (
                                <div
                                    key={id}
                                    style={{
                                        borderColor: 'black',
                                        borderWidth: 1,
                                        padding: 5,
                                        borderRadius: 10,
                                        borderStyle: 'solid',
                                        flexShrink: 0,
                                        cursor: 'pointer',
                                        backgroundColor: isClicked ? 'grey' : isHovered ? 'grey' : 'transparent',
                                        color: isClicked || isHovered ? 'white' : 'black',
                                        transition: 'background-color 0.3s, color 0.3s'
                                    }}
                                    onClick={() => handleClick(id)}
                                    onMouseEnter={() => setHoveredIndexFood(id)}
                                    onMouseLeave={() => setHoveredIndexFood(null)}
                                >
                            <span style={{
                                color: hoveredIndexFood === id ? 'white' : 'black'
                            }}>{name}</span>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
        <div style={{marginTop: 40, display: 'flex'}}>
            <div>
                <img
                    style={{height: 120, marginLeft: 80, flexShrink: 0}}
                    src={drink}
                    alt={"food"}
                />
            </div>
            <div style={{marginLeft: 80, flexGrow: 1}}>
                <div
                    style={{display: 'flex', gap: 10, flexWrap: 'wrap', marginLeft: 80}}
                >
                    {listDrink.map(({name, id}) => {
                        const isClicked = clickedIndicesDrink.includes(id);
                        const isHovered = hoveredIndexDrink === id;
                        return (
                            <div
                                key={id}
                                style={{
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    padding: 5,
                                    borderRadius: 10,
                                    borderStyle: 'solid',
                                    flexShrink: 0,
                                    cursor: 'pointer',
                                    backgroundColor: isClicked ? 'grey' : isHovered ? 'grey' : 'transparent',
                                    color: isClicked || isHovered ? 'white' : 'black',
                                    transition: 'background-color 0.3s, color 0.3s'
                                }}
                                onClick={() => handleClickDrink(id)}
                                onMouseEnter={() => setHoveredIndexDrink(id)}
                                onMouseLeave={() => setHoveredIndexDrink(null)}
                            >
                            <span style={{
                                color: hoveredIndexDrink === id ? 'white' : 'black'
                            }}>{name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        <div style={{marginTop: 50, justifyContent: 'right', display: 'flex', marginRight: 40}}>
            <button style={{backgroundColor: '#FF3A44'}} className="btn w-3/12" onClick={() => {
                submit()
            }}>
                Hoàn thành
            </button>
        </div>
    </div>);
};

export default Anket;
