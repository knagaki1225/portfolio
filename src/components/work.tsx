import { FC } from "react";
import Image from "next/image";
import { deflate } from "zlib";

const Work: FC = () => {
    return (
        <div id="work-back">
            <div id="mywork">
                <p id="title3">My Work</p>
                <div id="work">
                    <div id="item">
                        <Image src={"/img/html.png"} alt="html" height={100} width={100} />
                        <p id="worktext1">HTML課題サイト</p>
                    </div>
                    <div id="item">
                        <Image src={"/img/php.png"} alt="" height={100} width={100} />
                        <p id="worktext2">PHP課題サイト</p>
                    </div>
                    <div id="item">
                        <Image src={"/img/java.png"} alt="" height={100} width={100} />
                        <p id="worktext3">JAVA課題サイト</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;