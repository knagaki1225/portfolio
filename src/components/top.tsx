import { FC } from "react";
import Image from "next/image";

const Top: FC = () => {
    return (
        <div id="top">
            <p id="top-name">KAZUYA</p>
            <p id="id-name">REACT Class</p>
            <Image src={"/img/PC.png"} alt="PC" height={100} width={300} />
        </div>
    );
}

export default Top;