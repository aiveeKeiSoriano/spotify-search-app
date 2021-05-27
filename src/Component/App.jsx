import axios from "axios";
import { stringify } from "query-string";
import React from "react";
import styled from "styled-components";

let Wrapper = styled.div``

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getRequest()
    }

    getRequest = async () => {
        let response = await axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            data: stringify({ grant_type: 'client_credentials' }),
            headers: {
                'Authorization': 'Basic YjZhODMzM2MyNTBhNDk3NGIwOWE3ZGUzNzFiYmIwOTY6OTg5YzEyYzVhMzRkNDAyYTkzNDFjYTc2MjM0ZTczNzk=',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        )
        console.log(response)
    }

    render() {
        return (
            <Wrapper>
                
            </Wrapper>
        )
    }
}