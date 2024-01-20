import React from "react";
import { IAppError } from "../interfaces/interfaces";

interface ErrorProps {
	err?: IAppError;
}
export const ErrorAlert: React.FC<ErrorProps> = ({ err }) => {
	return err ? <>Error: {err.message}</> : <></>;
};
