import React from "react";

import { Container } from "./ErrorAlert.style";
import { IAppError } from "../../interfaces/interfaces";

interface ErrorProps {
	err?: IAppError;
}
export const ErrorAlert: React.FC<ErrorProps> = ({ err }) => {
	return err ? <Container>Error: {err.message}</Container> : <></>;
};
