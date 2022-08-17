import * as S from "./styles";
import { AlertProps } from "./types";
import CheckMarkIcon from "./Icons/check-v.svg";
import NoticeIcon from "./Icons/info-circle.svg";

const Alert: React.FC<AlertProps> = ({ severity, children }) => {
    return <S.AlertWrapper severity={severity} >
        {severity === "error" ?
            <S.Icon src={NoticeIcon} /> :
            <S.Icon src={CheckMarkIcon} />
            }
        <div> {children} </div>
    </S.AlertWrapper>
};



export default Alert;
