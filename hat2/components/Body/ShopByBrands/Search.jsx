import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import classes from './Search.module.css';

const Search = ({ searchChange }) => {
    return (
        <div>
            <InputGroup size="lg">
                <FormControl
                onChange={searchChange}
                className={classes.input}
                placeholder='Search...'
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text
                className={classes.search}>
                    <a href='localhost:3000'
                    id="inputGroup-sizing-lg">
                        <Unicons.UilSearch
                        size='25' 
                        className={classes.icon}/>
                    </a>
                </InputGroup.Text>
            </InputGroup>
        </div>
    )
}

export default Search
