import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: FC = () => {
    return (
        <header id="header">
            <nav id="header-nav">
                <Image src={"/img/icon.png"} alt="JS" height={70} width={50} />
                <li id="header-li-1">
                    <p><Link href="#about-site">AboutSite</Link></p>
                </li>
                <li id="header-li-2">
                    <p><Link href="#myprofile">MyProfile</Link></p>
                </li>
                <li id="header-li-3">
                    <p><Link href="#mywork">MyWork</Link></p>
                </li>
            </nav>
        </header>
    );
}

export default Header;