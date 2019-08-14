import React, { Fragment } from "react";
import {
    ButtonDefault,
    ButtonPrimary,
    ButtonDropdown,
    ButtonFacebook,
    ButtonForgetPassword,
    ButtonGoogle,
    ButtonLinkedin,
    ButtonLoginEntrar,
    ButtonLoginTeste,
    ButtonWarning
} from "./components";

const Button = ({ className, text, onClick, type, styleButton, styleText }) => {
    const renderButton = () => {
        switch (type) {
            case "google":
                return (
                    <ButtonGoogle
                        onClick={onClick}
                        text={text}
                        className={className}
                    />
                );

            case "linkedin":
                return (
                    <ButtonLinkedin
                        onClick={onClick}
                        text={text}
                        className={className}
                    />
                );

            case "facebook":
                return (
                    <ButtonFacebook
                        onClick={onClick}
                        text={text}
                        className={className}
                    />
                );

            case "forgetPassword":
                return (
                    <ButtonForgetPassword
                        onClick={onClick}
                        text={text}
                        className={className}
                    />
                );

            case "loginTest":
                return (
                    <ButtonLoginTeste
                        onClick={onClick}
                        text={text}
                        className={className}
                    />
                );

            case "loginEntrar":
                return (
                    <ButtonLoginEntrar
                        onClick={onClick}
                        text={text}
                        className={className}
                    />
                );

            case "default":
                return (
                    <ButtonDefault
                        onClick={onClick}
                        text={text}
                        className={className}
                    />
                );

            case "primary":
                return (
                    <ButtonPrimary
                        onClick={onClick}
                        text={text}
                        className={className}
                        styleButton={styleButton}
                    />
                );

            case "dropdown":
                return (
                    <ButtonDropdown
                        onClick={onClick}
                        text={text}
                        className={className}
                    />
                );

            case "warning":
                return <ButtonWarning onClick={onClick} text={text} />;

            default:
                return (
                    <ButtonDefault
                        onClick={onClick}
                        text={text}
                        styleButton={styleButton}
                        styleText={styleText}
                    />
                );
        }
    };

    return <React.Fragment>{renderButton()}</React.Fragment>;
};

export default Button;
