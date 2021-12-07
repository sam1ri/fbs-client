import './searchInputDropdown.scss'
import { useState, useEffect } from 'react';
import react from 'react'

const SearchInput = (props) => {
    const [value, setValue] = useState('');
    const [isFocused, setFocus] = useState('');
    const [selectedId, setSelectedId] = useState(-1);
    const [itemList, setItemList] = useState({deps: [], status: 0});

    useEffect(() => {

        // setItemList(props.items);
   }, [])

   useEffect(() => {
        setItemList(props.items);
    }, [props.items])

    const isFocusedInput = (status) => {
        setFocus(status);
    }

    const searchInputChanged = (e) => {
        let text = e.target.value;
        props.searchPlace(text)
        setValue(text);

    }

    const setSelectedItem = (el) => {
        setSelectedId(el.id);
        props.searchPlace(el.name)
        setValue(el.name)
        props.setPlace(el.id)
        // setItemList(props.items.deps.filter(elm => elm.name.includes(el.name)))
        isFocusedInput(false);
    }

    return(
        <div className="__search_input_bar">
            <input style={{height: '45px'}} autoComplete="off" value={value} onChange={searchInputChanged} onFocus={isFocusedInput} name="departure" type={props.inputData?.type} className="form-control" id={props.inputData?.id} placeholder={props.inputData?.placeholder} />
            <div className="__dropDown" style={{visibility: isFocused?'visible':'hidden'}}>
                <ul className="__dropdown_list">
                    {
                        itemList.deps?.map((el, index) => {
                            return(
                                <li className="__dropdown_item" key={index} onClick={() => {setSelectedItem(el)}}>{el.name}</li>
                            )
                        })
                    }
                    {
                        (value != '' && itemList.status == 1) && <li className="__dropdown_item_nores">No results</li>
                    }
                </ul>
            </div>
        </div>)
}

export default SearchInput;