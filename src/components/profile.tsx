import { FC } from "react";
import Image from "next/image";

const Profile: FC = () => {
    return (
        <div id="myprofile">
            <p id="title2">My Profile</p>
            <div id="flex">
                <div><Image src={"/img/myimage.jpg"} alt="MyImage" id="myimage" height={100} width={100} /></div>
                <div>
                    <p id="info3">長岐和哉</p>
                    <p id="info4">H15.12.25</p>
                    <p id="info5">総合システム工学科2年</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
