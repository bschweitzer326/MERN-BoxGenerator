import React, {useState} from 'react';

const Box = (props) => {

    const {updateBoxes} = props;
    const [thisbox, setThisBox] = useState({
        height: "80px",
        width: "80px",
        backgroundColor: "",
    });

    const handlecolor = (e) => {
        e.preventDefault();
        updateBoxes(thisbox);
    }

    const onChange = (e) => {
        setThisBox({
            ...thisbox,
            backgroundColor: e.target.value
        });
    }

    return (
        <form onSubmit={handlecolor}>
            <div className="container">
                <div>
                    <label htmlFor="color">Color: </label>
                    <input onChange={onChange} type="text" value={thisbox.backgroundColor} name="color"/>
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
    )

}

export default Box;