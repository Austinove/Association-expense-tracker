import React, { useState } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row
} from "reactstrap";

const SignUp = () => {
    const [firstFocus, setFirstFocus] = useState(false);
    const [lastFocus, setLastFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    return (
        <>
            <div
                className="section section-signup"
                style={{
                    backgroundImage:
                        "url(" +
                        require("../../../../public/images/img/login.jpg") +
                        ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    minHeight: "700px"
                }}
            >
                <Container>
                    <Row>
                        <Card
                            className="card-signup"
                            data-background-color="blue"
                        >
                            <Form action="" className="form" method="">
                                <CardHeader className="text-center">
                                    <CardTitle className="title-up" tag="h3">
                                        Sign Up
                                    </CardTitle>
                                    <div className="social-line">
                                        <Button
                                            className="btn-neutral btn-icon btn-round"
                                            color="facebook"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i className="fab fa-facebook-square"></i>
                                        </Button>
                                        <Button
                                            className="btn-neutral btn-icon btn-round"
                                            color="twitter"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            size="lg"
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </Button>
                                        <Button
                                            className="btn-neutral btn-icon btn-round"
                                            color="google"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <i className="fab fa-google-plus"></i>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <InputGroup
                                        className={
                                            "no-border" +
                                            (firstFocus
                                                ? " input-group-focus"
                                                : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="First Name..."
                                            type="text"
                                            onFocus={() => setFirstFocus(true)}
                                            onBlur={() => setFirstFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" +
                                            (lastFocus
                                                ? " input-group-focus"
                                                : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Last Name..."
                                            type="text"
                                            onFocus={() => setLastFocus(true)}
                                            onBlur={() => setLastFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border" +
                                            (emailFocus
                                                ? " input-group-focus"
                                                : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons ui-1_email-85"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email..."
                                            type="text"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        ></Input>
                                    </InputGroup>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <Button
                                        className="btn-neutral btn-round"
                                        color="info"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        size="lg"
                                    >
                                        Register
                                    </Button>
                                </CardFooter>
                                <div className="col text-left mb-4">
                                    <a
                                        type="btn"
                                        href="/login"
                                        className="btn-round btn-white"
                                        color="default"
                                        // to="/login"
                                        outline
                                        size="md"
                                    // tag={Link}
                                    >
                                        Have an Account
                                    </a>
                                </div>
                            </Form>
                        </Card>
                    </Row>
                    
                </Container>
            </div>
        </>
    );
}
export default SignUp;