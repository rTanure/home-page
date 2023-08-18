import { AiFillExclamationCircle } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

export default function Icon( data ) {
    let name = data.name
    let Selected

    switch (name) {
        case "code":
            Selected = FaCode;
            break;
    
        default:
            Selected = AiFillExclamationCircle;
    }

    return (
        <Selected />
    )
}