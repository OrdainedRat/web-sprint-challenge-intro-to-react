import styled from "styled-components";

// Write your Character component here

const Characters = (props) => {
    const { character, year } = props;

    const StyledPeople = styled.div`
       display: flex;
       justify-content: space-between;
       p{
        margin-left: 10px;
        margin-right: 10px;
        font-size: 2rem;
        color: gold;
        text-shadow: -1px -2px rgb(128, 128, 0) ;
       }
    `

    return (
       <>
        <StyledPeople>
            <p>{character} </p>
            <p>{year}</p>
        </StyledPeople>
       
       
       </>
            )
}

export default Characters;