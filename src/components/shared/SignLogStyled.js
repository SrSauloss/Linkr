import styled from 'styled-components';

const SignUp = styled.div`
    display: flex;
    height: 100%;
    @media (max-width: 1230px){
        flex-direction: column;
        gap: 40px;
    }
    
`;

const LogIn = SignUp;

const WoodmarkContainer = styled.div`
    background-color: #151515;
    width: calc(100vw - 535px);
    box-sizing: border-box;
    box-shadow: 4px 0 4px 0 rgba(0,0,0,0.25);
 
    @media (max-width: 1230px){
        left: 0;
        top: 0;
        height: 175px;
        width: 100vw;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
    }
`;

const TextContainer = styled.div`
    font-weight: 700;
    color: white;
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    padding-left: calc((100vw - 535px) * 0.1);

    h1 {
        font-size: 106px;
        margin: 0;
        margin-bottom: 20px;
        font-family: 'Passion One', cursive;
    }

    h2 {
        font-size: 43px;
        margin: 0;
        font-family: 'Oswald', sans-serif;
    }

    @media (max-width: 1230px){
        height: 100%;
        padding: 0%;
        align-items: center;
        
        

        h1 {
            font-size: 76px;
            margin: 0;
        }

        h2 {
            font-size: 23px;
        }
    }
`;

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 535px;
    padding-bottom: 40px;
    background-color: #333333;

    @media (max-width: 1230px){
        width: 100%;
    }
    
`;

const Form = styled.form`
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;

    input {
        width: 429px;
        height: 65px;
        box-sizing: border-box;
        border: none;
        font-size: 27px;
        padding: 0 17px 0 17px;
        border-radius: 6px;
        font-weight: 700;
        
        :focus {
        outline-color: #1877F2;
        }

        ::placeholder {
            color: #9F9F9F;
        }
    }

    input[type=submit] {
        background-color: #1877F2;
        cursor: pointer;
        color: white;
        :disabled {
            opacity: 0.7;
        }
    }

    a {
        font-family: 'Lato', sans-serif;
        text-decoration: underline;
        color: white;
        font-size: 20px;
        white-space: nowrap;
    }

    @media (max-width: 1230px){
    }

    @media (max-width: 480px){
        
        top: 215px;
        gap: 11px;

        input {
            width: 330px;
            height: 55px;
            font-size: 22px;
        }

        a {
            margin-top: 6px;
            font-size: 17px; 
        }
    }

`

export {
    SignUp,
    LogIn,
    WoodmarkContainer,
    TextContainer,
    Form,
    FormContainer
};